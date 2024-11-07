
import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Footer from './Footer';
import Services from './Services';
import About from './About';
import Contact from './Contact'

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Services />
      <Contact/>
      <About />
      <Footer />
    </>
  );
}

export default Home;

