import logo from './logo.svg';
import './App.css';
import beers from "./data/beers";
import NavBar from './containers/NavBar/NavBar';
import Main from "./containers/Main/Main";
import { useState } from 'react';

function App() {
  const [beerList, setBeerList] = useState(beers);


  const handleSearch = event => {
    const searchTerm = event.target.value.toLowerCase();
    setBeerList(
      beerList.filter(beer => beer.name.toLowerCase().includes(searchTerm))
    )
  }

  const handleHighABVFilter = () => {
    setBeerList(
      beerList.filter(beer => beer.abv>6)
    )
  }
  const handleClassicRangeFilter = () => {
    setBeerList(
      beerList.filter(beer => parseInt(beer.first_brewed.substring(3))<2010)
    )
  }
  const handleAcidicFilter = () => {
    setBeerList(
      beerList.filter(beer => beer.ph<4)
    )
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
