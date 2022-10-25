import "./CardList.scss";
import Card from "../../components/Card/Card";
const CardList = (props) =>{
    const {beerArry} = props;
    const cards = beerArry.map((beer) =>{
        return <Card beerName = {beer.name} beerThumbnail = {beer.image_url} beerDesc = {beer.description} key={beer.id} />
    })

    return (
        <>
        {cards}
        </>
    )
}

export default CardList;