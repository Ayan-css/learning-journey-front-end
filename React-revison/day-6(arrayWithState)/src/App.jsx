import React, { useState } from 'react'

function App() {
  const [array, setArray] = useState([1,2,3,5,7,8,12])
  const [objet, setObjet] = useState({user:'affan',age:20})
  const [count, setCount] = useState(0)
  const btnClicked= ()=>{
    const NewArray = [...array]
    NewArray.push(90)

    setArray(NewArray)
  }
  const objClciked = ()=>{
    setObjet(prev=>({
      ...prev,age:40,user:"faisal"
    }))
  }
  const batchUpdate = ()=>{
    setCount(prev => (prev +1))
    setCount(prev => (prev +1))
    setCount(prev => (prev +1))
  }
  const increment = ()=>{
    setCount(count+1)
  }

  return (
    <div>
      <div>
      <h1>This is A user {array}</h1>
      <button onClick={btnClicked}>Click me to See Something</button>
    </div>
      <br />
    <div>
      <h2>This is AN object but with different technique</h2>
      <h1 style={{textTransform:'uppercase' }}>user: {objet.user}, Age {objet.age}</h1>
      <button onClick={objClciked}>tada</button>
    </div>
    <div>
      <h2>Batch Update</h2>
      <h2>
        Counter: {count}
      </h2>
    <button onClick={increment}>Click me</button>
      <button onClick={batchUpdate}>Batch Click Me</button>
    </div>
    </div>

    
  )
}

export default App  