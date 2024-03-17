import React from 'react';
import Navbar from './Navbar';

export const HowTo = () => {
  const HowTo = [
    {
      id: 1,
      title: 'Entre em contato',
      descroption:
        'O primeiro passo para adotar seu novo amigo é entrar em contato conosco! Faremos uma pequena entrevista para saber se está apto para receber o pet em casa e, caso, seja aprovado, poderá vir buscá-lo no abrigo!',
      image: '/src/assets/Contact.png',
    },
    {
      id: 2,
      title: 'Faça uma entrevista',
      descroption:
        'Nós da Meowoof queremos o melhor para nossos pets. Por isso, nós sempre realizamos uma entrevista para saber se o dono(a) tem condições de cuidar dos pequenos da melhor forma! ',
      image: '/src/assets/Interview.png',
    },
    {
      id: 3,
      title: 'Busque seu pet',
      descroption:
        'Após todos esses procedimentos, é só levar seu doguinho ou gatinho para casa! Lembrando que todos nossos pets são vacinados e castrados, e levam para casa um saco de ração adequada para cada um.',
      image: '/src/assets/Home.png',
    },
  ];
  return (
    <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto'>
      <div className='text-center my-8'>
        <h2 className='text-5xl text-black font-bold mb-2'>Como funciona</h2>
        <p className='text-black text-lg mb-8'>
          Veja o passo a passo para adotar um de nossos pets!
        </p>
      </div>
      <div className='flex flex-col md:flex-row md:justify-center md:gap-8'>
        {HowTo.map((HowTo) => (
          <div key={HowTo.id} className='px-4 py-8 text-center md:w-[300px] md:h-80 flex flex-col justify-center items-center'>
            <div>
              <div className='h-14 w-14 mx-auto'>
                <img src={HowTo.image} alt='icones' className='-ml-5' />
              </div>
              <h4 className='text-2xl font-semibold mb-2'>{HowTo.title}</h4>
              <p className='text-sm text-justify'>{HowTo.descroption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowTo;
