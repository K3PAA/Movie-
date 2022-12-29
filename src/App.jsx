import React from 'react'
import Background from './Components/Background'
import Films from './Components/Films'
import Nav from './Components/Nav'

function App() {
  return (
    <>
      <header className='py-4'>
        <Nav />
      </header>
      <Background />
      <Films />
    </>
  )
}

export default App
