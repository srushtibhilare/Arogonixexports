import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
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
          <a href="/" className="logo-link">
            <img 
              src={logo} 
              alt="Company Logo" 
              className="logo-image"
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = 'path-to-fallback-image.png'
              }}
            />
          </a>
        </div>
        
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <div className="nav-item">
            <a href="/about">About <FiChevronDown className="dropdown-icon" /></a>
            <div className="dropdown-content">
              <a href="/about/company">Company</a>
              <a href="/about/team">Team</a>
              <a href="/about/mission">Mission</a>
            </div>
          </div>
          
          <div className="nav-item">
            <a href="/solutions">Solutions <FiChevronDown className="dropdown-icon" /></a>
            <div className="dropdown-content">
              <a href="/solutions/biochar">Biochar Production</a>
              <a href="/solutions/credits">Carbon Credits</a>
              <a href="/solutions/consulting">Consulting</a>
            </div>
          </div>
          
          <a href="/technology">Technology</a>
          <a href="/impact">Impact</a>
          <a href="/contact">Contact</a>
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