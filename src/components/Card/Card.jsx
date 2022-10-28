import "./Card.scss";

const Card = (props) => {
    const {beerName, beerThumbnail, beerDesc} = props;
    return(
        <div className="card-container">
            <img className="card-container__beer-thumb" src={beerThumbnail}/>
            <h2>{beerName}</h2>
            <p>{beerDesc.slice(0,200)}</p>
        </div>
    )
}

export default Card;