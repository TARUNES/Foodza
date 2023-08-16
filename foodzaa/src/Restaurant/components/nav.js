import './nav.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/"> enga Logo</Link>
      </div>
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/cart">cart logo</Link>
        {/* <Link to="/services">Services</Link> */}
        <Link to="/profile">profile</Link>
      </div>
      <button className="navbar-toggle" onClick={toggleNavbar}>
        <i className="fas fa-bars"></i>
      </button>
    </nav>
  );
};

export default Navbar;
