import React from 'react';
import Navbar from './Navbar';

export const Contact = () => {
  return (
    <div className='px-4 lg:px-4 max-w-screen-2xl mx-auto py-16'>
        <div>
            <div className='text-center'>
                <h2 className='lg:text-5xl text-3xl font-bold mb-6 lg:lead'>
                   Dê um lar a um pet 
                </h2>
                <div>
                    <button className='btn-primary'>Entrar em contato</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact;
