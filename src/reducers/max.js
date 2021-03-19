
const workoutReducer = (state = {}, action) =>{
    switch (action.type){
        case 'FETCH_MAX':
            return action.payload
        default:
            return state
    }
}

export default workoutReducer