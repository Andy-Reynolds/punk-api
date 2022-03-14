import React from 'react'
import "./Card.scss"

const Card = ({beer}) => {
  return (
    <div className='beer-card'>
      <div>beer image here</div>
      <h3>Name of beer</h3>
      <p>Lots of info about beer here</p>      
    </div>
  )
}

export default Card