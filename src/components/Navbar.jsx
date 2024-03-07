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

  const navItems = [
    { link: 'Página inicial', path: 'home' },
    { link: 'Sobre nós', path: 'about' },
    { link: 'Como funciona', path: 'howTo' },
    { link: 'Contato', path: 'contact' },
  ];

  return (
    <>
      <header className={`w-full bg-mainOrange fixed top-0 left-0 right-0 ${isSticky ? 'border-b' : ''}`}>
        <nav className={`py-0 lg:px-14 px-4 ${isSticky ? 'sticky top-0 left-0 right-0 border-b duration-300' : ''}`}>
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
                    className="block text-sm text-black hover:text-white"
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
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;