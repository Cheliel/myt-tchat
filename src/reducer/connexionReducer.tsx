import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { ConnexionState } from '../utils/socket/models';


const initialState: ConnexionState = { 
  password: "",
  username: "" ,
  channels: ['thegreatreview']
};

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
 }
  }
});



export const { setPassword, setUserName, setChannels } = connexionState.actions;
export default connexionState.reducer;