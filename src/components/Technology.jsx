import React from 'react';
import { FaCogs, FaLeaf, FaChartLine, FaLightbulb, FaRecycle, FaShieldAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Technology.css';

const Technology = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
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

  const techSolutions = [
    {
      icon: <FaCogs className="tech-icon" />,
      title: "Advanced Pyrolysis Systems",
      description: "Our state-of-the-art pyrolysis technology converts organic waste into high-quality biochar with maximum efficiency and minimal emissions.",
      features: [
        "Temperature-controlled reactors",
        "Continuous feed systems",
        "Energy recovery integration"
      ]
    },
    {
      icon: <FaLeaf className="tech-icon" />,
      title: "Carbon Sequestration",
      description: "Patented processes that lock carbon in stable forms for centuries, creating verifiable carbon removal credits.",
      features: [
        "Biochar soil amendment",
        "Carbon mineralization",
        "Long-term sequestration"
      ]
    },
    {
      icon: <FaChartLine className="tech-icon" />,
      title: "Emission Control",
      description: "Comprehensive gas treatment systems ensure all byproducts are either utilized or neutralized before release.",
      features: [
        "Scrubbing systems",
        "Particulate filtration",
        "Continuous monitoring"
      ]
    }
  ];

  const techFeatures = [
    {
      icon: <FaLightbulb className="feature-icon" />,
      title: "Innovation",
      description: "Continuous R&D to improve conversion efficiency and product quality"
    },
    {
      icon: <FaRecycle className="feature-icon" />,
      title: "Circular Design",
      description: "Closed-loop systems that maximize resource recovery"
    },
    {
      icon: <FaShieldAlt className="feature-icon" />,
      title: "Safety",
      description: "Automated systems with multiple fail-safes for secure operations"
    }
  ];

  return (
    <motion.div 
      className="technology-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.section 
        className="technology-hero"
        variants={itemVariants}
      >
        <div className="hero-content">
          <h1>Our <span>Technology</span> Platform</h1>
          <p className="hero-subtitle">
            Cutting-edge solutions for sustainable waste transformation and carbon management
          </p>
        </div>
      </motion.section>

      <motion.section 
        className="tech-solutions"
        variants={itemVariants}
      >
        <h2 className="section-title">Core <span>Technologies</span></h2>
        <div className="solutions-grid">
          {techSolutions.map((solution, index) => (
            <motion.div 
              key={index}
              className="solution-card"
              whileHover={{ y: -5 }}
              variants={itemVariants}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="solution-icon">
                {solution.icon}
              </div>
              <h3>{solution.title}</h3>
              <p className="solution-description">{solution.description}</p>
              <ul className="solution-features">
                {solution.features.map((feature, fIndex) => (
                  <li key={fIndex}>{feature}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section 
        className="tech-features"
        variants={itemVariants}
      >
        <h2 className="section-title">Key <span>Differentiators</span></h2>
        <div className="features-grid">
          {techFeatures.map((feature, index) => (
            <motion.div 
              key={index}
              className="feature-card"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <div className="feature-icon-container">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section 
        className="tech-process"
        variants={itemVariants}
      >
        <h2 className="section-title">Our <span>Process</span> Flow</h2>
        <div className="process-steps">
          {[
            "Feedstock Preparation",
            "Thermal Conversion",
            "Gas Treatment",
            "Biochar Refinement",
            "Product Utilization"
          ].map((step, index) => (
            <motion.div 
              key={index}
              className="process-step"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="step-number">{index + 1}</div>
              <h3>{step}</h3>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section 
        className="tech-cta"
        variants={itemVariants}
      >
        <h2>Ready to integrate our technology?</h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cta-button"
        >
          Request Technical Documentation
        </motion.button>
      </motion.section>
    </motion.div>
  );
};

export default Technology;