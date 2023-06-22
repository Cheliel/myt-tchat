import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';



export interface State { 
    token: string
}

const initialState: State = { token: "" };

export const tokenState = createSlice({
  name: 'tokenState',
  initialState: initialState,
  reducers: {
    setToken : (state , action: PayloadAction<string>) => {
       return ({...state, charactersList : action.payload }); 
    }
  }
});



export const { setToken} = tokenState.actions;
export default tokenState.reducer;