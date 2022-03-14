import React from 'react'
import FilterItem from '../FilterItem/FilterItem'
import "./FiltersList.scss"

const FiltersList = () => {

  const filterItems = ["High ABV (> 6.0%)", "Classic Range", "Acidic (ph < 4)"]

  return (
    <div className='filters-list'>
      <FilterItem filterItems={filterItems} />
    </div>
  )
}

export default FiltersList