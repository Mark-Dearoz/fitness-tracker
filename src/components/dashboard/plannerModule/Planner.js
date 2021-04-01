import React, {useEffect, useState} from 'react'
import DayCard from './DayCard'
import {Grid, Paper, Box, IconButton, useMediaQuery} from '@material-ui/core'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {makeStyles, useTheme} from '@material-ui/core/styles'
import {useDispatch, useSelector} from 'react-redux'
import {getWeek} from '../../../actions/workout'

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(3),
        paddingTop: theme.spacing(0),
        height: 'calc(50vh - 60px)',
        backgroundColor: theme.palette.primary.main,
        [theme.breakpoints.down('md')]: {
            height: '100%'
        }
    },
    arrow: {
        color: theme.palette.primary.contrastText,
        cursor: 'pointer'
    },
    iconButton: {
        opacity: '25%',
        '&:hover': {
            opacity: '100%',
            boxShadow: '0px 0px rgba(0,0,0,0.0)',
            backgroundColor: 'rgba(0,0,0,0)'
        }
    }
}))

const Planner = () =>{
    const theme = useTheme()
    const classes = useStyles()
    const dispatch = useDispatch()
    const workouts = useSelector(state => state.workouts)
    const user = useSelector(state => state.user)
    const [page, setPage] = useState(0)
    const isLg = useMediaQuery(theme.breakpoints.up('lg'))
    useEffect( () => {
        if(user !== null) dispatch(getWeek(page))
    }, [page])

    const clickHandler = event => {
        const id = event.target.id
        if(id === 'forwardArrow' && page > 0) setPage(page - 1)
        if(id === 'backArrow') setPage(page + 1)
    }

    const renderDayCards = () => {
        const dayCard = []
        const currDate = new Date()
        currDate.setDate(currDate.getDate() - 4*page)
        for(let i = 0; i < 4; i++){
            dayCard.push(
            <Grid key={i} item xs={12} sm={6} lg={3} key={i}>
                <DayCard 
                date={new Date(currDate)} 
                data={workouts.filter(workout => {
                    const workoutDate = new Date(workout.date).getUTCDate()
                    if(currDate.getUTCDate() === workoutDate) return workout
                })}/>
            </Grid>)
            currDate.setDate(currDate.getDate() - 1)
        }
        
        if(isLg) return dayCard.reverse()
        return dayCard
    }
    return(
        <Paper className={classes.paper} elevation={2}>
            <Box className={classes.box}>
                <IconButton onClick={event => clickHandler(event)} className={classes.iconButton}>
                    <ArrowBackIosIcon id='backArrow' fontSize='small'/>
                </IconButton>
                <IconButton onClick={event => clickHandler(event)} className={classes.iconButton}>
                    <ArrowForwardIosIcon id='forwardArrow' fontSize='small'/>
                </IconButton>
            </Box>
            <Grid container spacing={4}>
                {renderDayCards()}
            </Grid> 
        </Paper>
    )
}

export default Planner