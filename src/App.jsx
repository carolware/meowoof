import React from 'react';
import './App.css';
import Navbar from '../src/components/Navbar'
import  Home from './components/Home'; 
import About from './components/About.jsx';
import HowTo from './components/HowTo.jsx';
import Contact from './components/Contact.jsx';
import MyFooter from './components/MyFooter.jsx';

function App() {
  return (
    <>
        <Navbar />
        <Home />
        <About />
        <HowTo />
        <Contact />
        <MyFooter />
    </>
  );
}

export default App;
