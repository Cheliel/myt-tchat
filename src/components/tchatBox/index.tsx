import React, {useState} from 'react';
import TChat from './tchat';
import InputMessage from './inputMessage';
import '../../assets/img/cancel.svg'
import { useAppDispatch } from '../../store';
import { setChatDisplay } from '../../reducer/connexionReducer';


const TChatBox = () => {

    const dispatch = useAppDispatch()
    const stop = () => {
        dispatch(setChatDisplay(false))
    }

    return (<>
        <img onClick={() => stop()} src='../../assets/img/cancel.svg'/>
        <TChat />
        <InputMessage />

    </>);
}

export default TChatBox;