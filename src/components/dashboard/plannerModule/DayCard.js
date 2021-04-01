import React, {useState} from 'react'
import WorkoutModal from '../workoutModal/WorkoutModal'
import {Button, Card, CardHeader, CardContent, Typography, List, ListItem, IconButton, ListItemText, Dialog, DialogContent, DialogActions, DialogContentText} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/Add'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import {useDispatch} from 'react-redux'
import {deleteWorkout} from '../../../actions/workout'

const useStyles = makeStyles(theme => ({
    content:{
        padding: theme.spacing(0),
        margin: theme.spacing(2),
        marginTop: theme.spacing(0),
        height: 'calc(50vh - 240px)',
        overflow: 'scroll',
        overflowX: 'hidden',
        '&::-webkit-scrollbar': {
            width: '0px'
        },
        [theme.breakpoints.down('sm')]: {
            height: 'calc(75vh - 240px)'
        }
    },
    listItemText:{
        width: '40%',
    },
    icon: {
        margin: theme.spacing(1),
        opacity: '25%',
        cursor: 'pointer',
        '&:hover': {
            opacity: '100%'
        }
    }
}))

const DayCard = props =>{
    const dispatch = useDispatch()
    const classes = useStyles()
    const [modalOpen, setModalOpen] = useState(false)
    const [dialogOpen, setDialogOpen] = useState(false)
    const [data, setData] = useState(null)
    const [id, setId] = useState('')

    const modalHandler = workout => {
        setData(workout)
        setModalOpen(true)
    }
    const dialogHandler = id => {
        setId(id)
        setDialogOpen(true)
    }
    const deleteHandler = () => {
        dispatch(deleteWorkout(id))
        setDialogOpen(false)
    }
    const renderWorkouts = () =>{ 
        props.data.sort((a,b) => a.exercise.muscleGroupId.muscleGroup > b.exercise.muscleGroupId.muscleGroup ? 1 : -1)
        return props.data.map(workout => 
            <ListItem key={workout._id}>
                <ListItemText 
                    primary ={<Typography component='span' variant='h6'>{workout.exercise.exercise}</Typography>} 
                    secondary={workout.exercise.muscleGroupId.muscleGroup}
                    className={classes.listItemText}
                />
                <ListItemText
                    primary={<Typography component='span' variant='h6'>{`${workout.weight}lbs`}</Typography>}
                    secondary={<Typography>{`${workout.sets} x ${workout.reps}`}</Typography>}
                />
                <DeleteIcon className={classes.icon} onClick={() => dialogHandler(workout._id)}/>
                <EditIcon className={classes.icon} onClick={() => modalHandler(workout._id)}/>
            </ListItem>
        )
        }

    return(
        <>
            <Card elevation={4}>
                <CardHeader
                    title={<Typography variant='h4'>{props.date.toDateString().slice(4,15)}</Typography>}
                    action= {
                        <IconButton onClick={() => modalHandler(null)} className={classes.icon}> 
                            <AddIcon fontSize='large'/> 
                        </IconButton>}
                />
                <CardContent className={classes.content}>
                    <List >
                        {renderWorkouts()}
                    </List>
                </CardContent>
            </Card>
            <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
                <DialogContent>
                        <DialogContentText>
                            Are you sure you want to delete this workout?
                        </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant='contained' color='primary' onClick={() => deleteHandler()}>Yes</Button>
                    <Button variant='contained' color='primary' onClick={() => setDialogOpen(false)}>No</Button>
                </DialogActions>
            </Dialog>
            {modalOpen ?  <WorkoutModal workoutId={data} date={props.date} onClose={()=> setModalOpen(false)}> </WorkoutModal> : null}
            
        </>
    )
}

export default DayCard