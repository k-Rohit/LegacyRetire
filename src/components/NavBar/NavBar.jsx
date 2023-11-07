import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const linkStyles = {
  textDecoration: 'none',  // Remove underline
  color: '#38B6FF',       // Set text color to #38B6FF
};

function NavBar() {
  return (
    <div className="navbar-container">
      <div className="logo">
        <Link to="/" style={linkStyles}>Home</Link>
      </div>
      <div className="learn">
        <Link to="/learn" style={linkStyles}>Learn</Link>
      </div>
      <div className="Chatbot">
        <Link to="/chatbot" style={linkStyles}>Chatbot</Link>
      </div>
      <div className="account">
        <Link to="/account" style={linkStyles}>Account</Link>
      </div>
    </div>
  );
}

export default NavBar;
