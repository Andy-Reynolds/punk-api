import React from 'react'
import FiltersList from '../FiltersList/FiltersList';
import SearchBox from '../SearchBox/SearchBox';
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className='navbar'>
      <SearchBox />
      <FiltersList />
    </div>
  )
}

export default Navbar