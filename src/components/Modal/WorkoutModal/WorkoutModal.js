import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { addWorkoutCard } from '../../../actions'

const WorkoutModal = props =>{

    const dispatch = useDispatch()
    const [workoutInput, setWorkoutInput] = useState('')
    const [setsInput, setSetsInput] = useState(1)
    const [repsInput, setRepsInput] = useState(1)
    const [weightInput, setWeightInput] = useState('')

    const renderOptions = num =>{
        const options = []
        for(var i = 1; i <= num; i++){
            options.push(<option key={i} value={`${i}`}>{i}</option>)
        }
        return options
    }

    const checkForm = () =>{
        if(workoutInput.length === 0) return
        if(isNaN(parseInt(weightInput))) return
        dispatch(addWorkoutCard({day: props.parent, split: props.split, workout: workoutInput, sets: setsInput, reps: repsInput, weight: parseInt(weightInput)}))
        props.onClick()
    }
    return(
        <div className='modal-background'>
            <div className='modal'>
                <div className='header'>
                    <h1>{`${props.split} Workout`}</h1>
                </div>
                <div className='body'>
                    <div className='inputs'>
                        <div>
                            <h2>Workout Name</h2>
                            <input type='text' value={workoutInput} onChange={e => setWorkoutInput(e.target.value)}></input>
                        </div>

                        <div className='selects'>
                            <div>
                            <h2>sets</h2>
                                <select value={setsInput} onChange={e => setSetsInput(e.target.value)}>{renderOptions(10)}</select>
                            </div>
                            <div>
                                <h2>reps</h2>
                                <select value={repsInput} onChange={e => setRepsInput(e.target.value)}>{renderOptions(20)}</select>
                            </div>
                            <div>
                                <h2>weight</h2>
                                <input type='text' value={weightInput} onChange={e => setWeightInput(e.target.value)}></input>
                            </div>
                            
                        </div>
                    </div>
                    
                    <div className='buttons'>
                        <button className='btn-primary' onClick={props.onClick}>Cancel</button>
                        <button className='btn-primary' onClick={() => checkForm()}>Submit</button>
                    </div>
                   
                </div>
                
                
            </div>
        </div>
    )

}


export default WorkoutModal