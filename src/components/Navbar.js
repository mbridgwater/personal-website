// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li>
          <Link to="/" style={linkStyle}>Home</Link>
        </li>
        <li>
          <Link to="/about" style={linkStyle}>Work and Experience</Link>
        </li>
        <li>
          <Link to="/contact" style={linkStyle}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

// !!! improve navbar style, make thicker and put stuff on LHS and improve hover look

const navStyle = {
  padding: '1rem',
  backgroundColor: '#333',
};

const ulStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  listStyle: 'none',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
};

export default Navbar;
