import React from 'react'

function SmallNav() {
  return (
    <div>
      <span>
        Category :
        <select name='choice'>
          <option value='first'>First Value</option>
          <option value='second' selected>
            Second Value
          </option>
          <option value='third'>Third Value</option>
        </select>
      </span>

      <span>
        Sort by :
        <select name='choice'>
          <option value='first'>most popular</option>
          <option value='second'>least popular</option>
          <option value='first'>most popular</option>
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
