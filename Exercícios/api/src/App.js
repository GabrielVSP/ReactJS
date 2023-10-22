import { useState } from 'react';
import './App.css';

import Axios from 'axios';
import { useEffect } from 'react';

function App() {

  const [catFact, setCatFact] = useState()
  const [name, setName] = useState('')
  const [age, setAge] = useState({})
  const [execuse, setExecuse] = useState()

  function showFact() {

    Axios.get('https://catfact.ninja/fact').then((res) => {

      setCatFact(res.data.fact)

    })

  }

  function predictAge() {

    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {

      setAge(res.data)

    })

  }

  function generateExecuse(e) {

    let key = e.target.name

    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${key}`).then((res) => {

      setExecuse(res.data[0])

    })

  }

  useEffect(() => {

    showFact()

  }, [])

  return (

    <div className="App">
      
      <h2>Gerar Fatos sobre Gatos</h2>

      <button onClick={showFact}>Generate Cat Fact</button>
      <p> {catFact} </p>

      <h2>Adivinhar idade</h2>

      <input placeholder='Name' onChange={(e) => setName(e.target.value)}></input>
      <button onClick={predictAge}>Predict Age</button>

      <p>{age?.name} your predicted age is: {age?.age}</p>

      <h2>Gerar desculpa</h2>

      <button name='family' onClick={(e) => generateExecuse(e)}>Family</button>
      <button name='party' onClick={(e) => generateExecuse(e)}>Party</button>
      <button name='gaming' onClick={(e) => generateExecuse(e)}>Gaming</button>

      <p>{execuse?.excuse}</p>

    </div>

  );
}

export default App;
