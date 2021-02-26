import { render } from '@testing-library/react'
import React,{useState} from 'react'
import Split from './Split'

const DayCard = props =>{

    const [expand, setExpand] = useState(true)
    const [splits, setSplits] = useState([
        {
            title: 'Chest',
            color: '#4DBF6D'
        }
    ])

    const drop = e =>{
        e.preventDefault()
        const splitData = JSON.parse(e.dataTransfer.getData('splitData'))
        console.log(splitData)
        //setSplits([...splits, {title: splitData.title, color: splitData.color}])
    }

    const dragOver = e =>{
        e.preventDefault();
    }

    const renderSplits = () =>{
        return(  
            splits.map((split, index) => <Split key={index} title={split.title} color={split.color}></Split>)
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

        {expand ? renderSplits() : null}
        
        </div>
    )
}

export default DayCard