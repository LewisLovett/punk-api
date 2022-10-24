import "./FilterItem.scss";

const FilterItem = (props) => {
    const {filterName,filterFunction} = props;
    return(
        <>
        <label>{filterName}</label>
        <input onChange={filterFunction} type="checkbox" />
        </>
    )
}

export default FilterItem;