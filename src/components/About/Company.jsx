import React from 'react';
import { FiInfo, FiMail, FiMapPin, FiPhone, FiGlobe, FiFileText, FiUser, FiCalendar, FiDollarSign, FiCheckCircle, FiDownload, FiClock } from 'react-icons/fi';
import { motion } from 'framer-motion';
import './Company.css';

const CompanyProfile = () => {
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

  const cardVariants = {
    hover: {
      y: -5,
      boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.div 
      className="company-profile"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.header className="company-header" variants={itemVariants}>
        <h1>AROGONIX EXPORTS (OPC) PRIVATE LIMITED</h1>
        <div className="company-meta">
          <span><FiInfo /> CIN: U39000GJ2025OPC159185</span>
          <span><FiCalendar /> Last Updated: 01-07-2025</span>
        </div>
      </motion.header>

      <motion.section className="company-overview" variants={itemVariants}>
        <h2><FiFileText /> Company Overview</h2>
        <div className="info-grid">
          {[
            { label: "Company Status:", value: "Active", icon: <FiCheckCircle />, active: true },
            { label: "Incorporation Date:", value: "20th February, 2025", icon: <FiCalendar /> },
            { label: "Company Age:", value: "5 months & 21 days", icon: <FiClock /> },
            { label: "Authorized Capital:", value: "₹1,00,000", icon: <FiDollarSign /> },
            { label: "Paid-up Capital:", value: "₹50,000", icon: <FiDollarSign /> },
            { label: "Company Category:", value: "One Person Company (Non-govt)", icon: <FiInfo /> },
            { label: "Business Activity:", value: "Remediation activities and other waste management services", icon: <FiFileText /> },
            { label: "ROC:", value: "RoC-Ahmedabad", icon: <FiMapPin /> }
          ].map((item, index) => (
            <motion.div 
              className="info-item" 
              key={index}
              whileHover={{ scale: 1.02 }}
              variants={itemVariants}
            >
              <span className="label">{item.icon} {item.label}</span>
              <span className={`value ${item.active ? 'active' : ''}`}>{item.value}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section className="contact-info" variants={itemVariants}>
        <h2><FiMail /> Contact Information</h2>
        <div className="info-grid">
          <motion.div className="info-item" variants={itemVariants}>
            <span className="label"><FiMapPin /> Registered Address:</span>
            <span className="value">
              A/24, Sargam Park Soc, B/h Krishnanagar,<br />
              Krishnanagar (ahmedabad), Ahmedabad,<br />
              Ahmadabad City, Gujarat, India, 382345
            </span>
          </motion.div>
          <motion.div className="info-item" variants={itemVariants}>
            <span className="label"><FiMail /> Email:</span>
            <span className="value">*****nixexports@gmail.com</span>
          </motion.div>
          <motion.div className="info-item" variants={itemVariants}>
            <span className="label"><FiGlobe /> Website:</span>
            <span className="value">Not Available</span>
          </motion.div>
          <motion.div className="info-item" variants={itemVariants}>
            <span className="label"><FiPhone /> Contact Number:</span>
            <span className="value">Not Available</span>
          </motion.div>
        </div>
      </motion.section>

      <motion.section className="directors" variants={itemVariants}>
        <h2><FiUser /> Directors & Key Management</h2>
        <motion.div 
          className="director-card"
          whileHover={{ scale: 1.01 }}
        >
          <div className="director-info">
            <span className="name">VRUSHANK SUDHAKAR CHAUDHARY</span>
            <span className="designation">Director</span>
          </div>
          <div className="director-meta">
            <span className="appointment"><FiCalendar /> Appointed: 20th February, 2025</span>
            <span className="din"><FiInfo /> DIN: 10960626</span>
          </div>
        </motion.div>
      </motion.section>

      <motion.section className="documents" variants={itemVariants}>
        <h2><FiDownload /> Company Documents</h2>
        <div className="document-cards">
          {[
            {
              title: "Company Report",
              time: "TAT - 4 working hrs",
              price: "₹1,999.00",
              features: [
                "Company & Director Details",
                "Shareholding Pattern",
                "Balance Sheet & P&L",
                "Important Ratios",
                "Charges/Loan Details",
                "GST Details & Filings"
              ]
            },
            {
              title: "Express Documents",
              time: "TAT - 15 mins to 3 hrs",
              price: "₹699.00",
              features: [
                "Certificate/MOA/AOA",
                "Annual Returns/P&L",
                "All filed documents",
                "Verified documents"
              ]
            },
            {
              title: "All Documents",
              time: "TAT - 12 to 24 hrs",
              price: "₹499.00",
              features: [
                "Certificate/MOA/AOA",
                "Annual Returns/P&L",
                "All filed documents",
                "Verified documents"
              ]
            }
          ].map((doc, index) => (
            <motion.div 
              className="document-card"
              key={index}
              variants={cardVariants}
              whileHover="hover"
            >
              <h3>{doc.title}</h3>
              <p><FiClock /> {doc.time}</p>
              <ul>
                {doc.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <div className="price">{doc.price}</div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Buy Now
              </motion.button>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section className="disclaimer" variants={itemVariants}>
        <p>* The above list mentions the categories of the documents. All the listed documents may not be available due to non filing, corrupt file, new entity, etc.</p>
        <p>* Documents of V3 will be provided if V2 documents are unavailable.</p>
        <p>* Company report is easy to understand and contains consolidated information of documents.</p>
        <p>* Company report does not provide the documents of the company</p>
        <p>* Company report contains Balance Sheet, P&L of last 3 years. If available.</p>
        <p>* Download link remains valid for 10 days</p>
      </motion.section>
    </motion.div>
  );
};

export default CompanyProfile;