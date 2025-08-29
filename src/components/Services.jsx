import React, { useRef, useEffect, useState } from 'react';
import { 
  FaLeaf, FaRocket, FaCertificate, FaTractor, 
  FaCheck, FaHandshake, FaFileDownload, 
  FaChartLine, FaGlobe, FaSeedling,
  FaBalanceScale, FaMoneyBillWave, FaBullhorn,
  FaLaptopCode, FaMicroscope
} from 'react-icons/fa';
import { GiChemicalDrop, GiProcessor } from 'react-icons/gi';
import { MdScience, MdOutlineBusinessCenter } from 'react-icons/md';
import { BsClipboardData, BsGearFill } from 'react-icons/bs';
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion';
import './Services.css';

// Custom animated icon component
const AnimatedServiceIcon = ({ icon, gradient, index }) => {
  return (
    <motion.div 
      className="icon-wrapper"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ 
        delay: index * 0.2, 
        type: "spring", 
        stiffness: 260, 
        damping: 20 
      }}
      whileHover={{
        scale: 1.1,
        rotate: 5,
        transition: { type: "spring", stiffness: 400, damping: 10 }
      }}
    >
      <motion.div 
        className="icon-backdrop"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
        style={{ background: gradient }}
        whileHover={{ opacity: 0.5, scale: 1.1 }}
      />
      <motion.div 
        className="icon-foreground"
        style={{ color: gradient.split(',')[1].trim() }}
      >
        {icon}
      </motion.div>
      
      {/* Floating particles */}
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          className="floating-particle"
          style={{ background: gradient.split(',')[1].trim() }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0],
            x: [0, i % 2 === 0 ? 15 : -15, 0],
            y: [0, -15, 0]
          }}
          transition={{
            delay: index * 0.2 + i * 0.3,
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </motion.div>
  );
};

// Custom animated metric counter
const AnimatedCounter = ({ value, description, icon, index }) => {
  const [counterValue, setCounterValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.5 });
  
  useEffect(() => {
    if (isInView) {
      const target = parseInt(value.replace('+', '').replace(',', ''));
      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 20);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCounterValue(target);
          clearInterval(timer);
        } else {
          setCounterValue(Math.floor(start));
        }
      }, 20);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value]);
  
  return (
    <motion.div 
      className="impact-card"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.2, duration: 0.7 }}
      whileHover={{ y: -10, transition: { type: "spring", stiffness: 400, damping: 10 } }}
    >
      <motion.div 
        className="impact-icon"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 200, damping: 10 }}
        whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
      >
        {icon}
      </motion.div>
      <motion.h3 
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: index * 0.2 + 0.5 }}
      >
        {value.includes('+') ? `${counterValue.toLocaleString()}+` : counterValue.toLocaleString()}
      </motion.h3>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: index * 0.2 + 0.7 }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1 });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  
  // Service data
  const mainServices = [
    {
      title: "Carbon Credit Project Development",
      description: "End-to-end support for registration, verification, and trading.",
      icon: <FaLeaf className="service-icon" />,
      gradient: "linear-gradient(135deg, #2e7d32, #81c784)"
    },
    {
      title: "Startup Services",
      description: "Registration under Startup India, MSME, and other government schemes.",
      icon: <FaRocket className="service-icon" />,
      gradient: "linear-gradient(135deg, #1565c0, #64b5f6)"
    },
    {
      title: "Certifications",
      description: "Trademark (TM) and ISO certification assistance.",
      icon: <FaCertificate className="service-icon" />,
      gradient: "linear-gradient(135deg, #ff8f00, #ffca28)"
    },
    {
      title: "Agro-Processing & Agricultural Exports",
      description: "Product development, export documentation, and market linkages.",
      icon: <FaTractor className="service-icon" />,
      gradient: "linear-gradient(135deg, #5d4037, #a1887f)"
    }
  ];

  const additionalServices = [
    [
      { text: "Startup Registration & Compliance", icon: <MdOutlineBusinessCenter /> },
      { text: "Intellectual Property (IP) Services", icon: <FaBalanceScale /> },
      { text: "Quality Certifications", icon: <FaCertificate /> },
      { text: "Government Grants & Subsidies", icon: <FaMoneyBillWave /> },
      { text: "Business Plan & DPR Preparation", icon: <BsClipboardData /> }
    ],
    [
      { text: "Product Testing & Lab Support", icon: <FaMicroscope /> },
      { text: "Financial & Taxation Advisory", icon: <FaChartLine /> },
      { text: "Marketing & Branding Support", icon: <FaBullhorn /> },
      { text: "Export Documentation & Compliance", icon: <FaGlobe /> },
      { text: "Technology & Innovation Consulting", icon: <FaLaptopCode /> }
    ]
  ];

  const impactMetrics = [
    { value: "50,000+", description: "tons CO₂ removal (planned in 5 years)", icon: <FaSeedling /> },
    { value: "75,000+", description: "carbon credits annually (Verra-compliant)", icon: <FaLeaf /> },
    { value: "20,000+", description: "tons agro-waste diverted from burning each year", icon: <GiChemicalDrop /> },
    { value: "100+", description: "farmers engaged in Year 1 (scaling up)", icon: <FaTractor /> }
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

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div className="services-container" ref={ref}>
      {/* Main Services Section */}
      <motion.section 
        className="main-services"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          <motion.span 
            className="title-decorator left"
            initial={{ width: 0 }}
            animate={{ width: "60px" }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
          Our <span className="highlight">Services</span>
          <motion.span 
            className="title-decorator right"
            initial={{ width: 0 }}
            animate={{ width: "60px" }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.h2>
        
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          Comprehensive solutions for sustainable business growth
        </motion.p>
        
        <motion.div 
          className="services-grid"
          variants={containerVariants}
        >
          {mainServices.map((service, index) => (
            <motion.div 
              className="service-card"
              key={index}
              variants={itemVariants}
              style={{ '--gradient': service.gradient }}
              whileHover={{ 
                y: -15,
                transition: { type: "spring", stiffness: 400, damping: 15 }
              }}
            >
              <AnimatedServiceIcon 
                icon={service.icon} 
                gradient={service.gradient} 
                index={index} 
              />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="hover-effect"></div>
              <div className="card-corner"></div>
              
              {/* Animated border effect */}
              <motion.div 
                className="animated-border"
                initial={{ scale: 0.8, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Additional Services Section */}
      <motion.section 
        className="additional-services"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <h2 className="section-title">
          <span className="title-decorator left"></span>
          Additional <span className="highlight">Services</span>
          <span className="title-decorator right"></span>
        </h2>
        <p className="section-subtitle">Specialized support for your business needs</p>
        
        <div className="services-list">
          {additionalServices.map((serviceGroup, groupIndex) => (
            <motion.ul 
              key={groupIndex} 
              className="service-group"
              initial={{ opacity: 0, x: groupIndex % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.7 + groupIndex * 0.2, duration: 0.6 }}
            >
              {serviceGroup.map((service, index) => (
                <motion.li 
                  key={index} 
                  className="service-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.8 + (groupIndex * 0.2) + (index * 0.1), duration: 0.5 }}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <span className="service-icon-wrapper">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.4 }}
                    >
                      {service.icon}
                    </motion.div>
                  </span>
                  <span>{service.text}</span>
                  <div className="service-connector"></div>
                </motion.li>
              ))}
            </motion.ul>
          ))}
        </div>
      </motion.section>

      {/* Impact Section */}
      <motion.section 
        className="impact-section"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        <h2 className="section-title">
          <span className="title-decorator left"></span>
          Planned <span className="highlight">Impact</span>
          <span className="title-decorator right"></span>
        </h2>
        <motion.p 
          className="impact-subtitle"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          Aspirational Metrics
        </motion.p>
        
        <div className="impact-grid">
          {impactMetrics.map((metric, index) => (
            <AnimatedCounter 
              key={index}
              value={metric.value}
              description={metric.description}
              icon={metric.icon}
              index={index}
            />
          ))}
        </div>
      </motion.section>
      
      {/* CTA Section */}
      <motion.section 
        className="cta-section"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.3, duration: 0.8 }}
      >
        <div className="cta-content">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            Partner with Arogonix to create measurable climate impact
          </motion.h2>
          
          <motion.div 
            className="cta-buttons"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.7, duration: 0.6 }}
          >
            <motion.button 
              className="cta-button primary"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FaHandshake className="button-icon" /> 
              <span>Partner With Us</span>
              <div className="button-hover-effect"></div>
            </motion.button>
            
            <motion.button 
              className="cta-button secondary"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFileDownload className="button-icon" /> 
              <span>Download Company Profile</span>
              <div className="button-hover-effect"></div>
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Services;