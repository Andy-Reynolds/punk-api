import React from 'react'
import "./FilterItem.scss"

const FilterItem = ({filterItems, handleCheckboxes}) => {
  return filterItems.map((item, index) => {

    console.log(item);

    return (
        <div key={index} className="filter-item">
            <label className='filter-item__label'>{item}</label>
            <input className='filter-item__checkbox' type="checkbox" onChange={handleCheckboxes} value={index} />
        </div>
    )
})
}

export default FilterItem