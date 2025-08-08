import React from 'react';
import { FaTree, FaLeaf, FaSolarPanel, FaChartLine, FaShieldAlt } from 'react-icons/fa';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Projects.css';

// Custom animated icon components
const AnimatedIcon = ({ icon, color }) => {
  const controls = useAnimation();
  
  return (
    <motion.div
      className="icon-wrapper"
      whileHover={{ scale: 1.1 }}
      onHoverStart={() => controls.start("hover")}
      onHoverEnd={() => controls.start("rest")}
    >
      <motion.div
        className="icon-backdrop"
        initial={{ scale: 0.8, opacity: 0.3 }}
        animate={controls}
        variants={{
          hover: { scale: 1, opacity: 0.5, backgroundColor: `${color}30` },
          rest: { scale: 0.8, opacity: 0.3, backgroundColor: `${color}10` }
        }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      />
      <motion.div
        className="icon-foreground"
        animate={controls}
        variants={{
          hover: { color: color, scale: 1.1 },
          rest: { color: color, scale: 1 }
        }}
      >
        {icon}
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Biochar Production & Carbon Credits (Core Project)",
      icon: <FaTree size={28} />,
      details: [
        "Large-scale biochar production using advanced pyrolysis",
        "Registration under Verra's VM0044 biochar methodology",
        "AI-driven MRV (Monitoring, Reporting, Verification) for transparency",
        "Blockchain-based smart contracts for carbon credit trading"
      ],
      color: "#00C9A7",
      impact: [
        "Annual carbon sequestration: 50,000+ tons CO2e",
        "Creates 200+ green jobs in rural communities",
        "Improves soil health for 5,000+ acres farmland"
      ]
    },
    {
      title: "Agro-Based Products & Agricultural Exports",
      icon: <FaLeaf size={28} />,
      details: [
        "Processing and export of banana powder, moringa powder",
        "Value addition at source to maximize farmer incomes",
        "Serving domestic and international markets",
        "Building strong supply chains for export compliance"
      ],
      color: "#845EC2",
      impact: [
        "Increases farmer incomes by 30-50%",
        "Reduces post-harvest losses by 60%",
        "Exports to 10+ countries"
      ]
    },
    {
      title: "Future Projects (In Pipeline)",
      icon: <FaSolarPanel size={28} />,
      details: [
        "Agrivoltaic Solar Projects — 5 MW scalable model",
        "Expanded Carbon Services — agroforestry, waste-to-energy"
      ],
      color: "#acbae2ff",
      impact: [
        "Potential renewable energy generation: 8 GWh/year",
        "Dual land use efficiency improvement",
        "Additional carbon offset potential"
      ]
    }
  ];

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  return (
    <section className="projects-section" id="projects" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="section-header"
        >
          <motion.h2 className="section-title">
            <motion.span
              initial={{ x: -20, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Our
            </motion.span>
            <motion.span
              className="highlight"
              initial={{ x: 20, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Projects
            </motion.span>
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Sustainable solutions with measurable impact
          </motion.p>
        </motion.div>
        
        <div className="projects-grid">
          <AnimatePresence>
            {projects.map((project, index) => {
              const delay = index * 0.15;
              return (
                <motion.div
                  key={index}
                  className="project-card"
                  initial={{ opacity: 0, y: 60, scale: 0.95 }}
                  animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ 
                    delay: delay,
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  whileHover={{
                    y: -15,
                    transition: { type: "spring", stiffness: 400, damping: 15 }
                  }}
                  style={{ '--accent-color': project.color }}
                  layout
                >
                  <div className="project-glow" style={{ backgroundColor: project.color }} />
                  
                  <motion.div 
                    className="project-header"
                    whileHover={{ x: 5 }}
                  >
                    <AnimatedIcon icon={project.icon} color={project.color} />
                    <h3>{project.title}</h3>
                  </motion.div>
                  
                  <ul className="project-details">
                    {project.details.map((detail, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ 
                          delay: delay + 0.2 + i * 0.1,
                          duration: 0.5
                        }}
                        whileHover={{ x: 5 }}
                      >
                        <div className="bullet" style={{ backgroundColor: project.color }} />
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                  
                  {project.impact && (
                    <motion.div
                      className="impact-section"
                      initial={{ opacity: 0, height: 0 }}
                      animate={inView ? { opacity: 1, height: 'auto' } : {}}
                      transition={{ delay: delay + 0.4 }}
                    >
                      <motion.h4
                        className="impact-title"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: delay + 0.5 }}
                      >
                        <motion.span
                          className="impact-underline"
                          initial={{ scaleX: 0 }}
                          animate={inView ? { scaleX: 1 } : {}}
                          transition={{ delay: delay + 0.5, duration: 0.6 }}
                          style={{ backgroundColor: project.color }}
                        />
                        Projected Impact:
                      </motion.h4>
                      <ul className="project-impact">
                        {project.impact.map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ 
                              delay: delay + 0.6 + i * 0.1,
                              duration: 0.5
                            }}
                          >
                            <motion.div
                              className="impact-badge"
                              initial={{ scale: 0 }}
                              animate={inView ? { scale: 1 } : {}}
                              transition={{ 
                                delay: delay + 0.6 + i * 0.1,
                                type: "spring"
                              }}
                              style={{ borderColor: project.color }}
                            >
                              <FaChartLine size={12} color={project.color} />
                            </motion.div>
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                  
                  <motion.div
                    className="project-footer"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: delay + 0.8 }}
                  >
                    <motion.button
                      className="learn-more-btn"
                      whileHover={{ 
                        backgroundColor: project.color,
                        color: '#fff',
                        boxShadow: `0 10px 20px ${project.color}40`
                      }}
                      whileTap={{ scale: 0.95 }}
                      style={{ borderColor: project.color }}
                    >
                      Learn More
                      <motion.span
                        className="arrow"
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                      >
                        →
                      </motion.span>
                    </motion.button>
                  </motion.div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;