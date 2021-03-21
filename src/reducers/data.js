
const dataReducer = (state =[], action) =>{
    switch(action.type){
        case 'FETCH_WEIGHT':
            return action.payload
        case 'FETCH_REPETITION':
            return action.payload
        case 'FETCH_VOLUME':
            return action.payload
        default:
            return state
    }
}

export default dataReducer