import React, {useState} from 'react';
import TChat from './tchat';
import InputMessage from './inputMessage';
import { useAppDispatch } from '../../store';
import { setChatDisplay } from '../../reducer/connexionReducer';


const TChatBox = () => {

    const dispatch = useAppDispatch()
    const stop = () => {
        dispatch(setChatDisplay(false))
    }

    return (<>
        <img onClick={() => stop()} src='img/cancel.svg'/>
        <TChat />

    </>);
}

export default TChatBox;