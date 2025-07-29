import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => setNavOpen(!navOpen);

  const navLinks = ['Home', 'About', 'Projects', 'Contact'];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/50 shadow-md">
      <nav className="flex justify-between items-center px-6 md:px-12 py-4 text-white font-space-grotesk">
        
        {/* Logo */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text"
        >
          Raunak.dev
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg">
          {navLinks.map(link => (
            <motion.li
              key={link}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="hover:text-cyan-400 transition-colors duration-200 cursor-pointer"
            >
              <a href={`#${link.toLowerCase()}`}>{link}</a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden text-2xl cursor-pointer z-50" onClick={toggleNav}>
          {navOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Mobile Menu */}
        <motion.ul
          initial={{ x: '100%' }}
          animate={{ x: navOpen ? 0 : '100%' }}
          transition={{ type: 'spring', stiffness: 60 }}
          className={`fixed top-0 right-0 h-full w-64 bg-[#0a0a0a] text-white flex flex-col items-center justify-center space-y-10 text-2xl shadow-lg transition-transform duration-300 ${
            navOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {navLinks.map(link => (
            <li key={link} className="hover:text-cyan-400" onClick={toggleNav}>
              <a href={`#${link.toLowerCase()}`}>{link}</a>
            </li>
          ))}
        </motion.ul>
      </nav>
    </header>
  );
};

export default Navbar;
