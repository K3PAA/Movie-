const reducer = (state, action) => {
  if (action.type === 'OPEN_NAV') {
    return { ...state, searchbarOpen: true }
  }

  if (action.type === 'CLOSE_NAV') {
    return { ...state, searchbarOpen: false, title: '' }
  }

  if (action.type === 'CHANGE_TITLE') {
    return { ...state, title: action.payload }
  }

  if (action.type === 'GET_FILMS') {
    let numberOfFilms = 3

    if (state.width >= 663) numberOfFilms = 6

    if (state.width >= 991) numberOfFilms = 9

    const films = action.payload.data.results
      .filter((item) => item.media_type !== 'person')
      .filter((item) => item.backdrop_path || item.profile_path)
      .filter((item) => item.vote_average >= 3 || item.popularity >= 3)
      .filter((item, index) => index < numberOfFilms)

    console.log(films)
    return { ...state, films }
  }

  if (action.type === 'GET_FILMS_ERR') {
    console.log('Error: ' + action.payload)
    return state
  }

  if (action.type === 'CLEAR_CARDS') {
    return { ...state, films: [] }
  }

  if (action.type === 'HANDLE_RESIZE') {
    return { ...state, width: window.innerWidth }
  }

  if (action.type === 'ADD_FILM') {
    return {
      ...state,
      yourFilmsId: Array.from(new Set([...state.yourFilmsId, action.payload])),
    }
  }

  if (action.type === 'SINGLE_FILM') {
    return { ...state, yourList: [...state.yourList, action.payload] }
  }

  if (action.type === 'SINGLE_FILM_ERR') {
    console.log('Error: ' + action.payload)
    return { ...state }
  }
  return { ...state }
}

export default reducer
