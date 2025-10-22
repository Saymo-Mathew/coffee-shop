import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="error-code">404</div>
        <h1 className="error-title">Oops! Page Not Found</h1>
        <p className="error-message">
          The page you're looking for seems to have wandered off like a lost coffee bean. 
          Don't worry, even the best baristas sometimes lose track of their brew!
        </p>
        <div className="error-actions">
          <Link to="/" className="home-btn">
            <span className="btn-icon">🏠</span>
            Back to Home
          </Link>
          <Link to="/menu" className="menu-btn">
            <span className="btn-icon">☕</span>
            Browse Products
          </Link>
        </div>
        <div className="coffee-animation">
          <div className="coffee-cup">☕</div>
          <div className="steam">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
