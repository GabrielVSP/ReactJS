import './App.css';
import useCounter from './useCounter';
import useFact from './useFact';
import useOpacity from './useOpacity';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {

  const [isVisible, toggle] = useOpacity()
  const [isVisible1, toggle1] = useOpacity()

  const queryClient = new QueryClient()

  return (

    <QueryClientProvider client={queryClient}>
      <div className="App">
      
        <button onClick={toggle}>
          {isVisible ? "Hide" : "Show"}
        </button>
        {isVisible && <h1>Hidden Text</h1>}

        <Cat />

        <Counter />

      </div>
    </QueryClientProvider>
  );
}

function Cat() {

  const { data, refetchData, isLoading } = useFact()

  if(isLoading) {
    return <h1>Loading...</h1>
  }

  return (

    <>
      <button onClick={refetchData}>
        Reload fact
      </button>
      
      <p>
        {data?.fact}
      </p>
    </>
  

  )

} 

function Counter() {

  const [num, increase, decrease, reset] = useCounter()

  return(

    <>
    
      <h2>{num}</h2>

      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
    
    </>

  )

}

export default App;
