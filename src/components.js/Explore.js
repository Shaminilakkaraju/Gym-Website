import React from 'react';
import styles from '../styles.css/Explore.module.css';
import gymbg from '../images/gym bg.jpg'

function Explore() {
  return (
    <section className={styles.explore}>
      <div className={styles.heroImage}>
        <h1>Welcome to Our Gym</h1>
        <p>Discover the best fitness experience in town.</p>
        <a href="#" className={styles.ctaButton}>Join Now</a>
      </div>
    </section>
  );
}

export default Explore;
