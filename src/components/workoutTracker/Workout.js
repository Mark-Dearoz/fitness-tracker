import React from 'react'

const Workout = props =>{
    const expandedStyle = {
        backgroundColor: props.color
    }
    const shirnkStyle = {
        backgroundColor: props.color,
        justifyContent: 'center',
        borderRadius: '50px'
    }

    return(
        <div className='workout' style={props.expand ? expandedStyle : shirnkStyle}>
            <h2>{props.expand ? props.children : props.children.substring(0,1)}</h2>
        </div>
    )
}




export default Workout