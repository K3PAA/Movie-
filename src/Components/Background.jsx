import React, { useEffect } from 'react'
import { useGlobalContext } from '../context'
import { BsPlusSquare } from 'react-icons/bs'

function Background() {
  const { openSearchbar } = useGlobalContext()

  return (
    <div className='h-[30vh] w-full bg-teal-700 flex-row gap-5  '>
      <h1 className='py-12 text-white text-center text-3xl'>
        Click + icon to add new series
      </h1>

      <BsPlusSquare
        className='nav-icon rounded-md 	mx-auto transition-property: scale, opacity; duration-200  hover:scale-105, opacity-0; ease-in-out'
        onClick={openSearchbar}
      />
    </div>
  )
}

export default Background
