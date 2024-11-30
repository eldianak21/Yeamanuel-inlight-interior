import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="about-page">
            <section className="hero-section">
                <h1>About Us</h1>
                <p>Discover our passion for interior design and how we can transform your space.</p>
            </section>
            <section className="mission">
                <h2>Our Mission</h2>
                <p>To create beautiful and functional spaces that reflect our clients' unique styles and needs.</p>
            </section>
            <section className="team">
                <h2>Meet Our Team</h2>
                <div className="team-member">
                    <h3>Amanuel Tesfaye</h3>
                    <p>Architect</p>
                    <p>+251911697819</p>
                    <p>
        <strong>Email:</strong> 
        <a href="mailto:yeamanuel128th@gmail.com" style={{ color: '#4b3d3d', textDecoration: 'none' }}>
        yeamanuel128th@gmail.com
        </a>
    </p>
                </div>
                <div className="team-member">
                    <h3>Robel Tesfaye</h3>
                    <p>Architect</p>
                    <p>=251970459970</p>
                    <p>
        <strong>Email:</strong> 
        <a href="mailto:tesfayerobel134@gmail.com" style={{ color: '#4b3d3d', textDecoration: 'none' }}>
        tesfayerobel134@gmail.com
        </a>
        </p>
                </div>
            </section>
            <section className="values">
                <h2>Our Values</h2>
                <ul>
                    <li>Integrity: We believe in honest and transparent communication.</li>
                    <li>Creativity: We strive for innovative and unique designs.</li>
                    <li>Client-Centric: Your satisfaction is our top priority.</li>
                </ul>
            </section>
            <section className="cta">
                <h2>Ready to Transform Your Space?</h2>
                <Link to="/contact">
                    <button className="cta-button">Contact Us</button>
                </Link>
            </section>
        </div>
    );
};

export default About;