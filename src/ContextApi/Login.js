import React, { useState } from 'react';
import { json } from 'react-router-dom';

function Login() {

 let [pass,setPass]=useState("")
 let [name,userName]=useState("")
  function handleSUbmit(e)
  {
    e.preventDefault();
    let finalname = JSON.parse(localStorage.getItem("userdetails"))

  console.log(finalname.userdetails.name)

  }

  return (
    <form onSubmit ={handleSUbmit}className="login-form" method="post" action="">
      <h2>Login</h2>

      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input  onChange={(e)=> userName(e.target.value)} type="text" id="username" name="username" required value = {name}/> 
      </div>

      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input  onChange={(e)=> setPass(e.target.value)}type="password" id="password" name="password" required value = {pass}/> 
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default Login;
