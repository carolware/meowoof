import React from 'react';
import Navbar from './Navbar';
import Dog from '../assets/Dog.png';
import Cat from '../assets/Cat.png';
import { Carousel } from 'flowbite-react';

export const Home = () => {
  return (
    <div className='bg-grey'>
      <Navbar />
      <div className="px-4 lg:px-14 mx-auto min-h-screen h-screen bg-[#FFF6E8]">
        <Carousel className='mx-auto w-full'>
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img className='w-full' src={Dog} alt='Cachorrinho' />
            </div>
            <div className='md:w-1/2'>
              <h1 className='lg:text-5xl md:text-4xl text-3xl font-medium mb-4 text-black md:w-3/4 leading-snug text-left'>
                Ganhe um companheiro
                <span className='font-bold block lg:text-6xl md:text-5xl text-3xl'>
                  para a vida
                </span>
              </h1>
              <p className='lg:text-lg md:text-base text-sm mb-8 text-left'>
                Adotar um animal de estimação traz muita alegria e companheirismo para sua vida. Considere adotar um novo membro para sua família hoje mesmo e compartilhe momentos inesquecíveis juntos!
              </p>
              <button className='px-7 py-2 bg-mainOrange text-white rounded hover:bg-black transition-all duration-300 hover:-translate-y-4 text-left'>
                Adotar agora
              </button>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img className='w-full' src={Cat} alt='Gatinho' />
            </div>
            <div className='md:w-1/2'>
              <h1 className='lg:text-5xl md:text-4xl text-3xl font-medium mb-4 text-black md:w-3/4 leading-snug text-left'>
                Não compre,
                <span className='font-bold block lg:text-6xl md:text-5xl text-3xl'>
                  adote!
                </span>
              </h1>
              <p className='lg:text-lg md:text-base text-sm mb-8 text-left'>
                Quando você adota um pet, salva duas vidas: a sua e a dele.
              </p>
              <button className='px-7 py-2 bg-mainOrange text-white rounded hover:bg-black transition-all duration-300 hover:-translate-y-4 text-left'>
                Adotar agora
              </button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
