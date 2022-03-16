import React from 'react';
import './App.scss';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
// import beers from './data/beers';
import {useState, useEffect} from "react";

function App() {

  const url = "https://api.punkapi.com/v2/beers";

  const getBeers = async () => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setBeersArr(data);
    return data;
  }

  useEffect(() => {
    getBeers();
  }, []);

  const [beersArr, setBeersArr] = useState([])
  const [searchedBeer, setSearchedBeer] = useState("");
  const [filteredBeers, setFilteredBeers] = useState(beersArr);


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

    if (Number(checkboxValue) === 0) {
      console.log("this is the abv checkbox")
      if (isChecked) {
        console.log("abv checked");
        console.log(beersArr)
        const filterByAbv = beersArr.filter(beer => beer.abv > 6);
        console.log(filterByAbv);
        console.log(beersArr);
        setFilteredBeers(filterByAbv);
      } else {
        console.log("abv unchecked");
        setFilteredBeers(beersArr);
      }
    }

    if (Number(checkboxValue) === 1) {
      if (isChecked) {
        console.log("classic checked");
        // console.log(parseInt(beers[0].first_brewed.split("/")[1]));
        const filterByClassic = beersArr.filter(beer => (parseInt(beer.first_brewed.split("/")[1]) < 2010));
        console.log(filterByClassic);
        setFilteredBeers(filterByClassic);
      } else {
        console.log("classic unchecked");
        setFilteredBeers(beersArr);
      }
    }

    if (Number(checkboxValue) === 2) {
      console.log("this is the acid checkbox")
      if (isChecked) {
        console.log("acid checked");
        const filterByPh = beersArr.filter(beer => beer.ph < 4);
        console.log(filterByPh);
        console.log(beersArr);
        setFilteredBeers(filterByPh);
      } else {
        console.log("acid unchecked");
        setFilteredBeers(beersArr);
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
