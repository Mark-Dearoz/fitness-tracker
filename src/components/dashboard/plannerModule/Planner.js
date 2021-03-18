import React from 'react'
import DayCard from './DayCard'
import {Grid, Paper, Box} from '@material-ui/core'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(3),
        paddingTop: theme.spacing(0),
        height: 'calc(50vh - 60px)',
        backgroundColor: theme.palette.primary.main
    },
    arrow: {
        color: theme.palette.primary.contrastText,
        cursor: 'pointer'
    },
    box: {
        padding: `${theme.spacing(1)}px 0px`
    }
}))

const Planner = () =>{
    const classes = useStyles()

    return(
        <Paper className={classes.paper} elevation={2}>
            <Box className={classes.box}>
                <ArrowBackIosIcon fontSize='medium' className={classes.arrow}/>
                <ArrowForwardIosIcon fontSize='medium' className={classes.arrow}/>
            </Box>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6} lg={3}>
                    <DayCard/>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <DayCard/>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <DayCard/>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <DayCard/>
                </Grid>
            </Grid> 
        </Paper>
    )
}

export default Planner