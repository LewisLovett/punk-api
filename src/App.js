import logo from './logo.svg';
import './App.css';
import beers from "./data/beers";
import NavBar from './containers/NavBar/NavBar';
import Main from "./containers/Main/Main";

function App() {
  const filterListArry = [{"name":"High ABV (>6.0%)", "beer_key": "abv", "beer_value" : 6},
    {"name":"Classic Range", "beer_key": "first_brewed", "beer_value" : "2010"},
    {"name":"Acidic", "beer_key": "ph", "beer_value" : 4}
  ];

  return (
    <div className="App">
      <NavBar filterListArry={filterListArry} />
      <Main beerArry={beers} />
    </div>
  );
}

export default App;
