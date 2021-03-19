import splitReducer from './split'
import exerciseReducer from './exercise'
import maxReducer from './max'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    splits: splitReducer,
    exercises: exerciseReducer,
    max: maxReducer
})

export default allReducers