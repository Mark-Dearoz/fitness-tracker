import React, { useEffect, useState } from 'react'
import {Box, IconButton, Paper, Typography, Button, Select, InputLabel, FormControl, MenuItem, Input} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
import {makeStyles} from '@material-ui/styles'
import ReactDOM from 'react-dom'
import { useSelector, useDispatch } from 'react-redux';
import { addWorkout, editWorkout } from '../../../actions/workout';

const useStyles = makeStyles(theme => ({
    background: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        backgroundColor: 'rgba(0,0,0,0.4)',
        top: '0px',
        left: '0px',
        width: '100%',
        height: '100vh'
    },
    modal: {
        display: 'flex',
        flexDirection: 'column',
        width: '720px',
        padding: theme.spacing(3),
    },
    header:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(3),
        height: '100%',
    },
    selectFormControl: {
        width: '192px'
    },
    inputFormControl: {
        width: '80px',
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1)  
    },
    button: {
        float: 'right',
    },
    exerciseForm: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
        }
    },
    buttonContainer: {
        marginTop: theme.spacing(3)
    }
}))

const WorkoutModal = props =>{
    const classes = useStyles()
    const dispatch = useDispatch()
    const muscleGroups = useSelector(state => state.muscleGroups)
    const exercises = useSelector(state => state.exercises)
    const workouts = useSelector(state => state.workouts)
    const [muscleGroup, setMuscleGroup] = useState('Default')
    const [exercise, setExercise] = useState('Default')
    const [sets, setSets] = useState('')
    const [reps, setReps] = useState('')
    const [weight, setWeight] = useState('')
    const [errors, setErrors] = useState({muscleGroup: false, exercise: false, sets: false, reps: false, weight: false})

    useEffect(() =>{
        if(props.workoutId === null) return
        const workout = workouts.filter(workout => workout._id === props.workoutId)
        setMuscleGroup(workout[0].exercise.muscleGroupId._id)
        setExercise(workout[0].exercise._id)
        setSets(workout[0].sets)
        setReps(workout[0].reps)
        setWeight(workout[0].weight)
    }, [])

    const onChangeHandler = event => {
        const id = event.target.id === undefined ? event.target.name : event.target.id 
        if(id === 'muscleGroup') {
            setMuscleGroup(event.target.value)
            setExercise('Default')
        }
        if(id === 'exercise') setExercise(event.target.value)
        if(id === 'sets') setSets(event.target.value)
        if(id === 'reps') setReps(event.target.value)
        if(id === 'weight') setWeight(event.target.value)
    }

    const submitHandler = () => {
        const e = {muscleGroup: false, exercise: false, sets: false, reps: false, weight: false}
        exercise === 'Default' ? e.exercise = true : e.exercise = false
        muscleGroup === 'Default' ? e.muscleGroup = true : e.muscleGroup = false
        parseInt(sets) ? e.sets = false : e.sets = true
        parseInt(reps) ? e.reps = false : e.reps = true
        parseInt(weight) ? e.weight = false : e.weight = true
        setErrors(e)
        if(e.muscleGroup === true || e.exercise === true || e.sets === true || e.reps === true || e.weight === true) return
        if(props.workoutId === null){
            dispatch(addWorkout({date: props.date, exercise: exercise, sets: sets, reps: reps, weight: weight}))
            props.onClose()
        }else{
            dispatch(editWorkout(props.workoutId,{exercise: exercise, sets: sets, reps: reps, weight: weight}))
            props.onClose()
        }
    }

    const renderExercises = () =>{
        const filteredExercises = exercises.filter(item => item.muscleGroupId === muscleGroup)
        return filteredExercises.map(item =>
            <MenuItem key={item._id} value={item._id}>{item.exercise}</MenuItem>
        )
    }
    const renderMuscleGroups = () => muscleGroups.map(item => <MenuItem key={item._id} value={item._id}>{item.muscleGroup}</MenuItem>)

    const renderForm = () => 
                <Paper variant='outlined' className={classes.form}>
                    <FormControl className={classes.selectFormControl} disabled={props.workoutId !== null} error={errors.muscleGroup}>
                        <InputLabel id='muscleGroup'>Muscle Group</InputLabel>
                        <Select name='muscleGroup' labelId='muscleGroup' value={muscleGroup} onChange={event => onChangeHandler(event)}>
                            <MenuItem value='Default'>Select a Muscle Group</MenuItem>
                            {renderMuscleGroups()}
                        </Select>
                    </FormControl>
                    <Box className={classes.exerciseForm}>
                        <FormControl className={classes.selectFormControl} error={errors.exercise}>
                            <InputLabel id='exercise'>Exercise</InputLabel>
                            <Select name='exercise' labelId='exercise' value={exercise} onChange={event => onChangeHandler(event)}>
                                <MenuItem value='Default'>Select an Exercise</MenuItem>
                                {renderExercises()}
                            </Select>
                        </FormControl>
                        <Box>
                            <FormControl className={classes.inputFormControl} error={errors.sets}>
                                <InputLabel>Sets</InputLabel>
                                <Input id='sets' value={sets} onChange={event => onChangeHandler(event)} ></Input>
                            </FormControl>
                            <FormControl className={classes.inputFormControl} error={errors.reps}>
                                <InputLabel>Reps</InputLabel>
                                <Input id='reps' value={reps} onChange={event => onChangeHandler(event)}></Input>
                            </FormControl>
                            <FormControl className={classes.inputFormControl} error={errors.weight}>
                                <InputLabel>Weight</InputLabel>
                                <Input id='weight' value={weight} onChange={event => onChangeHandler(event)}></Input>
                            </FormControl>
                        </Box>
                    </Box>
                </Paper>

    return ReactDOM.createPortal((
        <Box className={classes.background} onClick={props.onClose}>
            <Paper className={classes.modal} onClick={e => e.stopPropagation()}>
                <Box className={classes.header}>
                    <Typography variant='h4'>{props.date.toDateString().slice(4,15)}</Typography>
                    <IconButton onClick={props.onClose}>
                        <CloseIcon fontSize='large'/>
                    </IconButton>
                </Box>
                    {renderForm()}
                <Box className={classes.buttonContainer}>
                    <Button variant='contained' color='primary' className={classes.button} onClick={() => submitHandler()}> Submit </Button>
                </Box>
            </Paper>
        </Box>
    ), document.body)
}

export default WorkoutModal