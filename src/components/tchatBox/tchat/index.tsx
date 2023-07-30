import React, {useEffect, useRef, useState} from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../store';
import { setUserName , setPassword } from '../../../reducer/connexionReducer';
import MessageContaner from '../message';
import { TChatContaner, TChatComponant } from './styles';
import { Message } from '../message/model';
import { List, Grid, WindowScroller } from 'react-virtualized';
import { styledMessage } from './styles';
import 'react-virtualized/styles.css';

interface props {
  index : number,
  key: string,
  style: any
}

interface style {
  height: number,
  left: number,
  position: string,
  top: number,
  width: string
}


const TChat = () => {

    const TChats = useAppSelector(state => state.TChatState.TChats)
    const TChat = TChats[0]
    const messagesLen : number = TChat?.messages ? TChat.messages.length : 1
    const listRef = useRef<List>(null);
    const [scroll, setScroll] = useState(true)

    const cellRenderer = ({columnIndex, key, rowIndex, style} : any) => {
      const number = rowIndex + 1;

      if(TChat && TChat?.messages){
        const message = TChat.messages[rowIndex]
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

      const setRowHeight = ( index: any ) : number => {
        
        
        const i = index.index
        if(TChat && TChat?.messages){
          const message = TChat.messages[i]
          if(message){
            console.log(message)
            console.log('message ?')
            
            const len = message.message.length + message.sender.length + 5
            console.log('acttual len ==> ', len)
            if(len > 280){return 200}

            if(len > 210){return 140}

            if(len > 150){return 110}

            if(len > 110){return 80}

            if(len >= 60){return 60}

            if(len < 60){return 40}

          }
        }

        return 80
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
            <WindowScroller>
              {({ height, isScrolling, onChildScroll, scrollTop }) => (
              <Grid
                    width={420}
                    height={500}
                    columnWidth={390}
                    rowCount={messagesLen}
                    estimatedRowSize={40}
                    rowHeight={(index) => setRowHeight(index)}
                    columnCount={1}
                    cellRenderer={cellRenderer}
                    style={styledMessage}>

              </Grid> )}
            </WindowScroller>
          ) : (
            <div></div>
          )}
          <span onClick={() => setScroll(!scroll)}>|-o-|</span>
        </TChatContaner>
      </TChatComponant>
      );
}

export default TChat;

