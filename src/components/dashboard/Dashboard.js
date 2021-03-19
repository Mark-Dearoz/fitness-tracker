import React, {useState} from 'react'
import Header from '../Header'
import SideBar from '../SideBar'
import Planner from './plannerModule/Planner'
import Graph from './graphModule/Graph'
import BestLift from './bestLiftModule/BestLift'
import {Grid, Box} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    box: {
        padding: theme.spacing(3),
        backgroundColor: theme.palette.grey[800]
    }
}))

const Dashboard = () =>{
    const classes = useStyles()
    const [sideBarOpen, setSideBarOpen] = useState(false)

    return(
        <>
            <Header onOpen={() => setSideBarOpen(true)}/>
            <SideBar onClose={() => setSideBarOpen(false)} open={sideBarOpen} userName='Mark Dearoz'/>
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