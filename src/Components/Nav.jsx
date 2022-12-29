import React from 'react'
import {
  BsSearch,
  BsPlusSquare,
  BsFillBrightnessHighFill,
  BsFillBrightnessAltLowFill,
} from 'react-icons/bs'

import { useGlobalContext } from '../context'
import Search from './Search'

function Nav() {
  const { openSearchbar, searchbarOpen } = useGlobalContext()

  return (
    <nav className='flex py-4 px-4 border-y-2 border-sky-400'>
      <div className='flex gap-2 grow'>
        <input type='text' className='bg-sky-500 px-5 py-3 text-2xl' />
        <BsSearch className='nav-icon transition-property: scale; duration-500 hover:scale-110 ' />
      </div>
      <BsPlusSquare
        className='nav-icon rounded-md 	transition-property: color, scale; duration-500 hover:bg-sky-700 hover:scale-105 ease-in-out'
        onClick={openSearchbar}
      />
      <BsFillBrightnessHighFill className='ml-2 nav-icon' />
      {searchbarOpen && <Search />}
    </nav>
  )
}

export default Nav
