
const exerciseReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_EXERCISES':
            return action.payload.sort((a,b) => a.exercise > b.exercise ? 1 : -1)
        default:
            return state
    }
}

export default exerciseReducer