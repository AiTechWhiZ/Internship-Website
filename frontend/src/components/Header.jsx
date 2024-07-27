import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';
import LogoRectangular from '../Images/Logo/rectangularlogo.png';
import LogoCircular from '../Images/Logo/circularlogo.png';
import MobileImage from '../Images/Logo/name.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1041);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50); // Adjust scroll threshold as needed
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1041);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-logo">
            <picture>
              <source srcSet={LogoCircular} media="(max-width: 1041px)" />
              <img
                src={isScrolled ? LogoCircular : LogoRectangular}
                alt="logo"
                className={isScrolled ? 'circular' : 'rectangular'}
              />
            </picture>
            {isMobile && (
              <img
                src={MobileImage}
                alt="mobile-image"
                className="mobile-image"
              />
            )}
          </div>
          <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
          <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
            <li className="nav-item">
              <NavLink to="/" className="nav-links" activeclassname="active">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/products" className="nav-links" activeclassname="active">Products</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/digital-business-card" className="nav-links" activeclassname="active">Digital Business Card</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/tech-blog" className="nav-links" activeclassname="active">Tech Blog</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/engineering-projects" className="nav-links" activeclassname="active">Engineering Projects</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact-us" className="nav-links" activeclassname="active">Contact Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/login" className="nav-links" activeclassname="active">Login</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </main>
  );
};

export default Header;
