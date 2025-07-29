import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-gray-400 px-6 py-8 border-t border-white/10 font-space-grotesk">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left text-sm sm:text-base"
        >
          © {new Date().getFullYear()} <span className="text-white font-semibold">Raunak Sawa</span>. All Rights Reserved.
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex gap-6 text-lg"
        >
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="mailto:your@email.com"
            className="hover:text-white transition duration-300"
          >
            <FaEnvelope />
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
