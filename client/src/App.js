import React from 'react';
import Login from './components/users/Login';
import LogReg from './views/LogReg';
import Register from './components/users/Register';
import Main from './views/Main';
import Dash from './components/pages/Dash';
import Age from './components/pages/AgeVerify';
import Library from './components/pages/Library';
import NewEntry from './components/pages/NewEntry';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/logReg" element={<LogReg />} />
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dash" element={<Dash />} />
        <Route path="/age" element={<Age />} />
        <Route path="/library" element={<Library />} />
        <Route path="/newEntry" element={<NewEntry />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
