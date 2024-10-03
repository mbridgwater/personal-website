// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Import the external CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        Missy Bridgwater&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Computer Science
      </div>
      <ul className="navbar-list">
        <li>
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li>
          <Link to="/about" className="navbar-link">Work and Experience</Link>
        </li>
        <li>
          <Link to="/contact" className="navbar-link">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

