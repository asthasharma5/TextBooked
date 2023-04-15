import React,{useEffect, useState} from "react";
import './styles/Login.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './styles/Login.css'
import { Link } from "react-router-dom";


function SignUp(){
    const [name, setName] = useState('');
 const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate()

  const handleClick=async(e)=>{
        e.preventDefault();
    // alert("form submitted")
    // navigate('/dashboard')
    const response= await axios.post(`http://localhost:5001/users`,{
        name:name,
        email:email,
        password:password
    })
   
    console.log("response",response)
    navigate('/userform')
    alert("Signup Successfully")

  }
  useEffect(()=>{
   localStorage.getItem('user_info')
  },[])
    return(
      <>
      <div className="login-bg">
      <div className="blockk">
            <h1 className="heading">
              TextBook App
            </h1>
            <form className="register">
            <input className="Text" type="text" placeholder="name" value={name} onChange={(e)=>setName(e.target.value)} />
                <input className="Text" type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                <input  className="Text" type="Password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                <button className="button1" type="button" onClick={handleClick}> SignUp</button>
                <Link to={'/login'}> <button className="button1" type="button"> Login</button></Link>
            </form>
        </div>
      </div>
       

        </>
    

    )
}
export default SignUp