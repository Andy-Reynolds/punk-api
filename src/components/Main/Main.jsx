import React from 'react';
import CardList from '../CardList/CardList';
import "./Main.scss";

const Main = ({beers, searchedBeer}) => {
  return (
    <div className='main'>
      <CardList searchedBeer={searchedBeer} beers={beers} />
    </div>
  )
}

export default Main