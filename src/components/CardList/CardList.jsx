import React from 'react'
import Card from '../Card/Card'
import "./CardList.scss"

const CardList = ({beers, searchedBeer}) => {
  return beers.filter(beer => beer.name.toLowerCase().includes(searchedBeer)).map((beer) => {
    return (
      <Card key={beer.id} beer={beer} />
    )
  })
}

export default CardList