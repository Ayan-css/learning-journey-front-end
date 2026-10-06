import React from 'react'
import { useState } from 'react'

function App() {
  const [title, setTitle] = useState("")
  const submitHandler = (e)=>{
    e.preventDefault()
    console.log("form has been submitted ")
    setTitle('')
  }
  return (

    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
      <input type="text" value={title} onChange={(e)=>{
        setTitle(e.target.value)
      }} placeholder='Enter your name'/>
      <button>Submit</button>
      </form>
    </div>
  )
}

export default App