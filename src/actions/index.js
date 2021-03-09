//calendar actions
export const addSplitCard = (splitCard) =>{
    return{
        type: 'ADD_SPLIT_CARD',
        payload: splitCard
    }
}

export const deleteSplitCard = (splitCard) =>{
    return{
        type: 'DELETE_SPLIT_CARD',
        payload: splitCard
    }
}

export const addWorkoutCard = (workoutCard) =>{
    return{
        type: 'ADD_WORKOUT_CARD',
        payload: workoutCard
    }
}

export const deleteWorkoutCard = (workoutCard) =>{
    return{
        type: 'DELETE_WORKOUT_CARD',
        payload: workoutCard
    }
}





