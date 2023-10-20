import React, { useState } from 'react';
import axios from 'axios';
import './App.css'

export const Login = (props) => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login', {
        email: email,
        password: password,
      });
      

      
      if (response.data === 'Sucesso') {
      
      } else {
    
        console.log(response.data);
      }
    } catch (error) {
      console.error('Erro na solicitação:', error);
    }
  }
  
  return (
    <div className='auth-form-container'>
      <h2><strong>Longin</strong></h2>
    <form className="login-form" onSubmit={handleSubmit}>
    <label htmlFor="email">Email</label>
        <input value={email} type="email" placeholder="seuemail@gmail.com" id="email" name="email" onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input  value={password}  type="password"  placeholder="********"  id="password" name="password"onChange={(e) => setPassword(e.target.value)} />
    <button type="submit">Log In</button>
  </form>

  <button className='link-btn' onClick={() => props.onFormSwitch ('signup')}> Não tem uma conta? Regitra -se. </button>
  </div>
  )
}