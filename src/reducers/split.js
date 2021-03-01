

const splitReducer = (state =[], action) =>{
    switch(action.type){
        case 'ADD':
            return state
        case 'DELETE':
            return state
        default:
            return state
    }
}

export default splitReducer