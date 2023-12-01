import React from 'react';
import './App.css';

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './store';

import Home from './pages/home';
import Contact from './pages/contact';
import Login from './pages/login';

function App() {
  return (

    <div className="App">
      
      <Provider store={store}> 
        <Router>

          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/contact">Contact</Link>

          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/contact" element={<Contact />}/>
            <Route path="*" element={<h1>Page not found</h1>}/>
          </Routes>
        </Router>
      </Provider>

    </div>
  );
}

export default App;
