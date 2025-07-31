import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowUp, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a0a0a] text-gray-400 px-6 py-8 border-t border-white/10 font-space-grotesk sticky bottom-0 z-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left text-sm sm:text-base"
        >
          © {new Date().getFullYear()}{' '}
          <span className="text-white font-semibold">Raunak Sawa</span>. All Rights Reserved.
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex gap-6 text-lg"
        >
          <a
            href="https://github.com/sawaraunakk31"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/raunak-sawa"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com/raunak.sawa"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:sawaraunak31@email.com"
            className="hover:text-white transition duration-300"
          >
            <FaEnvelope />
          </a>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-8 right-8 bg-cyan-600 hover:bg-cyan-700 text-white p-3 rounded-full shadow-lg z-50"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </motion.button>
      )}
    </footer>
  );
};

export default Footer;
