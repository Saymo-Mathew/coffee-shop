import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isNavActive, setIsNavActive] = useState(false);

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  return (
    <nav className="navbar">
      <div className="logo">StarBooks</div>
      <div className="nav-left">
        <div className="cart-icon" style={{ display: 'inline-flex', marginRight: '10px', cursor: 'pointer' }}>
          <span className="cart-count">0</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
        </div>
      </div>
      <div className="nav-right">
        <ul className={`nav-links ${isNavActive ? 'active' : ''}`}>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/menu">Products</Link></li>
          <li><Link to="/gallery">Reviews</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="hamburger" onClick={toggleNav}>☰</div>
      </div>
    </nav>
  );
}

export default Header;
