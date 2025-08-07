import React from 'react';
import './Highlights.css';

// Biotech logos
const biotechLogos = [
  'https://upload.wikimedia.org/wikipedia/commons/9/9e/BioNTech_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/6/68/Moderna_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/3/3a/Illumina_Logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/9/9f/Genentech_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/4/4e/Regeneron_Pharmaceuticals_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/7/7a/CRISPR_Therapeutics_logo.svg'
];

// Eco logos
const ecoLogos = [
  'https://cdn-icons-png.flaticon.com/512/3342/3342137.png',
  'https://cdn-icons-png.flaticon.com/512/3176/3176292.png',
  'https://cdn-icons-png.flaticon.com/512/3342/3342217.png',
  'https://cdn-icons-png.flaticon.com/512/2936/2936886.png',
  'https://cdn-icons-png.flaticon.com/512/3342/3342156.png',
  'https://cdn-icons-png.flaticon.com/512/1598/1598101.png'
];

const CombinedHighlights = () => {
  return (
    <div className="combined-container">
      {/* Parallel Layout Section */}
      <section className="highlights-container">
        <div className="logo-column">
          <h2>Our Biotech Partners</h2>
          <div className="logo-orbit">
            {biotechLogos.map((logo, index) => (
              <div className="logo-item" key={`bio-${index}`}>
                <img 
                  src={logo} 
                  alt={`Biotech Partner ${index + 1}`}
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = `https://via.placeholder.com/60/${index % 2 ? '845ec2' : '00c9a7'}/ffffff?text=Bio+${index + 1}`
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="content-column">
          <h2>Our Solutions</h2>
          <div className="highlight-grid">
            <div className="highlight-card">
              <h3>Biochar Production</h3>
              <p>High-quality biochar using advanced pyrolysis technology for sustainable agriculture.</p>
            </div>
            <div className="highlight-card secondary">
              <h3>Carbon Credit Platform</h3>
              <p>Blockchain-verified carbon credits with AI-driven sustainability metrics.</p>
            </div>
            <div className="highlight-card">
              <h3>Agricultural Biotechnology</h3>
              <p>Innovative biotech solutions for enhanced crop yield and soil health.</p>
            </div>
            <div className="highlight-card secondary">
              <h3>Biotech Certification</h3>
              <p>Compliance and certification services for biotech startups and products.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Circular Eco Solutions Section */}
      {/* <section className="about-solutions">
        <h2>Our Sustainable Technologies</h2>
        <div className="eco-orbit">
          {ecoLogos.map((logo, index) => (
            <div 
              className="eco-item" 
              key={`eco-${index}`}
              style={{ '--i': index }}
            >
              <div className="eco-logo-container">
                <img 
                  src={logo} 
                  alt={`Eco Solution ${index + 1}`}
                  className="eco-logo"
                />
              </div>
              <div className="eco-content">
                <h3>{[
                  "Biochar Production",
                  "Solar Technology",
                  "Wind Energy",
                  "Waste Recycling",
                  "Water Conservation",
                  "Plant Genetics"
                ][index]}</h3>
                <p>{[
                  "High-quality biochar using advanced pyrolysis technology",
                  "Clean energy solutions for sustainable power",
                  "Harnessing wind for zero-emission energy",
                  "Closed-loop systems for waste transformation",
                  "Innovative water preservation techniques",
                  "Enhanced crops through biotechnology"
                ][index]}</p>
              </div>
            </div>
          ))}
        </div>
      </section> */}
    </div>
  );
};

export default CombinedHighlights;