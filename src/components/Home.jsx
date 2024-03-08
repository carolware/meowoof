import { Carousel } from 'flowbite';
import React from 'react';
import Navbar from './Navbar';
import Elipse from '../assets/Elipse.png'; 
import Dog from '../assets/Dog.png'; 



const Home = () => {
  return (
    <>
      <Navbar />
      <div className="mt-28"> {/* Adicione uma margem superior à div */}
        <img className='w-1/4 h-1/2 lg:w-1/4 md:h-1/2' src={Elipse} alt="elipse"/>
      </div>
      <div className="-mt-96"> {/* Adicione uma margem superior à div */}
        <img className='w-1/4 h-1/2 lg:w-1/4 md:h-1/2' src={Dog} alt="elipse"/>
      </div>
    </>
  );
};

export default Home;
