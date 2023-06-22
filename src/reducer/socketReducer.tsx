// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { SocketHandeler } from '../utils/socket/SoketHandeler';
// import { wsHandeler } from '../utils/socket/models';
 import { WSConnecion } from '../utils/socket/models';




// const initialState: wsHandeler = { 
//     wsHandeler: new SocketHandeler()
// };

// export const socket = createSlice({
//   name: 'socketState',
//   initialState: initialState,
//   reducers: {
//     connect : (state , action: PayloadAction<WSConnecion>) => {
//         state.wsHandeler?.connect(action.payload)
//     },
//     setWsHandeler : (state) => {
//       return ({ ...state, wsHandeler :  new SocketHandeler() }); 
//    },

//   }
// });


// export const { connect, setWsHandeler } = socket.actions;
// export default socket.reducer;