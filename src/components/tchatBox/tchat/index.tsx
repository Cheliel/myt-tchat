import React, {useEffect, useRef, useState} from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../store';
import { setUserName , setPassword } from '../../../reducer/connexionReducer';
import MessageContaner from '../message';
import { TChatContaner, TChatComponant, TChatStyle } from './styles';
import { Message } from '../message/model';
import { List, Grid, WindowScroller } from 'react-virtualized';
import 'react-virtualized/styles.css';
import { messageDisplayed } from './models';
import InputMessage from '../inputMessage';



const TChat = () => {

    const TChats = useAppSelector(state => state.TChatState.TChats)
    const TChat = TChats[0]
    const messagesLen : number = TChat?.messages ? TChat.messages.length : 1
    const listRef = useRef<List>(null);
    const [scroll, setScroll] = useState(true)


    return (
      <TChatComponant>
        <TChatContaner  className="TChat">
          {TChat.messages.length ? (
            <TChatStyle>
              {TChat.messages.map((message : Message) =>
                <MessageContaner key={message.index} message={message} />
                )}
            </TChatStyle>
              ) : (
            <div></div>
          )}
        </TChatContaner>
        <img src="img/scrollDown.svg" onClick={() => setScroll(!scroll)}/>
        <InputMessage/>
      </TChatComponant>
      );
}

export default TChat;
