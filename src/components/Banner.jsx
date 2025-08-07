import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FiArrowDown, FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import { FaLeaf, FaRecycle, FaSeedling } from 'react-icons/fa';
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from 'framer-motion';
import './Banner.css';

// Import your images
import biotech from '../assets/biotech.webp';
import image2 from '../assets/image2.jpeg';
import image3 from '../assets/images 3.jpeg';

const Banner = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovering, setIsHovering] = useState(false);
  const timeoutRef = useRef(null);
  const constraintsRef = useRef(null);
  
  const x = useMotionValue(0);
  const backgroundOpacity = useTransform(x, [-200, 0, 200], [0.5, 1, 0.5]);
  
  const slides = [
    { 
      title: 'AgroTech Revolution', 
      subtitle: 'Empowering a Greener Tomorrow',
      image: biotech,
      icon: <FaLeaf className="slide-icon" />,
      color: 'var(--green-primary)'
    },
    { 
      title: 'Biochar for Climate', 
      subtitle: 'Turn Waste Into Worth',
      image: image2,
      icon: <FaRecycle className="slide-icon" />,
      color: 'var(--blue-primary)'
    },
    { 
      title: 'Carbon Credits', 
      subtitle: 'Earn. Save. Sustain.',
      image: image3,
      icon: <FaSeedling className="slide-icon" />,
      color: 'var(--teal-primary)'
    }
  ];

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const nextSlide = useCallback(() => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = (i) => {
    setDirection(i > index ? 1 : -1);
    setIndex(i);
  };

  useEffect(() => {
    if (!isHovering) {
      resetTimeout();
      timeoutRef.current = setTimeout(nextSlide, 5000);
    }
    return () => resetTimeout();
  }, [index, isHovering, nextSlide]);

  // Parallax effect for mouse movement
  const handleMouseMove = (e) => {
    const container = constraintsRef.current;
    if (container) {
      const rect = container.getBoundingClientRect();
      const xPos = (e.clientX - rect.left) / rect.width;
      const yPos = (e.clientY - rect.top) / rect.height;
      
      animate(x, (xPos - 0.5) * 40, { type: 'spring', stiffness: 100 });
    }
  };

  // Swipe gestures
  const handleDragEnd = (event, info) => {
    if (info.offset.x > 100) {
      prevSlide();
    } else if (info.offset.x < -100) {
      nextSlide();
    }
  };

  return (
    <section 
      className="banner"
      ref={constraintsRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={index}
          className="slide"
          custom={direction}
          initial={{ opacity: 0, x: direction > 0 ? 300 : -300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction > 0 ? -300 : 300 }}
          transition={{ 
            type: 'spring', 
            stiffness: 300, 
            damping: 30,
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={constraintsRef}
          onDragEnd={handleDragEnd}
          style={{ x }}
        >
          <motion.div 
            className="slide-background"
            style={{ opacity: backgroundOpacity }}
          >
            <img 
              src={slides[index].image} 
              alt={slides[index].title}
              className="slide-image"
            />
            <div className="image-overlay" style={{ backgroundColor: slides[index].color }} />
          </motion.div>
          
          <div className="slide-content">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="icon-container"
            >
              {slides[index].icon}
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {slides[index].title}
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {slides[index].subtitle}
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="cta-container"
            >
              <button className="cta-button" style={{ borderColor: slides[index].color }}>
                Learn More
              </button>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="controls">
        <motion.button 
          className="nav-btn" 
          onClick={prevSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FiArrowLeft size={24} />
        </motion.button>
        <motion.button 
          className="nav-btn" 
          onClick={nextSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FiArrowRight size={24} />
        </motion.button>
      </div>

      <div className="dots">
        {slides.map((_, i) => (
          <motion.div
            key={i}
            className={`dot ${i === index ? 'active' : ''}`}
            onClick={() => goToSlide(i)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            animate={{
              backgroundColor: i === index ? slides[index].color : 'rgba(255, 255, 255, 0.5)'
            }}
          />
        ))}
      </div>

      {/* <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          y: [0, -15, 0]
        }}
        transition={{ 
          opacity: { delay: 1.5 },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
        }}
      >
        <FiArrowDown size={24} />
        <motion.span
          animate={{
            opacity: [0.6, 1, 0.6]
          }}
          transition={{
            repeat: Infinity,
            duration: 2
          }}
        >
          Scroll Down
        </motion.span>
      </motion.div> */}

      <motion.div 
        className="progress-bar"
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 5, ease: "linear" }}
        onAnimationComplete={() => {
          if (!isHovering) nextSlide();
        }}
        key={index}
      />
    </section>
  );
};

export default Banner;