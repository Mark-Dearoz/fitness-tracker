import axios from 'axios'

const url = 'https://apple-surprise-43422.herokuapp.com'

const config = () =>{
    const t = JSON.parse(localStorage.getItem('profile'))?.token
    return  {headers: {
        Authorization: `Bearer ${t}`
    }}
}

//auth api
export const signInUser = form => axios.post(`${url}/user/signin`, form)
export const signUpUser = form => axios.post(`${url}/user/signup`, form)

//muscleGroup api
export const fetchMuscleGroups = () => axios.get(`${url}/muscleGroups`)

//exercise api
export const fetchExercises = () => axios.get(`${url}/exercises`)

//workouts api
export const fetchWeek = number => axios.get(`${url}/workouts/week/${number}`, config())
export const createWorkout = newWorkout => axios.post(`${url}/workouts`, newWorkout, config())
export const removeWorkout = id => axios.delete(`${url}/workouts/${id}`,)
export const patchWorkout = (id, updatedWorkout) => axios.patch(`${url}/workouts/${id}`, updatedWorkout)

//data api
export const fetchWeight = id => axios.get(`${url}/workouts/data/weight/${id}`, config())
export const fetchRepetition = id => axios.get(`${url}/workouts/data/repetition/${id}`, config())
export const fetchVolume = id => axios.get(`${url}/workouts/data/volume/${id}`, config())

//max api
export const fetchMax = (exerciseId) => axios.get(`${url}/max/${exerciseId}`,  config())
