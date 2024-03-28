import { useState, useRef } from 'react';
import './App.css';
import Auth from './components/auth'
import Chat from './components/chat'
import Header from './components/header'

import {signOut} from 'firebase/auth'

import Cookies from 'universal-cookie'
import { auth } from './firebase';

const cookies = new Cookies()

function App() {

  const[isAuth, setIsAuth] = useState(cookies.get('auth-token'))
  const [room, setRoom] = useState(null)

  const roominput = useRef(null)

  async function signUserOut() {

    await signOut(auth)
    cookies.remove('auth-token')
    setIsAuth(false)
    setRoom(null)

  }
  
  if (!isAuth) {

    return (
      
      <>
      
        <Header signUserOut={signUserOut} isAuth={isAuth} />
        <Auth setIsAuth={setIsAuth}></Auth>

      </>

    );

  }

  return <> 

    <Header signUserOut={signUserOut} isAuth={isAuth} />
    {room ? (<Chat room={room} />) : 

    (<section className='room'>
      <label htmlFor="name">Enter room name:</label>
      <input type='text' id="name" ref={roominput} required></input>
      <button onClick={() => setRoom(roominput.current.value)}>Enter room</button>
    </section>)} 
  
  </>
}

export default App;
