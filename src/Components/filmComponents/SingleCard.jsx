import React from 'react'

import { BsXLg } from 'react-icons/bs'

function SingleCard() {
  return (
    <div>
      <img
        src='src/images/test.jpg'
        alt=''
        className='object-cover w-80 h-44'
      />
      <div>
        <button>
          <BsXLg />
        </button>
        <h1>Chainsaw Man</h1>
        {/* Link to */}
        <a href='#'>See more...</a>
      </div>
    </div>
  )
}

export default SingleCard
