import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(5)
  // let counter = 5
  const addValue = () =>{    
    // counter = counter + 1;
    setCounter(counter + 1)
    console.log('clicked', counter);
    // setCounter(counter);
  }
  const removeValue = () =>{ 
    if (counter >! 0) {
      setCounter(counter - 1)
    console.log('clicked', counter);
    } else {
      setCounter(0)
    }
    // counter = counter + 1;
    
    // setCounter(counter);
  }
  return (
    <>
    <h1>chai or react</h1>
    <h2>counter value: {counter}</h2>
    <button
    onClick={addValue}>Add value</button>
    <br />
    <button
    onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
