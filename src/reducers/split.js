
const splitReducer = (state =[], action) =>{
    switch(action.type){
        case 'FETCH_SPLITS':
            return action.payload
        case 'ADD_SPLIT':
            return [...state, action.payload]
        case 'DELETE_SPLITS':
            return state.filter(item => item._id != action.payload)
        case 'PATCH_SPLIT':
            const updatedState = state.map(item => item._id === action.payload._id ? 
                {_id: action.payload._id, split: action.payload.split, color: action.payload.color} : item)
            return updatedState
        default:
            return state
    }
}

export default splitReducer