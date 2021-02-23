import React from 'react'
import DayCard from './DayCard'

const Schedule = props =>{


    const style ={
        columnCount: '4'

    }

    const changeColumns = num =>{
        style.columnCount = `${num}`
    }
    return(
        <>

        {props.expand ? changeColumns(4) : changeColumns(5)}
        <div className='schedule'>
            <div className='calendar' style={style}>
                <DayCard day='Monday' month='1' date='1'></DayCard>
                <DayCard day='Tuesday' month='1' date='1'></DayCard>
                <DayCard day='Wednesday' month='1' date='1'></DayCard>
                <DayCard day='Thursday' month='1' date='1'></DayCard>
                <DayCard day='Friday' month='1' date='1'></DayCard>
                <DayCard day='Saturday' month='1' date='1'></DayCard>
                <DayCard day='Sunday' month='1' date='1'></DayCard>
            </div>
        </div>
        </>
    )
}

export default Schedule