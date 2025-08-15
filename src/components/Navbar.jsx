import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpeg';
import './Navber.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
        document.body.classList.remove('menu-open');
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
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

  const closeMenu = () => {
    setIsOpen(false);
    document.body.classList.remove('menu-open');
    setActiveDropdown(null);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo-wrapper">
          <Link to="/" className="logo-link" onClick={closeMenu}>
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
              aria-expanded={activeDropdown === 'about'}
              aria-controls="about-dropdown"
            >
              About 
              {activeDropdown === 'about' ? (
                <FiChevronUp className="dropdown-icon" />
              ) : (
                <FiChevronDown className="dropdown-icon" />
              )}
            </button>
            <div 
              id="about-dropdown"
              className={`dropdown-content ${activeDropdown === 'about' ? 'active' : ''}`}
            >
              <NavLink to="/about/company" onClick={closeMenu}>Company</NavLink>
              <NavLink to="/about/team" onClick={closeMenu}>Team</NavLink>
            </div>
          </div>
          
          <div className="nav-item">
            <button 
              className="nav-link-button" 
              onClick={() => toggleDropdown('solutions')}
              aria-expanded={activeDropdown === 'solutions'}
              aria-controls="solutions-dropdown"
            >
              Solutions 
              {activeDropdown === 'solutions' ? (
                <FiChevronUp className="dropdown-icon" />
              ) : (
                <FiChevronDown className="dropdown-icon" />
              )}
            </button>
            <div 
              id="solutions-dropdown"
              className={`dropdown-content ${activeDropdown === 'solutions' ? 'active' : ''}`}
            >
              <NavLink to="/solutions/biochar" onClick={closeMenu}>Biochar Production</NavLink>
              <NavLink to="/solutions/credits" onClick={closeMenu}>Carbon Credits</NavLink>
              <NavLink to="/solutions/consulting" onClick={closeMenu}>Consulting</NavLink>
            </div>
          </div>
          
          <NavLink to="/technology" className="nav-link" onClick={closeMenu}>Technology</NavLink>
          <NavLink to="/impact" className="nav-link" onClick={closeMenu}>Impact</NavLink>
          
          <div className="mobile-cta-wrapper">
            <button className="navbar-cta" onClick={closeMenu}>Get Started</button>
          </div>
        </div>

        <button 
          className="navbar-toggle" 
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <FiX size={24} className="toggle-icon" />
          ) : (
            <FiMenu size={24} className="toggle-icon" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;