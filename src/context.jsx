import React, { useState, useReducer, useContext, useEffect } from 'react'
import axios from 'axios'
import reducer from './reducer'

const AppContext = React.createContext()

let initialValues = {
  width: window.innerWidth,
  yourList: [],
  yourFilmsId: [],
  films: [],
  title: '',
  searchbarOpen: false,
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValues)

  const getFilms = () => {
    const api_key = 'ae42f8ca15dba712eab0c165b189395d'
    const title = state.title
    axios
      .get(
        `https://api.themoviedb.org/3/search/multi?api_key=${api_key}&query=${title}`
      )
      .then((data) => {
        dispatch({ type: 'GET_FILMS', payload: data })
      })
      .catch((err) => {
        dispatch({ type: 'GET_FILMS_ERR', payload: err })
      })
  }

  const getSingleFilm = () => {
    const api_key = 'ae42f8ca15dba712eab0c165b189395d'
    const filmsId = state.yourFilmsId

    filmsId.map((item) => {
      const { id, type } = item

      axios
        .get(`https://api.themoviedb.org/3/${type}/${id}?api_key=${api_key}`)
        .then((data) => {
          dispatch({ type: 'SINGLE_FILM', payload: data })
        })
        .catch((err) => {
          console.log(err)
          dispatch({ type: 'SINGLE_FILM_ERR', payload: err })
        })
    })
  }

  const openSearchbar = () => {
    dispatch({ type: 'OPEN_NAV' })
  }

  const closeSearchbar = () => {
    dispatch({ type: 'CLOSE_NAV' })
  }

  const changeTitle = (newTitle) => {
    dispatch({ type: 'CHANGE_TITLE', payload: newTitle })
  }

  const handleResize = () => {
    dispatch({ type: 'HANDLE_RESIZE' })
  }

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id })
  }

  const addToWatchlist = (id, type) => {
    dispatch({ type: 'ADD_FILM', payload: { id, type } })
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (state.title.length > 2) {
      getFilms()
    } else {
      dispatch({ type: 'CLEAR_CARDS' })
    }
  }, [state.title])

  useEffect(() => {
    if (state.yourFilmsId) {
      getSingleFilm()
    }
  }, [state.yourFilmsId])

  useEffect(() => {
    const getFilmsId = JSON.parse(
      window.localStorage.getItem('ADDED_FILMS_IDS')
    )

    if (getFilmsId !== null)
      dispatch({ type: 'GET_INITIAL_DATA', payload: getFilmsId })
  }, [])

  return (
    <AppContext.Provider
      value={{
        ...state,
        openSearchbar,
        closeSearchbar,
        changeTitle,
        addToWatchlist,
        removeItem,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
