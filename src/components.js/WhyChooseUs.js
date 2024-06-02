import React from 'react';
import styles from '../styles.css/WhyChooseUs.module.css';
import gymequipment from '../images/gym equipment.jpeg';
import gymtrainer from '../images/gym trainer.jpeg';
import gymfriendlycommunity from '../images/gym friendly community.jpeg'

function WhyChooseUs() {
  return (
    <section className={styles.whyChooseUs}>
      <h2>Why Choose Us?</h2>
      <div className={styles.featureCards}>
        <div className={styles.featureCard}>
          <h3>State-of-the-Art Equipment</h3>
          <p>We have the latest fitness equipment to help you achieve your goals.</p>
          <div className={styles.whychooseusauthor}>
            <img src={gymequipment} alt="gym equipment"/>
            </div>
        </div>
        <div className={styles.featureCard}>
          <h3>Experienced Trainers</h3>
          <p>Our team of certified trainers will guide you every step of the way.</p>
          <div className={styles.whychooseusauthor}>
            <img src={gymtrainer} alt="gym trainer"/>
            </div>
        </div>
        <div className={styles.featureCard}>
          <h3>Friendly Community</h3>
          <p>Join a supportive community of fitness enthusiasts.</p>
          <div className={styles.whychooseusauthor}>
            <img src={gymfriendlycommunity} alt="gym friendlycommunity"/>
            </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;