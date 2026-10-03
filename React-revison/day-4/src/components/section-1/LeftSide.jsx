import React from 'react'

import HeroText from './HeroText'
import Arrow from './Arrow'
function LeftSide() {
  return (
    <>
    <div className='h-full w-1/3 flex flex-col justify-between px-20 '>
       <HeroText />
       <Arrow />   
    </div>
    </>
  )
}

export default LeftSide 