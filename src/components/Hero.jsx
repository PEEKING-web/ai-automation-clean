import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight, HiLightningBolt } from 'react-icons/hi';

const Hero = () => {
  // Animation variants for staggered text reveal
  const containerVars = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVars = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section className="relative pt-20 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 overflow-hidden">
      {/* Dynamic Background Light (Aurora) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">

          {/* Left Content */}
          <motion.div variants={containerVars} initial="initial" animate="animate">
            <motion.div variants={itemVars} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4 sm:mb-6">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-ping" />
              <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-gray-400">Next-Gen Automation</span>
            </motion.div>

            <motion.h1 variants={itemVars} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[84px] font-extrabold text-white leading-[0.95] mb-6 sm:mb-8 tracking-tighter">
              Stop Doing <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#ff8d7e] to-secondary">
                Repetitive Work.
              </span>
            </motion.h1>

            <motion.p variants={itemVars} className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-10 max-w-lg leading-relaxed">
              We build intelligent AI ecosystems that think, act, and scale for you. Save 20+ hours weekly with custom-built neural workflows.
            </motion.p>

            <motion.div variants={itemVars} className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <a href="#contact" className="btn-primary flex items-center justify-center group text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5">
                Get Started Free
                <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <a href="#roi-calculator" className="backdrop-blur-md border border-white/10 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-bold hover:bg-white/5 transition-all duration-300 text-center text-base sm:text-lg">
                Calculate ROI
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - The Living Workflow */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative mt-8 lg:mt-0"
          >
            {/* SVG Connection Path */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400" fill="none">
              <path d="M50 100 Q 200 50 350 100 T 350 300" stroke="url(#line-grad)" strokeWidth="2" strokeDasharray="8 8" />
              <defs>
                <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FF6D5A" />
                  <stop offset="100%" stopColor="#7D4CDB" />
                </linearGradient>
              </defs>
            </svg>

            <div className="relative bg-dark-800/50 backdrop-blur-xl rounded-[1.5rem] sm:rounded-[2rem] p-4 sm:p-6 md:p-8 border border-white/10 shadow-2xl overflow-hidden">
              <div className="space-y-3 sm:space-y-4">
                {[
                  { icon: '✉️', label: 'Inbound Inquiry', color: 'bg-primary' },
                  { icon: '🤖', label: 'AI Processing', color: 'bg-secondary' },
                  { icon: '📅', label: 'Automated CRM', color: 'bg-accent' }
                ].map((node, i) => (
                  <motion.div
                    key={i}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.8 + i * 0.2 }}
                    className="flex items-center gap-3 sm:gap-4 bg-white/5 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-white/10 hover:border-white/20 transition-colors"
                  >
                    <div className={`${node.color} w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center text-xl sm:text-2xl shadow-lg`}>
                      {node.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-xs sm:text-sm font-bold text-white">{node.label}</div>
                      <div className="h-1.5 bg-white/10 rounded-full mt-2 w-full overflow-hidden">
                        <motion.div 
                          animate={{ x: ['-100%', '100%'] }}
                          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                          className="h-full w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                        />
                      </div>
                    </div>
                    <div className="text-green-400 text-[10px] sm:text-xs font-mono">ACTIVE</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating Achievement Badge */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-white text-dark-900 rounded-xl sm:rounded-2xl px-4 py-3 sm:px-6 sm:py-4 shadow-[0_20px_50px_rgba(255,109,90,0.3)] flex items-center gap-2 sm:gap-3"
            >
              <div className="bg-primary/20 p-1.5 sm:p-2 rounded-lg text-primary">
                <HiLightningBolt size={20} className="sm:w-6 sm:h-6" />
              </div>
              <div>
                <div className="text-[10px] sm:text-xs uppercase tracking-tighter font-black text-gray-500">Efficiency Boost</div>
                <div className="text-base sm:text-xl font-bold">98.2% AI Accuracy</div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;