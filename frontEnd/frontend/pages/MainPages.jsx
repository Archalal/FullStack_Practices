import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { registerUser } from '../Services/AllAPI'


const MainPages = () => {

  const [userData,setUserData]=useState({
    username:"",
    email:"",
    password:""
  })
 
  const register=async()=>{

  try{
    const{username,email,password}=userData
   if(username && email&& password){
    const apiResponse=await registerUser(userData)
    console.log(apiResponse.data);
    
   if(apiResponse.message){
    alert(apiResponse.message);
    
   }else{
    console.log(apiResponse);
   }
    
   }else{
    alert("please fill the form")
   }
  }
  catch(err){
    console.log(err);
    
  }
  }
  
  return (
    <div>
      <form action=""
      onChange={((e)=>(
        setUserData({...userData,username:e.target.value})
      ))}>
        <label>Username</label>
        <input type="text"  placeholder='enter your username'/>
        
      </form>
      <form action=""
      onChange={((e)=>(
        setUserData({...userData,email:e.target.value})
      ))}>
        <label>Email</label>
        <input type="email" placeholder='enter your email' />
        
      </form>
      <form action=""
        onChange={((e)=>(
          setUserData({...userData,password:e.target.value})
        ))}>
        <label>password</label>
        <input type="password"  placeholder='enter your password'/>
        
      </form>
      <button
      onClick={register}>Register</button>
     <Link to={"/login"}>     <button>Login</button></Link>
      
    </div>
  )
}

export default MainPages
