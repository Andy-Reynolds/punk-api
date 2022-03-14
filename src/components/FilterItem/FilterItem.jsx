import React from 'react'
import "./FilterItem.scss"

const FilterItem = ({filterItems}) => {
  return filterItems.map((item) => {
    return (
        <div className="filter-item">
            <label className='filter-item__label'>{item}</label>
            <input className='filter-item__checkbox' type="checkbox" />
        </div>
    )
})
}

export default FilterItem