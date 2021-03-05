import React,{useState} from 'react'
import Workout from './WorkoutCard'
import WorkoutModal from '../Modal/WorkoutModal/WorkoutModal'
import {useDispatch} from 'react-redux'
import { deleteSplitCard } from '../../actions'

const SplitCard = props =>{

    const dispatch = useDispatch()
    const [expand, setExpand] = useState(true);
    const [modalOpen, setModalOpen] = useState(false)


    const renderWorkouts = () =>{
        return props.children.map((item, index) => <Workout key={index} sets={item.sets} reps={item.reps} weight={item.weight}>{item.lift}</Workout>)
    }

    return(
        <>
        <div 
        className='split-card' 
        style={{borderColor: props.color}} 
        >
            <div className='header'>
                <h1 style={{color: props.color}}>{props.title}</h1>
                <h1 style={{color: '#FD6D6D'}} onClick={() => dispatch(deleteSplitCard({parent: props.parent, split: props.title}))}>Delete</h1>
            </div>
            <hr style={{borderColor: props.color}}/>

            {expand ? <button className='btn-primary' onClick={() => setModalOpen(true)}>Add Workout</button> : null}
            {expand ? renderWorkouts() : null}
            {expand ? <hr style={{borderColor: props.color}}/> : null}
            {expand ? <button onClick={() => setExpand(false)}>^</button> : <button onClick={() => setExpand(true)}>V</button>}
        </div>

        {modalOpen ? <WorkoutModal onClick={() => setModalOpen(false)} split={props.title} parent={props.parent}></WorkoutModal> : null}
        </>
    )
}

export default SplitCard
