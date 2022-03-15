import React from 'react';
import './App.scss';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import beers from './data/beers';
// import {useState} from "react";

function App() {

  const handleSearchInput = (event) => {
    console.log(event.target.value);
  }


  return (
    <div className="App">
      <Navbar className="navbar" handleSearchInput={handleSearchInput} />
      <Main className="main" beers={beers} />
    </div>
  );
}

export default App;
