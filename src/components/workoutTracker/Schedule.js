import React from 'react'
import DayCard from './DayCard'

const Schedule = props =>{


    return(
        <>
        <div className='schedule'>
            <div className='calendar'>
                <DayCard day='Monday' month='1' date='1'></DayCard>
                <DayCard day='Tuesday' month='1' date='2'></DayCard>
            </div>
        </div>
        </>
    )
}

export default Schedule