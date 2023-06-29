import React from 'react';
import Template from '../template';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppContaner } from './styles';


const App = () => {
  return (
    <BrowserRouter>
      <AppContaner >
        <Template />
      </AppContaner>
    </BrowserRouter>
  );
}

export default App;