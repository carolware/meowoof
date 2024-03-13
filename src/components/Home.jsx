import React from 'react';
import Navbar from './Navbar';
import Elipse from '../assets/Elipse.png';
import Dog from '../assets/Dog.png';
import { FiArrowRight } from 'react-icons/fi';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={Elipse} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Não compre, 
          </h1>
          <h1 className="secondary-heading">
            adote!
          </h1>
          <p className="primary-text">
            Quando você adota um pet, salva duas vidas: a sua e a dele.
          </p>
          <button className="secondary-button">
           Adotar agora<FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={Dog} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Home;
