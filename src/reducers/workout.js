
const workoutReducer = (state=[], action) =>{
    switch(action.type){
        case 'FETCH_WEEK':
            return action.payload
        case 'ADD_WORKOUT':
            return [...state, action.payload]
        case 'DELETE_WORKOUT':
            return state.filter(workout => workout._id !== action.payload)
        case 'EDIT_WORKOUT':
            const filteredState = state.filter(workout => workout._id !== action.payload._id)
            return [...filteredState, action.payload]
        default:
            return state
    }
}

export default workoutReducer