
const exerciseReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_EXERCISES':
            return action.payload
        default:
            return state
    }
}

export default exerciseReducer