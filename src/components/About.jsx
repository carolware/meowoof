import React from 'react';
import Navbar from './Navbar';

export const About = () => {
  return (
    <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto'>
        <div className='text-center my-8'>
            <h2 className='text-5xl text-black font-semibold mb-2'>Sobre nós</h2>
            <p className='text-black text-lg mb-8'>
                Somos uma organização não governamental que acolhe e cuida de inúmeros animais que estão pela rua. Nosso trabalho já dura 15 anos, e, com o apoio dos voluntários, já cuidamos e realizamos o processo de adoção de aproximadamente 2.000 cãezinhos e gatinhos.
            </p>
        </div>
    </div>
  )
}

export default About;
