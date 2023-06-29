import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ConnexionState } from '../utils/socket/models';
import { Message } from '../components/tchatBox/message/model';
import { TChat, TChatConstructor } from '../components/tchatBox/tchat/models';
import { stat } from 'fs';
import _ from 'lodash';




interface TChatsState {
    TChats : TChat []
}

const initialState: TChatsState = { 
    TChats : []
};

const TChatReducer = (state = initialState, action: any):TChatsState => {
  switch (action.type) {
      case 'SET_TChat':
         const m : Message [] = []
          return { ...state, TChats: [TChatConstructor(m, action.payload)] };
      case 'ADD_MESSAGE':
        const TChats = _.cloneDeep( state.TChats) // object deep copy 
        const index = TChats.findIndex((c) => c.channel ===action.payload.channel)
        if(index != -1){
          const newMessages = TChats[index].messages.concat(action.payload)
          TChats[index].messages = newMessages
            return { ...state, TChats: TChats };
        }else {
          return state
        }
      default:
          return state;
  }
};

export const setTChat = (channel : string) => ({
  type: 'SET_TChat',
  payload: channel,
});

export const addMessage = (message: Message) => ({
  type: 'ADD_MESSAGE',
  payload: message,
});

export default TChatReducer;
