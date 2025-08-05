import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaPython, FaGithub, FaJava, FaCuttlefish
} from 'react-icons/fa';
import {
  SiTailwindcss, SiMongodb, SiFastapi, SiJavascript, SiNextdotjs, SiExpress, SiFramer, SiVercel, SiRender,
  SiCplusplus,
  SiVisualstudiocode
} from 'react-icons/si';

const categories = [
  {
    name: 'Frontend',
    icons: [
      { element: <SiNextdotjs />, label: 'Next.js' },
      { element: <FaReact />, label: 'React' },
      { element: <SiTailwindcss />, label: 'Tailwind CSS' },
      { element: <SiJavascript />, label: 'JavaScript' },
      { element: <FaHtml5 />, label: 'HTML5' },
      { element: <FaCss3Alt />, label: 'CSS3' },
      { element: <SiFramer />, label: 'Framer Motion' }
    ],
    color: 'text-cyan-400'
  },
  {
    name: 'Backend',
    icons: [
      { element: <FaNodeJs />, label: 'Node.js' },
      { element: <SiExpress />, label: 'Express.js' },
      { element: <SiFastapi />, label: 'FastAPI' }
    ],
    color: 'text-green-400'
  },
  {
    name: 'Databases & Hosting',
    icons: [
      { element: <SiMongodb />, label: 'MongoDB' },
      { element: <SiVercel />, label: 'Vercel' },
      { element: <SiRender />, label: 'Render' }
    ],
    color: 'text-purple-400'
  },
  {
    name: 'Programming Languages',
    icons: [
      { element: <FaPython />, label: 'Python' },
      { element: <FaJava />, label: 'Java' },
      { element: <SiCplusplus />, label: 'C++' }
    ],
    color: 'text-yellow-400'
  },
  {
    name: 'Tools',
    icons: [
      { element: <FaGithub />, label: 'GitHub' },
      { element: <SiVisualstudiocode />, label: 'Visual Studio Code' }
    ],
    color: 'text-gray-300'
  }
];

const Skills = () => {
  const [activeTooltip, setActiveTooltip] = useState(null);

  return (
    <section id="skills" className="relative min-h-screen bg-gradient-to-b from-black to-[#0a0a0a] text-white py-20 px-4 sm:px-8 md:px-20 overflow-hidden">

      {/* Glowing Background Dots */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_10%_10%,rgba(255,0,255,0.1)_0%,transparent_40%),radial-gradient(circle_at_80%_50%,rgba(0,255,255,0.1)_0%,transparent_40%)] animate-pulse" />
      </div>

      {/* Animated Blob */}
      <motion.div
        className="absolute w-[32rem] h-[32rem] bg-gradient-to-br from-[#1e1e1e] via-[#2a2a2a] to-[#121212] rounded-full opacity-20 blur-[100px] mix-blend-lighten pointer-events-none"
        style={{ top: '10%', left: '25%' }}
        animate={{ x: [0, 30, -20, 0], y: [0, 40, -30, 0] }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
        whileHover={{
          scale: 1.1,
          opacity: 0.3,
          transition: { duration: 0.8, ease: "easeInOut" }
        }}
      />

      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-space-grotesk"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My Skills
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-center text-sm sm:text-base text-gray-400 max-w-2xl mx-auto mb-12 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Continuously exploring new technologies and open to full-stack development opportunities in fast-paced, innovative environments.
      </motion.p>

      {/* Skill Categories */}
      <div className="space-y-6 max-w-6xl mx-auto z-10 relative">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            className="flex flex-col sm:flex-row sm:items-center gap-4 md:gap-16 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-base sm:text-lg font-semibold sm:w-32 mb-2 sm:mb-0 group relative">
              {category.name}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </h3>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-4">
              {category.icons.map((iconObj, i) => {
                const uniqueKey = `${category.name}-${i}`;
                const isActive = activeTooltip === uniqueKey;

                const handleTooltipToggle = () => {
                  if (isActive) {
                    setActiveTooltip(null);
                  } else {
                    setActiveTooltip(uniqueKey);
                  }
                };

                return (
                  <motion.div
                    key={i}
                    className={`group relative text-3xl sm:text-4xl md:text-5xl ${category.color} transition duration-300`}
                    whileHover={{ scale: 1.15 }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    onClick={handleTooltipToggle}
                    onTouchStart={handleTooltipToggle}
                  >
                    {/* Glow Effect */}
                    <span className="absolute inset-0 rounded-full bg-current opacity-0 group-hover:opacity-30 blur-lg scale-110 transition-all duration-300 z-[-1]" />

                    {/* Icon */}
                    <span className="relative z-10">{iconObj.element}</span>

                    {/* Tooltip */}
                    <span
                      className={`absolute bottom-[-1.8rem] left-1/2 -translate-x-1/2 bg-black text-white text-xs font-medium px-2 py-1 rounded shadow-lg pointer-events-none whitespace-nowrap z-20
                      ${isActive ? 'opacity-100' : 'opacity-0'} 
                      group-hover:opacity-100 transition-all duration-300`}
                    >
                      {iconObj.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
