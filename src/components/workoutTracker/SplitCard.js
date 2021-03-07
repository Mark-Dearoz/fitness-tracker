import React,{useState} from 'react'
import Workout from './WorkoutCard'
import WorkoutModal from '../modal/workoutModal/WorkoutModal'
import Arrow  from '../svg/Arrow'
import {useDispatch} from 'react-redux'
import { deleteSplitCard } from '../../actions'

const SplitCard = props =>{

    const dispatch = useDispatch()
    const [expand, setExpand] = useState(true);
    const [modalOpen, setModalOpen] = useState(false)


    const renderWorkouts = () =>{
        return props.children.map((item, index) => <Workout key={index} day={props.parent} split={props.title} sets={item.sets} reps={item.reps} weight={item.weight}>{item.lift}</Workout>)
    }

    return(
        <>
        <div 
        className='split-card' 
        style={{borderColor: props.color}} 
        >
            <div className='header'>
                <h1 style={{color: props.color}}>{props.title}</h1>
                <h2 className='delete-btn' onClick={() => dispatch(deleteSplitCard({day: props.parent, split: props.title}))}>Delete</h2>
            </div>
            <hr style={{borderColor: props.color}}/>

            {expand ? <button className='btn-primary' onClick={() => setModalOpen(true)}>Add Workout</button> : null}
            {expand ? renderWorkouts() : null}
            {expand ? <hr style={{borderColor: props.color}}/> : null}
            <Arrow rotate={expand ? 180 : 0} color={props.color} onClick={() => setExpand(!expand)}></Arrow>
           
           
        </div>
        {modalOpen ? <WorkoutModal onClick={() => setModalOpen(false)} split={props.title} parent={props.parent}></WorkoutModal> : null}
        </>
    )
}

export default SplitCard
