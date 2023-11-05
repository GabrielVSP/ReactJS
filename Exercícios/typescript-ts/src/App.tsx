import React from 'react';
import Person from './person';
import {Country} from './person'
import './App.css';

function App() {

  function getAge(name: string): number {

    return 69

  }

  return (

    <div className="App">
      
      <Person 
        
          namee="Gabriel"
          email="gabriel@gamil.com"
          age={16}
          isMarried={false}
          friends={
              {namee: 'm',
              email: 'mek@ha.com',
              age: 12,
              isMarried: true,}
          }
          country={Country.Canada}
          
        />

    </div>

  );
}

export default App;
