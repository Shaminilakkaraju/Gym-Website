import React from 'react';
import Navbar from './components.js/Navbar';
import Explore from './components.js/Explore';
import WhyChooseUs from './components.js/WhyChooseUs';
import SubscriptionOptions from './components.js/Subscriptionoptions';
import Testimonials from './components.js/Testimonials';
import Footer from './components.js/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';


library.add(fab, fas);

function App() {
  return (
    <div>
      <Navbar />
      <Explore />
      <WhyChooseUs />
      <SubscriptionOptions />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;