import React from "react";
import './styles/Login.css'


function Login(){
    return(
        <div class="block">
    <h1 class="heading">Login</h1>
    <div class="register">
        <input type="text" placeholder="Email"  />
        <input type="Password" placeholder="Password"  />
        <button type="button" >Login</button>
        
    </div>
</div>
    )
}
export default Login