import React from 'react';
import { useRef } from 'react';
import styles from '../styles.css/Navbar.module.css';
import gymLogo from '../images/gym-logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const subscribeRef = useRef(null);
  const handlesubscribeClick = () => {
    subscribeRef.current.scrollIntoView({ behavior: "smooth"});
  }
  return (
    <nav className={styles.navbar}>
     <div className={styles.logo}>
        <img src={gymLogo} alt="Gym Logo" className={styles.logoImage} /> THE FITNESS CLUB
      </div>
      <ul className={styles.navList}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/explore">Explore</Link></li>
        <li><Link to="/why-choose-us">Why Choose Us</Link></li>
        <li><Link to="/subscribe">Subscribe</Link></li>
        <li><Link to="/testimonials">Testimonials</Link></li>
      </ul>
    </nav>
  );
}

  export default Navbar