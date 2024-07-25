import React from 'react';
import '../../styles/Home/FirstDivision.css'; // Ensure you have your CSS for styling
import video from '../../Images/Home/video/large1.mp4';

const FirstDivision = () => {
    return (
        <section className="first-division">
            <div className="contentFD">
                <h1>Welcome to Our Website</h1>
                <p id='first'>Here you'll find the best products and solutions for your needs.</p>
            </div>
            <video autoPlay muted loop className="background-video">
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </section>
    );
};

export default FirstDivision;
