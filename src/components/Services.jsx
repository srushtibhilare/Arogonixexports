import React from 'react';
import './Services.css';
import { FaLeaf, FaRocket, FaCertificate, FaTractor, FaCheck, FaHandshake, FaFileDownload } from 'react-icons/fa';

const Services = () => {
  // Service data for cleaner JSX
  const mainServices = [
    {
      title: "Carbon Credit Project Development",
      description: "End-to-end support for registration, verification, and trading.",
      icon: <FaLeaf className="service-icon" />
    },
    {
      title: "Startup Services",
      description: "Registration under Startup India, MSME, and other government schemes.",
      icon: <FaRocket className="service-icon" />
    },
    {
      title: "Certifications",
      description: "Trademark (TM) and ISO certification assistance.",
      icon: <FaCertificate className="service-icon" />
    },
    {
      title: "Agro-Processing & Agricultural Exports",
      description: "Product development, export documentation, and market linkages.",
      icon: <FaTractor className="service-icon" />
    }
  ];

  const additionalServices = [
    [
      "Startup Registration & Compliance",
      "Intellectual Property (IP) Services – Patent filing, trademark registration, copyright",
      "Quality Certifications – ISO, FSSAI, CE, GMP, HACCP, etc.",
      "Government Grants & Subsidies Assistance",
      "Business Plan & DPR Preparation"
    ],
    [
      "Product Testing & Lab Support",
      "Financial & Taxation Advisory",
      "Marketing & Branding Support",
      "Export Documentation & Compliance",
      "Technology & Innovation Consulting"
    ]
  ];

  const impactMetrics = [
    { value: "50,000+", description: "tons CO₂ removal (planned in 5 years)" },
    { value: "75,000+", description: "carbon credits annually (Verra-compliant)" },
    { value: "20,000+", description: "tons agro-waste diverted from burning each year" },
    { value: "100+", description: "farmers engaged in Year 1 (scaling up)" }
  ];

  return (
    <div className="services-container">
      {/* Main Services Section */}
      <section className="main-services animate__fadeIn">
        <h2 className="section-title">Our <span className="highlight">Services</span></h2>
        <div className="services-grid">
          {mainServices.map((service, index) => (
            <div 
              className={`service-card animate__float delay-${index}`}
              key={index}
            >
              <div className="icon-wrapper">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="hover-effect"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="additional-services animate__fadeIn">
        <h2 className="section-title">Additional <span className="highlight">Services</span></h2>
        <div className="services-list">
          {additionalServices.map((serviceGroup, groupIndex) => (
            <ul key={groupIndex} className="service-group">
              {serviceGroup.map((service, index) => (
                <li key={index} className="service-item">
                  <FaCheck className="check-icon" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </section>

    
      <section className="impact-section animate__fadeIn">
        <h2 className="section-title">Planned <span className="highlight">Impact</span></h2>
        <p className="impact-subtitle">Aspirational Metrics</p>
        <div className="impact-grid">
          {impactMetrics.map((metric, index) => (
            <div 
              className={`impact-card animate__pulse delay-${index}`}
              key={index}
            >
              <h3 data-value={metric.value}>{metric.value}</h3>
              <p>{metric.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="cta-section animate__fadeInUp">
        <h2>Partner with Arogonix to create measurable climate impact</h2>
        <div className="cta-buttons">
          <button className="cta-button primary">
            <FaHandshake /> Partner With Us
          </button>
          <button className="cta-button secondary">
            <FaFileDownload /> Download Company Profile
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;