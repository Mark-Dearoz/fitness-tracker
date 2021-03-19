import React, {useEffect, useState} from 'react'
import {Paper, Typography, FormControl, Select,MenuItem, Box} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {useDispatch, useSelector} from 'react-redux'
import {getExercises} from '../../../actions/exercise'
import {getMax} from '../../../actions/max'

const useStyles = makeStyles(theme => ({
    paper:{
        padding: theme.spacing(3),
        minHeight: 'calc(25vh - 60px)',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText
    },
    formControl:{
        width: '192px',
        marginBottom: theme.spacing(3)
    },
    repsWeight:{
        display: 'flex',
        gap: '24px',
        marginBottom: theme.spacing(3)
    },
    estimate: {
        transform: 'translateY(-8px)',
        marginBottom: theme.spacing(3)
    }
}))

const BestLift = () =>{
    const classes = useStyles()
    const dispatch = useDispatch()
    const exercises = useSelector(state => state.exercises)
    const max = useSelector(state => state.max)
    const [exercise, setExercise] = useState('')

    const renderMenuItems = () => exercises.map(exercise => <MenuItem key={exercise._id} value={exercise._id}>{exercise.exercise}</MenuItem>)

    useEffect(() => {
        dispatch(getExercises())
    }, [])
    useEffect(() => {
        if(!exercise.length) return
        dispatch(getMax(exercise))
    }, [exercise])

    return(
        <Paper className={classes.paper}>
            <Typography variant='h4'> Best Lifts </Typography>
            <FormControl className={classes.formControl}>
                <Select labelId='lift' value={exercise} onChange={event => setExercise(event.target.value)}>
                    {renderMenuItems()}
                </Select>
            </FormControl>
            <Typography variant='body1'>{max.workout === undefined ? 'Date' : new Date(max.workout.date).toDateString()}</Typography>
            <Box className={classes.repsWeight}>
                <Typography variant='body1'>{max.workout === undefined ? '0 repetitions' : `${max.workout.reps} repetitions`}</Typography>
                <Typography variant='body1'>{max.workout === undefined ? '0 pounds' : `${max.workout.weight} pounds`}</Typography>
            </Box>
            <Typography variant='h5'>Max</Typography>
            <Box className={classes.estimate}>
                <Typography variant='caption'>(estimate)</Typography>
            </Box>
            <Typography variant='h4'>{max.max === undefined ? '0 pounds' : `${max.max} pounds`}</Typography>
        </Paper>
    )
}

export default BestLift