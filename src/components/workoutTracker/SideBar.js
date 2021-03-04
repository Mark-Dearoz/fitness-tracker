import React, {useState} from 'react'
import Workout from './Workout'
import WorkoutModal from '../workoutModal/WorkoutModal'
import {useSelector} from 'react-redux'


const SideBar = props => {

    const [modalOpen, setModalOpen] = useState(false)
    const [edit, setEdit] = useState(false)
    const splits = useSelector(state => state.splitReducer)

    const renderSplits = () => splits.map((item, index) =>  <Workout key={index} color={item.color} expand={props.expand} edit={edit}>{item.split}</Workout>)

    return(
        <>
            <div className='side-bar' style={props.expand ? {width: 'fit-content'}: {width: '50px'}}>
                <div className='header'>
                    {props.expand ? <h1>Primary Workout</h1>: null}
                    {props.expand ? <button onClick={props.onClick}> {'<'} </button> : <button onClick={props.onClick}> {`>`} </button>}

                </div>

                <div className='button-div'>
                    {props.expand ? <button className='btn-primary' onClick={() => setModalOpen(true)}>Add</button>: null}
                    {props.expand ? <button className='btn-primary' onClick={() => setEdit(!edit)}>Delete</button> : null}
                </div>
                
                <div className='workout-list'>
                    {renderSplits()}
                </div>
            </div>

            {modalOpen ? <WorkoutModal onClick={() => setModalOpen(false)}></WorkoutModal>: null}

        </>
    )
}


export default SideBar