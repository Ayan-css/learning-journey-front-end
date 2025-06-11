import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData()

   /*
   we have avoide this for optimization
   const [data, setData] = useState({})
    useEffect(() => {
     fetch('https://api.github.com/users/Ayan-css')
     .then(response => response.json())
     .then(data => {
        console.log(data)
        setData(data)
     })
    }, [])*/
    

  return (
    <div className='text-center m-4 bg-black font-bold text-orange-600  p-4 text-3xl'>Github Follower: {data.following}
    <img src={data.avatar_url} alt="github image" className=' w-32 mx-auto ' />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/Ayan-css')
    return response.json()
}