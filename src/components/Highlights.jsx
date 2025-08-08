import React from 'react';
import './Highlights.css';
import { FaLeaf, FaCoins, FaSeedling, FaCertificate } from 'react-icons/fa';

const CombinedHighlights = () => {
  return (
    <div className="combined-container">
      <section className="highlights-container">
        <div className="content-column">
          <h2 className="section-title">Our Solutions</h2>
          <div className="highlight-grid">
            <div className="highlight-card">
              <div className="card-icon">
                <FaLeaf className="icon" />
              </div>
              <h3>Biochar Production</h3>
              <p>High-quality biochar using advanced pyrolysis technology for sustainable agriculture.</p>
            </div>
            <div className="highlight-card secondary">
              <div className="card-icon">
                <FaCoins className="icon" />
              </div>
              <h3>Carbon Credit Platform</h3>
              <p>Blockchain-verified carbon credits with AI-driven sustainability metrics.</p>
            </div>
            <div className="highlight-card">
              <div className="card-icon">
                <FaSeedling className="icon" />
              </div>
              <h3>Agricultural Biotechnology</h3>
              <p>Innovative biotech solutions for enhanced crop yield and soil health.</p>
            </div>
            <div className="highlight-card secondary">
              <div className="card-icon">
                <FaCertificate className="icon" />
              </div>
              <h3>Biotech Certification</h3>
              <p>Compliance and certification services for biotech startups and products.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CombinedHighlights;