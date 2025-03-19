import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Project.css';

// Import images for each category
import residentialImage1 from '../../assets/residential2.jpg';
import residentialImage2 from '../../assets/residential4.jpg';
import residentialImage3 from '../../assets/commercial3.jpg';
import commercialImage1 from '../../assets/commercial.jpg';
import commercialImage2 from '../../assets/commercial2.jpg';
import commercialImage3 from '../../assets/commercial3.jpg';
import consultationImage1 from '../../assets/consultancy.jpg';
import consultationImage2 from '../../assets/Consultancy2.jpg';
import consultationImage3 from '../../assets/consultancy3.jpg';

const Project = () => {
    const { type } = useParams();

    const renderContent = () => {
        switch (type) {
            case 'residential':
                return (
                    <div className="project-section">
                        <h2>Residential Design Projects</h2>
                        <div className="image-container">
                            <img src={residentialImage1} alt="Residential 1" />
                            <img src={residentialImage2} alt="Residential 2" />
                            <img src={residentialImage3} alt="Residential 3" />
                        </div>
                    </div>
                );
            case 'commercial':
                return (
                    <div className="project-section">
                        <h2>Commercial Design Projects</h2>
                        <div className="image-container">
                            <img src={commercialImage1} alt="Commercial 1" />
                            <img src={commercialImage2} alt="Commercial 2" />
                            <img src={commercialImage3} alt="Commercial 3" />
                        </div>
                    </div>
                );
            case 'consultation':
                return (
                    <div className="project-section">
                        <h2>Consultation Services</h2>
                        <div className="image-container">
                            <img src={consultationImage1} alt="Consultation 1" />
                            <img src={consultationImage2} alt="Consultation 2" />
                            <img src={consultationImage3} alt="Consultation 3" />
                        </div>
                    </div>
                );
            default:
                return (
                    <>
                        <div className="project-section">
                            <h2>Residential Design Projects</h2>
                            <div className="image-container">
                                <img src={residentialImage1} alt="Residential 1" />
                                <img src={residentialImage2} alt="Residential 2" />
                                <img src={residentialImage3} alt="Residential 3" />
                            </div>
                        </div>
                        <div className="project-section">
                            <h2>Commercial Design Projects</h2>
                            <div className="image-container">
                                <img src={commercialImage1} alt="Commercial 1" />
                                <img src={commercialImage2} alt="Commercial 2" />
                                <img src={commercialImage3} alt="Commercial 3" />
                            </div>
                        </div>
                        <div className="project-section">
                            <h2>Consultation Services</h2>
                            <div className="image-container">
                                <img src={consultationImage1} alt="Consultation 1" />
                                <img src={consultationImage2} alt="Consultation 2" />
                                <img src={consultationImage3} alt="Consultation 3" />
                            </div>
                        </div>
                    </>
                );
        }
    };

    return (
        <div className="project-page">
            <section className="project-content">
                {renderContent()}
            </section>
            <section className="cta">
                <h2>Interested in Our Services?</h2>
                <Link to="/contact" className="cta-button">Contact Us</Link>
            </section>
        </div>
    );
};

export default Project;