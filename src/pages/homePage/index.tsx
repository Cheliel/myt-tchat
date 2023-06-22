import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../store';
import { setToken as setTokenReducer } from '../../reducer/tokenReducer';




const HomePage = () => {

  const dispatch = useAppDispatch()
  const [token, setToken] = useState('')

  return (
    <div className="homePage">
      <input onChange={(e) => setToken(e.target.value)} value={token} type='text' placeholder='oauth:token'/>
      <Link onClick={() => dispatch(setTokenReducer(token))} to={'/dashboard'}>Connexion</Link>
      <a href='https://twitchapps.com/tmi/' target="_blank">Twitch Connection</a>
    </div>
  );
}

export default HomePage;

{/* <Link to={"/dashboard"}>
<span>Connexion</span>
</Link> */}