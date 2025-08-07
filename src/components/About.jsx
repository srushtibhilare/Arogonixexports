import React from 'react';
import { FaLeaf, FaRecycle, FaChartLine, FaHandsHelping } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const missionItems = [
    {
      icon: <FaLeaf className="icon" />,
      title: "Sustainable Agriculture",
      description: "Empower farmers with sustainable income streams through innovative agri-tech solutions."
    },
    {
      icon: <FaRecycle className="icon" />,
      title: "Waste Transformation",
      description: "Convert agricultural waste into high-value products like biochar through advanced pyrolysis."
    },
    {
      icon: <FaChartLine className="icon" />,
      title: "Carbon Neutrality",
      description: "Enable industries to achieve carbon neutrality via blockchain-verified carbon credits."
    },
    {
      icon: <FaHandsHelping className="icon" />,
      title: "Rural Development",
      description: "Drive economic growth through CSR partnerships and clean technology adoption."
    }
  ];

  return (
    <section className="about-section" id="about">
      <div className="container">
        {/* Centered Title Section */}
        <div className="centered-title-wrapper">
          <motion.h2 
            className="section-title centered-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
       
          </motion.h2>
        </div>

        <div className="about-content">
          {/* Left Column - Animated Visualization */}
          <motion.div 
            className="about-visual"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="energy-animation">
              <div className="energy-core">
                <div className="energy-pulse"></div>
                {[...Array(4)].map((_, i) => (
                  <div 
                    key={i}
                    className="energy-particle" 
                    style={{ '--delay': `${i * 0.5}s` }}
                  />
                ))}
                <div className="energy-icon">
                  <FaLeaf className="icon-main" />
                </div>
              </div>
              <div className="energy-connection energy-connection-1"></div>
              <div className="energy-connection energy-connection-2"></div>
              <div className="energy-node">
                <FaRecycle className="icon-node" />
              </div>
              <div className="energy-node energy-node-2">
                <FaChartLine className="icon-node" />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Animated Content */}
          <div className="about-text">
            <motion.p
              className="lead-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Arogonix Exports bridges agriculture, energy, and carbon finance through innovative clean technology.
            </motion.p>
            
            <div className="mission-grid">
              {missionItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="mission-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 0.4 + index * 0.15,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 15px 30px rgba(0, 201, 167, 0.2)"
                  }}
                >
                  <motion.div 
                    className="mission-icon"
                    whileHover={{ rotate: 15, scale: 1.1 }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;