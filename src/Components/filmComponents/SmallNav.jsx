import React from 'react'

function SmallNav() {
  return (
    <div>
      <span>
        Sort by :
        <select name='choice'>
          <option value='third' selected>
            A-Z
          </option>
          <option value='fourth'>Z-A</option>
          <option value='fifth'>Highiest score</option>
          <option value='sixth'>Lowest score</option>
        </select>
      </span>
    </div>
  )
}

export default SmallNav
