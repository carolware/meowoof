import React, { useEffect, useState } from 'react';
import logoMeowoof from '../assets/logoMeowoof.png';
import { Link } from 'react-scroll';

// Ícones
import { FaXmark, FaBars } from 'react-icons/fa6';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navItems = [
    { link: 'Página inicial', path: 'home' },
    { link: 'Sobre nós', path: 'about' },
    { link: 'Como funciona', path: 'howTo' },
    { link: 'Contato', path: 'contact' },
  ];

  return (
    <>
      <header className={`w-full bg-mainOrange fixed top-0 left-0 right-0 ${isSticky ? 'border-b' : ''}`}>
        <nav className={`py-0 lg:px-14 lg:bg-mainOrange md:bg-mainOrange px-4 ${isSticky ? 'sticky top-0 left-0 right-0 border-b duration-300' : ''}`}>
          <div className="flex justify-between items-center">
            <a href="/">
              <img
                className="w-16 inline-block items-center object-contain"
                src={logoMeowoof}
                alt="logo do abrigo cachorro e gatinho"
              />
            </a>

            <ul className={`md:flex md:space-x-12 md:justify-center items-center hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
              {navItems.map(({ link, path }) => (
                <li key={path}>
                  <Link
                    to={path}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    className="block text-base text-white hover:text-black"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="focus:outline-none focus:text-black"
              >
                {isMenuOpen ? (
                  <FaXmark className="h-6 w-6 text-black" />
                ) : (
                  <FaBars className="h-6 w-6 text-black" />
                )}
              </button>
            </div>

            {/* Elemento para escurecer o fundo */}
            {isMenuOpen && (
              <div
                className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50 z-40"
                onClick={toggleMenu} // Fechar o menu quando clicado no fundo escuro
              />
            )}

            <div className={`space-y-4 px-4 mt-16 py-7 md:hidden bg-mainOrange ${isMenuOpen ? 'block fixed top-0 right-0 left-0 z-50' : 'hidden'}`}>
              {navItems.map(({ link, path }) => (
                <Link
                  to={path}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  key={path}
                  className='block text-sm text-black hover:text-white'
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
