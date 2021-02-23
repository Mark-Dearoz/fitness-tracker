import { render } from '@testing-library/react'
import React,{useState} from 'react'
import Split from "./Split"


const DayCard = props =>{

    const [expand, setExpand] = useState(true)


    const renderSplits = () =>{
        return(
            <>
            <Split title='Chest' color='#4DBF6D'/>
            </>
        )

    }

    return(
        <div className='masonry-blocks'>
        <div className='day-card'>
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
        </div>
    )
}

export default DayCard