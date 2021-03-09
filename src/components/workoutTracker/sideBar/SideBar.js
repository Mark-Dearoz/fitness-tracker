import React, {useState, useEffect} from 'react'
import Split from './Split'
import SplitModal from '../../modal/splitModal/SplitModal'
import Arrow from '../../svg/Arrow'
import {getSplits} from '../../../actions/split'
import {useSelector, useDispatch} from 'react-redux'


const SideBar = props => {

    const [modalOpen, setModalOpen] = useState(false)
    const splits = useSelector(state => state.splitReducer)
    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch(getSplits())
    },[])

    const renderSplits = () => splits.map((item, index) =>  <Split key={item._id} id={item._id} color={item.color} expand={props.expand}>{item.split}</Split>)

    return(
        <>
            <div className='side-bar' style={props.expand ? {width: '300px'}: {width: '50px'}}>
                <div className='header'>
                    {props.expand ? <h1>Splits</h1>: null}
                    <Arrow rotate={props.expand ? 90 : 270} onClick={props.onClick} color={'#FFFFFF'}></Arrow>
                </div>

                <div className='button-div'>
                    {props.expand ? <button className='btn-primary' onClick={() => setModalOpen(true)}>Add Split</button>: null}
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