import React from 'react';
import Navbar from './components.js/Navbar';
import Explore from './components.js/Explore';
import WhyChooseUs from './components.js/WhyChooseUs';
import Subscribe from './components.js/Subscribe';
import Testimonials from './components.js/Testimonials';
import Footer from './components.js/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Explore />
      <WhyChooseUs />
      <Subscribe />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;