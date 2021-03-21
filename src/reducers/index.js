import splitReducer from './split'
import exerciseReducer from './exercise'
import dataReducer from './data'
import maxReducer from './max'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    splits: splitReducer,
    exercises: exerciseReducer,
    max: maxReducer,
    data: dataReducer
})

export default allReducers