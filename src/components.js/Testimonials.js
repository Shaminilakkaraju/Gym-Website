import React from 'react';
import styles from '../styles.css/Testimonials.module.css';
import customer1 from '../images/customer1.jpg';
import customer2 from '../images/customer2.jpg';

function Testimonials() {
  return (
    <section className={styles.testimonials} >
      <h2>What Our Members Say</h2>
      <div className={styles.testimonialCards}>
        <div className={styles.testimonialCard}>
          <p>"I've been a member for 2 years and the trainers have helped me transform my body."</p>
          <div className={styles.testimonialAuthor}>
            <img src={customer1} alt="Customer 1" />
            <div>
              <h4>Benjamin Lee</h4>
              <p>Satisfied Member</p>
            </div>
          </div>
        </div>
        <div className={styles.testimonialCard}>
          <p>"The gym has a great atmosphere and the equipment is top-notch. Highly recommended!"</p>
          <div className={styles.testimonialAuthor}>
            <img src={customer2} alt="Customer 2" />
            <div>
              <h4>Olivia Brown</h4>
              <p>Loyal Member</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Testimonials;