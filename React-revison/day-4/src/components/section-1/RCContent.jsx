import React from 'react'
import { MoveRight } from "lucide-react";
function RCContent(props) {
  return (
     <div className='absolute top-0 left-0 h-full w-full  p-6 flex flex-col justify-between'>
             <h1 className='bg-white text-2xl font-bold rounded-full h-10 w-10 flex justify-center item-center'>1</h1>
             <div>
                <p className='text-lg leading-normal text-white mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam</p>
                <div className='flex justify-between'>
                    <button className='bg-blue-600 text-white font-medium px-7 py-3 rounded-full '>{props.tag}</button>
                    <button className='bg-blue-600 text-white font-medium px-4 py-3 rounded-full '><MoveRight size={20} strokeWidth={3} /></button>
                </div>
             </div>
        </div>
  )
}

export default RCContent