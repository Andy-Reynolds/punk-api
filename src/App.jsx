import React from 'react';
import './App.scss';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import beers from './data/beers';
import {useState} from "react";

function App() {

  const [searchedBeer, setSearchedBeer] = useState("")

  const handleSearchInput = (event) => {
    const beerSearch = event.target.value;
    const beerSearchToLowerCase = beerSearch.toLowerCase();
    setSearchedBeer(beerSearchToLowerCase);
  }

  //  TODO: I can...
  // 1. Create three different functions (one for each checkbox) that toggles between the array that is being searched through
  // 2. Have one function that adds an additional search query depending on the box that is checked. e.g. to filter all beers that inlcude >6% 

  const handleCheckboxes = (event) => {
    console.log("working");
    console.log(event);
    console.log(event.target.value);
    console.log(event.target.checked);

    // If value is 0, then run abv function
    // If value is 1, then run classic function
    // If value is 2, then run acidic function

  }


  return (
    <div className="App">
      <Navbar className="navbar" handleSearchInput={handleSearchInput} handleCheckboxes={handleCheckboxes} />
      <Main className="main" searchedBeer={searchedBeer} beers={beers} />
    </div>
  );
}

export default App;
