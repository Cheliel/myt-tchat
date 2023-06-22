import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../store';
import { setUserName , setPassword } from '../../reducer/connexionReducer';




const HomePage = () => {

  const dispatch = useAppDispatch()
  const [token, setTokenState] = useState('')
  const [name, setNameState] = useState('')

  const connexion = () => {
    console.log("toekn" , token)
    dispatch(setPassword(token))
    dispatch(setUserName(name))
  }

  return (
    <div className="homePage">
      <input onChange={(e) => setTokenState(e.target.value)} value={token} type='text' placeholder='oauth:token'/>
      <input onChange={(e) => setNameState(e.target.value)} value={name} type='text' placeholder='Name' />
      <Link onClick={() => connexion()} to={'/dashboard'}>Connexion</Link>
      <a href='https://twitchapps.com/tmi/' target="_blank">Twitch Connection</a>
    </div>
  );
}

export default HomePage;

