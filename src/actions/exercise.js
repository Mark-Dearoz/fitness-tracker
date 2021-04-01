import {fetchExercises} from '../api'

export const getExercises = () => async (dispatch) =>{
    try{
        const {data} = await fetchExercises()
        dispatch({type: 'FETCH_EXERCISES', payload: data})
    }catch(error){
        console.log(error)
    }
}
