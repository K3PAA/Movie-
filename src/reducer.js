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
    console.log(state.yourList)

    return { ...state, width: window.innerWidth }
  }

  if (action.type === 'ADD_FILM') {
    const filmsArr = []
    const newItem = action.payload
    const items = state.yourFilmsId

    state.yourList = []

    items.push(newItem)

    for (let i = 0; i < items.length; i++) {
      let is = false
      for (let y = i + 1; y < items.length; y++) {
        if (items[i].id === items[y].id) is = true
      }
      if (!is) filmsArr.push(items[i])
    }

    window.localStorage.setItem('ADDED_FILMS_IDS', JSON.stringify(filmsArr))

    return {
      ...state,
      searchbarOpen: false,
      yourFilmsId: filmsArr,
      title: '',
    }
  }

  if (action.type === 'SINGLE_FILM') {
    let card = action.payload.data

    card.display = true

    return { ...state, yourList: [...state.yourList, card] }
  }

  if (action.type === 'SINGLE_FILM_ERR') {
    console.log('Error: ' + action.payload)
    return { ...state }
  }

  if (action.type === 'GET_INITIAL_DATA') {
    const initialData = action.payload

    return { ...state, yourFilmsId: initialData }
  }

  if (action.type === 'REMOVE_ITEM') {
    const newFilms = state.yourFilmsId.filter((item) => {
      return item.id !== action.payload
    })

    window.localStorage.setItem('ADDED_FILMS_IDS', JSON.stringify(newFilms))

    return {
      ...state,
      yourFilmsId: newFilms,
      yourList: [],
    }
  }

  if (action.type === 'CHANGE_SORTING_ORDER') {
    window.localStorage.setItem('SORTING_ORDER', JSON.stringify(action.payload))

    return { ...state, sortBy: action.payload }
  }

  if (action.type === 'SORTING_FUNCTION') {
    function byNameA(a, b) {
      if ((a.name || a.title) > (b.name || b.title)) {
        return 1
      } else if ((a.name || a.title) < (b.name || b.title)) {
        return -1
      } else {
        return 0
      }
    }

    function byNameZ(a, b) {
      if ((a.name || a.title) < (b.name || b.title)) {
        return 1
      } else if ((a.name || a.title) > (b.name || b.title)) {
        return -1
      } else {
        return 0
      }
    }

    if (state.sortBy === 'A-Z') {
      state.yourList.sort(byNameA)
    } else if (state.sortBy === 'Z-A') state.yourList.sort(byNameZ)
    else if (state.sortBy === 'Score-Best')
      state.yourList.sort((a, b) => b.vote_average - a.vote_average)
    else if (state.sortBy === 'Score-Worst')
      state.yourList.sort((a, b) => a.vote_average - b.vote_average)

    return { ...state }
  }

  if (action.type === 'HANDLE_QUERY') {
    return { ...state, queryText: action.payload }
  }

  if (action.type === 'QUERY_ONLY') {
    state.yourList.map((item) => {
      const name = item.name || item.title

      if (!state.queryText) {
        item.display = true
      } else if (name.toUpperCase().includes(state.queryText.toUpperCase())) {
        item.display = true
      } else item.display = false
    })
    return { ...state }
  }

  return { ...state }
}

export default reducer
