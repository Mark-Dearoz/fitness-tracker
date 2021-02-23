import React from 'react'
import Workout from './Workout'


const SideBar = props => {

    return(
        <div className='side-bar' style={props.expand ? {width: 'fit-content'}: {width: '50px'}}>
            <div className='header'>
                {props.expand ? <h1>Primary Workout</h1>: null}
                {props.expand ? <button onClick={props.onClick}> {'<'} </button> : <button onClick={props.onClick}> {`>`} </button>}

            </div>
            {props.expand ? <button className='btn-primary'>Add Workout</button>: null}
            
            <div className='workout-list'>
                <Workout color='#4DBF6D' expand={props.expand}>Chest</Workout>
            </div>
        </div>
    )
}


export default SideBar