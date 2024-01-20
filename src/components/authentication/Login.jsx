import React from 'react'

const Login = () => {
  return (
    <div>
        <h1>
        Login page 
        </h1>
        <form>
            <label htmlFor="email">Email</label>
            <input type="email" name="last_name" id="email" placeholder='abc@def.com' />
            <label htmlFor="pass">Password</label>
            <input type="password" name="pass" id="pass" placeholder='*******' />

            <button type="button">Login</button>
        </form>     
    </div>
  )
}

export default Login
