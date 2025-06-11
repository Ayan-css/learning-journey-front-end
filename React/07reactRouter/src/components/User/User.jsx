import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-blue-300 p-4 m-4 rounded-xl font-bold text-2xl outline-none'>User: {userid}</div>
  )
}

export default User