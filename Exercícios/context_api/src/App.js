import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home';
import Contact from './pages/contact';
import Menu from './pages/menu';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState, createContext } from 'react';

export const AppContext = createContext()

function App() {

  const [username, setUsername] = useState('Gabriel')

  const queryClient = new QueryClient({defaultOptions: {

    queries: {
      refetchOnWindowFocus: false,
    }

  } })

  return (

    <div className="App">
      
      <QueryClientProvider client={queryClient}>
        <AppContext.Provider value={{username, setUsername}}>
          <Router>
              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/contact' element={<Contact />} />
                <Route exact path='/menu' element={<Menu />} />
                <Route exact path='*' element={<h1>Page not found</h1>} />
        
              </Routes>
          </Router>
        </AppContext.Provider>
      </QueryClientProvider>

    </div>

  );
}

export default App;
