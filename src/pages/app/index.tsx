import React from 'react';
import Template from '../template';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Template />
      </div>
    </BrowserRouter>
  );
}

export default App;