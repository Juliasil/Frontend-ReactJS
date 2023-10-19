import React, { useState } from 'react';

export const Signup = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }

  return (
    <div className='auth-form-container'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Full name</label>
        <input 
          value={name} 
          type="text" 
          placeholder="Full Name" 
          id="name" 
          name="name"
        />
        <label htmlFor="email">Email</label>
        <input 
          value={email} 
          type="email" 
          placeholder="seuemail@gmail.com" 
          id="email" 
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input 
          value={password} 
          type="password" 
          placeholder="********" 
          id="password" 
          name="password"
        />
        <button type="submit">Sign Up</button>
      </form>

      <button onClick={() => props.onFormSwitch('login')}>Já tem uma conta? Entre.</button>
    </div>
  );
}

