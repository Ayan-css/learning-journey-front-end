import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


/*we can create our own react element by using following methhod */
const anotheruser = ' chai or react'
const ReactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'clcik me to visit google',
  anotheruser
)
createRoot(document.getElementById('root')).render(
   <>
   {ReactElement}
   <App />
   {/* if we are combining two or more element then we have to use "{}" to run variables if we dont do this then it will be considerd as html */}
   </>
  
)
