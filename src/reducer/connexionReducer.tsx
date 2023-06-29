import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { ConnexionState } from '../utils/socket/models';


const initialState: ConnexionState = { 
  password: "",
  username: "" ,
  channels: [''],
  isChatDisplayed : false
};

//


export const connexionState = createSlice({
  name: 'connexionState',
  initialState: initialState,
  reducers: {
    setPassword : (state , action: PayloadAction<string>) => {
       return ({...state, password : action.payload }); 
    },
    setUserName : (state , action: PayloadAction<string>) => {
      return ({...state, username : action.payload }); 
   },
    setChannels : (state , action: PayloadAction<[string]>) => {
    return ({...state, channels : action.payload }); 
 },
 setChatDisplay : (state , action: PayloadAction<boolean>) => {
 return ({...state, isChatDisplayed : action.payload }); 
}
  }
});



export const { setPassword, setUserName, setChannels, setChatDisplay } = connexionState.actions;
export default connexionState.reducer;