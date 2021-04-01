import React, {useEffect, useState} from 'react'
import Header from '../Header'
import SideBar from '../SideBar'
import Planner from './plannerModule/Planner'
import Graph from './graphModule/Graph'
import BestLift from './bestLiftModule/BestLift'
import {Grid, Box} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {useDispatch, useSelector} from 'react-redux'
import {getExercises} from '../../actions/exercise'
import {getMuscleGroups} from '../../actions/muscleGroup'
import {useHistory} from 'react-router-dom'


const useStyles = makeStyles(theme => ({
    box: {
        padding: theme.spacing(3),
        backgroundColor: theme.palette.grey[800],
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(1)
        }
    }
}))

const Dashboard = () =>{
    const classes = useStyles()
    const history = useHistory()
    const user = JSON.parse(localStorage.getItem('profile'))
    const dispatch = useDispatch()
    const [sideBarOpen, setSideBarOpen] = useState(false)

    useEffect(() => {
        if(user === null) return history.push('/')
        dispatch(getExercises())
        dispatch(getMuscleGroups())
    }, [])

    return(
        <>
            <Header onOpen={() => setSideBarOpen(true)}/>
            <SideBar onClose={() => setSideBarOpen(false)} open={sideBarOpen} userName={user?.result?.email}/>
            <Box className={classes.box}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <Graph/>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <BestLift/>
                    </Grid>
                    <Grid item xs={12}>
                        <Planner/>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Dashboard