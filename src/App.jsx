import logo from './logo.svg';
import './App.scss';
import NavBar from './containers/NavBar/NavBar';
import Main from "./containers/Main/Main";
import { useEffect, useState } from 'react';

function App() {
  const [beerList, setBeerList] = useState([]);
  const [fullBeerList, setFullBeerList] = useState([]);
  const [currentSearchTerm, setcurrentSearchTerm] = useState("");
  const [isHighABVFilter, setIsHighABVFilter] = useState(false);
  const [isClassicRangeFilter, setIsClassicRangeFilter] = useState(false);
  const [isAcidicFilter, setIsAcidicFilter] = useState(false);

const getBeers = async () => {
  const url = "https://api.punkapi.com/v2/beers";
  const res = await fetch(url);
  const data = await res.json();
  setFullBeerList(data);
  setBeerList(data);
}



  const handleSearch = event => {
    setcurrentSearchTerm(event.target.value.toLowerCase());
  }

  useEffect(() =>{
    getBeers();
  },[])

  useEffect(() => {
    let tempBeerList = fullBeerList;
    
    if(currentSearchTerm){
      tempBeerList = tempBeerList.filter(beer => beer.name.toLowerCase().includes(currentSearchTerm)
    )}
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
  }, [isHighABVFilter, isClassicRangeFilter,isAcidicFilter, currentSearchTerm]);


  const handleHighABVFilter = () => {
    setIsHighABVFilter(isHighABVFilter =>!isHighABVFilter);
  }

  const handleClassicRangeFilter = () => {
    setIsClassicRangeFilter(isClassicRangeFilter =>!isClassicRangeFilter);
  }

  const handleAcidicFilter = () => {
    setIsAcidicFilter(isAcidicFilter => !isAcidicFilter);
  }

  const filterListArry = [{"name":"High ABV (>6.0%)", "filter_function" : handleHighABVFilter},
  {"name":"Classic Range", "filter_function" : handleClassicRangeFilter},
  {"name":"Acidic", "filter_function" : handleAcidicFilter}
];
  return (
    <div className="App">
      <h1>Punk Beer Search</h1>
      <NavBar filterListArry={filterListArry} handleSearch={handleSearch}/>
      <Main beerArry={beerList} />
    </div>
  
  );
}

export default App;
