import React from 'react';
import { motion } from 'framer-motion';
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaPython, FaGithub, FaJava, FaCuttlefish
} from 'react-icons/fa';
import {
  SiTailwindcss, SiMongodb, SiFastapi, SiJavascript, SiNextdotjs, SiExpress, SiFramer, SiVercel, SiRender
} from 'react-icons/si';

const categories = [
  {
    name: 'Frontend',
    icons: [<FaReact />, <SiTailwindcss />, <SiJavascript />, <FaHtml5 />, <FaCss3Alt />, <SiNextdotjs />, <SiFramer />],
    color: 'text-cyan-400'
  },
  {
    name: 'Backend',
    icons: [<FaNodeJs />, <SiExpress />, <SiFastapi />, <FaPython />],
    color: 'text-green-400'
  },
  {
    name: 'Databases & Hosting',
    icons: [<SiMongodb />, <SiVercel />, <SiRender />],
    color: 'text-purple-400'
  },
  {
    name: 'Programming Languages',
    icons: [<FaPython />, <FaJava />, <FaCuttlefish className="rotate-90" />],
    color: 'text-yellow-400'
  },
  {
    name: 'Tools',
    icons: [<FaGithub />],
    color: 'text-gray-300'
  }
];

const iconVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
      ease: 'easeOut'
    }
  })
};

const Skills = () => {
  return (
    <section id="skills" className="relative min-h-screen bg-gradient-to-b from-black to-[#0a0a0a] text-white py-20 px-4 sm:px-8 md:px-20 overflow-hidden">

      {/* Glowing Background Dots */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_10%_10%,rgba(255,0,255,0.1)_0%,transparent_40%),radial-gradient(circle_at_80%_50%,rgba(0,255,255,0.1)_0%,transparent_40%)] animate-pulse" />
      </div>

      {/* Single Subtle Interactive Blob */}
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
      <div className="space-y-6 max-w-6xl mx-auto">
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
              {category.icons.map((icon, i) => (
                <motion.div
                  key={i}
                  className={`group relative text-3xl sm:text-4xl md:text-5xl ${category.color} transition duration-300`}
                  whileHover={{ scale: 1.15 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  {/* Icon Glow Behind */}
                  <span className="absolute inset-0 rounded-full bg-current opacity-0 group-hover:opacity-30 blur-lg scale-110 transition-all duration-300 z-[-1]" />

                  {/* Actual Icon */}
                  <span className="relative z-10">{icon}</span>
                </motion.div>
              ))}

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
