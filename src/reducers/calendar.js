
const cState = [
    {
        day: 'Monday',
        month: 1,
        date: 1,
        splits: [
            {
                title: 'Chest',
                color: '#4DBF6D',
                workouts: [
                    {
                        lift: 'Bench Press',
                        sets: 4,
                        reps: 10,
                        weight: 145
                    }
                ]
            }
        ],
    },
    {
        day: 'Tueday',
        month: 1,
        date: 2,
        splits: [],
    },
    {
        day: 'Wednesday',
        month: 1,
        date: 3,
        splits: [],
    },
    {
        day: 'Thursday',
        month: 1,
        date: 4,
        splits: [],
    },
    {
        day: 'Friday',
        month: 1,
        date: 5,
        splits: [],
    },
    {
        day: 'Satruday',
        month: 1,
        date: 6,
        splits: [],
    },
    {
        day: 'Sunday',
        month: 1,
        date: 7,
        splits: [],
    }
]
const calendarReducer = (state=cState, action ) =>{
    const stateCopy = [...state]
    switch(action.type){
        case 'ADD_SPLIT_CARD':
            
            const dayFilter1 = stateCopy.filter(item => item.day === action.payload.day)
            dayFilter1[0].splits.push({...action.payload.card, workouts: []})
            return stateCopy
        case 'DELETE_SPLIT_CARD':
            const dayFilter2 = stateCopy.filter(item => item.day === action.payload.parent)
            const splitFilter = dayFilter2[0].splits.filter(item => item.title != action.payload.split)
            dayFilter2[0].splits = splitFilter
            return stateCopy
        case 'ADD_WORKOUT_CARD':
            const dayFilter3 = stateCopy.filter(item => item.day === action.payload.parent)
            const splitFilter1 = dayFilter3[0].splits.filter(item => item.title === action.payload.split)
            splitFilter1[0].workouts.push({lift: action.payload.workout, sets: action.payload.sets, reps: action.payload.reps, weight: action.payload.weight})
            return stateCopy
        default:
            return state
    }
}

export default calendarReducer