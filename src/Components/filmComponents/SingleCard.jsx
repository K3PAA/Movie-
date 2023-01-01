import React from 'react'

import { BsXLg } from 'react-icons/bs'

function SingleCard({
  name,
  backdrop_path,
  original_name,
  title,
  vote_average,
  original_title,
}) {
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
        alt=''
        className='object-cover w-80 h-44'
      />
      <div>
        <button>
          <BsXLg />
        </button>
        <h1>{name || original_name || title || original_title}</h1>
        <p>{vote_average}</p>
        {/* Link to */}
        <a href='#'>See more...</a>
      </div>
    </div>
  )
}

export default SingleCard
