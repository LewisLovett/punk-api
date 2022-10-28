import "./FilterItem.scss";

const FilterItem = (props) => {
    const {filterName,filterFunction} = props;
    return(
        <div>
        <label className="filter-container__filter-label">{filterName}</label>
        <input className="filter-container__filter-checkbox" onChange={filterFunction} type="checkbox" />
        </div>
    )
}
export default FilterItem;