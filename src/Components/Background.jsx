import React, { useEffect } from 'react'
import { useGlobalContext } from '../context'

function Background() {
  return (
    <div>
      <img
        src={true ? 'src/images/test.jpg' : 'src/images/test.jpg'}
        alt='background'
        className='w-full object-cover aspect-video h-[80vh]'
      />
    </div>
  )
}

export default Background
