import authReducer from './auth'
import muscleGroupReducer from './muscleGroup'
import exerciseReducer from './exercise'
import workoutReducer from './workout'
import dataReducer from './data'
import maxReducer from './max'
import errorReducer from './error'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    user: authReducer,
    muscleGroups: muscleGroupReducer,
    exercises: exerciseReducer,
    workouts : workoutReducer,
    max: maxReducer,
    data: dataReducer,
    errors: errorReducer
})

export default allReducers