import { useState } from 'react'

import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  
{
    
  }
  return (
    <UserContextProvider>
      <h1>React with chai is important </h1>
      <Profile />
      <Login />
          </UserContextProvider>
  )
}

export default App
