import React, { useState } from 'react'
import '../styles/DigitalBusinessCard.css'
import Header from './Header'
import Footer from './Footer'
import name from '../Images/Logo/name.png'
import image1 from '../Images/DBC/image1.jpg'
import image2 from '../Images/DBC/image2.jpg'
import image3 from '../Images/DBC/image3.jpg'
import image4 from '../Images/DBC/image4.jpg'
import image5 from '../Images/DBC/image5.jpg'
import image6 from '../Images/DBC/image6.jpg'
import image7 from '../Images/DBC/image7.jpg'
import image8 from '../Images/DBC/image8.jpg'
import image9 from '../Images/DBC/image9.jpg'
import image10 from '../Images/DBC/image10.jpg'
import digital_buisnesscard from '../Images/DBC/digital buisnesscard.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function DigitalBusinessCard() {

  const [fullname, setFullname] = useState()
  const [contactno, setContactNo] = useState()
  const [email, setEmail] = useState()
  const [url, setUrl] = useState()
  const [address, setAddress] = useState()
  const [service, setService] = useState()
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/dbc', {fullname, contactno, email, url, address, service})
    .then(result => { console.log(result)
      setSuccessMessage('Details uploaded successfully!');
      setTimeout(() => {
      navigate('/digital-business-card')
    }, 2000); // Redirect after 2 seconds
    })
    .catch(err => console.log(err))
  }



  return (
    <main>
      <Header />
      <div className="page-header"></div>
      <div className="main_card">
        <section className="Digital-business-card">
          <div className="left-column">
            <h1>
              PAPERLESS DIGITAL BUISNESS<br/>CARD BY
              <img src={name} alt="Name" className="name-image" />
            </h1>
            <p>
              Forget about old fashioned printed visiting cards that generally go to the dustbin. With our Digital Business Card, 
              you can create and share your contact information that has actionable one-click events like Call, Email, WhatsApp, 
              Navigation, Website Link, Social Links, Maps, and more.
            </p>
          </div>
          <div className="right-column">
            <div className="business-card">
              <img  src={digital_buisnesscard} alt="Digital Business Card" />
            </div>
          </div>
        </section>
        <section className="features">
          <div className="feature">
            <img src={image1} alt="Feature 1" />
            <p>Make a great first impression with Digital Business card</p>
          </div>
          <div className="feature">
            <img src={image2} alt="Feature 2" />
            <p>Digital vCard is easy to update and modify. Sharing it is just one click away</p>
          </div>
          <div className="feature">
            <img src={image3} alt="Feature 3" />
            <p>No need to carry a bunch of cards for exhibitions and Business visits</p>
          </div>
          <div className="feature">
            <img src={image4} alt="Feature 4" />
            <p>Never run out of Business card</p>
          </div>
          <div className="feature">
            <img src={image5} alt="Feature 5" />
            <p>Why spend more? You can save money using a paperless business card</p>
          </div>
          <div className="feature">
            <img src={image6} alt="Feature 6" />
            <p>Paper business cards end up in a drawer, or even worse, in the trash</p>
          </div>
          <div className="feature">
            <img src={image7} alt="Feature 7" />
            <p>Share your vCard URL through any messaging platform like SMS, WhatsApp, Telegram, Email, etc.</p>
          </div>
          <div className="feature">
            <img src={image8} alt="Feature 8" />
            <p>Digital card is responsive so it can be viewed on any device like mobile, tablet, or PC</p>
          </div>
          <div className="feature">
            <img src={image9} alt="Feature 9" />
            <p>It is interactive so your recipient can click on your contact info to get in touch with you</p>
          </div>
          <div className="feature">
            <img src={image10} alt="Feature 10" />
            <p>Contribute to saving nature by going paperless</p>
          </div>
          <div className="new-section">
            <h2>mydigitalcard.page.link/priyesh</h2>
            <p>Click to view my vCard</p>
            <div className="video-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/U-5adrExIQM?si=4aEpqWsE1_cLVrNn" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
          </div>
          <div className="pricing-section">
            <h2>Yearly</h2>
            <p className="price">₹999 / 12 Months</p>
            <hr />
            <ul>
              <li>Access to all features</li>
              <li>No Hidden charges</li>
              <li>Unlimited sharing</li>
              <li>Unlimited Page Views</li>
              <li>Dedicated URL</li>
            </ul>
          </div>
          <div className="form-section">
            <h2>Please send us details to get your interactive digital business card</h2>
            <div className="form-container">
              <div className="form-instructions">
                <p>1. Your Image</p>
                <p>Image format: JPEG or PNG</p>
                <p>Minimum size: Square* (590 x 590) px</p>
                <p>2. Company LOGO</p>
                <p>Image format: PNG*</p>
                <p>Minimum size: any</p>
                <p>3. Tagline / products / services</p>
                <p>4. Name and Designation</p>
                <p>5. Contact number</p>
                <p>6. Email address</p>
                <p>7. Website</p>
                <p>8. Address, Google map location</p>
                <p>*employee number / any extra details (for employee)</p>
              </div>
              <form onSubmit={handleSubmit} >
                <input type="text" name="fullname" placeholder="*Full Name" onChange={(e) => setFullname(e.target.value)} required />
                <input type="text" name="contact" placeholder="*Contact No." onChange={(e) => setContactNo(e.target.value)} required />
                <input type="email" name="email" placeholder="*Email" onChange={(e) => setEmail(e.target.value)} required />
                <input type="url" name="website" placeholder="Website" onChange={(e) => setUrl(e.target.value)} />
                <textarea name="address" placeholder="Address" onChange={(e) => setAddress(e.target.value)} ></textarea>
                <textarea name="tagline" placeholder="Tagline/ Products/ Services" onChange={(e) => setService(e.target.value)} ></textarea>
                <button type="submit">Submit</button>
                {successMessage && <p className="success-message">{successMessage}</p>}
              </form>
            </div>
          </div>
        </section>
        </div>
      <Footer />
    </main>
  );
};

export default DigitalBusinessCard;
