import React from 'react';
import './Services.css';
import { 
  FaLeaf, FaRocket, FaCertificate, FaTractor, 
  FaCheck, FaHandshake, FaFileDownload, 
  FaLightbulb, FaChartLine, FaGlobe, FaSeedling,
  FaBalanceScale, FaRegLightbulb, FaMicroscope,
  FaMoneyBillWave, FaBullhorn, FaLaptopCode
} from 'react-icons/fa';
import { GiChemicalDrop, GiProcessor } from 'react-icons/gi';
import { MdScience, MdOutlineBusinessCenter } from 'react-icons/md';
import { BsClipboardData, BsGearFill } from 'react-icons/bs';

const Services = () => {
  // Service data for cleaner JSX
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

  return (
    <div className="services-container">
      {/* Main Services Section */}
      <section className="main-services animate__fadeIn">
        <h2 className="section-title">
          <span className="title-decorator left"></span>
          Our <span className="highlight">Services</span>
          <span className="title-decorator right"></span>
        </h2>
        <p className="section-subtitle">Comprehensive solutions for sustainable business growth</p>
        <div className="services-grid">
          {mainServices.map((service, index) => (
            <div 
              className={`service-card animate__float delay-${index}`}
              key={index}
              style={{ '--gradient': service.gradient }}
            >
              <div className="icon-wrapper">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="hover-effect"></div>
              <div className="card-corner"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="additional-services animate__fadeIn">
        <h2 className="section-title">
          <span className="title-decorator left"></span>
          Additional <span className="highlight">Services</span>
          <span className="title-decorator right"></span>
        </h2>
        <p className="section-subtitle">Specialized support for your business needs</p>
        <div className="services-list">
          {additionalServices.map((serviceGroup, groupIndex) => (
            <ul key={groupIndex} className="service-group">
              {serviceGroup.map((service, index) => (
                <li key={index} className="service-item">
                  <span className="service-icon-wrapper">{service.icon}</span>
                  <span>{service.text}</span>
                  <div className="service-connector"></div>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </section>

      {/* Impact Section */}
      <section className="impact-section animate__fadeIn">
        <h2 className="section-title">
          <span className="title-decorator left"></span>
          Planned <span className="highlight">Impact</span>
          <span className="title-decorator right"></span>
        </h2>
        <p className="impact-subtitle">Aspirational Metrics</p>
        <div className="impact-grid">
          {impactMetrics.map((metric, index) => (
            <div 
              className={`impact-card animate__pulse delay-${index}`}
              key={index}
            >
              <div className="impact-icon">{metric.icon}</div>
              <h3 data-value={metric.value}>{metric.value}</h3>
              <p>{metric.description}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section className="cta-section animate__fadeInUp">
        <div className="cta-content">
          <h2>Partner with Arogonix to create measurable climate impact</h2>
          <div className="cta-buttons">
            <button className="cta-button primary">
              <FaHandshake className="button-icon" /> 
              <span>Partner With Us</span>
              <div className="button-hover-effect"></div>
            </button>
            <button className="cta-button secondary">
              <FaFileDownload className="button-icon" /> 
              <span>Download Company Profile</span>
              <div className="button-hover-effect"></div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;