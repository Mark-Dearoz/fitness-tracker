import React from 'react'
import {Paper, Select, InputLabel, FormControl, Box} from '@material-ui/core'
import Chart from './Chart'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.primary.main,
        gap: theme.spacing(2),
        padding: theme.spacing(3),
        height: 'calc(50vh - 60px)',
        [theme.breakpoints.down('md')]: {
            height: '100%'
        }
    },
    formControl:{
        width:'192px'
    },
    chart: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}))

const Graph = () =>{
    const classes = useStyles()

    return(
        <Paper className={classes.paper} elevation={2}>
            <Box>
                <FormControl className={classes.formControl}>
                    <InputLabel> label</InputLabel>
                    <Select></Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel> label</InputLabel>
                    <Select></Select>
                </FormControl>
            </Box>
            <Box className={classes.chart}>
                <Chart type='bar' yaxis='weight (lbs)'/>
            </Box>
        </Paper>
    )
}

export default Graph