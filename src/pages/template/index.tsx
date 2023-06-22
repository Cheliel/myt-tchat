import React from 'react';
import HomePage from '../homePage';
import Dashboard from '../dashboard';
import { Route, Routes } from 'react-router-dom';

const Template = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/dashboard' element={<Dashboard />} />
    </ Routes>
  );
}

export default Template;