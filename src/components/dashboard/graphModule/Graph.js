import React, { useEffect, useState } from 'react'
import {Paper, Select, InputLabel, MenuItem, FormControl, Box} from '@material-ui/core'
import Chart from './Chart'
import {makeStyles} from '@material-ui/core/styles'
import {useDispatch, useSelector} from 'react-redux'
import { getWeight, getVolume, getRepetition } from '../../../actions/data'

const useStyles = makeStyles(theme => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.primary.main,
        height: 'calc(50vh - 60px)',
        [theme.breakpoints.down('md')]: {
            height: '100%',
        }
    },
    formControlContainer:{
        display: 'flex',
        gap: theme.spacing(2),
        padding: theme.spacing(3),
        paddingBottom: theme.spacing(1)
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
    const exercises = useSelector(state => state.exercises)
    const data = useSelector(state => state.data)
    const dispatch = useDispatch()
    const [category, setCategory] = useState('weight')
    const [exercise, setExercise] = useState('choose an exercise')

    const renderExercises = () => exercises.map(exercise => <MenuItem key={exercise._id} value={exercise._id}>{exercise.exercise}</MenuItem>)

    useEffect(() =>{
        if(exercise === 'choose an exercise') return
        if(category === 'weight') dispatch(getWeight(exercise))
        if(category === 'volume') dispatch(getVolume(exercise))
        if(category === 'repetition') dispatch(getRepetition(exercise))
    },[category, exercise])

    return(
        <Paper className={classes.paper} elevation={2}>
            <Box className={classes.formControlContainer}>
                <FormControl className={classes.formControl}>
                    <InputLabel id='exercise'>exercise</InputLabel>
                    <Select labelId='exercise' value={exercise} onChange={event => setExercise(event.target.value)}>
                        <MenuItem value='choose an exercise'>choose an exercise</MenuItem>
                        {renderExercises()}
                    </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel id='category'>category</InputLabel>
                    <Select labelId='category' value={category} onChange={event => setCategory(event.target.value)}>
                        <MenuItem value='weight'>weight</MenuItem>
                        <MenuItem value='volume'>volume</MenuItem>
                        <MenuItem value='repetition'>repetition</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box className={classes.chart}>
                <Chart type='area' data={data}/>
            </Box>
        </Paper>
    )
}

export default Graph