import React from 'react';
import styles from '../styles.css/Subscribe.module.css';

const Subscribe = () => {
  return (
    <section className={styles.subscribe} >
      <h2>Subscription Plans</h2>
      <div className={styles.pricingPlans}>
        <div className={styles.pricingPlan}>
          <h3>Basic</h3>
          <p className={styles.price}>$29/month</p>
          <ul>
            <li>Access to gym facilities</li>
            <li>Limited group classes</li>
            <li>Basic personal training</li>
          </ul>
          <a href="#" className={styles.ctaButton}>Sign Up</a>
        </div>
        <div className={styles.pricingPlan}>
          <h3>Premium</h3>
          <p className={styles.price}>$49/month</p>
          <ul>
            <li>Unlimited access to gym</li>
            <li>All group classes included</li>
            <li>Personalized training plan</li>
          </ul>
          <a href="#" className={styles.ctaButton}>Sign Up</a>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;