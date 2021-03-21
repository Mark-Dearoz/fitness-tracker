import {fetchWeight, fetchVolume, fetchRepetition} from '../api'

export const getWeight = id => async (dispatch) => {
    try{
        const {data} = await fetchWeight(id)
        dispatch({type: 'FETCH_WEIGHT', payload: data})
    }catch(error){
        console.log(error)
    }
}

export const getRepetition = id => async (dispatch) => {
    try{
        const {data} = await fetchRepetition(id)
        dispatch({type: 'FETCH_REPETITION', payload: data})
    }catch(error){
        console.log(error)
    }
}

export const getVolume = id => async (dispatch) => {
    try{
        const {data} = await fetchVolume(id)
        dispatch({type: 'FETCH_VOLUME', payload: data})
    }catch(error){
        console.log(error)
    }
}