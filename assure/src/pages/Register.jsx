import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState(''); // State for name
  const [dob, setDob] = useState(''); // New state for DOB

  const navigate = useNavigate(); // Initialize useNavigate

  const validatePassword = (password) => {
    const re = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;
    return re.test(password);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validatePassword(password)) {
      alert('Password must be at least 8 characters long, contain at least one capital letter, and one special character.');
      return;
    }

    if (password === confirmPassword) {
      // Handle registration logic here

      // Redirect to the home page after successful registration
      navigate('/'); // Redirect to the home page
      alert('Registration successful!');
    } else {
      alert("Passwords do not match!");
    }
  };

  return (
    <div>
      <div className='register-container'>
        <form onSubmit={handleSubmit}>
          <div>
            <h1>Register</h1>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
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
          <div>
            <label>Confirm Password:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Date of Birth:</label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
            />
          </div>
          <button className='button' type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
