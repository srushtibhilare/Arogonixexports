import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpeg';
import './Navber.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
      setActiveDropdown(null);
    }
  };

  const toggleDropdown = (item) => {
    if (activeDropdown === item) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(item);
    }
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
            <button 
              className="nav-link-button" 
              onClick={() => toggleDropdown('about')}
            >
              About <FiChevronDown className={`dropdown-icon ${activeDropdown === 'about' ? 'active' : ''}`} />
            </button>
            <div className={`dropdown-content ${activeDropdown === 'about' ? 'active' : ''}`}>
              <NavLink to="/about/company" onClick={() => setIsOpen(false)}>Company</NavLink>
              <NavLink to="/about/team" onClick={() => setIsOpen(false)}>Team</NavLink>
            </div>
          </div>
          
          <div className="nav-item">
            <button 
              className="nav-link-button" 
              onClick={() => toggleDropdown('solutions')}
            >
              Solutions <FiChevronDown className={`dropdown-icon ${activeDropdown === 'solutions' ? 'active' : ''}`} />
            </button>
            <div className={`dropdown-content ${activeDropdown === 'solutions' ? 'active' : ''}`}>
              <NavLink to="/solutions/biochar" onClick={() => setIsOpen(false)}>Biochar Production</NavLink>
              <NavLink to="/solutions/credits" onClick={() => setIsOpen(false)}>Carbon Credits</NavLink>
              <NavLink to="/solutions/consulting" onClick={() => setIsOpen(false)}>Consulting</NavLink>
            </div>
          </div>
          
          <NavLink to="/technology" className="nav-link" onClick={() => setIsOpen(false)}>Technology</NavLink>
          <NavLink to="/impact" className="nav-link" onClick={() => setIsOpen(false)}>Impact</NavLink>
          <button className="navbar-cta" onClick={() => setIsOpen(false)}>Get Started</button>
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