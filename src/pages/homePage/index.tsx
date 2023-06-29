import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../store';
import { setUserName , setPassword } from '../../reducer/connexionReducer';
import { Page, HomePageContaner, ConnexionContaner, InputContaner, Input, Text, Titre, Bouton } from './styles';




const HomePage = () => {

  const dispatch = useAppDispatch()
  const [token, setTokenState] = useState('')
  const [name, setNameState] = useState('')

  const connexion = () => {
    console.log("token" , token)
    dispatch(setPassword(token))
    dispatch(setUserName(name))
  }

  return (
    <Page>
      <HomePageContaner className="homePage">
        <ConnexionContaner>
          
        <Titre>Connexion</Titre>

          <InputContaner>
            <Input onChange={(e : any) => setTokenState(e.target.value)} value={token} type='text' placeholder='oauth:token'/>
            <Input onChange={(e : any) => setNameState(e.target.value)} value={name} type='text' placeholder='Pseudo' />
          </InputContaner>

          <InputContaner>
            <Link onClick={() => connexion()} to={'/dashboard'}><Bouton>Connexion</Bouton></Link>
            <a href='https://twitchapps.com/tmi/' target="_blank"><Text>Je n'ai pas d'oauth token ! </Text></a>
          </InputContaner>

        </ConnexionContaner>
      </HomePageContaner>
    </Page>
  );
}

export default HomePage;

