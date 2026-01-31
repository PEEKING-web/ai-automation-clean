import React from 'react';
import { motion } from 'framer-motion';
import { HiLightningBolt, HiTrendingUp, HiUsers, HiShieldCheck } from 'react-icons/hi';

const About = () => {
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://i.pravatar.cc/300?img=1',
      bio: '15+ years in AI and automation. Former tech lead at major AI companies.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://i.pravatar.cc/300?img=33',
      bio: 'AI researcher and engineer specializing in natural language processing.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Customer Success',
      image: 'https://i.pravatar.cc/300?img=5',
      bio: 'Passionate about helping businesses transform through technology.'
    },
    {
      name: 'David Kim',
      role: 'Lead AI Engineer',
      image: 'https://i.pravatar.cc/300?img=12',
      bio: 'Expert in machine learning and automation systems with 10+ years experience.'
    }
  ];

  const values = [
    {
      icon: <HiLightningBolt className="w-8 h-8" />,
      title: 'Innovation First',
      description: 'We stay at the cutting edge of AI technology to deliver the best solutions to our clients.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <HiTrendingUp className="w-8 h-8" />,
      title: 'Results Driven',
      description: 'We measure success by the time and money we save our clients, not just features delivered.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <HiUsers className="w-8 h-8" />,
      title: 'Client Partnership',
      description: 'We work closely with each client to understand their unique needs and challenges.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <HiShieldCheck className="w-8 h-8" />,
      title: 'Trust & Security',
      description: 'Your data security and privacy are our top priorities. We follow industry-best practices.',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '10K+', label: 'Hours Saved Monthly' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' }
  ];

  const certifications = [
    'ISO 27001 Certified',
    'SOC 2 Type II Compliant',
    'GDPR Compliant',
    'AWS Advanced Partner',
    'Google Cloud Partner',
    'Microsoft Gold Partner'
  ];

  return (
    <div className="min-h-screen bg-dark-900 overflow-hidden">
      {/* Hero Section */}
      <section className="pt-32 sm:pt-36 md:pt-40 pb-16 sm:pb-20 px-4 sm:px-6 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-black text-white mb-6 sm:mb-8 tracking-tighter leading-none"
          >
            Built for <span className="text-primary italic">Impact.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed px-4"
          >
            We are a team of engineers and visionaries redefining the boundary between human creativity and autonomous logic.
          </motion.p>
        </div>
      </section>

      {/* Our Story - High Contrast Card */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2rem] sm:rounded-[3rem] md:rounded-[4rem] shadow-2xl p-6 sm:p-10 md:p-16 lg:p-20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full -mr-32 -mt-32 blur-3xl" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-dark-900 mb-6 sm:mb-8 md:mb-10 tracking-tight">Our Narrative</h2>
            <div className="space-y-6 sm:space-y-8 text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed font-medium max-w-3xl">
              <p>
                In 2023, we saw a gap. While the "AI Revolution" was making headlines, actual small businesses were still drowning in manual email sorting, data entry, and scheduling chaos.
              </p>
              <p>
                We founded <span className="text-dark-900 font-black">AI AUTO</span> to build the bridge. We don't just sell software; we deploy intelligence that works while you sleep.
              </p>
              <div className="p-6 sm:p-8 bg-dark-900 rounded-2xl sm:rounded-3xl text-white">
                <p className="italic font-bold text-sm sm:text-base md:text-lg">
                  "Our goal is to reclaim 1 million human hours by 2030, allowing entrepreneurs to focus on architecture, not admin."
                </p>
                <p className="mt-3 sm:mt-4 text-primary font-black uppercase tracking-widest text-xs sm:text-sm">— The Founders</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats - Industrial Style */}
      <section className="py-16 sm:py-20 bg-dark-800/50 border-y border-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <motion.h3 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-2 tracking-tighter group-hover:text-primary transition-colors"
                >
                  {stat.number}
                </motion.h3>
                <p className="text-gray-500 font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[9px] sm:text-[10px]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Visual Focus */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16 md:mb-20 gap-6 sm:gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter mb-3 sm:mb-4">The Architects.</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-400 font-medium">The minds behind the machines.</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            {team.map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] mb-4 sm:mb-6 aspect-[4/5] bg-dark-800 shadow-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-60" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">{member.name}</h3>
                <p className="text-primary font-black uppercase text-[9px] sm:text-[10px] tracking-widest mb-3 sm:mb-4">{member.role}</p>
                <p className="text-gray-500 font-medium text-xs sm:text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Certifications - Trust Footer */}
      <section className="py-16 sm:py-20 md:py-24 bg-white rounded-t-[3rem] sm:rounded-t-[4rem] md:rounded-t-[5rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-dark-900 mb-10 sm:mb-12 md:mb-16 tracking-tighter">Infrastructure & Compliance</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="flex flex-col items-center p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-gray-100 hover:border-primary/20 transition-all group">
                <HiShieldCheck className="text-gray-200 group-hover:text-primary transition-colors mb-3 sm:mb-4" size={28} />
                <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-tighter text-dark-900 leading-tight text-center">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;