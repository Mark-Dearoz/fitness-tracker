import React, {useState} from 'react'
import SplitModal from '../../modal/splitModal/SplitModal'
import Cross from '../../svg/Cross'
import {useDispatch} from 'react-redux'
import {deleteSplit} from '../../../actions/split'

const Split = props =>{
    const expandedStyle = {
        backgroundColor: props.color
    }
    const shirnkStyle = {
        backgroundColor: props.color,
        justifyContent: 'center',
        borderRadius: '50px'
    }

    const dispatch = useDispatch()
    const [hover, setHover] = useState(false)
    const [openModal, setOpenModal] = useState(false);
    const dragStart = e =>{

        e.dataTransfer.setData('splitData', JSON.stringify({title: props.children, color: props.color}))

    }

    return(
        <>
            <div 
                className='workout' 
                style={props.expand ? expandedStyle : shirnkStyle} 
                draggable={true}
                onDragStart={dragStart}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onDoubleClick={() => setOpenModal(true)}
            >
                <h2>{props.expand ? props.children : props.children.substring(0,1)}</h2>
                {props.expand ? <Cross opacity={hover ? .5 : 0} onClick={() =>dispatch(deleteSplit(props.id))}></Cross> : null}
            </div>

            {openModal  ?<SplitModal onClick={()=>setOpenModal(false)} id={props.id}></SplitModal> : null}

        </>
    )
}




export default Split