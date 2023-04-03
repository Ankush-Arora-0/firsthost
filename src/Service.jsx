import "./Servic.css";
import Card from "./Card.jsx";
import Sdata from "./Sdata";

const Service=()=>{
    return(
        <div className="serv">
            <h1>Our Sevices</h1>
           {Sdata.map((val,index)=>{
            return(<Card
            img1= {val.img}
            name1={val.name}
            ></Card>);
           })}

        </div>
    );

}
export default Service;