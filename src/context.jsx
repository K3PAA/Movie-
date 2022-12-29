import React, { useState, useReducer, useContext, useEffect } from 'react'
import axios from 'axios'
import reducer from './reducer'

const AppContext = React.createContext()

let initialValues = {
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

  const openSearchbar = () => {
    dispatch({ type: 'OPEN_NAV' })
  }

  const closeSearchbar = () => {
    dispatch({ type: 'CLOSE_NAV' })
  }

  const changeTitle = (newTitle) => {
    dispatch({ type: 'CHANGE_TITLE', payload: newTitle })
  }

  useEffect(() => {
    if (state.title.length > 2) {
      getFilms()
    } else {
      dispatch({ type: 'CLEAR_CARDS' })
    }
  }, [state.title])

  return (
    <AppContext.Provider
      value={{ ...state, openSearchbar, closeSearchbar, changeTitle }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
