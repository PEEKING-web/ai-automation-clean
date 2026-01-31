import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiCheck, HiX, HiLightningBolt, HiSparkles, HiStar, HiFire } from 'react-icons/hi';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const pricingPlans = [
    {
      name: 'Starter',
      icon: <HiLightningBolt className="text-primary" />,
      description: 'Automate your most repetitive daily task.',
      monthlyPrice: 299,
      yearlyPrice: 249,
      features: [
        '500 automated tasks/mo',
        '1 Core AI Workflow',
        'Standard Data Extraction',
        'Email Integration',
        'Community Support',
      ],
      notIncluded: ['Custom Chatbots', 'Priority Support', 'Custom Training']
    },
    {
      name: 'Growth',
      icon: <HiSparkles className="text-secondary" />,
      description: 'Complete operational autonomy for small teams.',
      monthlyPrice: 699,
      yearlyPrice: 599,
      popular: true,
      features: [
        '5,000 automated tasks/mo',
        '5 Multi-step Workflows',
        'AI Customer Support Agent',
        'Smart Scheduling Engine',
        'Priority Chat Support',
        'Advanced Analytics',
      ],
      notIncluded: ['Dedicated Manager', 'Custom AI Training']
    },
    {
      name: 'Enterprise',
      icon: <HiFire className="text-orange-400" />,
      description: 'Custom infrastructure for global scale.',
      monthlyPrice: 1499,
      yearlyPrice: 1299,
      theme: 'dark',
      features: [
        'Unlimited Tasks & Flows',
        'Private AI Instance',
        'Custom Model Training',
        'Dedicated Solutions Architect',
        'White-label Integration',
        '24/7 Priority Phone Support',
        'On-premise Deployment',
      ],
      notIncluded: []
    }
  ];

  return (
    <div className="min-h-screen bg-dark-900 overflow-hidden">
      {/* Dynamic Background Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <section className="pt-32 sm:pt-36 md:pt-40 pb-16 sm:pb-20 px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-4 inline-block px-3 sm:px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-primary">
            Deployment Tiers
          </motion.div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-white mb-6 sm:mb-8 tracking-tighter px-4">
            Scalable <span className="text-secondary italic">Logic.</span>
          </h1>
          
          {/* Toggle with smooth switch animation */}
          <div className="flex flex-col items-center gap-3 sm:gap-4">
            <div className="bg-dark-800 border-2 border-white/5 p-1.5 rounded-2xl flex items-center relative w-full max-w-[320px] sm:max-w-none sm:w-auto">
              {['monthly', 'yearly'].map((type) => (
                <button
                  key={type}
                  onClick={() => setBillingCycle(type)}
                  className={`relative z-10 px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-black uppercase tracking-widest transition-colors duration-500 ${billingCycle === type ? 'text-dark-900' : 'text-gray-500'}`}
                >
                  {type}
                </button>
              ))}
              <motion.div 
                className="absolute bg-white rounded-xl h-[calc(100%-12px)] top-1.5 left-1.5"
                initial={false}
                animate={{ x: billingCycle === 'monthly' ? 0 : '100%', width: 'calc(50% - 6px)' }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            </div>
            <p className="text-green-400 text-[9px] sm:text-[10px] font-black uppercase tracking-widest">
              Save up to 20% with annual deployment
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-6 sm:gap-8">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] p-6 sm:p-8 md:p-10 flex flex-col transition-all duration-500 ${
                plan.theme === 'dark' 
                ? 'bg-dark-800 border-2 border-primary/30 shadow-2xl text-white' 
                : 'bg-white border border-gray-100 text-dark-900'
              } ${plan.popular ? 'lg:scale-105 shadow-[0_0_50px_rgba(255,109,90,0.1)]' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[9px] sm:text-[10px] font-black px-4 sm:px-6 py-1.5 sm:py-2 rounded-full uppercase tracking-widest shadow-xl whitespace-nowrap">
                  Recommended
                </div>
              )}

              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <div className={`text-2xl sm:text-3xl p-3 sm:p-4 rounded-xl sm:rounded-2xl ${plan.theme === 'dark' ? 'bg-white/10' : 'bg-gray-50'}`}>
                  {plan.icon}
                </div>
                <span className={`text-[9px] sm:text-[10px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] ${plan.theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>
                  {plan.name} Tier
                </span>
              </div>

              <div className="mb-6 sm:mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter">${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}</span>
                  <span className={`font-bold text-xs sm:text-sm ${plan.theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>/mo</span>
                </div>
                <p className={`mt-3 sm:mt-4 text-xs sm:text-sm font-medium leading-relaxed ${plan.theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 md:mb-12 flex-grow">
                {plan.features.map((f, idx) => (
                  <div key={idx} className="flex items-center gap-2 sm:gap-3">
                    <HiCheck className="text-secondary flex-shrink-0" size={16} />
                    <span className="text-xs sm:text-sm font-bold opacity-90">{f}</span>
                  </div>
                ))}
                {plan.notIncluded.map((f, idx) => (
                  <div key={idx} className="flex items-center gap-2 sm:gap-3 opacity-30">
                    <HiX className="text-gray-400 flex-shrink-0" size={16} />
                    <span className="text-xs sm:text-sm font-bold line-through">{f}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 sm:py-5 rounded-xl sm:rounded-2xl font-black text-base sm:text-lg transition-all active:scale-95 ${
                plan.theme === 'dark' 
                ? 'bg-white text-dark-900 hover:bg-primary hover:text-white' 
                : 'bg-dark-900 text-white hover:bg-primary shadow-xl shadow-dark-900/10'
              }`}>
                Initialize {plan.name}
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust Badge Section */}
      <section className="py-16 sm:py-20 bg-white/5 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h4 className="text-[9px] sm:text-[10px] font-black text-gray-500 uppercase tracking-[0.25em] sm:tracking-[0.3em] mb-8 sm:mb-12">Security & Infrastructure</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
            <div className="text-white font-black text-base sm:text-lg md:text-xl italic tracking-tighter">AWS.CLOUD</div>
            <div className="text-white font-black text-base sm:text-lg md:text-xl italic tracking-tighter">SOC2.TYPE2</div>
            <div className="text-white font-black text-base sm:text-lg md:text-xl italic tracking-tighter">OPEN.AI</div>
            <div className="text-white font-black text-base sm:text-lg md:text-xl italic tracking-tighter">STRIPE.PAY</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;