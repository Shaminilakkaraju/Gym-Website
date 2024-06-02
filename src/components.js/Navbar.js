import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <p><FontAwesomeIcon icon={faDumbbell} />THE FITNESS CLUB</p>
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-link">
            Explore
          </Link>
        </li>
        <li>
          <Link to="/why-choose-us" className="nav-link">
            Why Choose Us
          </Link>
        </li>
        <li>
          <Link to="/subscription-options" className="nav-link">
            Subscribe
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
