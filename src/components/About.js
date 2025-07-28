import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaUser, FaCode, FaLightbulb, FaHeart } from 'react-icons/fa';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const stats = [
    { number: '3+', label: 'Years Experience', icon: FaUser },
    { number: '50+', label: 'Projects Completed', icon: FaCode },
    { number: '20+', label: 'Happy Clients', icon: FaHeart },
    { number: '15+', label: 'Technologies', icon: FaLightbulb }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="about-header"
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Get to know me better - my journey, passion, and what drives me to create amazing digital experiences.
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h3>Who I Am</h3>
            <p>
              I'm a passionate Full Stack Developer with a love for creating beautiful, 
              functional, and user-centered digital experiences. With over 3 years of 
              experience in web development, I've had the privilege of working on a 
              diverse range of projects that have shaped my skills and perspective.
            </p>
            
            <p>
              My journey in technology began with curiosity and has evolved into a 
              deep passion for solving complex problems through elegant code. I believe 
              in writing clean, maintainable code that not only works flawlessly but 
              also provides an exceptional user experience.
            </p>

            <h3>What I Do</h3>
            <p>
              I specialize in modern web technologies including React, Node.js, and 
              various cloud platforms. My expertise spans from front-end development 
              with responsive design to back-end architecture and database management. 
              I'm always eager to learn new technologies and stay updated with the 
              latest industry trends.
            </p>

            <div className="about-values">
              <div className="value-item">
                <FaCode className="value-icon" />
                <div>
                  <h4>Clean Code</h4>
                  <p>Writing maintainable and scalable code that others can easily understand and build upon.</p>
                </div>
              </div>
              
              <div className="value-item">
                <FaLightbulb className="value-icon" />
                <div>
                  <h4>Innovation</h4>
                  <p>Always exploring new technologies and approaches to solve problems creatively.</p>
                </div>
              </div>
              
              <div className="value-item">
                <FaHeart className="value-icon" />
                <div>
                  <h4>User-First</h4>
                  <p>Designing experiences that prioritize user needs and create meaningful interactions.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-stats"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="stat-item"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                >
                  <div className="stat-icon">
                    <stat.icon />
                  </div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 