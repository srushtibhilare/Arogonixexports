import React, { useState, useEffect } from 'react';
import './Highlights.css';
import { 
  FaLeaf, FaCoins, FaSeedling, FaCertificate,
  FaFire, FaChartLine, FaDna, FaShieldAlt,
  FaNetworkWired, FaWater
} from 'react-icons/fa';
import { GiChemicalDrop, GiPlantRoots } from 'react-icons/gi';
import { motion, AnimatePresence } from 'framer-motion';

const CombinedHighlights = () => {
  const highlightsSet1 = [
    {
      title: "Biochar Production",
      description: "Transforming agricultural waste into biochar using advanced pyrolysis for sustainable farming.",
      icon: <FaLeaf className="icon" />,
      secondaryIcon: <FaFire className="secondary-icon" />,
      color: "#00C9A7",
      delay: 0.1
    },
    {
      title: "Carbon Credit Platform",
      description: "Blockchain-verified carbon credits empowering farmers and industries for greener futures.",
      icon: <FaCoins className="icon" />,
      secondaryIcon: <FaChartLine className="secondary-icon" />,
      color: "#845EC2",
      delay: 0.3
    },
    {
      title: "Agricultural Biotechnology",
      description: "Biotech-driven solutions to enhance soil fertility and boost agricultural yield.",
      icon: <FaSeedling className="icon" />,
      secondaryIcon: <FaDna className="secondary-icon" />,
      color: "#2D30EF",
      delay: 0.5
    }
  ];

  const highlightsSet2 = [
    {
      title: "Biotech Certification",
      description: "Compliance & certification services for eco-friendly biotech innovations.",
      icon: <FaCertificate className="icon" />,
      secondaryIcon: <FaShieldAlt className="secondary-icon" />,
      color: "#575653",
      delay: 0.1
    },
    {
      title: "Soil Amendment Solutions",
      description: "Organic and microbial solutions that revitalize degraded soils for healthy crops.",
      icon: <GiPlantRoots className="icon" />,
      secondaryIcon: <GiChemicalDrop className="secondary-icon" />,
      color: "#4E8397",
      delay: 0.3
    },
    {
      title: "Water Retention Systems",
      description: "Innovative water management technologies for drought-resistant agriculture.",
      icon: <FaWater className="icon" />,
      secondaryIcon: <FaNetworkWired className="secondary-icon" />,
      color: "#0089BA",
      delay: 0.5
    }
  ];

  const [activeSet, setActiveSet] = useState(0);
  const highlightSets = [highlightsSet1, highlightsSet2];

  // Auto-swap effect with 8-second interval
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSet((prev) => (prev + 1) % highlightSets.length);
    }, 8000); // 8 seconds

    return () => clearInterval(interval);
  }, [highlightSets.length]);

  const containerVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { staggerChildren: 0.2, duration: 1.5, ease: "easeOut" } // Slower transition
    },
    exit: { opacity: 0, x: -100, transition: { duration: 1.5 } } // Slower exit
  };

  const cardVariants = {
    hidden: { x: 40, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" } // Slower card animation
    },
    hover: {
      y: -8,
      scale: 1.05,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
      transition: { duration: 0.3 } // Faster hover effect
    },
    tap: { scale: 0.97 }
  };

  return (
    <div className="combined-container">
      {/* Background Decorative Elements */}
      <div className="floating-bg floating-leaf"></div>
      <div className="floating-bg floating-drop"></div>

      <section className="highlights-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Sustainable <span className="title-gradient">Solutions 🌱</span>
        </motion.h2>

        {/* Auto-swapping indicator */}
        <div className="auto-swap-indicator">
          <div className="indicator-dots">
            {highlightSets.map((_, index) => (
              <div
                key={index}
                className={`dot ${index === activeSet ? 'active' : ''}`}
              />
            ))}
          </div>
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeSet}
            className="highlight-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {highlightSets[activeSet].map((highlight, index) => (
              <motion.div
                key={index}
                className="highlight-card"
                variants={cardVariants}
                custom={index}
                whileHover="hover"
                whileTap="tap"
                style={{ '--highlight-color': highlight.color }}
              >
                <div className="card-icon-container">
                  <motion.div 
                    className="card-icon"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }} // Slower icon animation
                  >
                    {highlight.icon}
                  </motion.div>
                  <motion.div 
                    className="secondary-icon"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 6 }} // Slower secondary icon animation
                  >
                    {highlight.secondaryIcon}
                  </motion.div>
                </div>
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>
    </div>
  );
};

export default CombinedHighlights;