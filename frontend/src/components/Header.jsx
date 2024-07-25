import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';
import LogoRectangular from '../Images/Logo/rectangularlogo.png';
import LogoCircular from '../Images/Logo/circularlogo.png';
import MobileImage from '../Images/Logo/name.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = window.innerWidth <= 1041;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <picture>
              <source srcSet={LogoCircular} media="(max-width: 1041px)" />
              <img
                src={isOpen ? LogoCircular : LogoRectangular}
                alt="logo"
                className={`logo ${isOpen ? 'circular-logo' : 'rectangular-logo'}`}
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
