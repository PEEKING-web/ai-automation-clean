import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMail, HiDocumentText, HiChatAlt2, HiCalendar, HiChevronDown, HiArrowRight } from 'react-icons/hi';

const Solutions = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const solutions = [
    {
      icon: <HiMail className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Email Automation',
      description: 'Intelligent triage and automated response systems.',
      problem: 'Manual email sorting and repetitive replies consuming 15+ hours per week.',
      solution: 'Custom LLM-powered filters that draft responses, tag priorities, and sync with your CRM without human touch.',
      results: ['85% Reduction in response time', 'Zero missed priority leads', 'Auto-drafting for complex queries'],
      useCases: ['Customer Support', 'Sales Outreach', 'Executive Filtering']
    },
    {
      icon: <HiDocumentText className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Data Entry AI',
      description: 'Vision-based extraction for zero-error processing.',
      problem: 'Invoices, receipts, and contracts being manually typed into databases, leading to 4% error rates.',
      solution: 'Advanced OCR chains that extract key-value pairs from any document format and push them to your tech stack.',
      results: ['99.8% Extraction accuracy', '90% Faster processing', 'Instant ERP syncing'],
      useCases: ['Accounting', 'Healthcare Admin', 'Logistics']
    },
    {
      icon: <HiChatAlt2 className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'AI Customer Support',
      description: 'Custom-trained agents that actually solve problems.',
      problem: 'Standard chatbots failing to answer specific company questions, frustrating customers.',
      solution: 'RAG-based agents trained specifically on your company docs, capable of handling 70% of frontline tickets.',
      results: ['24/7 Global coverage', '95% CSAT scores', 'Seamless human handoff'],
      useCases: ['E-commerce', 'SaaS Helpdesks', 'Service Booking']
    },
    {
      icon: <HiCalendar className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Smart Scheduling',
      description: 'Autonomous coordination across teams and zones.',
      problem: 'Complex scheduling conflicts and "email tag" delaying project kickoffs by weeks.',
      solution: 'AI assistants that negotiate times based on priority, buffer needs, and real-time availability.',
      results: ['Zero double-bookings', 'Automatic timezone math', 'Project velocity increase'],
      useCases: ['Consultancies', 'Medical Clinics', 'Sales Teams']
    }
  ];

  return (
    <div className="min-h-screen bg-dark-900">
      {/* Hero: Minimalist Industrial */}
      <section className="pt-32 sm:pt-36 md:pt-40 pb-16 sm:pb-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-secondary font-black tracking-widest uppercase text-[10px] sm:text-xs">The Capabilities</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-white mt-3 sm:mt-4 mb-6 sm:mb-8 tracking-tighter">
              Solve the <span className="text-primary italic">Bottleneck.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
              We don't just "add AI." We re-engineer your core operations using autonomous agents and neural processing chains.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto space-y-4 sm:space-y-6">
          {solutions.map((solution, index) => {
            const isActive = expandedIndex === index;
            return (
              <motion.div
                key={index}
                className={`rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border transition-all duration-500 ${
                  isActive ? 'bg-white border-white shadow-2xl' : 'bg-dark-800/50 border-white/5 hover:border-white/20'
                }`}
              >
                {/* Trigger */}
                <button
                  onClick={() => setExpandedIndex(isActive ? null : index)}
                  className="w-full text-left p-6 sm:p-8 md:p-12 flex items-center justify-between group"
                >
                  <div className="flex items-center gap-4 sm:gap-6 md:gap-8 flex-1 min-w-0">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                      isActive ? 'bg-primary text-white rotate-6' : 'bg-dark-900 text-white group-hover:scale-110'
                    }`}>
                      {solution.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className={`text-xl sm:text-2xl md:text-3xl font-black tracking-tight ${isActive ? 'text-dark-900' : 'text-white'}`}>
                        {solution.title}
                      </h3>
                      <p className={`font-medium mt-1 text-xs sm:text-sm md:text-base ${isActive ? 'text-gray-500' : 'text-gray-400'}`}>
                        {solution.description}
                      </p>
                    </div>
                  </div>
                  <div className={`transition-transform duration-500 flex-shrink-0 ml-4 ${isActive ? 'rotate-180 text-dark-900' : 'text-white/20'}`}>
                    <HiChevronDown size={28} className="sm:w-8 sm:h-8" />
                  </div>
                </button>

                {/* Content */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="border-t border-gray-100"
                    >
                      <div className="p-6 sm:p-8 md:p-12 bg-white">
                        <div className="grid md:grid-cols-2 gap-10 sm:gap-12 md:gap-16">
                          <div className="space-y-6 sm:space-y-8">
                            <div>
                              <label className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-primary">The Friction</label>
                              <p className="text-base sm:text-lg md:text-xl text-gray-700 font-medium leading-relaxed mt-2 italic">"{solution.problem}"</p>
                            </div>
                            <div>
                              <label className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-secondary">The Engine</label>
                              <p className="text-base sm:text-lg md:text-xl text-dark-900 font-bold leading-relaxed mt-2">{solution.solution}</p>
                            </div>
                          </div>

                          <div className="bg-dark-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white space-y-4 sm:space-y-6 shadow-xl">
                            <h4 className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-gray-500">Performance Metrics</h4>
                            <ul className="space-y-3 sm:space-y-4">
                              {solution.results.map((r, i) => (
                                <li key={i} className="flex items-center gap-2 sm:gap-3 font-bold text-sm sm:text-base">
                                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> {r}
                                </li>
                              ))}
                            </ul>
                            <div className="pt-4 border-t border-white/10">
                              <h4 className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-gray-500 mb-3 sm:mb-4">Vertical Focus</h4>
                              <div className="flex flex-wrap gap-2">
                                {solution.useCases.map((u, i) => (
                                  <span key={i} className="px-2.5 sm:px-3 py-1 bg-white/5 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-tighter border border-white/10">{u}</span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-8 sm:mt-10 md:mt-12 flex justify-center">
                          <button className="flex items-center gap-2 sm:gap-3 bg-dark-900 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-black text-sm sm:text-base hover:bg-primary transition-colors group">
                            Configure This Pipeline <HiArrowRight className="group-hover:translate-x-2 transition-transform"/>
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Solutions;