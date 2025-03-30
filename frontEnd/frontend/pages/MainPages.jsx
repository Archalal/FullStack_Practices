import React from 'react'
import { Link } from 'react-router-dom'

const MainPages = () => {
  return (
    <div>
      <form action="">
        <label>Username</label>
        <input type="text"  placeholder='enter your username'/>
        
      </form>
      <form action="">
        <label>Email</label>
        <input type="email" placeholder='enter your email' />
        
      </form>
      <form action="">
        <label>password</label>
        <input type="password"  placeholder='enter your password'/>
        
      </form>
      <button>Register</button>
     <Link to={"/login"}>     <button>Login</button></Link>
      
    </div>
  )
}

export default MainPages
