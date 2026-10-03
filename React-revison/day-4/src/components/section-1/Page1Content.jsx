import React from 'react'
import LeftSide from './LeftSide'
import RightSide from './RightSide'

function Page1Content(props) {

  return (
  
    <div className='py-10 px-8 flex item-center'>

    <LeftSide />
    <RightSide users={props.users} />
    </div>
   
  )
}

export default Page1Content