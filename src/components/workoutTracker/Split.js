import React,{useState} from 'react'
import Workout from './WorkoutCard'

const Split = props =>{

    const [expand, setExpand] = useState(true);


    const renderWorkouts = () =>{
        return(
            <>
            
            <Workout lift='Bench Press' set='4' reps='10' weight='165'></Workout>
            <Workout lift='Incline Press' set='4' reps='10' weight='145'></Workout>
            <Workout lift='Incline Press' set='4' reps='10' weight='145'></Workout>
            <Workout lift='Incline Press' set='4' reps='10' weight='145'></Workout>
            <hr style={{borderColor: props.color}}/>
            </>
        )
    }

    return(
        <div className='split-card' style={{borderColor: props.color}}>
            <div className='header'>
                <h1 style={{color: props.color}}>{props.title}</h1>
                <h1 style={{color: '#FD6D6D'}}>Delete</h1>
            </div>
            <hr style={{borderColor: props.color}}/>

            {expand ? renderWorkouts() : null}
            
            {expand ? 
            (<button onClick={() => setExpand(false)}>^</button>
            ): <button onClick={() => setExpand(true)}>V</button>}
            

        </div>
    )
}

export default Split
