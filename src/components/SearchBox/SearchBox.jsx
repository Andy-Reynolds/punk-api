import React from 'react'
import "./SearchBox.scss"

const SearchBox = ({handleSearchInput}) => {
  return (
    <div className='searchbox'>
      <input className='searchbox__input' type="text" placeholder='Search for beers...' onChange={handleSearchInput} />
    </div>
  )
}

export default SearchBox