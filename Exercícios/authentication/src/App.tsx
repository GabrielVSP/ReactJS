import React from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from './pages/main/main';
import Login from './pages/login';
import Createpost from './pages/createpost/createpost';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">

      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

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
