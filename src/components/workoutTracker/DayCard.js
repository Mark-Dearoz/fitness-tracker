import React,{useState} from 'react'
import SplitCard from './SplitCard'
import {useDispatch} from 'react-redux'
import {addSplitCard} from '../../actions'

const DayCard = props =>{

    const [expand, setExpand] = useState(true)
    const dispatch = useDispatch();

    
    const drop = e =>{
        e.preventDefault()
        const splitData = JSON.parse(e.dataTransfer.getData('splitData'))
        dispatch(addSplitCard({card: splitData,day: props.day}))
    }

    const dragOver = e =>{
        e.preventDefault();
    }

    const renderSplits = () =>{
        return(  
            props.children.map((item, index) => <SplitCard key={index} title={item.title} color={item.color} parent={props.day}>{item.workouts}</SplitCard>)
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
                </div>
            </div>

            <hr/>

            {renderSplits()}
        </div>
    )
}

export default DayCard