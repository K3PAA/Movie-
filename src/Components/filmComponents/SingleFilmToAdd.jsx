import React, { useState } from 'react'
import { useGlobalContext } from '../../context'

function SingleFilmToAdd({
  id,
  title,
  name,
  original_name,
  backdrop_path,
  media_type,
  profile_path,
  original_title,
}) {
  const { addToWatchlist } = useGlobalContext()
  const [isOver, setIsOver] = useState(false)

  return (
    <div className='bg-slate-800 p-2 relative rounded-md'>
      <h1 className='w-72  bg-slate-800 text-white'>
        {original_title || title || name || original_name}
      </h1>
      <img
        src={`https://image.tmdb.org/t/p/w500/${backdrop_path || profile_path}`}
        alt={original_title || title || name || original_name}
        className='object-cover object-center w-72 h-40'
        onMouseEnter={() => setIsOver(true)}
        onMouseLeave={() => setIsOver(false)}
      />
      {isOver && (
        <div className='absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 '>
          <button
            onMouseEnter={() => setIsOver(true)}
            onMouseLeave={() => setIsOver(false)}
            className='text-white bg-black p-4 rounded-md'
            onClick={() => addToWatchlist(id, media_type)}
          >
            add to watchlist
          </button>
        </div>
      )}
    </div>
  )
}

export default SingleFilmToAdd
