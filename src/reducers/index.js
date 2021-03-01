import splitReducer from './split'
import calendarReducer from './calendar'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    splitReducer: splitReducer,
    calendarReducer: calendarReducer,
})

export default allReducers