import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Footer.css';
import logo from '../Images/Logo/techAsia.png'; // Ensure you have a logo.png in the images folder

const Footer = () => {
  return (
    <footer id="footer">
      <div className="containers">
        <div className="footer-widgets">
          <div className="footers-widget">
            <img src={logo} alt="TechAsia Logo" width="150" height="61" />
            <p>Established in 2016</p>
          </div>
          <div className="footer-widget">
            <h4>Navigation</h4>
            <div className='line'>
              <ul>
                <li><NavLink to="/tech-blog">Blog</NavLink></li>
                <hr />
              </ul>
            </div>
            <div className='line'>
              <ul>
                <li><NavLink to="/products">Products</NavLink></li>
                <hr />
              </ul>
            </div>
            <div className='line'>
              <ul>
                <li><NavLink to="/contact-us">Contact Us</NavLink></li>
                <hr />
              </ul>
            </div>
          </div>
          <div className="footer-widget">
            <h4>Contact Us</h4>
            <p>
              techAsia mechatronics Pvt. Ltd.<br />
              A-101, Ganpti krupa niwas,<br />
              pt. Dindayal road, Dombivli(W)- 421202.<br />
              <a href="tel:+917666308198">+91 7666308198</a><br />
              <a href="mailto:info@techasiamechatronics.com">info@techasiamechatronics.com</a>
            </p>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>&copy; 2024 techAsia Mechatronics - All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
