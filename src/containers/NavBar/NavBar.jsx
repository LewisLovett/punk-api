import "./NavBar.scss";
import SearchBox from "../../components/SearchBox/SearchBox"
import FiltersList from "../FiltersList/FiltersList"
const NavBar = (props) =>{
const {filterListArry} = props;
    return(
    <>
        <SearchBox/>
        <FiltersList filterListArry={filterListArry}/>
    </>
    )
}

export default NavBar;