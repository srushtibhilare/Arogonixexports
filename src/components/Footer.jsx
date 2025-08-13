import React from 'react';
import { FaInstagram, FaWhatsapp, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="quick-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#projects">Our Projects</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="cta">
            <p>Partner with Arogonix to create measurable climate impact.</p>
            <div className="footer-buttons">
              <button className="btn-primary">Partner With Us</button>
              <button className="btn-secondary">Download Company Profile</button>
            </div>
          </div>
        </div>
        
        <div className="social-section">
          <h4>Connect With Us</h4>
          <div className="social-logos">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="social-logo instagram" />
            </a>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp className="social-logo whatsapp" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter className="social-logo twitter" />
            </a>
          </div>
        </div>
        
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Arogonix Exports (OPC) Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;