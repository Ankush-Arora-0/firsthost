// import { useEffect, useState } from "react";
import "./Body.css";
import Button from '@mui/material/Button';

const Body=(props)=>{
return(<div className="body1">
<div className="txt">
        <h1 className="he1">{props.title}</h1>
        <h1 className="he2">{props.Name}</h1>
        <p>{props.body1} </p>
        <Button varient="outlined">Submit Me</Button></div>
        <div className="img12">
            <img src={props.img1} alt="sorry"/>
        </div>

</div>);
}
export default Body;