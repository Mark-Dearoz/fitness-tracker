import {fetchMax} from '../api'


export const getMax = exercise => async (dispatch) =>{
    const {data} = await fetchMax(exercise)
    dispatch({type: 'FETCH_MAX', payload: data})
}