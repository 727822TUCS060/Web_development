import React from 'react';
import { Link } from 'react-router-dom';
import LogoImage from '../assets/assure1.jpg'; // Import the image

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="left-section">
        <div className="hamburger" onClick={toggleSidebar}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className="company-name">
          <img src={LogoImage} alt="Life Insurance" className="logo" />
        </div>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
