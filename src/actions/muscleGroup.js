import { fetchMuscleGroups } from "../api"


export const getMuscleGroups = () => async (dispatch) => {
    const {data} = await fetchMuscleGroups()
    dispatch({type: 'FETCH_MUSCLE_GROUP', payload: data })
}