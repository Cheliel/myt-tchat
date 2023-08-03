import React, {useState} from 'react';
import { InputMessageContaner, Input, MyButton } from './styles';
import SocketHandeler from '../../../utils/socket/SoketHandeler';
import { useAppSelector, useAppDispatch } from '../../../store';
import { addMessage } from '../../../reducer/tchatsReducer';
import { getMessage } from '../message/model';
import { generateUniqueID } from '../../../utils/socket/messageHandeler';




const InputMessage = () => {

  const dispatch = useAppDispatch()
  const [message, setMessage] = useState('')
  const conn = useAppSelector((state) => state.connexionState)

  const sendMessage = () =>{
    dispatch(addMessage(getMessage(conn.username, message, "message", conn.channels[0], generateUniqueID(conn.username))))
    SocketHandeler.sendMessage(conn.channels, message)
    setMessage('')
  }

  return (
    <InputMessageContaner>
      <Input onChange={(e : any) => setMessage(e.target.value)} value={message} type='text' placeholder='Message'/>
      <MyButton src="img/send.svg" onClick={() => sendMessage()}/>
    </InputMessageContaner>
  );
}

export default InputMessage;