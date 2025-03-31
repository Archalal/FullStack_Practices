import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
        const[loggined,setLogined]=useState(false)
        const navigate=useNavigate()
   const token=sessionStorage.getItem("token")
  useEffect(()=>{
    if(token){
        setLogined(true)
       }else{
        setLogined(false)
       }
  },[loggined])


  const project=()=>{
    if(token){
        navigate('/dash')
    }
    else{
        alert("plaese login");
        
    }
  }
   
  return (
    <div>
       {
        loggined? <button style={{backgroundColor:"red"}}>Get start</button>: <button style={{backgroundColor:"blue"}}>Get start</button>
       }
        <br />
        <Link to={'/register'}><button
        >Register</button></Link>
        <Link to={'/login'}>
        <button>login</button></Link>
        <button onClick={project}>like here to view more projects</button>
      
    </div>
  )
}

export default Home
