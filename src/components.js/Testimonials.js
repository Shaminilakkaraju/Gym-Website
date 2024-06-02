import React from 'react';
import '../styles/Testimonials.css'
import customer1 from '../images/customer1.jpg';
import customer2 from '../images/customer2.jpg';

const testimonials = [
  {
    quote: '"I\'ve been a member for 2 years and the trainers have helped me transform my body."',
    author: {
      name: 'Olivia Brown',
      title: 'Satisfied Member',
      image: customer1,
    },
  },
  {
    quote: '"The gym has a great atmosphere and the equipment is top-notch. Highly recommended!"',
    author: {
      name: 'Benjamin Lee',
      title: 'Loyal Member',
      image: customer2,
    },
  },
];

function Testimonials() {

  return (
    <section className='testimonials'>
      <h2>What Our Members Say</h2>
        {testimonials.map((testimonial) => (
          <div key={testimonial.quote} className='testimonial-Card'>
            <div className='testimonial-Author'>
              <img src={testimonial.author.image} alt={testimonial.author.name} />
              <div>
                <h4>{testimonial.author.name}</h4>
                <p>{testimonial.author.title}</p>
                <p>{testimonial.quote}</p>
              </div>
            </div>
          </div>
        ))}
    </section>
  );
}

export default Testimonials;
