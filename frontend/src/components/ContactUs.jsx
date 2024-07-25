import React, { useState } from 'react';
import '../styles/ContactUs.css';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function ContactUs() {

  const [username, setUserName] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [message, setMessage] = useState()
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault() //Prevent default submission
    axios.post('http://localhost:3001/contact', {username, email, phone, message}) //Pass the data
    .then(result => { console.log(result)
      setSuccessMessage('Details uploaded successfully!');
      navigate('/contact-us')
    })
    .catch(err => console.log(err))
  }

  return (
    <main>
      <Header />
      <div className="page-header"></div>
      <div className="contact-us-container">
        <div className="contact-details">
          <h2>Our Office</h2>
          <div className="address">
            <p>A-101, Ganpti krupa niwas,<br/>
            pt. Dindayal road,<br/> Dombivli(W)- 421202.
            </p>
          </div>
          <div className="contact-info">
            <p><a className='animation' href="tel:+917666308198">+91 7666308198</a></p>
            <p><a className='animation' href="mailto:info@techasiamechatronics.com">info@techasiamechatronics.com</a></p>
          </div>
          <div className="map">
            <iframe 
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.9067518067927!2d73.1119931733725!3d19.199274748094588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bf878e333687%3A0xe888f9ff8893f96e!2stechAsia%20Mechatronics%20Private%20Limited!5e0!3m2!1sen!2sin!4v1720113540290!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            >          
            </iframe>
          </div>
        </div>
        <div className="contact-form">
          <h2>Get in touch</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input className='animation' type="text" id="username" name="username" placeholder='*UserName' onChange={(e) => setUserName(e.target.value)} required />
              <input className='animation' type="email" id="email" name="email" placeholder='*Email' onChange={(e) => setEmail(e.target.value)} required />
              <input className='animation' type="tel" id="phone" name="phone" placeholder='*Phone No' onChange={(e) => setPhone(e.target.value)} required />
              <textarea className='animation' rows="14" id="message" name="message" placeholder='*Message' onChange={(e) => setMessage(e.target.value)} required></textarea>
            </div>
            <button type="submit" className='btns animation'>Send</button>
            {successMessage && <p className="success-message">{successMessage}</p>}
          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default ContactUs;