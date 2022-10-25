import './Main.scss';
import CardList from "../CardList/CardList";

const Main = (props) => {
    const {beerArry} = props;
    return(
        <div className='card-list-container'>
        <CardList beerArry={beerArry} />
        </ div>
    )
}
export default Main;