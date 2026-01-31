import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="bg-dark-900/80 backdrop-blur-xl border-b border-white/5 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo with Glow Effect */}
          <Link to="/" className="group flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg rotate-12 group-hover:rotate-0 transition-transform duration-300 flex items-center justify-center shadow-[0_0_15px_rgba(255,109,90,0.5)]">
               <div className="w-4 h-4 bg-white rounded-full animate-pulse" />
            </div>
            <span className="text-2xl font-extrabold tracking-tighter text-white">
              AI<span className="text-primary transition-colors duration-300 group-hover:text-secondary">AUTO</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="relative text-gray-400 hover:text-white transition-colors duration-200 font-medium text-[15px] py-2"
              >
                {link.name}
                {/* Active Indicator Underline */}
                {location.pathname === link.path && (
                  <motion.div 
                    layoutId="navUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary shadow-[0_0_10px_#FF6D5A]"
                  />
                )}
              </Link>
            ))}
            
            {/* CTA Button with Shimmer */}
            <Link
              to="/#contact"
              className="btn-primary" 
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white p-2"
          >
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu with Staggered Children */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-dark-800 border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-8 space-y-1">
              {navLinks.map((link, i) => (
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-4 text-gray-300 hover:text-white hover:bg-white/5 rounded-md font-medium text-lg border-l-2 border-transparent hover:border-primary"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="pt-4"
              >
                <Link
                  to="/#contact"
                  onClick={() => setIsOpen(false)}
                  className="block bg-primary text-white px-3 py-4 rounded-lg font-bold text-center shadow-lg shadow-primary/20"
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;