import {signInUser, signUpUser} from '../api'

export const signIn = (form, history) => async (dispatch) =>{
    try{
        const {data} = await signInUser(form)
        dispatch({type: 'AUTH', payload: data})
        dispatch({type:'SIGNIN_ERROR', payload: ''})
        history.push('/dashboard')
    }catch(error){
        dispatch({type:'SIGNIN_ERROR', payload: error.response.data.message})
    }
}

export const signUp = (form, history) => async (dispatch) =>{
    try{
        const {data} = await signUpUser(form)
        dispatch({type: 'AUTH', payload: data})
        history.push('/dashboard')
    }catch(error){
        console.log(error)
    }
}