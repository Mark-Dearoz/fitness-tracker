import React, {useEffect, useState} from 'react'
import Color from './Color'
import {addSplit, updateSplit} from '../../../actions/split'
import {useDispatch, useSelector} from 'react-redux'

const SplitModal = props =>{
    
    const dispatch = useDispatch()
    const [splitInput, setSplitInput] = useState('')
    const [colorInput, setColorInput] = useState([{color: '#00B295', selected: false},
                                                {color: '#028090', selected: false},
                                                {color: '#4DBF6D', selected: false},
                                                {color: '#56351E', selected: false},
                                                {color: '#7286A0', selected: false},
                                                {color: '#754668', selected: false},
                                                {color: '#FE5F55', selected: false},
                                                {color: '#FF8552', selected: false}])
    
    const splits = useSelector(state => state.splitReducer)
    const select = num => setColorInput(colorInput.map((item, index) => index === num ? {color: item.color, selected: true} : {color: item.color, selected: false}))

    const renderColors = () => colorInput.map((item, index) => <Color key={index} selected={item.selected} color={item.color} select={() => select(index)}></Color>)

    const checkForm = () =>{

        if (splitInput.length === 0) return
        if(colorInput.filter(item => item.selected == true).length === 0) return
        props.id === undefined ?  dispatch(addSplit({split: splitInput, color: colorInput.filter(item => item.selected == true)[0].color}))
        : dispatch(updateSplit(props.id, { split: splitInput, color: colorInput.filter(item => item.selected === true)[0].color}))
        props.onClick()
    }

    useEffect(() =>{
        if(props.id === undefined) return
        const split = splits.filter(item => item._id === props.id)
        setSplitInput(split[0].split)
        setColorInput(colorInput.map(item => item.color === split[0].color ? {color: item.color, selected: true} : {color: item.color, selected: false}))
    },[])
    
    
    return(
        
        <div className='modal-background'>
            <div className='modal'>
                <div className='header'>
                    <h1>New Workout</h1>
                </div>
                <div className='body'>
                    <div className='inputs'>
                        <div>
                            <h2>Workout Name</h2>
                            <input type='text' value={splitInput} onChange={e =>setSplitInput(e.target.value)}></input>
                        </div>
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

export default SplitModal