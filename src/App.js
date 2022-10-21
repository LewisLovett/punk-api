import logo from './logo.svg';
import './App.css';
import beers from "./data/beers";
import NavBar from './containers/NavBar/NavBar';
import Main from "./containers/Main/Main";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main beerArry={beers} />
    </div>
  );
}

export default App;
