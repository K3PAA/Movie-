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

    console.log(films)
    return state
  }

  if (action.type === 'GET_FILMS_ERR') {
    console.log(action.payload)
    return state
  }
  return { ...state }
}

export default reducer
