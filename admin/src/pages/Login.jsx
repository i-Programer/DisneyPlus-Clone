import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import { AuthContext } from '../context/authContext/AuthContext';
import { login } from '../context/authContext/apiCalls';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching, dispatch } = useContext(AuthContext);
  
  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  }

  return (
    <>
      <div className="login w-100 h-screen flex items-center justify-center">
        <form className="loginForm flex flex-col">
          <input type="email" className="loginInput mb-[10px] p-[5px]" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" className="loginInput mb-[10px] p-[5px]" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
          <button className="loginButton bg-blue-900 border-none text-white p-[5px] cursor-pointer rounded-md" onClick={handleLogin} disabled={isFetching}>Login</button>
        </form>
      </div>
    </>
  )
}

export default Login