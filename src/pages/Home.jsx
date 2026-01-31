import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import AutomationCards from '../components/AutomationCards';
import Process from '../components/Process';
import ROICalculator from '../components/ROICalculator';
import ContactForm from '../components/ContactForm';

const Home = () => {
  return (
    // Ensuring the base background is consistent throughout the scroll
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-dark-900"
    >
      <Hero />
      <Stats />
      <AutomationCards />
      <Process />
      <ROICalculator />
      <ContactForm />
    </motion.div>
  );
};

export default Home;