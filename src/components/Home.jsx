import { Carousel } from 'flowbite';
import React from 'react';
import Navbar from './Navbar';
import Elipse from '../assets/Elipse.png'; 
import Dog from '../assets/Dog.png'; 
import { FiArrowRight } from 'react-icons/fi'



const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className='home-text-section mt-28'>
        <h1 className='primary-subheading'>Não compre,</h1>
        <h1 className='secondary-subheading '>adote!</h1>
        <p className='primary-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed sunt consectetur accusantium porro? Dolores, odit commodi quasi corporis consequuntur saepe porro voluptate exercitationem, vero laudantium praesentium, deserunt molestiae quod minus.</p>
        <button className='secondary-button'>Adote agora mesmo <FiArrowRight/></button>
      </div>
    </div>
    
  );
};
export default Home;
