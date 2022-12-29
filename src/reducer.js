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
    const films = action.payload.data.results
      .filter((item) => item.media_type !== 'person')
      .filter((item) => item.backdrop_path || item.profile_path)
      .filter((item) => item.vote_average >= 3 || item.popularity >= 3)
      .filter((item, index) => index < 9)

    console.log(action.payload.data.results)
    console.log(films)

    return { ...state, films }
  }

  if (action.type === 'GET_FILMS_ERR') {
    console.log(action.payload)
    return state
  }

  if (action.type === 'CLEAR_CARDS') {
    return { ...state, films: [] }
  }
  return { ...state }
}

export default reducer
