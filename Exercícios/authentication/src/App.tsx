import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from './pages/main/main';
import Login from './pages/login';
import Createpost from './pages/createpost/createpost';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App flex">

      <Router>

        <Navbar />

        <Routes>

          <Route path='/'  element={<Main />}/>
          <Route path='/login'  element={<Login />}/>
          <Route path='/createpost'  element={<Createpost />}/>

        </Routes>

      </Router>

    </div>
  );
}

export default App;
