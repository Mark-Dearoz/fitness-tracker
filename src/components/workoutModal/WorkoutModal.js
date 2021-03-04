import React, {useState} from 'react'
import Color from './Color'
import {addSplit} from '../../actions'
import {useDispatch} from 'react-redux'

const WorkoutModal = props =>{
    
    const dispatch = useDispatch()
    const [workoutInput, setWorkoutInput] = useState('')
    const [colorInput, setColorInput] = useState([{color: '#00B295', selected: false},
                                                {color: '#028090', selected: false},
                                                {color: '#4DBF6D', selected: false},
                                                {color: '#56351E', selected: false},
                                                {color: '#7286A0', selected: false},
                                                {color: '#754668', selected: false},
                                                {color: '#FE5F55', selected: false},
                                                {color: '#FF8552', selected: false}])
    
    const select = num => setColorInput(colorInput.map((item, index) => index === num ? {color: item.color, selected: true} : {color: item.color, selected: false}))

    const renderColors = () => colorInput.map((item, index) => <Color key={index} selected={item.selected} color={item.color} select={() => select(index)}></Color>)

    const checkForm = () =>{

        if (workoutInput.length === 0) return
        if(colorInput.filter(item => item.selected == true).length === 0) return  
        dispatch(addSplit({split: workoutInput, color: colorInput.filter(item => item.selected == true)[0].color}))
        props.onClick()
    }
    
    
    return(
        
        <div className='workout-modal-background'>
            <div className='modal'>
                <div className='header'>
                    <h1>New Workout</h1>
                </div>
                <div className='body'>
                    <div className='workout-input'>
                        <h2>Workout Name</h2>
                        <input type='text' value={workoutInput} onChange={e =>setWorkoutInput(e.target.value)}></input>
                    </div>
                    
                    <div className='color-select'>
                        <h2>Select Color</h2>
                        <div className='colors'>
                            {renderColors()}
                        </div>
                    </div>
                    <div className='buttons'>
                        <button className='btn-primary' onClick={props.onClick}>Cancel</button>
                        <button className='btn-primary' onClick={() => checkForm()}>Submit</button>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default WorkoutModal