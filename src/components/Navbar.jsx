import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpeg';
import './Navber.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo-wrapper">
          <Link to="/" className="logo-link">
            <img 
              src={logo} 
              alt="Company Logo" 
              className="logo-image"
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = 'path-to-fallback-image.png'
              }}
            />
          </Link>
        </div>
        
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <div className="nav-item">
            <NavLink to="/about">About <FiChevronDown className="dropdown-icon" /></NavLink>
            <div className="dropdown-content">
              <NavLink to="/about/company">Company</NavLink>
              <NavLink to="/about/team">Team</NavLink>
              {/* <NavLink to="/about/mission">Mission</NavLink> */}
            </div>
          </div>
          
          <div className="nav-item">
            <NavLink to="/solutions">Solutions <FiChevronDown className="dropdown-icon" /></NavLink>
            <div className="dropdown-content">
              <NavLink to="/solutions/biochar">Biochar Production</NavLink>
              <NavLink to="/solutions/credits">Carbon Credits</NavLink>
              <NavLink to="/solutions/consulting">Consulting</NavLink>
            </div>
          </div>
          
          <NavLink to="/technology">Technology</NavLink>
          <NavLink to="/impact">Impact</NavLink>
          <button className="navbar-cta">Get Started</button>
        </div>

        <div className="navbar-toggle" onClick={toggleMenu}>
          {isOpen ? (
            <FiX size={24} className="toggle-icon" />
          ) : (
            <FiMenu size={24} className="toggle-icon" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;