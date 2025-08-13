import React from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiEye, FiShield, FiTrendingUp, FiLeaf, FiGlobe } from 'react-icons/fi';
import './Mission.css';

const Mission = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const missionPillars = [
    {
      icon: <FiLeaf className="pillar-icon" />,
      title: "Environmental Stewardship",
      description: "Implementing sustainable waste management solutions that protect ecosystems"
    },
    {
      icon: <FiShield className="pillar-icon" />,
      title: "Regulatory Compliance",
      description: "100% adherence to environmental laws and safety standards"
    },
    {
      icon: <FiTrendingUp className="pillar-icon" />,
      title: "Circular Economy",
      description: "Transforming waste into reusable resources through innovative processing"
    }
  ];

  const visionGoals = [
    {
      icon: <FiGlobe className="vision-icon" />,
      title: "Global Standards",
      description: "Achieve international waste management certifications by 2026"
    },
    {
      icon: <FiTarget className="vision-icon" />,
      title: "Technology Expansion",
      description: "Develop 3 proprietary remediation technologies by 2027"
    },
    {
      icon: <FiEye className="vision-icon" />,
      title: "Community Impact",
      description: "Educate 10,000+ people on waste management by 2025"
    }
  ];

  return (
    <motion.div 
      className="mission-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Section */}
      <motion.section 
        className="hero-section"
        variants={itemVariants}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Environmental Commitment
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transforming waste management through innovation and sustainability
          </motion.p>
        </div>
      </motion.section>

      {/* Mission Statement */}
      <motion.section 
        className="mission-statement"
        variants={itemVariants}
      >
        <motion.div 
          className="mission-card"
          whileHover={{ scale: 1.02 }}
        >
          <h2><FiTarget className="section-icon" /> Our Mission</h2>
          <p>
            At Arogonix Exports, we pioneer sustainable waste remediation solutions that 
            protect the environment while creating economic value. Incorporated in 2025, 
            we combine cutting-edge technology with strict regulatory compliance to 
            revolutionize waste management in Gujarat and beyond.
          </p>
        </motion.div>
      </motion.section>

      {/* Pillars Section */}
      <motion.section 
        className="pillars-section"
        variants={itemVariants}
      >
        <h2>Our Core Pillars</h2>
        <div className="pillars-grid">
          {missionPillars.map((pillar, index) => (
            <motion.div 
              className="pillar-card"
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              {pillar.icon}
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Vision Section */}
      <motion.section 
        className="vision-section"
        variants={itemVariants}
      >
        <h2><FiEye className="section-icon" /> Our Vision</h2>
        <div className="vision-grid">
          {visionGoals.map((goal, index) => (
            <motion.div 
              className="vision-card"
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              {goal.icon}
              <h3>{goal.title}</h3>
              <p>{goal.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="cta-section"
        variants={itemVariants}
      >
        <h2>Join Our Sustainable Journey</h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cta-button"
        >
          Partner With Us
        </motion.button>
      </motion.section>
    </motion.div>
  );
};

export default Mission;