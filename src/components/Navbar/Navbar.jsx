import React from 'react'
import FiltersList from '../FiltersList/FiltersList';
import SearchBox from '../SearchBox/SearchBox';
import "./Navbar.scss";

const Navbar = ({handleSearchInput, handleCheckboxes}) => {
  return (
    <div className='navbar'>
      <h1 className='heading'>Punk API</h1>
      <SearchBox handleSearchInput={handleSearchInput} />
      <FiltersList handleCheckboxes={handleCheckboxes} />
    </div>
  )
}

export default Navbar