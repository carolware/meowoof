import React from 'react';
import './App.css';
import Navbar from '../src/components/Navbar'
import  Home from './components/Home'; 
import About from './components/About.jsx';
import HowTo from './components/HowTo.jsx';

function App() {
  return (
    <>
        <Navbar />
        <Home />
        <About />
        <HowTo />
    </>
  );
}


export default App;
