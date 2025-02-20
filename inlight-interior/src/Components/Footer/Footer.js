import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>© {new Date().getFullYear()} INLIGHT Interior. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;