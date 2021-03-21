import axios from 'axios'

const url = 'http://localhost:5000'

export const fetchSplits = () => axios.get(`${url}/splits`)
export const createSplit = (newSplit) => axios.post(`${url}/splits`, newSplit)
export const removeSplit = id => axios.delete(`${url}/splits/${id}`)
export const patchSplit = (id, updatedSplit) => axios.patch(`${url}/splits/${id}`, updatedSplit)


//exercise api
export const fetchExercises = () => axios.get(`${url}/exercises`)



//data api
export const fetchWeight = id => axios.get(`${url}/workouts/data/weight/${id}`)
export const fetchRepetition = id => axios.get(`${url}/workouts/data/repetition/${id}`)
export const fetchVolume = id => axios.get(`${url}/workouts/data/volume/${id}`)

//max api
export const fetchMax = (exerciseId) => axios.get(`${url}/max/${exerciseId}`)
