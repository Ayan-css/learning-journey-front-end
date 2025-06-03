import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('black')

  return (
  <div className='w-full h-screen duration-200 '
  style={{backgroundColor: color}}>
     <div className='fixed flex flex-wrap bottom-12 justify-center inset-x-0 px-2 '>
      <div className='flex flex-wrap gap-3 rounded-3xl justify-center px-4 py-2 bg-yellow-100'>
        <button 
        onClick={() => setColor('#fb2c36')
        }
        className='transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 outline-none px-4 py-1 rounded-full shadow-lg text-white bg-red-500' >Red</button>
        <button 
        onClick={() => setColor('oklch(72.3% 0.219 149.579)')
        }
        className='transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 outline-none px-4 py-1 rounded-full shadow-lg text-white bg-green-500' >Green</button>
        <button 
        onClick={() => setColor('oklch(79.5% 0.184 86.047)')
        }
        className='transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 outline-none px-4 py-1 rounded-full shadow-lg text-white bg-yellow-500' >Yellow</button>
        <button 
        onClick={() => setColor('oklch(62.3% 0.214 259.815)')
        }
        className='transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 outline-none px-4 py-1 rounded-full shadow-lg text-white bg-blue-500' >Blue</button>
        <button 
        onClick={() => setColor('#000')
        }
        className='transition delay-100 duration-400 ease-in-out hover:-translate-y-1 hover:scale-110 outline-none px-4 py-1 rounded-full shadow-lg text-white bg-black' >Black</button>
        <button 
        onClick={() => setColor('#fda5d5')
        }
        className='transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 outline-none px-4 py-1 rounded-full shadow-lg text-white bg-pink-300' >Pink</button>
      </div>
     </div>
  </div>
  )
}

export default App
