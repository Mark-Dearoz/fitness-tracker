import React from 'react'

const WorkoutCard = props =>{
    return(
        <div className='workout-card'>
            <h1>{props.lift}</h1>
            <div>
                <h2>{props.set}</h2>
                <h2>{props.reps}</h2>
                <h2>{props.weight}lbs</h2>
            </div>
        </div>
    )
}

export default WorkoutCard