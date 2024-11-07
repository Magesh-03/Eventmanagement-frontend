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
function App() {
  return (<BrowserRouter>

    <Routes>
    <Route path='/' element={<Signup/>}></Route>
     <Route path='/login' element={<Login/>}></Route>
     <Route path='/home' element={<Home/>}></Route>
    </Routes>
    </BrowserRouter>
     
     
  );
};

export default App
