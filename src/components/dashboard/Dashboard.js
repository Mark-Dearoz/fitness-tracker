import React, {useState} from 'react'
import Header from '../Header'
import SideBar from '../SideBar'
import Planner from './plannerModule/Planner'
import Graph from './graphModule/Graph'
import BestLift from './bestLiftModule/BestLift'
import {Grid} from '@material-ui/core'

const Dashboard = () =>{
    const [sideBarOpen, setSideBarOpen] = useState(false)

    return(
        <>
            <Header onOpen={() => setSideBarOpen(true)}/>
            <SideBar onClose={() => setSideBarOpen(false)} open={sideBarOpen} userName='Mark Dearoz'/>
            <div style={{margin: '24px', maxWidth: '1440px'}}>
                <Grid container spacing={3}>
                    <Grid item xs={12} lg={6}>
                        <Graph/>
                    </Grid>
                    <Grid item lg={3}>
                        <BestLift/>
                    </Grid>
                    <Grid item xs={12}>
                        <Planner/>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Dashboard