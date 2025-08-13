import React from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiGlobe, FiBarChart2, FiDatabase, FiCode, FiUsers } from 'react-icons/fi';
import './Team.css';

const Team = () => {
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
      y: -10,
      boxShadow: "0 15px 30px rgba(0,0,0,0.12)",
      transition: {
        duration: 0.3
      }
    }
  };

  const teamMembers = [
    {
      name: "VRUSHANK SUDHAKAR CHAUDHARY",
      role: "Director & API Architect",
      bio: "Leads the technical vision for Falcon eBiz's financial data solutions with 12+ years experience in API development.",
      expertise: ["API Design", "Financial Systems", "Data Security"],
      stats: {
        clients: "1k+",
        experience: "12 Years",
        projects: 45
      }
    },
    {
      name: "FALCON TECH TEAM",
      role: "Development Unit",
      bio: "Specialized team building robust financial APIs and data services trusted by institutions nationwide.",
      expertise: ["REST APIs", "Microservices", "Data Analytics"],
      stats: {
        clients: "1k+",
        apis: "50+",
        uptime: "99.9%"
      }
    }
  ];

  const services = [
    {
      icon: <FiCode size={32} />,
      title: "API Master",
      description: "Comprehensive financial API solutions for seamless integration"
    },
    {
      icon: <FiDatabase size={32} />,
      title: "Data Services",
      description: "Premium financial datasets with real-time updates"
    },
    {
      icon: <FiUsers size={32} />,
      title: "Subscriptions",
      description: "Customizable plans for institutions of all sizes"
    }
  ];

  return (
    <motion.div 
      className="team-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.header className="team-header" variants={itemVariants}>
        <h1>Falcon eBiz Leadership</h1>
        <p className="trust-badge">
          <FiUsers className="trust-icon" /> Trusted by 1k+ Financial Institutions
        </p>
      </motion.header>

      <motion.div className="team-grid" variants={containerVariants}>
        {teamMembers.map((member, index) => (
          <motion.div 
            className="team-card"
            key={index}
            variants={itemVariants}
            whileHover="hover"
          >
            <motion.div className="card-inner" variants={cardVariants}>
              <div className="member-header">
                <div className="member-avatar">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p className="role">{member.role}</p>
                </div>
              </div>

              <div className="member-bio">
                <p>{member.bio}</p>
              </div>

              <div className="member-expertise">
                <h4>Core Expertise</h4>
                <div className="expertise-tags">
                  {member.expertise.map((exp, i) => (
                    <span key={i} className="expertise-tag">{exp}</span>
                  ))}
                </div>
              </div>

              <div className="member-stats">
                {Object.entries(member.stats).map(([key, value]) => (
                  <div className="stat-item" key={key}>
                    <div className="stat-value">{value}</div>
                    <div className="stat-label">
                      {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <motion.section className="services-section" variants={itemVariants}>
        <h2>Our Core Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              className="service-card"
              key={index}
              whileHover={{ scale: 1.05 }}
              variants={itemVariants}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.div className="company-stats" variants={itemVariants}>
        <h2>Falcon eBiz At a Glance</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <FiBarChart2 className="stat-icon" />
            <div className="stat-value">1,000+</div>
            <div className="stat-label">Financial Institutions</div>
          </div>
          <div className="stat-card">
            <FiCode className="stat-icon" />
            <div className="stat-value">50+</div>
            <div className="stat-label">APIs Available</div>
          </div>
          <div className="stat-card">
            <FiDatabase className="stat-icon" />
            <div className="stat-value">99.9%</div>
            <div className="stat-label">Uptime</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Team;