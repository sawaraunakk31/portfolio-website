import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown, FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaFilePdf } from 'react-icons/fa';

const roles = [
  "Full-Stack Developer",
  "Problem Solver",
  "Tech Enthusiast",
  "Open Source Contributor",
];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    let typingSpeed = isDeleting ? 160 : 180;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(role.substring(0, displayedText.length + 1));
        if (displayedText === role) {
          setIsDeleting(true);
          typingSpeed = 1000;
        }
      } else {
        setDisplayedText(role.substring(0, displayedText.length - 1));
        if (displayedText === '') {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting]);

  const heading = "Hi, I'm Raunak Sawa";

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-black via-[#0a0a0a] to-[#111] text-white px-6 py-24 font-space-grotesk overflow-hidden snap-start">
      
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
          transition={{ delay: 2.0 }}
        >
          {displayedText}
          <span className="blinking-cursor-hero">|</span>
        </motion.p>

        <motion.p
          className="text-lg sm:text-xl text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          Let's build the future together.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {/* Resume Button */}
          <motion.a
            href="../Raunak_Resume_Aug 2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-cyan-500 px-5 py-2 rounded-full font-semibold shadow-lg hover:shadow-2xl transition"
          >
            <FaFilePdf /> Resume
          </motion.a>

          {/* Contact Me Button */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-2xl transition animate-glow"
          >
            Contact Me <FaArrowDown className="animate-bounce" />
          </motion.a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-xl text-gray-400">
          <a href="https://github.com/sawaraunakk31" target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><FaGithub /></a>
          <a href="https://linkedin.com/in/raunak-sawa" target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><FaLinkedin /></a>
          <a href="https://instagram.com/raunak.sawa" target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><FaInstagram /></a>
          <a href="mailto:sawaraunak31@gmail.com" className="hover:text-white transition"><FaEnvelope /></a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
