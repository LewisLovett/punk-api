import "./NavBar.scss";
import SearchBox from "../../components/SearchBox/SearchBox"
import FiltersList from "../FiltersList/FiltersList"
const NavBar = () =>{

    return(
    <>
        <SearchBox/>
        <FiltersList/>
    </>
    )
}

export default NavBar;