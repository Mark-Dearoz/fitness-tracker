//calendar actions
export const addWorkoutCard = (workoutCard) =>{
    return{
        type: 'ADD_WORKOUT_CARD',
        payload: workoutCard
    }
}


//split actions

export const addSplit = (split) =>{
    return{
        type: 'ADD_SPLIT',
        payload: split
    }
}

export const deleteSplit = (split) =>{
    return {
        type: 'DELETE_SPLIT',
        payload: split
    }
}


