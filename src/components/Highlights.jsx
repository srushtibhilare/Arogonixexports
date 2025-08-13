import React from 'react';
import './Highlights.css';
import { 
  FaLeaf, FaCoins, FaSeedling, FaCertificate,
  FaFire, FaChartLine, FaDna, FaFlask,
  FaShieldAlt, FaNetworkWired, FaTree, FaWater
} from 'react-icons/fa';
import { GiChemicalDrop, GiPlantRoots } from 'react-icons/gi';
import { motion } from 'framer-motion';

const CombinedHighlights = () => {
  const highlights = [
    {
      title: "Biochar Production",
      description: "High-quality biochar using advanced pyrolysis technology for sustainable agriculture.",
      icon: <FaLeaf className="icon" />,
      secondaryIcon: <FaFire className="secondary-icon" />,
      color: "#00C9A7",
      delay: 0.1
    },
    {
      title: "Carbon Credit Platform",
      description: "Blockchain-verified carbon credits with AI-driven sustainability metrics.",
      icon: <FaCoins className="icon" />,
      secondaryIcon: <FaChartLine className="secondary-icon" />,
      color: "#845EC2",
      delay: 0.3
    },
    {
      title: "Agricultural Biotechnology",
      description: "Innovative biotech solutions for enhanced crop yield and soil health.",
      icon: <FaSeedling className="icon" />,
      secondaryIcon: <FaDna className="secondary-icon" />,
      color: "#ef2d4eff",
      delay: 0.5
    },
    {
      title: "Biotech Certification",
      description: "Compliance and certification services for biotech startups and products.",
      icon: <FaCertificate className="icon" />,
      secondaryIcon: <FaShieldAlt className="secondary-icon" />,
      color: "#FFC75F",
      delay: 0.7
    },
    {
      title: "Soil Amendment Solutions",
      description: "Specialized organic compounds to revitalize depleted soils.",
      icon: <GiPlantRoots className="icon" />,
      secondaryIcon: <GiChemicalDrop className="secondary-icon" />,
      color: "#4E8397",
      delay: 0.2
    },
    {
      title: "Water Retention Systems",
      description: "Innovative technologies to optimize water usage in agriculture.",
      icon: <FaWater className="icon" />,
      secondaryIcon: <FaNetworkWired className="secondary-icon" />,
      color: "#0089BA",
      delay: 0.4
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)"
    },
    tap: {
      scale: 0.98
    }
  };

  return (
    <div className="combined-container">
      <section className="highlights-container">
        <div className="content-column">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Solutions <span className="title-gradient">💡</span>
          </motion.h2>
          
          <motion.div 
            className="highlight-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className={`highlight-card ${index % 2 !== 0 ? 'secondary' : ''}`}
                variants={cardVariants}
                whileHover="hover"
                whileTap="tap"
                custom={highlight.delay}
                style={{ '--highlight-color': highlight.color }}
              >
                <div className="card-icon-container">
                  <div className="card-icon">
                    {highlight.icon}
                  </div>
                  <div className="secondary-icon">
                    {highlight.secondaryIcon}
                  </div>
                </div>
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
                <div className="card-decoration"></div>
                <div className="hover-effect"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CombinedHighlights;