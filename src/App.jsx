import React from 'react';
import "./App.css";
import { BrowserRouter as Router,Routes,Route,Navigate, BrowserRouter } from "react-router-dom";
import {Toaster} from "react-hot-toast";
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';

import Services from './components/Services';
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './components/Signup';
import Login from './components/Login'
import Home from './components/Home';
import Contact from './components/Contact';
import Bookings from './components/Bookings';
import Bookpage from './components/Bookpage';
import Cart from './components/Cart';

function App() {
  return (<BrowserRouter>

    <Routes>
    <Route path='/' element={<Signup/>}></Route>
     <Route path='/login' element={<Login/>}></Route>
     <Route path='/home' element={<Home/>}></Route>
     <Route path='/bookpage' element={<Bookpage/>}></Route>
     <Route path='/cart' element={<Cart/>}></Route>
  
    </Routes>
    </BrowserRouter>
     
     
  );
};

export default App
