import "./SearchBox.scss";

const SearchBox = (props) => {
    const { handleSearch} = props;
    return(
        <>
        <h2>Search:</h2>
        <input onInput={handleSearch} type="text"></input>
        </>
    )
}

export default SearchBox;