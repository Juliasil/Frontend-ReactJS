import React, { useState } from 'react';
import axios from 'axios';
import './App.css'

export const Signup = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:3001/register', {
        name: name,
        email: email,
        password: password,
      });

      if (response.data === 'Sucesso') {
        
      } else {
        setError(response.data); 
      }
    } catch (error) {
      console.error('Erro na solicitação:', error);
    }
  }
  return (
    <div className='auth-form-container'>
      <h2><strong>Signup</strong></h2>

      <form className="signup-form"onSubmit={handleSubmit}>
        <label htmlFor="name">Full name</label>
        <input value={name} type="text" placeholder="Full Name" id="name" name="name" onChange={(e) => setName(e.target.value)} />
        <label htmlFor="email">Email</label>
        <input value={email} type="email" placeholder="seuemail@gmail.com" id="email" name="email" onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input  value={password}  type="password"  placeholder="********"  id="password" name="password"onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Sign Up</button>
      </form>

      {error && <div className="error-message">{error}</div>}

      <button className='link-btn' onClick={() => props.onFormSwitch('login')}>Já tem uma conta? Entre.</button>
    </div>
  );
}
