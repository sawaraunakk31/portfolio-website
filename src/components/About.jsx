import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaUserGraduate, FaRobot, FaLaptopCode, FaGlobe } from 'react-icons/fa';
import 'animate.css';
import '@fontsource-variable/space-grotesk';
import '@fontsource/jetbrains-mono';

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const stats = [
    { number: '3rd Year', label: 'B.Tech @ VIT Vellore', icon: FaUserGraduate },
    { number: 'AI & ML', label: 'Enthusiast & Learner', icon: FaRobot },
    { number: 'Web Dev', label: 'Frontend & Backend', icon: FaLaptopCode },
    { number: 'Vision', label: 'Software Developer', icon: FaGlobe },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] py-20 px-6 sm:px-10 font-space-grotesk text-white"
    >
      {/* Grid Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div className="w-[160%] h-[160%] animate-pulse-slow bg-[radial-gradient(#00ffe0_1px,transparent_1px)] [background-size:20px_20px] opacity-5"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 animate__animated animate__fadeInUp"
        >
          <h2 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent tracking-tight drop-shadow-2xl">
            About Me
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed mt-4">
            A <span className="text-pink-400 font-semibold">creative technologist</span> pursuing B.Tech @ VIT, blending
            <span className="text-purple-400 font-semibold"> Web Development</span> and
            <span className="text-blue-400 font-semibold"> AI/ML</span> to shape the future.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-4 underline decoration-pink-500 underline-offset-4 tracking-wide">
              Who I Am
            </h3>
            <p className="text-gray-400 text-base mb-4">
              I’m a <span className="text-purple-400 font-medium">problem solver</span> with a flair for creating intuitive,
              interactive, and high-impact digital experiences.
            </p>
            <p className="text-gray-400 text-base mb-6">
              Passionate about crafting <span className="text-blue-400 font-medium">clean</span>, <span className="text-pink-400 font-medium">scalable</span>, and <span className="text-purple-400 font-medium">future-ready</span> codebases.
            </p>

            <h3 className="text-2xl font-semibold mb-4 underline decoration-blue-500 underline-offset-4 tracking-wide">
              My Interests
            </h3>
            <ul className="space-y-6">
              <li className="group flex items-start gap-4 p-5 bg-white/5 border border-white/10 rounded-xl hover:scale-[1.03] hover:bg-indigo-500/10 transition-all duration-300 shadow-xl">
                <FaLaptopCode className="text-blue-400 text-2xl mt-1 group-hover:rotate-12 transition-transform" />
                <div>
                  <h4 className="text-white font-semibold text-lg">Web Development</h4>
                  <p className="text-gray-400 text-sm">Full-stack builder with React, Node.js & modern frameworks.</p>
                </div>
              </li>
              <li className="group flex items-start gap-4 p-5 bg-white/5 border border-white/10 rounded-xl hover:scale-[1.03] hover:bg-pink-500/10 transition-all duration-300 shadow-xl">
                <FaRobot className="text-pink-400 text-2xl mt-1 group-hover:rotate-12 transition-transform" />
                <div>
                  <h4 className="text-white font-semibold text-lg">Artificial Intelligence</h4>
                  <p className="text-gray-400 text-sm">Exploring NLP, LLMs & generative AI using transformers.</p>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Right: Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="sticky top-24"
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  className="group text-center bg-white/5 hover:bg-white/10 border border-white/10 p-6 rounded-2xl transition-all transform hover:-translate-y-1 shadow-2xl backdrop-blur-lg"
                >
                  <stat.icon className="text-3xl mb-3 text-blue-400 group-hover:scale-110 transition-transform" />
                  <div className="text-2xl font-bold text-white bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm font-medium text-gray-400 mt-1">{stat.label}</div>
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
