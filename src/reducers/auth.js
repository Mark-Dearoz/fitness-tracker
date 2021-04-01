

const authReducer = (state = {}, action) => {
    switch(action.type) {
        case 'AUTH':
            localStorage.setItem('profile', JSON.stringify({...action.payload}))
            return {...action.payload}
        case 'LOGOUT':
            localStorage.clear()
            return {}
        default:
            return state
    }
}

export default authReducer