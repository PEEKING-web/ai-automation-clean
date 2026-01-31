import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ROICalculator = () => {
  const [hoursPerWeek, setHoursPerWeek] = useState(10);
  const [hourlyRate, setHourlyRate] = useState(50);

  const hoursPerYear = hoursPerWeek * 52;
  const yearlySavings = hoursPerYear * hourlyRate;
  const efficiencyMultiplier = Math.min(1.5, 1 + (hoursPerWeek / 40));

  return (
    <section id="roi-calculator" className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 bg-dark-900 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-secondary font-black tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[10px] sm:text-xs">Profit Optimization</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mt-3 sm:mt-4 mb-4 sm:mb-6 tracking-tighter px-4">
            Stop Burning <span className="text-primary">Capital.</span>
          </h2>
        </motion.div>

        <div className="bg-dark-800/50 backdrop-blur-2xl rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 md:p-14 border border-white/10 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center">
            
            {/* Input Side */}
            <div className="space-y-8 sm:space-y-10">
              <div className="p-5 sm:p-6 bg-white/5 rounded-2xl sm:rounded-3xl border border-white/5">
                <div className="flex justify-between items-end mb-4 sm:mb-6">
                  <span className="text-gray-400 font-bold uppercase text-[10px] sm:text-xs tracking-widest">Manual Labor / Week</span>
                  <motion.span 
                    key={hoursPerWeek}
                    initial={{ scale: 1.2, color: '#FF6D5A' }}
                    animate={{ scale: 1, color: '#FFFFFF' }}
                    className="text-3xl sm:text-4xl font-black"
                  >
                    {hoursPerWeek}h
                  </motion.span>
                </div>
                <input
                  type="range" min="1" max="40" value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  className="w-full h-1.5 bg-dark-900 rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>

              <div className="p-5 sm:p-6 bg-white/5 rounded-2xl sm:rounded-3xl border border-white/5">
                <div className="flex justify-between items-end mb-4 sm:mb-6">
                  <span className="text-gray-400 font-bold uppercase text-[10px] sm:text-xs tracking-widest">Hourly Value (USD)</span>
                  <motion.span 
                    key={hourlyRate}
                    initial={{ scale: 1.2, color: '#7D4CDB' }}
                    animate={{ scale: 1, color: '#FFFFFF' }}
                    className="text-3xl sm:text-4xl font-black"
                  >
                    ${hourlyRate}
                  </motion.span>
                </div>
                <input
                  type="range" min="20" max="300" step="5" value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-full h-1.5 bg-dark-900 rounded-lg appearance-none cursor-pointer accent-secondary"
                />
              </div>

              <div className="flex items-center gap-3 sm:gap-4 p-4 bg-primary/5 rounded-xl sm:rounded-2xl border border-primary/10">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-full flex items-center justify-center text-lg sm:text-xl flex-shrink-0">🚀</div>
                <p className="text-xs sm:text-sm text-gray-300">AI agents could improve your throughput by <strong>{((efficiencyMultiplier - 1) * 100).toFixed(0)}%</strong> instantly.</p>
              </div>
            </div>

            {/* Results Side */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl rounded-full opacity-30" />
              
              <div className="relative bg-dark-900/80 p-6 sm:p-8 md:p-10 rounded-[1.5rem] sm:rounded-[2rem] border border-white/10 overflow-hidden">
                <p className="text-gray-500 font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[9px] sm:text-[10px] mb-2">Annual Recovered Revenue</p>
                <div className="flex items-baseline gap-2 mb-6 sm:mb-8">
                  <motion.span 
                    key={yearlySavings}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter"
                  >
                    ${yearlySavings.toLocaleString()}
                  </motion.span>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${(hoursPerWeek/40)*100}%` }}
                      className="h-full bg-gradient-to-r from-primary to-secondary"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="bg-white/5 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-white/5">
                      <div className="text-primary font-black text-xl sm:text-2xl">{Math.round(hoursPerYear / 8)}</div>
                      <div className="text-gray-500 text-[9px] sm:text-[10px] uppercase font-bold mt-1">Days Reclaimed</div>
                    </div>
                    <div className="bg-white/5 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-white/5">
                      <div className="text-secondary font-black text-xl sm:text-2xl">{Math.round(hoursPerYear / 40)}</div>
                      <div className="text-gray-500 text-[9px] sm:text-[10px] uppercase font-bold mt-1">Work Weeks Gained</div>
                    </div>
                  </div>
                </div>

                <button className="w-full mt-8 sm:mt-10 btn-primary py-4 sm:py-5 text-base sm:text-lg">
                  Claim Your {hoursPerWeek} Hours →
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;