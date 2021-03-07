import React from 'react'

const Arrow = props =>{
    return(
        <svg className='arrow' width="29" height="18" viewBox="0 0 29 18" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={props.onClick} transform={`rotate(${props.rotate})`}>
            <rect x="29" y="3.34315" width="20" height="4" transform="rotate(135 29 3.34315)" fill={props.color}/>
            <rect x="3.54407" y="0.514717" width="20" height="4" transform="rotate(45 3.54407 0.514717)" fill={props.color}/>
        </svg>
    )
}

export default Arrow