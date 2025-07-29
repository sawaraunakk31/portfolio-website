import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';

const roles = [
  "Full-Stack Developer",
  "Problem Solver",
  "Tech Enthusiast",
  "Open Source Contributor",
];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const heading = "Hi, I'm Raunak Sawa";

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-black via-[#0a0a0a] to-[#111] text-white px-6 py-24 font-space-grotesk overflow-hidden">
      
      {/* Glowing Background Dots */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_10%_10%,rgba(255,0,255,0.1)_0%,transparent_40%),radial-gradient(circle_at_80%_50%,rgba(0,255,255,0.1)_0%,transparent_40%)] animate-pulse" />
      </div>

      {/* Gradient Blobs */}
      <motion.div
        className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full opacity-30 mix-blend-multiply filter blur-3xl animate-blob"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500 rounded-full opacity-30 mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      />

      {/* Main Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 text-center max-w-3xl"
      >
        <h1 className="text-5xl sm:text-6xl font-bold leading-tight tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 drop-shadow-lg">
          {heading.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              {char}
            </motion.span>
          ))}
        </h1>

        {/* Typewriter Role Effect */}
        <motion.p
          className="text-xl sm:text-2xl font-medium text-pink-400 h-10 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {roles[currentRole]}
        </motion.p>

        <motion.p
          className="text-lg sm:text-xl text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          Let's build the future together.
        </motion.p>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-2xl transition animate-glow"
        >
          Contact Me <FaArrowDown className="animate-bounce" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
