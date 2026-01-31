import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  // Define links as objects to handle different paths correctly
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' }
  ];

  return (
    <footer className="bg-dark-900 border-t border-white/5 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 relative">
        
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Brand & System Status */}
          <div className="md:col-span-4">
            <Link to="/" className="inline-block mb-8 group">
              <span className="text-3xl font-black tracking-tighter transition-all group-hover:tracking-normal">
                AI<span className="text-primary group-hover:text-secondary transition-colors">AUTO</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-8">
              Engineering autonomous workflows for the next generation of small business. Built with precision, deployed with speed.
            </p>
            
            {/* Live Status Indicator */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">System Status: Operational</span>
            </div>
          </div>

          {/* Fixed Navigation Columns */}
          <div className="md:col-span-2">
            <h4 className="font-black text-white mb-8 uppercase tracking-[0.2em] text-[10px]">Product</h4>
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className="text-gray-500 hover:text-primary transition-all text-sm font-bold"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-black text-white mb-8 uppercase tracking-[0.2em] text-[10px]">Infrastructure</h4>
            <ul className="space-y-4 text-gray-500 text-sm font-bold">
              <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-primary" /> Neural Email
              </li>
              <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-primary" /> Data Extraction
              </li>
              <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-primary" /> Agentic Chat
              </li>
              <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-primary" /> Sync Logic
              </li>
            </ul>
          </div>

          {/* Social Connect */}
          <div className="md:col-span-3">
            <h4 className="font-black text-white mb-8 uppercase tracking-[0.2em] text-[10px]">Command Center</h4>
            <div className="flex space-x-4">
              {[
                { icon: <FaLinkedin size={18} />, link: '#' },
                { icon: <FaTwitter size={18} />, link: '#' },
                { icon: <FaGithub size={18} />, link: '#' },
                { icon: <FaEnvelope size={18} />, link: 'mailto:contact@aiautomate.com' }
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.link}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary/50 transition-all hover:shadow-[0_0_15px_rgba(255,109,90,0.2)]"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <div className="mt-8">
              <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest leading-loose">
                Established 2026 <br />
                Mumbai
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-[10px] font-bold tracking-widest uppercase">
            &copy; 2026 AI AUTO SYSTEMS. ALL RECOVERED HOURS RESERVED.
          </p>
          <div className="flex space-x-8 text-[10px] font-black uppercase tracking-widest text-gray-600">
            <a href="#" className="hover:text-primary transition-colors">Privacy_Protocol</a>
            <a href="#" className="hover:text-primary transition-colors">Service_Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;