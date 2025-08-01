import React from 'react';
import { motion } from 'framer-motion';
import profile from '../assets/profile.jpg';

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.2, duration: 1, type: 'spring' },
  },
};

const listVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4 + i * 0.2,
      duration: 0.6,
      type: 'spring',
    },
  }),
};

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-black text-white flex items-center justify-center px-4 sm:px-10 overflow-hidden snap-start"
    >
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

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="relative z-10 w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-10"
      >
        {/* Profile Image Section */}
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center shrink-0">
          {/* Rotating border only */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 p-[6px] animate-spin-slow z-0"></div>

          {/* Static image container */}
          <div className="relative w-[95%] h-[95%] rounded-full overflow-hidden z-10 bg-black border-4 border-black">
            <img
              src={profile}
              alt="Profile"
              className="w-full h-full object-cover object-center rounded-full"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left space-y-5">
          <h2 className="text-4xl font-bold font-space-grotesk text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 relative inline-block">
            About Me
          </h2>

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed px-1">
            I’m a passionate <span className="text-cyan-400 font-semibold">full-stack developer</span> currently pursuing my B.Tech at <span className="text-purple-400 font-semibold">VIT Vellore</span>. I love building clean, responsive <span className="text-cyan-300 font-semibold">UI/UX</span> and robust <span className="text-purple-300 font-semibold">backend systems</span> that solve real-world problems. With a strong grasp of <span className="text-purple-400 font-semibold">API integration</span>, <span className="text-cyan-300 font-semibold">performance optimization</span>, and modern frameworks, I strive to create meaningful user experiences. I'm currently open to exciting <span className="text-cyan-400 font-semibold">internship</span> or <span className="text-cyan-400 font-semibold">collaboration</span> opportunities to learn, grow, and contribute to impactful projects.
          </p>
          <ul className="text-[15px] sm:text-base text-gray-300 mt-4 flex flex-col gap-2 sm:gap-2.5 px-2 sm:px-0">
            {[
              <>
                🚀 <span className="text-cyan-400 font-semibold">MERN</span>, <span className="text-purple-400 font-semibold">Tailwind</span>, &{' '}
                <span className="text-cyan-400 font-semibold">Framer Motion</span> for full-stack magic
              </>,
              <>
                🧠 Focused on <span className="text-purple-300 font-semibold">problem-solving</span>,{' '}
                <span className="text-cyan-300 font-semibold">clean architecture</span>, and UX
              </>,
              <>
                ⚡ Exploring <span className="text-cyan-300 font-semibold">AI tools</span> & automation ideas
              </>,
            ].map((item, i) => (
              <motion.li
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                variants={listVariants}
                viewport={{ once: true }}
                className="group relative pl-1 sm:pl-2"
              >
                <span className="inline-block relative group-hover:text-white transition duration-300">
                  <span className="relative z-10">{item}</span>
                  <span className="hidden sm:inline-block absolute left-0 bottom-0 h-[1px] w-0 bg-cyan-400 group-hover:w-full transition-all duration-500"></span>
                </span>
              </motion.li>
            ))}
          </ul>




        </div>
      </motion.div>
    </section>
  );
};

export default About;
