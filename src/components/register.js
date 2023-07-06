import React from 'react';
import {useState} from 'react';

function Register(){

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const handlesubmit = async (e)=>{
    const response = await fetch("http://localhost:3000/api/user/register",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({ name,email,password })
    })
    const json = await response.json();
    }
    return(
        <div>
            <h1>Register User </h1>
            <form onSubmit={handlesubmit}>
            <input type="text" placeholder="name" onChange={(e)=>setName(e.target.value)} /> <br/>
            <input type="text" placeholder="email" onChange={(e)=>setEmail(e.target.value)} /> <br/>
            <input type="text" placeholder="password" onChange={(e)=>setPassword(e.target.value)} /> <br/>
            <button type="submit">Register</button>
            </form>
        </div>
    )

}
export default Register;