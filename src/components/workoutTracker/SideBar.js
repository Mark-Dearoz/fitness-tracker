import React, {useState} from 'react'
import Split from './Split'
import SplitModal from '../Modal/SplitModal/SplitModal'
import {useSelector} from 'react-redux'


const SideBar = props => {

    const [modalOpen, setModalOpen] = useState(false)
    const [edit, setEdit] = useState(false)
    const splits = useSelector(state => state.splitReducer)

    const renderSplits = () => splits.map((item, index) =>  <Split key={index} color={item.color} expand={props.expand} edit={edit}>{item.split}</Split>)

    return(
        <>
            <div className='side-bar' style={props.expand ? {width: 'fit-content'}: {width: '50px'}}>
                <div className='header'>
                    {props.expand ? <h1>Primary Workout</h1>: null}
                    {props.expand ? <button onClick={props.onClick}> {'<'} </button> : <button onClick={props.onClick}> {`>`} </button>}

                </div>

                <div className='button-div'>
                    {props.expand ? <button className='btn-primary' onClick={() => setModalOpen(true)}>Add</button>: null}
                    {props.expand ? <button className='btn-primary' onClick={() => setEdit(!edit)}>Delete</button> : null}
                </div>
                
                <div className='workout-list'>
                    {renderSplits()}
                </div>
            </div>

            {modalOpen ? <SplitModal onClick={() => setModalOpen(false)}></SplitModal>: null}

        </>
    )
}


export default SideBar