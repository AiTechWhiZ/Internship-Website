import React from 'react';
import '../../styles/Home/FourthDivision.css'; // Ensure you have your CSS for styling
import client1 from '../../Images/Home/FourthDiv/c1.png';
import client2 from '../../Images/Home/FourthDiv/c2.jpg';
import client3 from '../../Images/Home/FourthDiv/c3.jpg';
import client4 from '../../Images/Home/FourthDiv/c4.jpg';
import client5 from '../../Images/Home/FourthDiv/c5.jpg';
import client6 from '../../Images/Home/FourthDiv/c6.jpg';

// Dummy data for client logos and descriptions
const clients = [
    { 
      id: 1, 
      logo: client1, 
      name: 'Comfort Products', 
      description: 'Automated manual hydraulic machine used for pipe bending machine using PLC for high volume production.' 
    },
    { 
      id: 2, 
      logo: client2, 
      name: 'PanAsia Engineers Pvt Ltd', 
      description: 'We supply DVCB (automatic condenser fan regulator) since 2016, Also Developed Comby controller for Panasia. They are Innovative HVAC manufactures with many Patented technologies.'
    },
    { 
      id: 3, 
      logo: client3, 
      name: 'Orange Electronics', 
      description: 'Installed Digital Timer ( techAsia make) with buzzer for Electrode powder mixing timing maintaining and monitoring. They are leading welding rods manufactures in India.' 
    },
    { 
      id: 4, 
      logo: client4, 
      name: 'MCGM', 
      description: 'Designed and Installation of Water supply valve opening and closing angle indicator. Power Factor Correction Panel for pumping station.',
    },
    { 
      id: 5, 
      logo: client5, 
      name: 'Riya Industries', 
      description: 'Upgraded Steel bottle base welding machine using PLC (Retrofitting). They are the first Indian steel bottle manufactures.' 
    },
    { 
      id: 6, 
      logo: client6, 
      name: 'Wiespl', 
      description: 'We designed Controller and filter life indicator for Air filter and Sterilizer units for them. They are in the business of steel operation theater laminar air flow system, for Hospital.' 
    },
    // Add more clients as needed
];

const FourthDivision = () => {
    // Duplicate clients to ensure smooth infinite scrolling
    const duplicatedClients = [...clients, ...clients];

    return (
        <section className="fourth-division">
            <div className="description-box">
                <h2>Our Esteemed Clients</h2>
                <p>
                    Our clients are at the heart of everything we do. We take pride in delivering
                    exceptional service and solutions to our esteemed clients across various sectors.
                </p>
            </div>
            <div className="clients-container">
                <div className="clients-slider">
                    {duplicatedClients.map((client, index) => (
                        <div key={index} className="client-item">
                            <p className="client-description">{client.description}</p>
                            <img src={client.logo} alt={client.name} className="client-logo" />
                            <p className="client-name">{client.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FourthDivision;
