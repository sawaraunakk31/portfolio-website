import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase,
  FaGitAlt, FaDocker, FaAws, FaPython, FaJava, FaPhp
} from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'HTML5', level: 95, icon: FaHtml5, color: '#E34F26' },
        { name: 'CSS3', level: 90, icon: FaCss3Alt, color: '#1572B6' },
        { name: 'JavaScript', level: 88, icon: FaJs, color: '#F7DF1E' },
        { name: 'React.js', level: 85, icon: FaReact, color: '#61DAFB' }
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 82, icon: FaNodeJs, color: '#339933' },
        { name: 'Python', level: 80, icon: FaPython, color: '#3776AB' },
        { name: 'Java', level: 75, icon: FaJava, color: '#ED8B00' },
        { name: 'PHP', level: 70, icon: FaPhp, color: '#777BB4' }
      ]
    },
    {
      title: 'Database & Tools',
      skills: [
        { name: 'MongoDB', level: 85, icon: FaDatabase, color: '#47A248' },
        { name: 'Git', level: 90, icon: FaGitAlt, color: '#F05032' },
        { name: 'Docker', level: 75, icon: FaDocker, color: '#2496ED' },
        { name: 'AWS', level: 70, icon: FaAws, color: '#FF9900' }
      ]
    }
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="skills-header"
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            My technical expertise spans across various technologies and frameworks. 
            Here's what I bring to the table.
          </p>
        </motion.div>

        <div className="skills-content">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1, 
                      duration: 0.5 
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="skill-header">
                      <div className="skill-icon" style={{ color: skill.color }}>
                        <skill.icon />
                      </div>
                      <div className="skill-info">
                        <h4>{skill.name}</h4>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3, 
                          duration: 1,
                          ease: "easeOut"
                        }}
                        style={{ backgroundColor: skill.color }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="skills-summary"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h3>Additional Skills</h3>
          <div className="additional-skills">
            <span className="skill-tag">TypeScript</span>
            <span className="skill-tag">Next.js</span>
            <span className="skill-tag">Express.js</span>
            <span className="skill-tag">PostgreSQL</span>
            <span className="skill-tag">Redis</span>
            <span className="skill-tag">GraphQL</span>
            <span className="skill-tag">REST APIs</span>
            <span className="skill-tag">Jest</span>
            <span className="skill-tag">Webpack</span>
            <span className="skill-tag">CI/CD</span>
            <span className="skill-tag">Agile</span>
            <span className="skill-tag">UI/UX Design</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 