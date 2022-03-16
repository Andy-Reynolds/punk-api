import React from 'react';
import './App.scss';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import beers from './data/beers';
import {useState} from "react";

function App() {

  const [searchedBeer, setSearchedBeer] = useState("");
  const [filteredBeers, setFilteredBeers] = useState(beers);

  const handleSearchInput = (event) => {
    const beerSearch = event.target.value;
    const beerSearchToLowerCase = beerSearch.toLowerCase();
    setSearchedBeer(beerSearchToLowerCase);
    console.log(searchedBeer);
  }

  //  TODO: I can...
  // 1. Create three different functions (one for each checkbox) that toggles between the array that is being searched through
  // 2. Have one function that adds an additional search query depending on the box that is checked. e.g. to filter all beers that inlcude >6% 

  const handleCheckboxes = (event) => {
    const checkboxValue = event.target.value;
    const isChecked = event.target.checked;
    console.log(checkboxValue);
    console.log(isChecked);

    // If value is 0, then run abv function
    // If value is 1, then run classic function
    // If value is 2, then run acidic function

    if (checkboxValue === 0) {
      console.log("this is the abv checkbox")
      if (isChecked) {
        console.log("abv checked");
        console.log(beers)
        const filterByAbv = beers.filter(beer => beer.abv > 6);
        console.log(filterByAbv);
        console.log(beers);
        setFilteredBeers(filterByAbv);
      } else {
        console.log("abv unchecked");
        setFilteredBeers(beers);
      }
    }

    if (checkboxValue === 1) {
      if (isChecked) {
        console.log("classic checked");
        // console.log(parseInt(beers[0].first_brewed.split("/")[1]));
        const filterByClassic = beers.filter(beer => (parseInt(beer.first_brewed.split("/")[1]) < 2010));
        console.log(filterByClassic);
        setFilteredBeers(filterByClassic);
      } else {
        console.log("classic unchecked");
        setFilteredBeers(beers);
      }
    }

    if (checkboxValue === 2) {
      console.log("this is the acid checkbox")
      if (isChecked) {
        console.log("acid checked");
        const filterByPh = beers.filter(beer => beer.ph < 4);
        console.log(filterByPh);
        console.log(beers);
        setFilteredBeers(filterByPh);
      } else {
        console.log("acid unchecked");
        setFilteredBeers(beers);
      }
    }

    // console.log(filteredBeers);

  }

  console.log("this will be the prop:");
  console.log(filteredBeers);




  return (
    <div className="App">
      <Navbar className="navbar" handleSearchInput={handleSearchInput} handleCheckboxes={handleCheckboxes} />
      <Main className="main" searchedBeer={searchedBeer} filteredBeers={filteredBeers} />
    </div>
  );
}

export default App;
