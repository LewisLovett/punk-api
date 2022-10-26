import "./NavBar.scss";
import SearchBox from "../../components/SearchBox/SearchBox"
import FiltersList from "../FiltersList/FiltersList"
const NavBar = (props) =>{
const {filterListArry, handleSearch} = props;
    return(
    <div className="navbar-container">
        <SearchBox handleSearch={handleSearch}/>
        <FiltersList filterListArry={filterListArry}/>
    </div>
    )
}

export default NavBar;