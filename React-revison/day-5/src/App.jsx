import React, { useState } from 'react'

function App() {
  
  const [count, setCount] = useState(0)
  const increament= ()=>{
    return setCount(count+1)
  }
  const decreament= ()=>{
    if (count<=0) {
     alert("This Cant be Lower Than This Bro!!")  
  
    }
    else{

      return setCount(count-1)
    }
  }
  const reset = ()=>{
    return setCount(0)
  }
  return (
    <div>
      <h1>Count:{count}</h1>
           
      <button onClick={increament}>increament</button>
      <button onClick={reset}>reset</button>
      <button onClick={decreament}>decreament</button>
    </div>
  )
}

export default App