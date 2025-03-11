import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // Get the current balance from the Redux store
  const amount = useSelector(state => state.amount);

  return (
    // Navbar with Bootstrap styles
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg">
      <div className="container">
        
        {/* Brand Name (Redux Trial) - Links to Home */}
        <Link className="navbar-brand fw-bold text-uppercase" to="/">Redux Trial</Link>

        {/* Navbar Toggle Button for Small Screens */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Navbar Content */}
        <div className="collapse navbar-collapse" id="navbarNav">
          
          {/* Navigation Links */}
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link active fw-semibold" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/shop">Shop</Link>
            </li>
          </ul>

          {/* Display User's Balance */}
          <div className="d-flex">
            <button className="btn btn-success fw-bold px-4 py-2 balance-btn" disabled>
              💰 Balance: ${amount}
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
