import React, { useState } from 'react'
import { userLogin } from '../Services/AllAPI'
import { useNavigate } from 'react-router-dom'

const Lgin = () => {
  const[userData,setUserData]=useState({
    email:"",
    password:""
  })
const navigate=useNavigate()
  console.log(userData);
  
  const login=async()=>{

    try{
    
      
      const{email,password}=userData
      if(email && password){
        
        let payload= await userLogin(userData)
        console.log(payload.data);
        
        
       if(payload.status==200){
        sessionStorage.setItem(
          "userName",payload.data.user.
          username
          
        )
        sessionStorage.setItem(
          "token",payload.data.token
          
        )
        alert("login successfully")
        navigate('/dash')

       }
      else if(payload.status==401){
        alert(payload.message)
        navigate('/login')
      }
      else{
        alert("server error")
      }
      }
      else{
        alert("please fill the form")
      }
    }
    catch(err){
      alert(err);
      
    }
    

  }
  return (
    <div>
         
      <form action=""
      onChange={((e)=>
      setUserData(
        {...userData,email:e.target.value}
      ))}>
        <label>Email</label>
        <input type="email" placeholder='enter your email' />
        
      </form>
      <form action=""
        onChange={((e)=>
          setUserData(
            {...userData,password:e.target.value}
          ))}>
        <label>password</label>
        <input type="password"  placeholder='enter your password'/>
        
      </form>
      <button onClick={login}>login</button>
   
      
    </div>
  )
}

export default Lgin
