import React, { useState } from 'react';
import './App.css';
import Counter from './counter';
import Button from './components/button';

function App() {

  const [msg, setMsg] = useState('I hate jestjs')

  return (

    <div className="App">
      
      <h1>Hello, world!</h1>
      <p>{msg}</p>
      <Button disabled={false} onClick={() => setMsg('New message')}>Click me</Button>

    </div>
  );
}

export default App;
