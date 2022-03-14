import React from 'react';
import CardList from '../CardList/CardList';
import "./Main.scss";

const Main = ({beers}) => {
  return (
    <div className='main'>
      <CardList beers={beers} />
    </div>
  )
}

export default Main