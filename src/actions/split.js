import {fetchSplits, createSplit, removeSplit, patchSplit} from '../api'

export const getSplits = () => async (dispatch) =>{
    try{
        const {data} = await fetchSplits()
        dispatch({type: 'FETCH_SPLITS', payload: data})
    }catch(error){
        console.log(error)
    }
}

export const addSplit = split => async (dispatch) =>{
    try{
        const {data} = await createSplit(split)
        dispatch({type: 'ADD_SPLIT', payload: data})
    }catch(error){
        console.log(error)
    }
}

export const deleteSplit = id => async (dispatch) =>{
    try{
        await removeSplit(id)
        dispatch({type: 'DELETE_SPLITS', payload: id})
        console.log('hello')
    }catch(error){
        console.log(error)
    }
}

export const updateSplit = (id, split) => async (dispatch) =>{
    try{
        const {data} = await patchSplit(id, split)
        dispatch({type: 'PATCH_SPLIT', payload: {_id: id, ...data}})
    }catch(error){
        console.log(error)
    }
}