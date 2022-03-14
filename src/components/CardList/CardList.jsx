import React from 'react'
import Card from '../Card/Card'
import "./CardList.scss"

const CardList = ({beers}) => {
  return beers.map((beer) => {
    return (
      <Card beer={beer} />
    )
  })
}

export default CardList