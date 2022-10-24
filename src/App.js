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
  const filterListArry = [{"name":"High ABV (>6.0%)", "beer_key": "abv", "beer_value" : 6, "filter_function" : handleHighABVFilter},
  {"name":"Classic Range", "beer_key": "first_brewed", "beer_value" : "2010","filter_function" : handleHighABVFilter},
  {"name":"Acidic", "beer_key": "ph", "beer_value" : 4,"filter_function" : handleHighABVFilter}
];
  return (
    <div className="App">
      <NavBar filterListArry={filterListArry} handleSearch={handleSearch}/>
      <Main beerArry={beerList} />
    </div>
  );
}

export default App;
