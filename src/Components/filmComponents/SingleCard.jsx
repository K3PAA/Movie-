import React, { useState } from 'react'

import { BsXLg } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../context'

function SingleCard({
  name,
  id,
  backdrop_path,
  original_name,
  title,
  vote_average,
  original_title,
}) {
  const [isHovered, setIsHovered] = useState(false)
  const { removeItem } = useGlobalContext()

  return (
    <div className='relative my-4'>
      <img
        src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
        alt=''
        className='object-cover w-80 h-44'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      <div>
        <button
          className='text-4xl text-white absolute top-0 right-0 p-2 bg-orange-700'
          onClick={() => removeItem(id)}
        >
          <BsXLg />
        </button>
        <h1 className='absolute  -bottom-6 left-0 bg-orange-700 w-full py-1 text-center'>
          {name || original_name || title || original_title}
        </h1>
        <p className='absolute top-0 left-0 px-2 py-2 bg-orange-700 text-center'>
          {vote_average.toFixed(2)}
        </p>
      </div>
    </div>
  )
}

export default SingleCard
