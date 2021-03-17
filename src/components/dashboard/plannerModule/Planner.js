import React from 'react'
import DayCard from './DayCard'
import {Grid, Paper, IconButton} from '@material-ui/core'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles(() => ({
    paper: {
        padding: '8px 32px 32px 32px'
    },
    iconButton: {
        padding: '8px',
        boxShadow: '0px 0px rgba(0,0,0,0)'

    }
}))
const Planner = () =>{
    const classes = useStyles()
    return(
        <Paper className={classes.paper} elevation={2}>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <IconButton className={classes.iconButton}>
                        <ArrowBackIosIcon fontSize='small'/>
                    </IconButton>
                    <IconButton className={classes.iconButton}>
                        <ArrowForwardIosIcon fontSize='small'/>
                    </IconButton>
                    
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
                <Grid item xs={12} md={6} lg={3}>
                    <DayCard/>
                </Grid>
            </Grid> 
        </Paper>
    )
}

export default Planner