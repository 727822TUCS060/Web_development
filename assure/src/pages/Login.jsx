import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Za-z])(?=.*[!@#$%^&*])(?=.{8,20})/; // Adjust max length here
    return regex.test(password);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validatePassword(password)) {
      window.alert('Password must contain at least one letter, one symbol, and be between 8 and 20 characters long.');
      return;
    }

    // Handle registration logic here

    // Redirect to the home page after successful registration
    window.alert('Login successful!');
    navigate('/'); // Redirect to the home page
  };

  return (
    <div>
      <div className='login-container'>
        <form onSubmit={handleSubmit}>
          <div>
            <h1>Login</h1>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className='button' type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
