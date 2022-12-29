import React from 'react'

import { BsPlusSquare, BsXLg } from 'react-icons/bs'
import { useGlobalContext } from '../context'
import SingleFilmToAdd from './filmComponents/SingleFilmToAdd'

function Search() {
  const { title, films, changeTitle, closeSearchbar } = useGlobalContext()

  return (
    <nav className='absolute inset-2 bg-sky-300'>
      <div className='flex p-4'>
        <div className='flex gap-2 grow'>
          <input
            type='text'
            className='bg-sky-500 px-5 py-3 text-2xl'
            value={title}
            onChange={(e) => changeTitle(e.target.value)}
          />
        </div>

        <BsXLg className='nav-icon' onClick={closeSearchbar} />
      </div>

      <div className='w-10/12 border-2 flex flex-wrap gap-6 justify-center'>
        {films.length === 0 ? (
          <h1>Type the name of the film in input field</h1>
        ) : (
          films.map((film) => {
            return <SingleFilmToAdd key={film.id} {...film} />
          })
        )}
      </div>
    </nav>
  )
}

export default Search
