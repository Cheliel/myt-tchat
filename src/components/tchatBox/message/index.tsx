import React, {useState} from 'react';
import { Message } from './model';
import { MessageContanerStyle, Sender, MessageStyle } from './styles';

interface Props {
    message: Message
}


const MessageContaner: React.FC<Props> = ({ message }) => {


  return (
    <MessageContanerStyle>
        <MessageStyle>{message.sender} : {message.message}</MessageStyle>
    </MessageContanerStyle>
  );
}

export default MessageContaner;

