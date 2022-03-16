import React from 'react';
import CardList from '../CardList/CardList';
import "./Main.scss";

const Main = ({filteredBeers, searchedBeer}) => {
  return (
    <div className='main'>
      <CardList searchedBeer={searchedBeer} filteredBeers={filteredBeers} />
    </div>
  )
}

export default Main