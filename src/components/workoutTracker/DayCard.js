import React,{useState} from 'react'
import Split from './Split'
import {useDispatch} from 'react-redux'
import {addWorkoutCard} from '../../actions'

const DayCard = props =>{

    const [expand, setExpand] = useState(true)
    const dispatch = useDispatch();

    
    const drop = e =>{
        e.preventDefault()
        const splitData = JSON.parse(e.dataTransfer.getData('splitData'))
        console.log('called')
        dispatch(addWorkoutCard({card: splitData,day: props.day}))
    }

    const dragOver = e =>{
        e.preventDefault();
    }

    const renderSplits = () =>{
        return(  
            props.children.map((item, index) => <Split key={index} title={item.title} color={item.color}>{item.workouts}</Split>)
        )
    }


    return(
        <div 
        className='day-card' 
        onDrop={drop} 
        onDragOver={dragOver}
        >
            <div className='header'>
                <h1>{props.day}</h1>
                <div>
                    <h1>{`${props.month}/${props.date}`}</h1>
                    {expand ? <button onClick={() => setExpand(false)}>^</button> : <button onClick={() => setExpand(true)}>V</button>}       
                </div>
            </div>
        <hr/>

        {expand ? renderSplits(): null}
        
        </div>
    )
}

export default DayCard