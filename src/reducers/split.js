const initialState = [
    {
        split: 'Chest',
        color: '#00B295'
    }
]
const splitReducer = (state =initialState, action) =>{
    const stateCopy = [...state]
    switch(action.type){
        case 'ADD_SPLIT':
            stateCopy.push(action.payload)
            return stateCopy
        case 'DELETE_SPLIT':
            const newState = stateCopy.filter(item => item.split != action.payload)
            return newState
        default:
            return state
    }
}

export default splitReducer