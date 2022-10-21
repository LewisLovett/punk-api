import "./FilterItem.scss";

const FilterItem = (props) => {
    const {filterName} = props;
    return(
        <>
        <label>{filterName}</label>
        <input type="checkbox" />
        </>
    )
}

export default FilterItem;