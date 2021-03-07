import { useState } from "react"
import React, {userState} from 'react'
import Header from './header/Header';
import SideBar from './sideBar/SideBar'
import Schedule from './Schedule'

const WorkoutTracker = () =>{

    const [date, setDate] = useState();
    const [sideBarExpand, setSideBarExpand] = useState(true)


    return(
        <>
        <Header></Header>
        <div className='main-view'>
            <SideBar expand={sideBarExpand} onClick={() => setSideBarExpand(!sideBarExpand)}></SideBar>
            <Schedule day='Monday' expand={sideBarExpand}></Schedule>
        </div>
        </>
    )
}

export default WorkoutTracker