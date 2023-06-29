import React, {useEffect, useRef, useState} from 'react';
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
    const messagesLen : number = TChat?.messages ? TChat.messages.length : 1
    const listRef = useRef<List>(null);
    const [scroll, setScroll] = useState(true)

    const rowRenderer = ({ index, key, style } : props) => {
      const number = index + 1;

      if(TChat && TChat?.messages){
        const message = TChat.messages[index]
        if(message){
          return (
            <div key={key} style={style}>
              <MessageContaner key={message.index} message={message} />
            </div>
          )
        }
      } else {
        return null
      }

      }

      useEffect(() => {

        const listContainer = listRef.current;

        if(listContainer && scroll){
          listContainer.scrollToRow(messagesLen -1)
        }
        
      }, [TChat.messages])

    return (
      <TChatComponant>
        <TChatContaner  className="TChat">
          {TChat ? (
            <List ref={listRef}
                  width={300}
                  height={400}
                  rowCount={messagesLen}
                  rowHeight={80}
                  rowRenderer={rowRenderer}>

            </List>
          ) : (
            <div></div>
          )}
          <span onClick={() => setScroll(!scroll)}>|-o-|</span>
        </TChatContaner>
      </TChatComponant>
      );
}

export default TChat;

