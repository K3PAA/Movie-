import React from 'react'
import { useGlobalContext } from '../../context'

function SmallNav() {
  const { sortBy, handleSorting } = useGlobalContext()

  return (
    <div className='bg-slate-700 py-4 mx-auto w-[500px]'>
      <div className='flex'>
        <h1 className='text-[30px] text-white'>Sort by :</h1>
        <select
          name='sorting'
          value={sortBy}
          onChange={(e) => handleSorting(e.target.value)}
          className='shadow-md text-lg py-4 px-2 bg-cyan-500 border-0 pr-8 ml-5'
        >
          <option value='A-Z'>A-Z</option>
          <option value='Z-A'>Z-A</option>
          <option value='Score-Best'>Highiest score</option>
          <option value='Score-Worst'>Lowest score</option>
        </select>
      </div>
    </div>
  )
}

export default SmallNav
