import "./SearchBox.scss";

const SearchBox = (props) => {
    const { handleSearch} = props;
    return(
        <>
        <h2>Search:</h2>
        <input className="navbar-container__search-box" onInput={handleSearch} type="text"></input>
        </>
    )
}

export default SearchBox;