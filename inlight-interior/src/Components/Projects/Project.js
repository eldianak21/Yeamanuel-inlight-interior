import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Project.css';

const Project = () => {
    const { type } = useParams();

    const renderContent = () => {
        switch (type) {
            case 'residential':
                return (
                    <div>
                        <h2>Residential Design Projects</h2>
                        <p>Explore our stunning residential design projects that transform homes into dream spaces.</p>
                        {/* More specific content can go here */}
                    </div>
                );
            case 'commercial':
                return (
                    <div>
                        <h2>Commercial Design Projects</h2>
                        <p>Discover how our commercial designs enhance productivity and create inspiring work environments.</p>
                        {/* More specific content can go here */}
                    </div>
                );
            case 'consultation':
                return (
                    <div>
                        <h2>Consultation Services</h2>
                        <p>Learn about our personalized consultation services that help you achieve your design goals.</p>
                        {/* More specific content can go here */}
                    </div>
                );
            default:
                return <h2>Project Not Found</h2>;
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