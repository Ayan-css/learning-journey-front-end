import React from 'react'
import RCContent from './RCContent'

function RCard(props) {
  return (
    <div className='h-full overflow-hidden relative w-60 rounded-4xl'>
        <img className='object-cover h-full' src={props.img} alt="" />
       <RCContent tag={props.tag} />
    </div>
  )
}

export default RCard