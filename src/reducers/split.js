const initialState = [
    {
        split: 'Chest',
        color: '#00B295'
    }
]
const splitReducer = (state =initialState, action) =>{
    const newState = [...state]
    switch(action.type){
        case 'ADD_SPLIT':
            newState.push(action.payload)
            return newState
        case 'DELETE_SPLIT':
            const retState = newState.filter(item => item.split != action.payload)
            return retState
        default:
            return state
    }
}

export default splitReducer