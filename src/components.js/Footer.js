import React from 'react';
import styles from '../styles.css/Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.contactInfo}>
          <h4>Contact Us</h4>
          <p>123 Gym Street, Anytown USA</p>
          <p>Phone: 555-555-5555</p>
          <p>Email: info@gymwebsite.com</p>
        </div>
        <div className={styles.socialMedia}>
          <h4>Follow Us</h4>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.copyright}>
        &copy; 2023 Gym Website. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;