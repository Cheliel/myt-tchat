import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store';
import { WSConnecion } from '../../utils/socket/models';
import SocketHandeler from '../../utils/socket/SoketHandeler';


const Dashboard = () => {

  const connexion = useAppSelector((state => state.connexionState))

  const newConnection = () => {
    SocketHandeler.connect(WSConnecion(connexion.password, connexion.username, connexion.channels))
    console.log("Conn statu : ",SocketHandeler.ws.OPEN)
  }

  const switchChannel = () => {
    SocketHandeler.switchChannel('thegreatreview')
    console.log("Conn statu : ",SocketHandeler.ws.OPEN)
  }


  return (
    <div>
        <button onClick={() => newConnection()}>Start</button>
        <button onClick={() => switchChannel()}>Channel</button>
        helloworld -- check on the console ! 
    </div>
  );
}

export default Dashboard;