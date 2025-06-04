import { useState, useCallback ,useEffect, useRef} from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //ref hook
  const passwordRef = useRef(null)
  const ToClipboardcopyPassword = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password]
  )
  const passwordGenerator = useCallback(() => {
    let pass = ''
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) string += "0123456789"
    if (characterAllowed) string += "!@#$%^&*()_+-=[]{}|;:',.<>/?`~"

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * string.length + 1)
      pass += string.charAt(char)
    }

    setPassword(pass)
  }
  , [length,numberAllowed,characterAllowed,setPassword])

  useEffect(() => {
    passwordGenerator()
  },[length, numberAllowed, characterAllowed,passwordGenerator]
  )
  return (
 <>
 <div className='w-full max-w-md mx-auto  shadow-md rounded-lg px-4 py-0.5 my-8 font-bold text-orange-400 bg-gray-700'>
 <h1 className='text-xl text-amber-100 my-3 text-center font-bold'>Password Generator</h1>
  <div className='flex  rounded-lg overflow-hidden mb-4'>
    <input type="text"
    value={password}
    className='outline-none bg-white text-center w-full py-1 px-3'
    placeholder='password'
    readOnly
    ref={passwordRef}
    />
    <button 
    onClick={ToClipboardcopyPassword}
    type="button" class="text-white bg-blue-700 hover:bg-blue-800 shrink-0 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-3 py-0.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">copy</button>
  </div>
  <div className='flex text-sm py-1 gap-x-2 text-blue-500 font-bold '>
    <div className='flex text-center gap-x-1'>
      <input
      min={6}
      max={100}
      value={length}
      onChange={(e) => {
        setLength(e.target.value)
      }
      }
      className='cursor-pointer'
      type="range"  />
      <label >Length : {length}</label>
    </div>
    <div className='flex text-center gap-x-1'>
      <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" 
      onChange={() => {
        setNumberAllowed((prev) => !prev
        )
      }
      }/>
      <label htmlFor="numberInput">Number</label>
    </div>
    <div className='flex text-center  gap-x-1'>
      <input type="checkbox" defaultChecked={characterAllowed} id="characterInput" 
      onChange={() => {
        setCharacterAllowed((prev) => !prev
        )
      }
      }/>
      <label htmlFor="characterInput">Character</label>
    </div>
  </div>
 </div>
 </>
  )
}

export default App
