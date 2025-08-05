import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => setNavOpen(!navOpen);

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[100] backdrop-blur-md bg-black/50 shadow-md">
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
          {navLinks.map(({ name, id }) => (
            <motion.li
              key={id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="hover:text-cyan-400 transition-colors duration-200 cursor-pointer"
            >
              <a href={`#${id}`}>{name}</a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-2xl cursor-pointer z-50" onClick={toggleNav}>
          {navOpen ? <FaTimes /> : <FaBars />}
        </div>


        {/* Mobile Menu */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: navOpen ? 0 : '100%' }}
          transition={{ type: 'spring', stiffness: 60 }}
          className="fixed top-4 right-4 w-[85vw] h-[80vh] rounded-2xl z-40 bg-black/70 backdrop-blur-md shadow-xl p-6 flex flex-col justify-center items-center space-y-6 md:hidden"
        >
          {navLinks.map(({ name, id }) =>
            <a
              key={id}
              href={`#${id}`}
              onClick={toggleNav}
              className="text-white text-lg font-medium hover:text-cyan-400 transition duration-200"
            >
              {name}
            </a>
          )}
        </motion.div>

      </nav>
    </header>
  );
};

export default Navbar;
