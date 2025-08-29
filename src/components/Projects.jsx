import React, { useRef, useEffect } from 'react';
import { FaTree, FaLeaf, FaSolarPanel, FaChartLine, FaShieldAlt, FaArrowRight } from 'react-icons/fa';
import { motion, useAnimation, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import './Projects.css';

// Enhanced animated icon component with floating effect
const AnimatedIcon = ({ icon, color }) => {
  const controls = useAnimation();
  
  return (
    <motion.div
      className="icon-wrapper"
      whileHover={{ scale: 1.1, rotate: 5 }}
      onHoverStart={() => controls.start("hover")}
      onHoverEnd={() => controls.start("rest")}
    >
      <motion.div
        className="icon-backdrop"
        initial={{ scale: 0.8, opacity: 0.3 }}
        animate={controls}
        variants={{
          hover: { 
            scale: 1, 
            opacity: 0.5, 
            backgroundColor: `${color}30`,
            rotate: 180,
            transition: { type: "spring", stiffness: 200, damping: 15 }
          },
          rest: { 
            scale: 0.8, 
            opacity: 0.3, 
            backgroundColor: `${color}10`,
            rotate: 0,
            transition: { type: "spring", stiffness: 100, damping: 15 }
          }
        }}
      />
      <motion.div
        className="icon-foreground"
        animate={controls}
        variants={{
          hover: { 
            color: color, 
            scale: 1.2,
            y: -5,
            transition: { type: "spring", stiffness: 400, damping: 10 }
          },
          rest: { 
            color: color, 
            scale: 1,
            y: 0,
            transition: { type: "spring", stiffness: 300, damping: 15 }
          }
        }}
        whileHover={{ 
          rotate: [0, -10, 10, 0],
          transition: { duration: 0.5 }
        }}
      >
        {icon}
      </motion.div>
      
      {/* Floating particles around icon */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="floating-particle"
          style={{ backgroundColor: color }}
          animate={{
            y: [0, -15, 0],
            x: [0, i % 2 === 0 ? 10 : -10, 0],
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: 2 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut"
          }}
        />
      ))}
    </motion.div>
  );
};

// Floating background elements
const FloatingBackground = () => {
  return (
    <div className="floating-background">
      {[1, 2, 3, 4, 5].map((i) => (
        <motion.div
          key={i}
          className="floating-shape"
          style={{
            background: `linear-gradient(45deg, var(--gradient-${i % 3}))`,
            top: `${20 + i * 10}%`,
            left: `${i * 15}%`,
            width: `${50 + i * 10}px`,
            height: `${50 + i * 10}px`,
            borderRadius: i % 2 === 0 ? '50%' : '20%'
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, i % 2 === 0 ? 20 : -20, 0],
            rotate: [0, i % 2 === 0 ? 10 : -10, 0],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
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
      color: "#2D30EF",
      impact: [
        "Potential renewable energy generation: 8 GWh/year",
        "Dual land use efficiency improvement",
        "Additional carbon offset potential"
      ]
    }
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1, triggerOnce: false });
  const controls = useAnimation();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

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
    <motion.section 
      className="projects-section" 
      id="projects" 
      ref={ref}
      style={{ opacity, scale }}
    >
      <FloatingBackground />
      
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="section-header"
        >
          <motion.h2 className="section-title">
            <motion.span
              initial={{ x: -20, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Our
            </motion.span>
            <motion.span
              className="highlight"
              initial={{ x: 20, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Projects
            </motion.span>
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
         
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <AnimatePresence>
            {projects.map((project, index) => {
              const delay = index * 0.15;
              return (
                <motion.div
                  key={index}
                  className="project-card"
                  variants={itemVariants}
                  initial="hidden"
                  animate={controls}
                  exit={{ opacity: 0, y: 20 }}
                  whileHover={{
                    y: -15,
                    transition: { type: "spring", stiffness: 400, damping: 15 }
                  }}
                  style={{ '--accent-color': project.color }}
                  layout
                >
                  {/* Animated glow effect */}
                  <motion.div 
                    className="project-glow"
                    style={{ backgroundColor: project.color }}
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  <motion.div 
                    className="project-header"
                    whileHover={{ x: 5 }}
                  >
                    <AnimatedIcon icon={project.icon} color={project.color} />
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: delay + 0.2 }}
                    >
                      {project.title}
                    </motion.h3>
                  </motion.div>
                  
                  <ul className="project-details">
                    {project.details.map((detail, i) => (
                      <motion.li
                        key={i}
                        variants={itemVariants}
                        initial="hidden"
                        animate={controls}
                        transition={{ delay: delay + 0.1 + i * 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        <motion.div 
                          className="bullet" 
                          style={{ backgroundColor: project.color }}
                          whileHover={{ scale: 1.2 }}
                        />
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                  
                  {project.impact && (
                    <motion.div
                      className="impact-section"
                      initial={{ opacity: 0, height: 0 }}
                      animate={isInView ? { opacity: 1, height: 'auto' } : {}}
                      transition={{ delay: delay + 0.4 }}
                    >
                      <motion.h4
                        className="impact-title"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: delay + 0.5 }}
                      >
                        <motion.span
                          className="impact-underline"
                          initial={{ scaleX: 0 }}
                          animate={isInView ? { scaleX: 1 } : {}}
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
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ 
                              delay: delay + 0.6 + i * 0.1,
                              duration: 0.5
                            }}
                          >
                            <motion.div
                              className="impact-badge"
                              initial={{ scale: 0 }}
                              animate={isInView ? { scale: 1 } : {}}
                              transition={{ 
                                delay: delay + 0.6 + i * 0.1,
                                type: "spring"
                              }}
                              style={{ borderColor: project.color }}
                              whileHover={{ 
                                rotate: 360,
                                transition: { duration: 0.5 }
                              }}
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
                    animate={isInView ? { opacity: 1 } : {}}
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
                        <FaArrowRight />
                      </motion.span>
                    </motion.button>
                  </motion.div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;