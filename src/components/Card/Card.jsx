import React from 'react'
import "./Card.scss"

const Card = ({beer}) => {

  console.log(beer)
  

  return (
    <div className='beer-card'>
      <h3 className='beer-card__name'>{beer.name}</h3>
      <div className="beer-card__image-container">
        <img className='beer-card__image' src={beer.image_url} alt="" />
      </div>
      <div className="beer-card__info">
        <p className='beer-card__info--abv'><span className='prefix'>ABV:</span> {beer.abv}%</p>
        <p className='beer-card__info--first-brewed'><span className='prefix'>First brewed:</span> {beer.first_brewed}</p>
        <p className='beer-card__info--ph'><span className='prefix'>ph:</span> {beer.ph}</p>
        <p className='beer-card__info--food-pairing'><span className='prefix'>Food Pairing:</span> {beer.food_pairing.join(", ")}</p>
        <p className='beer-card__info--description'><span className='prefix'>Description:</span> {beer.description}</p>
      </div>      
    </div>
  )
}

export default Card