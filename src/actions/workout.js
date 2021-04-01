import { fetchWeek, createWorkout, removeWorkout,  patchWorkout} from '../api'

export const getWeek = number => async (dispatch) =>{
    try{
        const {data} = await fetchWeek(number)
        dispatch({type: 'FETCH_WEEK', payload: data})
    }catch(error){
        console.log(error)
    }
}

export const addWorkout = newWorkout => async (dispatch) =>{
    try{
        const {data} = await createWorkout(newWorkout)
        dispatch({type: 'ADD_WORKOUT', payload: data})
    }catch(error){
        console.log(error)
    }
}

export const deleteWorkout = id => async (dispatch) =>{
    try{
        const {result} = JSON.parse(localStorage.getItem('profile'))
        if(result.email !== 'example@example.com') removeWorkout(id)
        dispatch({type: 'DELETE_WORKOUT', payload: id})
    }catch(error){
        console.log(error)
    }
}

export const editWorkout = (id, newWorkout) => async (dispatch) =>{
    try{
        const {data} = await patchWorkout(id, newWorkout)
        dispatch({type: 'EDIT_WORKOUT', payload: data})
    }catch(error){
        console.log(error)
    }
}