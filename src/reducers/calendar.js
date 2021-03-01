
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
    switch(action.type){
        case 'ADD_WORKOUT_CARD':
            const newState = [...state]
            const obj = newState.filter(item => item.day == action.payload.day)
            obj[0].splits.push({...action.payload.card, workouts: []})
            return newState
        default:
            return state
    }
}

export default calendarReducer