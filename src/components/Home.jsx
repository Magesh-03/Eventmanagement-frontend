
import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Footer from './Footer';
import Contact from './Contact';
import Services from './Services';
import About from './About';

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Services />
      <Contact />
      <About />
      <Footer />
    </>
  );
}

export default Home;

