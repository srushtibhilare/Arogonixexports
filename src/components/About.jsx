import React from 'react';
import { FaLeaf, FaRecycle, FaChartLine, FaHandsHelping } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const missionItems = [
    {
      icon: <FaLeaf className="icon" />,
      title: "Sustainable Agriculture",
      description: "Promote eco-friendly farming while creating opportunities for farmers through agri-tech innovations."
    },
    {
      icon: <FaRecycle className="icon" />,
      title: "Waste Transformation",
      description: "Convert crop residues into biochar, organic fertilizers, and eco-friendly products using clean pyrolysis."
    },
    {
      icon: <FaChartLine className="icon" />,
      title: "Carbon Neutrality",
      description: "Support industries in achieving carbon neutrality with blockchain-verified carbon credits."
    },
    {
      icon: <FaHandsHelping className="icon" />,
      title: "Rural Development",
      description: "Empower rural communities with employment and CSR-driven clean technology adoption."
    }
  ];

  return (
    <section className="about-section" id="about">
      <div className="container">
        {/* Section Title */}
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About<span className="highlight-text"></span>
        </motion.h2>

        <div className="about-content">
          {/* Left Visualization */}
          <motion.div 
            className="about-visual"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="waste-animation">
              <motion.div 
                className="waste-core"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
              >
                <FaRecycle className="icon-main" />
              </motion.div>

              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="waste-particle"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: [0, 1, 0.8], 
                    opacity: [0, 1, 0], 
                    x: [0, (i + 1) * 40], 
                    y: [0, -(i + 1) * 30] 
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 3 + i, 
                    delay: i * 0.8 
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="lead-text">
              We transform agricultural waste into valuable eco-products, helping both the planet and rural communities thrive.
            </p>

            <div className="mission-grid">
              {missionItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="mission-card"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: index * 0.2,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 90
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -8,
                    scale: 1.05,
                    boxShadow: "0 15px 30px rgba(0, 201, 167, 0.25)"
                  }}
                >
                  <motion.div 
                    className="mission-icon"
                    whileHover={{ rotate: 20, scale: 1.1 }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
