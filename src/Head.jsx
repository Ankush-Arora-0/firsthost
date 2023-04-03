import "./Head.css";
import { NavLink } from "react-router-dom";
const Head =(props)=>{
return(<div className="head">
        <h1 className="nameh">Ankush Techincal</h1>

    <span className="nav"><NavLink  className={nav => (nav.isActive ? "active" : "nactive")}  to="/contact">Contact</NavLink></span>
    <span className="nav"><NavLink  className={nav => (nav.isActive ? "active" : "nactive")}  to="/user">About</NavLink></span>
    <span className="nav"><NavLink  className={nav => (nav.isActive ? "active" : "nactive")}  to="/services">Services</NavLink></span>
    <span className="nav"><NavLink  className={nav => (nav.isActive ? "active" : "nactive")} to="/">Home</NavLink></span>
   
</div>);
}
export default Head;