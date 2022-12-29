import React from 'react'

function SingleFilmToAdd({
  id,
  title,
  name,
  original_name,
  backdrop_path,
  profile_path,
  popularity,
  vote_average,
  original_title,
}) {
  return (
    <div className='bg-indigo-500'>
      <h1>{original_title || title || name || original_name}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500/${backdrop_path || profile_path}`}
        alt={original_title || title || name || original_name}
        className='object-cover object-center w-80 h-52'
      />
    </div>
  )
}

export default SingleFilmToAdd
