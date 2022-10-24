import "./NavBar.scss";
import SearchBox from "../../components/SearchBox/SearchBox"
import FiltersList from "../FiltersList/FiltersList"
const NavBar = (props) =>{
const {filterListArry, handleSearch} = props;
    return(
    <>
        <SearchBox handleSearch={handleSearch}/>
        <FiltersList filterListArry={filterListArry}/>
    </>
    )
}

export default NavBar;