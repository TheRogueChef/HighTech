import React from 'react';
import Login from './components/users/Login';
import LogReg from './views/LogReg';
import Register from './components/users/Register';
import Main from './views/Main';
import Dash from './components/pages/Dash';
import Age from './components/pages/AgeVerify';
import Library from './components/pages/Library';
import NewEntry from './components/pages/NewEntry';
import AllEvents from './components/pages/EventDisplayAll';
import OneEvent from './components/pages/EventDisplayOne';
import NewEvent from './components/pages/NewEvent';
import UpdateEvent from './components/pages/EventUpdate';
import EntryDisplayOne from './components/pages/EntryDisplayOne';
import Shops from './components/pages/shops';
import Reviews from './components/pages/reviews';
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
        <Route path="/oneEntry/:id" element={<EntryDisplayOne />} />
        <Route path="/shops" element={<Shops />} />
        <Route path="/updateEntry/:id" element={<Reviews />} />
        <Route path="/events" element={<AllEvents />} />
        <Route path="/oneEvent/:id" element={<OneEvent />} />
        <Route path="/newEvent" element={<NewEvent />} />
        <Route path="/updateEvent/:id" element={<UpdateEvent />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
