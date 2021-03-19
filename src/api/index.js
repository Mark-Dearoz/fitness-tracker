import axios from 'axios'

const url = 'http://localhost:5000'

export const fetchSplits = () => axios.get(`${url}/splits`)
export const createSplit = (newSplit) => axios.post(`${url}/splits`, newSplit)
export const removeSplit = (id) => axios.delete(`${url}/splits/${id}`)
export const patchSplit = (id, updatedSplit) => axios.patch(`${url}/splits/${id}`, updatedSplit)


//exercise api
export const fetchExercises = () => axios.get(`${url}/exercises`)



//max api
export const fetchMax = (exerciseId) => axios.get(`${url}/max/${exerciseId}`)