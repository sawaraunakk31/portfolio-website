import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaPython, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiFastapi, SiJavascript, SiNextdotjs } from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact />, color: 'text-cyan-400' },
  { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-500' },
  { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-400' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-sky-400' },
  { name: 'JavaScript', icon: <SiJavascript />, color: 'text-yellow-400' },
  { name: 'HTML5', icon: <FaHtml5 />, color: 'text-orange-500' },
  { name: 'CSS3', icon: <FaCss3Alt />, color: 'text-blue-500' },
  { name: 'Python', icon: <FaPython />, color: 'text-yellow-300' },
  { name: 'FastAPI', icon: <SiFastapi />, color: 'text-teal-400' },
  { name: 'Next.js', icon: <SiNextdotjs />, color: 'text-white' },
  { name: 'GitHub', icon: <FaGithub />, color: 'text-gray-300' },
];

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen bg-gradient-to-b from-black to-[#0a0a0a] text-white py-20 px-6 md:px-20">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-space-grotesk"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 place-items-center">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center group transform transition duration-300 hover:scale-110 cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div
              className={`text-5xl md:text-6xl p-6 rounded-xl bg-[#111] shadow-lg border border-white/10 group-hover:shadow-cyan-500/40 ${skill.color}`}
            >
              {skill.icon}
            </div>
            <p className="mt-3 text-sm md:text-base text-white/80 group-hover:text-cyan-300">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
