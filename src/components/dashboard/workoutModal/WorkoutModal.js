import React from 'react'
import { Divider, IconButton, Paper, Typography, Button, Select, InputLabel, FormControl, MenuItem, Container} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
import {makeStyles} from '@material-ui/styles'
import ReactDOM from 'react-dom'

const useStyles = makeStyles(() => ({
    background: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0px',
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
        height: '540px',
        width: '920px',
        padding: '24px',
        gap: '8px'
    },
    header:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0px'

    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        padding: '8px',
        height: '100%',
        overflow: 'scroll'
    },
    formControl: {
        width: '192px'
    },
    buttonContainer: {
        padding: '0px'
    },
    button: {
        float: 'right'
    }
}))

const WorkoutModal = props =>{
    const classes = useStyles()

    return ReactDOM.createPortal(
        <div className={classes.background} onClick={props.onClose}>
            <Paper className={classes.modal} onClick={e => e.stopPropagation()}>
                <Container className={classes.header}>
                    <Typography variant='h4'>
                        Today
                    </Typography>
                    <IconButton onClick={props.onClose}>
                        <CloseIcon fontSize='large'/>
                    </IconButton>
                </Container>
                <Paper variant='outlined' className={classes.form}>
                    <FormControl className={classes.formControl}>
                        <InputLabel id='workout-group-1'>Workout Group1</InputLabel>
                        <Select labelId='workout-group-1'>
                            <MenuItem>Muscle1</MenuItem>
                            <MenuItem>Muscle2</MenuItem>
                            <MenuItem>Muscle3</MenuItem>
                            <MenuItem>Muscle4</MenuItem>
                            <MenuItem>Muscle5</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel id='workout-group-2'>Workout Group1</InputLabel>
                        <Select labelId='workout-group-2'></Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel id='workout-group-3'>Workout Group1</InputLabel>
                        <Select labelId='workout-group-3'></Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel id='workout-group-4'>Workout Group1</InputLabel>
                        <Select labelId='workout-group-4'></Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel id='workout-group-5'>Workout Group1</InputLabel>
                        <Select labelId='workout-group-5'></Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel id='workout-group-6'>Workout Group1</InputLabel>
                        <Select labelId='workout-group-6'></Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel id='workout-group-7'>Workout Group1</InputLabel>
                        <Select labelId='workout-group-7'></Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel id='workout-group-8'>Workout Group1</InputLabel>
                        <Select labelId='workout-group-8'></Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel id='workout-group-9'>Workout Group1</InputLabel>
                        <Select labelId='workout-group-9'></Select>
                    </FormControl>
                </Paper>
                <Container className={classes.buttonContainer}>
                    <Button variant='contained' color='primary' className={classes.button}> Submit </Button>
                </Container>
            </Paper>
        </div>

    ,document.body)
}

export default WorkoutModal