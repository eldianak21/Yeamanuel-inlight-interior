import React from 'react';
import './Home.css';
import heroImage from '../../../assets/interior.jpg'; // Replace with your image path
import HomeCarousel from './HomeCarousel'; // Import the HomeCarousel component


const HomePage = () => {
    return (
        <div className="home-page">
            <img src={heroImage} alt="Interior Design" className="hero-image" />
            <main className="main-content">
                <section className="hero-section">
                    <h1>Transform Your Space</h1>
                    <p>
                        Discover our expert interior design services tailored to bring your vision to life.
                    </p>
                    <button className="buy-home-button">Get Started with Your Design</button>
                </section>
                <section className="search-section">
                    <input type="text" placeholder="Style " />
                    <input type="text" placeholder="Room Type " />
                    <input type="text" placeholder="Budget Range" />
                    <button className="search-button">Search</button>
                </section>
                
                {/* Add the HomeCarousel component here */}
                <HomeCarousel />

                <section className="featured-designs">
                    <h2>Featured Designs</h2>
                    <div className="design-card">
                        <h3>Modern Living Room</h3>
                        <p>Minimalist | 500 sq ft</p>
                        <button className="buy-button">View Details</button>
                    </div>
                    <div className="design-card">
                        <h3>Chic Bedroom</h3>
                        <p>Contemporary | 400 sq ft</p>
                        <button className="buy-button">View Details</button>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default HomePage;