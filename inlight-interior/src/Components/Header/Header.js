import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';

const services = [
    { name: 'Residential Design', path: '/services#residential-design' },
    { name: 'Commercial Design', path: '/services#commercial-design' },
    { name: 'Consultation Services', path: '/services#consultation' },
];

const Header = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    return (
        <header className="header">
            <div className="logo"> INLIGHT</div>
            <nav className="navbar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                    <li><Link to="/login">Sign In</Link></li>
                </ul>
            </nav>
            <div className="search-bar" onClick={toggleDropdown}>
                <input type="text" placeholder="Search..." />
                <SearchIcon className="search-icon" />
                {dropdownVisible && (
                    <div className="dropdown-menu">
                        {services.map(service => (
                            <Link key={service.name} to={service.path} onClick={() => setDropdownVisible(false)}>
                                {service.name}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;