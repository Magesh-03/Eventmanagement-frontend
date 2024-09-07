import React from 'react';
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import {Toaster} from "react-hot-toast";
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Services from './components/Services';
import About from './components/About';
function App() {
  return (
    <Router>
     
     <Navbar/>
     <HeroSection/>
     <Services/>
     <About/>
     <Contact/>
     <Footer/>
     <Toaster/>
     </Router>
  );
};

export default App