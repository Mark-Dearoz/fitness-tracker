import React, {useState} from 'react'
import Cross from '../svg/Cross'
import {useDispatch} from 'react-redux'
import { deleteWorkoutCard } from '../../actions'

const WorkoutCard = props =>{

    const [hover, setHover] = useState(false)
    const dispatch = useDispatch()
    return(
        <div className='workout-card' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <h2>{props.children}</h2>
            <div>
                <p>{props.sets}</p>
                <p>{props.reps}</p>
                <p>{props.weight}lbs</p>
            </div>
            <Cross opacity={hover ? .5 : 0} onClick={() => dispatch(deleteWorkoutCard({day: props.day, split: props.split, workout: props.children}))}></Cross>
        </div>

    )
}

export default WorkoutCard