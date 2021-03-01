import React from 'react'

const Color = props =>{
    return(
        <div className={props.selected ? 'color-block-selected': 'color-block'} style={{backgroundColor: props.color}} onClick={props.select}></div>
    )
}

export default Color