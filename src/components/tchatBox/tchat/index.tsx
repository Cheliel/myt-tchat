import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../store';
import { setUserName , setPassword } from '../../../reducer/connexionReducer';
import MessageContaner from '../message';
import { TChatContaner, TChatComponant } from './styles';
import { Message } from '../message/model';
import { List } from 'react-virtualized';

interface props {
  index : number,
  key: string,
  style: {}
}


const TChat = () => {

    const TChats = useAppSelector(state => state.TChatState.TChats)
    const TChat = TChats[0]

    const rowRenderer = ({ index, key, style } : props) => {
      const number = index + 1;
  
      return (
        <div key={key} style={style}>
          {number}
        </div>
      );
    };

    return (
      <TChatComponant>
        <TChatContaner className="TChat">
          {TChat ? (
            TChat.messages?.map((message) => {
             return( <MessageContaner key={message.index} message={message} />) 
          })
          ) : (
            <div></div>
          )}
        </TChatContaner>
      </TChatComponant>
      );
}

export default TChat;

