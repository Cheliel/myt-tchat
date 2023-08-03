import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store';
import { WSConnecion } from '../../utils/socket/models';
import SocketHandeler from '../../utils/socket/SoketHandeler';
import { setChannels } from '../../reducer/connexionReducer';
import { TChatConstructor } from '../../components/tchatBox/tchat/models';
import { setTChat } from '../../reducer/tchatsReducer';
import { setChatDisplay } from '../../reducer/connexionReducer';
import { Message } from '../../components/tchatBox/message/model';
import TChat from '../../components/tchatBox/tchat';
import { Page } from './styles';
import { InputChannelContaner } from './styles';
import { Input, MyButton } from './styles';
import TChatBox from '../../components/tchatBox';




const Dashboard = () => {

  const connexion = useAppSelector((state => state.connexionState))
  const dispatch = useAppDispatch()
  const [channel, setChannel] = useState('')
  const [isTChat, setIsTChat] = useState(false)

  const newConnection = () => {
    
    if(SocketHandeler.ws && SocketHandeler.ws.OPEN){
      SocketHandeler.ws.close()
    }

    dispatch(setTChat(channel))
    SocketHandeler.connect(WSConnecion(connexion.password, connexion.username, [channel]))
    console.log("Conn statu : ", SocketHandeler.ws.OPEN)
    dispatch(setChatDisplay(true))

  }

  useEffect(() => {
    dispatch(setChannels([channel]))
  }, [channel])


 // oauth:uip8pebh9xgwfl52naak2hw3y23kh6
 // pressea

  return (
    <Page>
      {connexion.isChatDisplayed ? (<TChatBox />) 
      :(       
      <InputChannelContaner>
        <Input onChange={(e : any) => setChannel(e.target.value)} value={channel} type='text' placeholder='Channel'/>
        <MyButton onClick={() => newConnection()}>Start</MyButton> 
      </InputChannelContaner>
      )}

    </Page>
  );
}

export default Dashboard;