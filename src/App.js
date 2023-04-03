import Head from "./Head";
import "./App.css";
import Body from "./Body";
import Error from "./Error";
import { Route } from "react-router-dom";
import { Routes ,NavLink } from "react-router-dom";
import Home from "./Home";
import Service from "./Service";
import User from "./User";
import Contact from "./Contact";

const App =()=>{

    const Menu=()=>{
        return(
            <>
                
            </>
        )
    }

 return(<div className="body">
        <Head></Head>
        <Routes>

        <Route  path="/" element={<Home></Home>}/>
        <Route  path="/services" Component={Service}/>
        <Route  path="/user" Component={User}/> 
        <Route  path="/contact" Component={Contact}/> 
        <Route  path="*" Component={Error}/> 
    </Routes>
 </div>)
}
export default App;