import React from 'react'
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
        
        <div className="csr-partners">
          <h4>Trusted by corporates and institutions working toward a greener tomorrow.</h4>
          <div className="partner-logos">
            {/* Placeholder for partner logos */}
            <div className="logo-placeholder"></div>
            <div className="logo-placeholder"></div>
            <div className="logo-placeholder"></div>
          </div>
        </div>
        
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Arogonix Exports (OPC) Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer