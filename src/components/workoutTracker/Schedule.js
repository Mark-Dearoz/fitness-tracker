import React,{useState} from 'react'
import DayCard from './DayCard'
import {useSelector} from 'react-redux'

const Schedule = props =>{

    const calendar = useSelector(state => state.calendarReducer)

    const renderCalendar = ()=>{
        return calendar.map(item => <DayCard key={item.day} day={item.day} month={item.month} date={item.date}>{item.splits}</DayCard>)
    }

    return(
        <>
        <div className='schedule'>
            <div className='calendar'>
                {renderCalendar()}
            </div>
        </div>
        </>
    )
}

export default Schedule