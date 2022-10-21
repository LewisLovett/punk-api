import './Main.scss';
import CardList from "../CardList/CardList";

const Main = (props) => {
    const {beerArry} = props;
    return(
        <>
        <CardList beerArry={beerArry} />
        </>
    )
}
export default Main;