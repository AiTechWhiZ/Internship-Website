import React from 'react';
import '../styles/EngineeringProjects.css';
import Header from './Header';
import Footer from './Footer';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const EngineeringProjects = () => {
  return (
    <main>
      <Header />
      <div className="page-header">Engineering Projects</div>
      <div className="engineering-projects">
        <div className="content-wrapper fade-in">
          <div className="intro">
            <div className="title">
              <h2>Need ideas and support for your engineering projects?</h2>
            </div>
            <p>Select from a wide list of BE engineering projects. We provide the best quality self-learning project kits with guidance and training to suit your needs. All of these projects have been put up and suggested referring to IEEE papers.</p>
            <p>We Provide Full Support Until Project Submission</p>
          </div>
            
          <Carousel className="carousel" autoPlay interval={2000} infiniteLoop showThumbs={false}>
            <div>
              <img className="carousel-image" src="https://techasiamechatronics.com/wp-content/uploads/2020/04/1.jpg" alt="Project 1" />
            </div>
            <div>
              <img className="carousel-image" src="https://techasiamechatronics.com/wp-content/uploads/2020/04/3.jpg" alt="Project 2" />
            </div>
            <div>
              <img className="carousel-image" src="https://techasiamechatronics.com/wp-content/uploads/2020/04/4.jpg" alt="Project 3" />
            </div>
            <div>
              <img className="carousel-image" src="https://techasiamechatronics.com/wp-content/uploads/2020/04/5.jpg" alt="Project 4" />
            </div>
            <div>
              <img className="carousel-image" src="https://techasiamechatronics.com/wp-content/uploads/2020/04/6.jpg" alt="Project 5" />
            </div>
          </Carousel>
        </div>

        <div id="main-list">
          <h2>Project List:</h2>
        </div>

        <div className="project-list">
          <div className="project-column">
            <h3>Embedded Projects:</h3>
            <ol>
              <li>Vehicle Tracking By GPS - GSM</li>
              <li>Automatic door for trains</li>
              <li>Beacon Flasher Using Micro-controller</li>
              <li>Password Based Circuit Breaker</li>
              <li>Solar Powered Auto irrigation System</li>
              <li>A CAN Protocol based Embedded System to Avoid Rear End Collision of Vehicles</li>
              <li>Advanced Vehicle Control Systems</li>
              <li>Highway Cruise Control Using RF-id Technology and CAN Protocol with Parental Lock for Automotive</li>
              <li>PC Login System Using Finger Print Recognition</li>
              <li>Remote Measurement And Control System For Greenhouse</li>
              <li>Auto baby cry detector</li>
              <li>TV remote controller using pic</li>
              <li>Human speed detection</li>
              <li>Crop protection system</li>
              <li>Vehicle thief alert</li>
            </ol>
          </div>

          <div className="project-column col2">
            <h3>Raspberry Pi Projects:</h3>
            <ol>
              <li>IOT flood monitoring system.</li>
              <li>IOT Color based monitoring system.</li>
              <li>Object tracker.</li>
              <li>Theft Detection.</li>
              <li>Robotic ARM.</li>
              <li>Touch screen railway ticketing.</li>
              <li>Solar powered computer.</li>
              <li>Data cart.</li>
              <li>Oscilloscope.</li>
              <li>Email/sms notifier for door.</li>
              <li>Car computer.</li>
            </ol>
          </div>

          <div className="project-column">
            <h3>Android App Related Projects:</h3>
            <div className="column-info">
              <h3>Didn't find your desired project?</h3>
              <p>Submit your Requirement on Contact page or send email on</p>
              <p><a href="mailto:info@techasiamechatronics.com" className="email-link">info@techasiamechatronics.com</a></p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default EngineeringProjects;
