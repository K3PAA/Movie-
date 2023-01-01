import React, { useState } from 'react'

import { BsXLg } from 'react-icons/bs'

function SingleCard({
  name,
  backdrop_path,
  original_name,
  title,
  vote_average,
  original_title,
}) {
  const [isHovered, setIsHovered] = useState(false)

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
        <button className='text-4xl text-white absolute top-0 right-0 p-2 bg-orange-700'>
          <BsXLg />
        </button>
        <h1 className='absolute  -bottom-6 left-0 bg-orange-700 w-full py-1 text-center'>
          {name || original_name || title || original_title}
        </h1>
        <p className='absolute top-0 left-0 px-2 py-2 bg-orange-700 text-center'>
          {vote_average.toFixed(2)}
        </p>
        {/* Link to */}
        {isHovered && (
          <a
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            href='#'
            className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded px-2 py-2 text-white bg-black'
          >
            See more
          </a>
        )}
      </div>
    </div>
  )
}

export default SingleCard
