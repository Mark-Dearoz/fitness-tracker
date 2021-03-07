import React from 'react'

const Cross = props =>{
    return(
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={props.onClick} opacity={`${props.opacity}`}>
            <rect x="6.51471" y="20.6569" width="20" height="4" transform="rotate(-45 6.51471 20.6569)" fill="#000000"/>
            <rect x="20.6569" y="23.4853" width="20" height="4" transform="rotate(-135 20.6569 23.4853)" fill="#000000"/>
        </svg>

    )
}

export default Cross