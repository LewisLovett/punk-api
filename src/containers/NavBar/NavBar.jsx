import "./NavBar.scss";
import SearchBox from "../../components/SearchBox/SearchBox"
import FiltersList from "../FiltersList/FiltersList"
const NavBar = (props) =>{
const {filterListArry, handleSearch} = props;
    return(
    <div className="navbar-container">
        <div>Search:</div>
        <SearchBox handleSearch={handleSearch}/>
        <div>Filter Options</div>
        <FiltersList filterListArry={filterListArry}/>
    </div>
    )
}

export default NavBar;