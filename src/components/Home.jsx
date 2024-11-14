
import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Footer from './Footer';
import Services from './Services';
import About from './About';
import CustomerReviews from './CustomerReviews';
function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Services />
      <CustomerReviews/>
      <About />
      <Footer />
    </>
  );
}

export default Home;

