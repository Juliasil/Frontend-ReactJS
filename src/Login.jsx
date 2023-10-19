import React, { useState } from 'react';
import axios from 'axios';

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
    <form onSubmit={handleSubmit}>
    <label htmlFor="email">email</label>
    <input value={email} type="email" placeholder='seuemai@gmail.com' id='email' name='email'/>
    <label htmlFor="password">password</label>
    <input value={password} type="password" placeholder='********' id='password' name='password'/>
    <button type="submit">Log In</button>
  </form>

  <button onClick={() => props.onFormSwitch ('signup')}> Não tem uma conta? Regitra -se. </button>
  </div>
  )
}