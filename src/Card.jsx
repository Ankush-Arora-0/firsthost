import "./Card.css";
import Button from '@mui/material/Button';

const Card=(props)=>{

    return(<div className="card">
        <img src={props.img1} alt="Oops Image not found"></img>
        <h3>{props.name1}</h3>
        <p>
            Some quick things on Card and manage text.
        </p>
        <Button variant="contained">Show More</Button>
    </div>)

}

export default Card;