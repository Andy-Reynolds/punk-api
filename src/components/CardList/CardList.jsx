import React from 'react'
import Card from '../Card/Card'
import "./CardList.scss"

const CardList = ({filteredBeers, searchedBeer}) => {
  return filteredBeers.filter(beer => beer.name.toLowerCase().includes(searchedBeer)).map((beer) => {
    return (
      <Card key={beer.id} beer={beer} />
    )
  })
}

export default CardList