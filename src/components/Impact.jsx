import React from 'react';
import { FaBuilding, FaLeaf, FaCertificate, FaEnvelope, FaRecycle, FaTree, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Impact.css';

const Impact = () => {
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

  return (
    <motion.div 
      className="impact-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.section 
        className="corporate-profile"
        variants={itemVariants}
      >
        <div className="section-header">
          <FaBuilding className="section-icon" />
          <h1>Corporate Profile</h1>
        </div>
        <div className="profile-card">
          <h2>AROGONIX EXPORTS (OPC) PRIVATE LIMITED</h2>
          <div className="profile-grid">
            {[
              { label: "CIN", value: "U39000GJ2025OPC159185" },
              { label: "Status", value: "Active" },
              { label: "Incorporation Date", value: "20th February, 2025" },
              { label: "ROC", value: "RoC-Ahmedabad" },
              { label: "Authorized Capital", value: "₹1,00,000" },
              { label: "Paid-up Capital", value: "₹50,000" },
              { label: "Company Category", value: "One Person Company" },
              { label: "Primary Activity", value: "Remediation activities and other waste management services" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="profile-item"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <strong>{item.label}:</strong> {item.value}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section 
        className="environmental-impact"
        variants={itemVariants}
      >
        <div className="section-header">
          <FaLeaf className="section-icon" />
          <h1>Our Environmental Impact</h1>
        </div>
        <div className="impact-stats">
          {[
            { 
              icon: <FaRecycle className="stat-icon" />,
              title: "Waste Processed",
              description: "Diverted from landfills through sustainable methods" 
            },
            { 
              icon: <FaTree className="stat-icon" />,
              title: "Carbon Offset", 
              description: "Equivalent to planting XX trees annually" 
            },
            { 
              icon: <FaUsers className="stat-icon" />,
              title: "Community Impact", 
              description: "Supporting local economies through green employment" 
            }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="stat-card"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <div className="stat-icon-container">
                {stat.icon}
              </div>
              <h3>{stat.title}</h3>
              <p className="stat-value">{stat.value}</p>
              <p className="stat-description">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section 
        className="certifications"
        variants={itemVariants}
      >
        <div className="section-header">
          <FaCertificate className="section-icon" />
          <h2>Compliance & Certifications</h2>
        </div>
        <ul>
          {[
            "Registered with Ministry of Corporate Affairs (MCA)",
            "Compliant with Gujarat Pollution Control Board standards",
            "ISO Certification (Pending)"
          ].map((item, index) => (
            <motion.li 
              key={index}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.section>

      <motion.section 
        className="contact-info"
        variants={itemVariants}
      >
        <div className="section-header">
          <FaEnvelope className="section-icon" />
          <h2>Contact Information</h2>
        </div>
        <address>
          <strong>Registered Office:</strong><br />
          A/24, Sargam Park Soc, B/h Krishnanagar,<br />
          Krishnanagar (Ahmedabad), Ahmedabad,<br />
          Gujarat, India - 382345
        </address>
        <p><strong>Email:</strong> arogonixexports@gmail.com</p>
      </motion.section>

      <motion.section 
        className="disclaimer"
        variants={itemVariants}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <p><em>Note: The company was incorporated on 20th February 2025. Some impact metrics are projected based on industry standards and initial operations. Actual figures will be updated following the first operational year.</em></p>
      </motion.section>
    </motion.div>
  );
};

export default Impact;