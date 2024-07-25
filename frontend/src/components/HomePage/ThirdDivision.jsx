import React from 'react';
import '../../styles/Home/ThirdDivision.css';
import tile1 from '../../Images/Home/ThirdDiv/tile_01S.jpg';
import tile2 from '../../Images/Home/ThirdDiv/tile_02S.jpg';
import tile3 from '../../Images/Home/ThirdDiv/tile_03S.jpg';
import tile4 from '../../Images/Home/ThirdDiv/tile_04S.jpg';
import tile5 from '../../Images/Home/ThirdDiv/tile_05S.jpg';
import tile6 from '../../Images/Home/ThirdDiv/tile_06S.jpg';

const ThirdDivision = () => {
    const products = [
        {
            id: 1,
            name: 'Our Controllers',
            description: (
                <>
                    <strong>Our own products for industrial and domestic need</strong>
                    <p className='newp'>
                        We have good knowledge of industrial and domestic requirements and standards.<br/>
                        Accordingly, we developed timers, water level controllers, angle indicators, wifi security, and remote control with android app etc.
                    </p>
                </>
            ),
            imageUrl: tile1,
        },
        {
            id: 2,
            name: 'Controllers and Circuits Making',
            description: (
                <>
                    <strong>We are specialised in controller design to meet customer needs.</strong>
                    <p className='newp'>
                        We design, develop and manufacture controllers as per customer requirement under their branding and quality standards.<br/>
                        We worked for Panasia, Western India Electromedical Systems Private Limited, Tristar etc.
                    </p>
                </>
            ),
            imageUrl: tile2,
        },
        {
            id: 3,
            name: 'PLC Automation',
            description: (
                <>
                    <strong>We work with all leading PLC brands like Allen Bradley, Delta etc.</strong>
                    <p className='newp'>
                        With our good experience in PLC automation, we worked with some known industries to build their automated systems as per their requirements.
                        We work until customer satisfaction and provide lifetime support.
                    </p>
                </>
            ),
            imageUrl: tile3,
        },
        {
            id: 4,
            name: 'Apfc Panels',
            description: (
                <>
                    <strong>We study your electricity bill accordingly we build APFC panels.</strong>
                    <p className='newp'>
                        We managed to control electricity bill for MCGM and Orange electrodes and saved their penalty.<br/>
                        They recovered cost within three months onward now is saving.
                    </p>
                </>
            ),
            imageUrl: tile4,
        },
        {
            id: 5,
            name: 'Pcb Soldering',
            description: (
                <>
                    <strong>We do soldering for high quantity need.</strong>
                    <p className='newp'>
                        We can deliver best quality with quality test for error-free operation of your circuit.<br/>
                        Also have pick and place facility for LED light manufacture and SMD PCBs.
                    </p>
                </>
            ),
            imageUrl: tile5,
        },
        {
            id: 6,
            name: 'Engineering Projects',
            description: (
                <>
                    <strong>We guide college students in their engineering projects.</strong>
                    <p className='newp'>
                        We provide the best quality self-learning project kits with guidance and training to suit your needs.<br/>
                        We guide and help in every stage of the project.
                    </p>
                </>
            ),
            imageUrl: tile6,
        },
    ];

    return (
        <div className='third-division'>
            <div className='content'>
                <h2>What We Do?</h2>
                <div className="product-grid">
                    {products.map(product => (
                        <div key={product.id} className="product-tile">
                            <div className="product-front">
                                <img src={product.imageUrl} alt={product.name} />
                                <h3>{product.name}</h3>
                            </div>
                            <div className="product-back">
                                {product.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ThirdDivision;
