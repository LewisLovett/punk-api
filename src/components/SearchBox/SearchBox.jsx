import "./SearchBox.scss";

const SearchBox = (props) => {
    const { handleSearch} = props;
    return(
        <>
        <input onInput={handleSearch} type="text"></input>
        </>
    )
}

export default SearchBox;