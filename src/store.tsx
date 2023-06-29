import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import connexionState from './reducer/connexionReducer';
import TChatReducer from './reducer/tchatsReducer';


const store = configureStore({
  reducer: {
    connexionState: connexionState,
    TChatState: TChatReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;

