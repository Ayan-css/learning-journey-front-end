import React, { useState } from 'react'

function App() {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler =(e)=>{
    e.preventDefault()
   
    const taskCopy =[...task]
    taskCopy.push({title,details})
    setTask(taskCopy)
    console.log(task);
    
    setTitle("")
    setDetails('')
  
    
  }
  return (
    <div className="h-screen lg:flex bg-black text-white">
      <form onSubmit={(e)=>{
          submitHandler(e)
        }} className='flex lg:w-1/2 item-start gap-10 flex-col p-10'>
        

        <input value={title}  type="text" placeholder='Heading' className='px-5 py-2 font-medium outline-none w-full border-2 rounded' onChange={(e)=>{
          setTitle(e.target.value)
        }}/>
        <textarea type="text" placeholder='Write details' className='px-5 py-2 font-medium outline-none w-full h-32 border-2 rounded' value={details} onChange={(e)=>{
          setDetails(e.target.value)
        }}/>
        <button  className='bg-white w-full text-black font-medium outline-none px-5 py-2 rounded '>Add Note</button>
        
      </form>
        <div className=' lg:w-1/2 flex-wrap p-10'>
        <h1 className='font-bold'>Your Notes</h1>
        <div className='h-full flex mt-5 items-start justify-start flex-wrap gap-5  overflow-auto'>
          {task.map(function(elem, idx){

          return <div key={idx} className='h-70 w-65 rounded-2xl bg-[url(https://pngtree.com/freepng/legal-pad-isolated-on-transparent-background_20688991.html)] bg-cover bg-center text-black'>
            <h3 className='text-center leading-tight font-black uppercase'>{elem.title}</h3>
            <p className='px-3 pt-2 leading-tight font-bold h-full overflow-auto text-gray-600'>{elem.details}</p>
          </div>
          })}
          
          
        </div>
        </div>
    </div>
  )
}

export default App