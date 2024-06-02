import React from 'react';
import '../styles/Subscriptionoptions.css';

function SubscribingOptions() {
  const subscriptionPlans = [
    {
      title: 'Basic Membership',
      price: 19.99,
      description: 'Access to gym facilities during regular hours.',
      benefits: ['Gym Facility Access', 'Cardio & Weight Training Equipment'],
    },
    {
      title: 'Standard Membership',
      price: 29.99,
      description: 'Basic membership benefits + access to group fitness classes.',
      benefits: [
        'Gym Facility Access',
        'Cardio & Weight Training Equipment',
        'Group Fitness Classes',
      ],
    },
    {
      title: 'Premium Membership',
      price: 44.99,
      description: 'Standard membership benefits + personalized training sessions.',
      benefits: [
        'Gym Facility Access',
        'Cardio & Weight Training Equipment',
        'Group Fitness Classes',
        'Personalized Training Sessions',
      ],
    },
  ];

  return (
    <section className="subscribe-options">
      <h2>Choose Your Perfect Plan</h2>
      <div className="plans-container">
        {subscriptionPlans.map((plan) => (
          <div key={plan.title} className="plan-card">
            <div className="plan-header">
              <h3>{plan.title}</h3>
              <p className="price">${plan.price} / Month</p>
            </div>
            <div className="plan-body">
              <p className="description">{plan.description}</p>
              <ul className="benefits">
                {plan.benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </div>
            <div className="plan-footer">
              <button>Sign Up Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SubscribingOptions;
