import React,{useEffect, useState} from "react";
import './styles/Login.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Login(){
 const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate()

  const handleClick=async(e)=>{
        e.preventDefault();
    // alert("form submitted")
    // navigate('/dashboard')
    const response= await axios.get(`http://localhost:5001/users?email=${email}&password=${password}`)
   
    console.log("response",response)
    alert("Login Successfully")
    if (response.status === 200 && response.data.length>0) {
      localStorage.setItem("user_info", JSON.stringify(response.data[0]))
      navigate('/userform')
  }
  }
  useEffect(()=>{
   localStorage.getItem('user_info')
  },[])
    return(
        <div className="blockk">
            <h1 className="heading">
              TextBook App
            </h1>
            <form className="register">
                <input className="Text" type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                <input  className="Text" type="Password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                <button className="button1" onClick={handleClick}> Login</button>
            </form>
        </div>
    

    )
}
export default Login