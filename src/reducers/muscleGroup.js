

const muscleGroupReducer = (state=[], action) => {
    switch(action.type){
        case 'FETCH_MUSCLE_GROUP':
            return action.payload.sort((a,b) => a.muscleGroup > b.muscleGroup ? 1 : -1)
        default:
            return state
    }
}

export default muscleGroupReducer