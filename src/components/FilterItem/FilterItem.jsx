import React from 'react'
import "./FilterItem.scss"

const FilterItem = ({filterItems}) => {
  return filterItems.map((item) => {
    return (
        <div className="filter-item">
            <label>{item}</label>
            <input type="checkbox" />
        </div>
    )
})
}

export default FilterItem