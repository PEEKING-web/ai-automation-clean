import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

// Logic to animate the numbers rolling up
const Counter = ({ value, direction = "up" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  // Extract number from string (e.g., "500+" -> 500)
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
  const spring = useSpring(0, { mass: 1, stiffness: 100, damping: 30 });
  const display = useTransform(spring, (current) => 
    Math.round(current).toLocaleString() + (value.includes('+') ? '+' : value.includes('%') ? '%' : '')
  );

  useEffect(() => {
    if (isInView) {
      spring.set(numericValue);
    }
  }, [isInView, spring, numericValue]);

  return <motion.span ref={ref}>{display}</motion.span>;
};

const Stats = () => {
  const stats = [
    { number: '500+', label: 'Businesses Automated' },
    { number: '10K+', label: 'Hours Saved Monthly' },
    { number: '95%', label: 'Success Rate' },
    { number: '24/7', label: 'Neural Support' },
  ];

  return (
    <section className="relative bg-dark-900 py-20 sm:py-28 md:py-32 overflow-hidden">
      {/* Decorative vertical lines mimicking node connectors */}
      <div className="absolute inset-0 flex justify-around opacity-5 pointer-events-none">
        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-white to-transparent" />
        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-white to-transparent" />
        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-white to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 lg:gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="relative group">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center px-2 sm:px-4"
              >
                <div className="mb-3 sm:mb-4 inline-block">
                   {/* Hovering glow behind the number */}
                  <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <h3 className="relative text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tighter mb-2">
                    {/* Only use Counter for numeric values */}
                    {stat.number.match(/\d/) ? (
                      <Counter value={stat.number} />
                    ) : (
                      stat.number
                    )}
                  </h3>
                </div>

                <p className="text-primary font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[9px] sm:text-[10px] md:text-xs leading-tight">
                  {stat.label}
                </p>
                
                {/* Underline animation that expands on scroll */}
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "32px" }}
                  transition={{ delay: 0.5 + (index * 0.1), duration: 0.8 }}
                  className="h-1 bg-secondary mx-auto mt-3 sm:mt-4 rounded-full"
                />
              </motion.div>
              
              {/* Vertical Divider for desktop */}
              {index !== stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-white/10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;