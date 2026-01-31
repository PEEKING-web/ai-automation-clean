import React from 'react';
import { motion } from 'framer-motion';
import { HiClipboardCheck, HiCog, HiLightningBolt } from 'react-icons/hi';

const Process = () => {
  const steps = [
    {
      icon: <HiClipboardCheck className="w-8 h-8" />,
      title: 'Analyze Workflow',
      description: 'We map your manual bottlenecks and identify high-impact AI opportunities.',
      stepNum: '01'
    },
    {
      icon: <HiCog className="w-8 h-8" />,
      title: 'Neural Engineering',
      description: 'Our engineers build custom LLM chains and autonomous agents for your stack.',
      stepNum: '02'
    },
    {
      icon: <HiLightningBolt className="w-8 h-8" />,
      title: 'Active Deployment',
      description: 'We launch, monitor, and scale your AI workforce with 24/7 optimization.',
      stepNum: '03'
    },
  ];

  return (
    <section className="py-32 px-6 bg-dark-900 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-secondary/30 bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-widest">
            The Methodology
          </div>
          <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tighter">
            Our <span className="text-primary">Execution</span> Pipeline.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Animated Connection Path (Desktop) */}
          <svg className="hidden md:block absolute top-1/2 left-0 w-full h-1 z-0 -translate-y-1/2" fill="none">
            <motion.path
              d="M 100 0 H 1200"
              stroke="url(#gradient-line)"
              strokeWidth="2"
              strokeDasharray="12 12"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF6D5A" stopOpacity="0" />
                <stop offset="50%" stopColor="#7D4CDB" />
                <stop offset="100%" stopColor="#FF6D5A" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative z-10"
            >
              <div className="bg-dark-800/40 backdrop-blur-xl rounded-3xl p-10 border border-white/5 hover:border-white/20 transition-all duration-500 group h-full">
                {/* Visual Step Indicator */}
                <div className="flex justify-between items-start mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-white shadow-xl shadow-primary/20 group-hover:rotate-6 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <span className="text-4xl font-black text-white/5 group-hover:text-primary/20 transition-colors">
                    {step.stepNum}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                  {step.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed text-[15px]">
                  {step.description}
                </p>

                {/* Status Dot */}
                <div className="mt-8 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Ready for Deployment</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;