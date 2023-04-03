import { useState } from "react";
import "./contact.css";
import Button from '@mui/material/Button';


const Contact=()=>{

    const[name2,setName2]=useState({
        fname:"",
        phone:"",
        email:"",
        area:""
    });

    const inChange=(event)=>{
        const val= event.target.value;
        const name= event.target.name;
        
        setName2((oldVal)=>{
            
                if(name==="fName"){
                    return{
                        fname:val,
                        phone:oldVal.phone,
                        email:oldVal.email,
                        area:oldVal.area
                    }
                }
                else if(name==="pNumber"){
                    return{
                        fname:oldVal.fname,
                        phone:val,
                        email:oldVal.email,
                        area:oldVal.area
                    }
                }
                else if(name==="eMail"){
                    return{
                        fname:oldVal.fname,
                        email:val,
                        phone:oldVal.phone,
                        area:oldVal.area
                    }
                }
                else if(name==="tArea"){
                    return{
                        fname:oldVal.fname,
                        area:val,
                        email:oldVal.email,
                        phone:oldVal.phone
                    }
                }
                    
                       
        })


    }
    const subMe=(e)=>{
        e.preventDefault();
        alert(`Dear ${name2.fname}, Your Data is saved successfully`);
    }
   



    return(<div className="contact">
        <h1>Contact Us</h1>
        <form onSubmit={subMe}  action="/"><input type="text" onChange={inChange} name="fName" value={name2.fname} placeholder="Enter FullName"></input>
        <input type="text" onChange={inChange} name="pNumber" value={name2.phone} placeholder="Enter PhoneNumber"></input>
        <input type="text" onChange={inChange} name="eMail" value={name2.email} placeholder="Enter Email"></input>
        <textarea onChange={inChange} name="tArea" value={name2.area} placeholder="Enter Something"></textarea>
        <Button variant="outlined" className="btnc" type="submit" style={{borderRadius:"25%"}}>Submit Now</Button></form>
    </div>)

}
export default Contact;