import "./Card.scss";

const Card = (props) => {
    const {beerName, beerThumbnail, beerDesc} = props;
    return(
        <>
        <img src={beerThumbnail}/>
        <h2>{beerName}</h2>
        <p>{beerDesc}</p>
        </>
    )
}

export default Card;