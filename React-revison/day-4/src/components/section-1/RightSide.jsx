import React from 'react'
import RCard from './RCard'

function RightSide(props) {
  return (
    <div id='right' className='w-2/3 flex flex-nowrap shrink-0 overflow-x-auto gap-10'>
        {props.users.map(function (elem,idx) {
            
      return <RCard key={idx} img={elem.image} tag={elem.tag} />
        })}
      
    </div>
  )
}

export default RightSide