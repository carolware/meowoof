import React, { useEffect, useState } from 'react';
import logoMeowoof from '../assets/logoMeowoof.png';
import { Link } from 'react-scroll';

//icones

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
      window.addEventListener('scroll', handleScroll);
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
      <header className="w-full bg-mainOrange fixed top-0 lef-0 right-0">
        <nav>
          <div>
            <a href="">
              <img
                className="w-16 inline-block items-center object-contain"
                src={logoMeowoof}
                alt="logo do abrigo cachorro e gatinho"
              />
            </a>
            <ul className="md:flex space-x-12 hidden">
              {navItems.map(({ link, path }) => (
                <Link
                  to={path}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  key={path}
                  className="block text-base text-black hover:text-white"
                >
                  {link}
                </Link>
              ))}
            </ul>
        
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
