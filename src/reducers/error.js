

const errorReducer = (state={}, action) => {
    switch(action.type){
        case 'SIGNIN_ERROR':
            return {...state, signIn : action.payload}
        default:
            return state
    }
} 

export default errorReducer