import './App.css';
import Person from './person';

function App() {
  return (
    <div className="App">
      
        <Person 
        
          name="Gabriel"
          email="gabriel@gamil.com"
          age={16}
          isMarried={false}
          friends={['Melk', 'Leo']}
          
        />

    </div>
  );
}

export default App;
