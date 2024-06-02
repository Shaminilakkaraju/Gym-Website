import React from 'react';
import '../styles/WhyChooseUs.css';
import gymequipment from '../images/gym equipment.jpeg';
import gymtrainer from '../images/gym trainer.jpeg';
import gymfriendlycommunity from '../images/gym friendly community.jpeg';

function WhyChooseUs() {
  const features = [
    {
      title: 'State-of-the-Art Equipment',
      description: 'We have the latest fitness equipment to help you achieve your goals.',
      image: gymequipment,
      alt: 'Gym Equipment',
    },
    {
      title: 'Experienced Trainers',
      description: 'Our team of certified trainers will guide you every step of the way.',
      image: gymtrainer,
      alt: 'Gym Trainer',
    },
    {
      title: 'Friendly Community',
      description: 'Join a supportive community of fitness enthusiasts.',
      image: gymfriendlycommunity,
      alt: 'Gym Friendly Community',
    },
  ];

  return (
    <section className= 'why-Choose-Us'>
      <h2>Why Choose Us?</h2>
      <div className= 'feature-Cards'>
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
}

function FeatureCard({ title, description, image, alt }) {
  return (
    <div className='feature-Card'>
      <img src={image} alt={alt} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default WhyChooseUs;
