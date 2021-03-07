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


