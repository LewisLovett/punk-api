import logo from './logo.svg';
import './App.css';
import beers from "./data/beers";
import NavBar from './containers/NavBar/NavBar';
import Main from "./containers/Main/Main";
import { useEffect, useState } from 'react';

function App() {
  const [beerList, setBeerList] = useState(beers);
  const [isHighABVFilter, setIsHighABVFilter] = useState(false);
  const [isClassicRangeFilter, setIsClassicRangeFilter] = useState(false);
  const [isAcidicFilter, setIsAcidicFilter] = useState(false);
  let currentSearchTerm = "";


  const handleSearch = event => {
    currentSearchTerm = event.target.value.toLowerCase();
    if(currentSearchTerm){
      setBeerList(beerList.filter(beer => beer.name.toLowerCase().includes(currentSearchTerm))
    )}else{
      setBeerList(beers);
    }
  }
useEffect(() => {

})

useEffect(() => {
  let tempBeerList = beers;
    if(isHighABVFilter){
      tempBeerList = tempBeerList.filter(beer => beer.abv>6);
    }
    if(isClassicRangeFilter){
      tempBeerList = tempBeerList.filter(beer => parseInt(beer.first_brewed.substring(3))<2010)
    }
    if(isAcidicFilter){
      tempBeerList = tempBeerList.filter(beer => beer.ph<4);
    }
    setBeerList(tempBeerList);
}, [isHighABVFilter, isClassicRangeFilter,isAcidicFilter]);


 

  const handleHighABVFilter = (event) => {
    setIsHighABVFilter(isHighABVFilter =>!isHighABVFilter);

  }

  const handleClassicRangeFilter = (event) => {
    setIsClassicRangeFilter(isClassicRangeFilter =>!isClassicRangeFilter);

  }

  const handleAcidicFilter = (event) => {
    setIsAcidicFilter(isAcidicFilter => !isAcidicFilter);

  }
  const filterListArry = [{"name":"High ABV (>6.0%)", "filter_function" : handleHighABVFilter},
  {"name":"Classic Range", "filter_function" : handleClassicRangeFilter},
  {"name":"Acidic", "filter_function" : handleAcidicFilter}
];
  return (
    <div className="App">
      <NavBar filterListArry={filterListArry} handleSearch={handleSearch}/>
      <Main beerArry={beerList} />
    </div>
  );
}

export default App;
