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

const Skills = () => {
  return (
    <section id="skills" className="relative min-h-screen bg-gradient-to-b from-black to-[#0a0a0a] text-white py-20 px-4 sm:px-8 md:px-20 overflow-hidden">

      {/* Blobs Background */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-cyan-500 opacity-30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-120px] right-[-100px] w-[300px] h-[300px] bg-purple-600 opacity-30 rounded-full blur-3xl animate-pulse"></div>

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

      {/* Brief Description */}
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
            className="flex flex-col sm:flex-row sm:items-center gap-4 md:gap-10 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-base sm:text-lg font-semibold sm:w-32 mb-2 sm:mb-0">{category.name}:</h3>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-4">
              {category.icons.map((icon, i) => (
                <div
                  key={i}
                  className={`text-3xl sm:text-4xl md:text-5xl hover:scale-110 transition duration-300 ${category.color}`}
                >
                  {icon}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;