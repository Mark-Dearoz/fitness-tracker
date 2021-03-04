import React from 'react'
import {useDispatch} from 'react-redux'
import {deleteSplit} from '../../actions'

const Workout = props =>{
    const expandedStyle = {
        backgroundColor: props.color
    }
    const shirnkStyle = {
        backgroundColor: props.color,
        justifyContent: 'center',
        borderRadius: '50px'
    }

    const dispatch = useDispatch()

    const dragStart = e =>{

        e.dataTransfer.setData('splitData', JSON.stringify({title: props.children, color: props.color}))

    }

    return(
        <div 
            className='workout' 
            style={props.expand ? expandedStyle : shirnkStyle} 
            draggable={true}
            onDragStart={dragStart}
        >
            <h2>{props.expand ? props.children : props.children.substring(0,1)}</h2>
            {props.expand ? (props.edit ? <button onClick={() =>dispatch(deleteSplit(props.children))}>x</button> : null): null}
        </div>
    )
}




export default Workout