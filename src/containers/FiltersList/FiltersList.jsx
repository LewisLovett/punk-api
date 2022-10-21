import "./FiltersList.scss";
import FilterItem from "../../components/FilterItem/FilterItem";

const FiltersList = (props) =>{
    const {filterListArry} = props;
    const filterItems = filterListArry.map((filterItem,index) =>{
        return <FilterItem filterName={filterItem.name} key={index}/>
    })

    return(
        <>
        {filterItems}
        </>
    )
}
export default FiltersList;