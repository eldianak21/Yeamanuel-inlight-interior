import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = () => {
    return (
        <div className="service-page">
            <section className="hero-section">
                <h1>Our Interior Design Services</h1>
                <p>Transform your space with our expert design solutions tailored to your needs.</p>
            </section>
            <section className="services">
                <h2>What We Offer</h2>
                <div className="service-card" id="residential-design">
                    <h3>Residential Design</h3>
                    <p>Creating beautiful and functional living spaces for your home.</p>
                </div>
                <div className="service-card" id="commercial-design">
                    <h3>Commercial Design</h3>
                    <p>Designing inspiring workspaces that enhance productivity.</p>
                </div>
                <div className="service-card" id="consultation">
                    <h3>Consultation Services</h3>
                    <p>Personalized advice to help you achieve your design goals.</p>
                </div>
            </section>
            <section className="testimonials">
                <h2>What Our Clients Say</h2>
                <blockquote>
                    <p>"They transformed my home into a dream space!" - Jane Doe</p>
                </blockquote>
                <blockquote>
                    <p>"Highly professional and creative team." - John Smith</p>
                </blockquote>
            </section>
            <section className="cta">
                <h2>Ready to Start Your Project?</h2>
                <Link to="/contact" className="cta-button">Contact Us</Link>
            </section>
        </div>
    );
};

export default Service;