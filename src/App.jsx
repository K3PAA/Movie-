import React from 'react'

import Background from './Components/Background'

import Films from './Components/Films'
import Nav from './Components/Nav'

function App() {
  return (
    <div>
      <header className='py-4'>
        <Nav />
      </header>
      <Background />
      <Films />
    </div>
  )
}

export default App
