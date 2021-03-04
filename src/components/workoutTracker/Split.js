import React,{useState} from 'react'
import Workout from './WorkoutCard'

const Split = props =>{

    const [expand, setExpand] = useState(true);


    const renderWorkouts = () =>{
        return props.children.map((item, index) => <Workout key={index} sets={item.sets} reps={item.reps} weight={item.weight}>{item.lift}</Workout>)
    }

    return(
        <div 
        className='split-card' 
        style={{borderColor: props.color}} 
        >
            <div className='header'>
                <h1 style={{color: props.color}}>{props.title}</h1>
                <h1 style={{color: '#FD6D6D'}}>Delete</h1>
            </div>
            <hr style={{borderColor: props.color}}/>

            {expand ? <button className='btn-primary'>Add Workout</button> : null}
            {expand ? renderWorkouts() : null}
            {expand ? <hr style={{borderColor: props.color}}/> : null}
            {expand ? <button onClick={() => setExpand(false)}>^</button> : <button onClick={() => setExpand(true)}>V</button>}
            

        </div>
    )
}

export default Split
