
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import { HiMail, HiDocumentText, HiChatAlt2, HiCalendar } from 'react-icons/hi';

const Card = ({ automation, index }) => {
  // Mind-blowing "Spotlight" effect logic
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseMove={onMouseMove}
      className="group relative bg-dark-700/50 rounded-3xl p-8 border border-white/10 hover:border-primary/50 transition-colors duration-500 overflow-hidden"
    >
      {/* The Spotlight Overlay */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 109, 90, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      {/* Connection Node Indicator */}
      <div className="absolute top-4 right-4 flex gap-1">
        <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-primary animate-pulse" />
        <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-secondary transition-colors" />
      </div>

      {/* Icon Styling */}
      <div className="relative w-14 h-14 rounded-2xl bg-dark-900 border border-white/5 flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,109,90,0.3)] transition-all duration-500">
        {automation.icon}
      </div>
      
      <h3 className="relative text-2xl font-bold text-white mb-4 tracking-tight">
        {automation.title}
      </h3>
      
      <p className="relative text-gray-400 leading-relaxed text-[15px] group-hover:text-gray-200 transition-colors">
        {automation.description}
      </p>
      
      {/* Animated Arrow CTA */}
      <div className="mt-8 flex items-center gap-2 text-primary font-bold text-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
        Deploy Module <span className="text-lg">→</span>
      </div>
    </motion.div>
  );
};

const AutomationCards = () => {
  const automations = [
    {
      icon: <HiMail className="w-7 h-7" />,
      title: 'Email Intelligence',
      description: 'Beyond auto-reply. AI that categorizes intent, extracts tasks, and drafts contextual replies.',
    },
    {
      icon: <HiDocumentText className="w-7 h-7" />,
      title: 'Neural Data Entry',
      description: 'Stop manual typing. Extract complex data from PDFs and messy receipts with 99% accuracy.',
    },
    {
      icon: <HiChatAlt2 className="w-7 h-7" />,
      title: 'Cognitive Support',
      description: 'AI agents that actually solve problems instead of just repeating FAQ scripts.',
    },
    {
      icon: <HiCalendar className="w-7 h-7" />,
      title: 'Autonomous Flow',
      description: 'Sync schedules, verify availability, and book meetings across timezones without a human.',
    },
  ];

  return (
    <section className="py-32 px-6 relative bg-dark-900 overflow-hidden">
      {/* Background Mesh for the whole section */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4">Core Capabilities</div>
          <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tighter">
            What We <span className="text-secondary">Automate.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Scalable AI modules ready to plug into your existing business stack.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {automations.map((automation, index) => (
            <Card key={index} automation={automation} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutomationCards;