import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { HiCheckCircle, HiExclamationCircle, HiPaperAirplane } from 'react-icons/hi';

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const response = await fetch('https://formspree.io/f/mwvbjzzy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = (error) => `
    w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-dark-900 border-2 transition-all duration-300 outline-none font-medium text-white text-sm sm:text-base
    ${error ? 'border-red-500/50 focus:border-red-500' : 'border-white/5 focus:border-primary focus:ring-4 focus:ring-primary/10'}
  `;

  return (
    <section id="contact" className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 bg-dark-900 relative overflow-hidden">
      {/* Background Decorative Mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-primary font-black uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[10px] sm:text-xs mb-3 sm:mb-4">Final Step</motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-4 sm:mb-6 tracking-tighter px-4">Initialize <span className="text-secondary">Sync.</span></h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-xl mx-auto px-4">Drop your details below. Our AI engineers will audit your workflow and reach out within 24 hours.</p>
        </div>

        <motion.div 
          initial={{ y: 40, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }}
          className="bg-dark-800/50 backdrop-blur-3xl p-6 sm:p-10 md:p-12 rounded-[2rem] sm:rounded-[2.5rem] border border-white/10 shadow-2xl"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 sm:space-y-6">
            <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
              <div className="space-y-2">
                <label className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-widest ml-2">Full Identity</label>
                <input {...register('name', { required: 'Required' })} className={inputClasses(errors.name)} placeholder="Alex Rivera" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-widest ml-2">Digital Mail</label>
                <input {...register('email', { required: 'Required' })} className={inputClasses(errors.email)} placeholder="alex@tech.co" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
              <div className="space-y-2">
                <label className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-widest ml-2">Connection Line</label>
                <input {...register('phone')} className={inputClasses()} placeholder="+1 (555) 000-0000" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-widest ml-2">Organization</label>
                <input {...register('company')} className={inputClasses()} placeholder="Company Inc." />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-widest ml-2">System Requirements (Your Message)</label>
              <textarea {...register('message', { required: 'Required' })} rows="4" className={`${inputClasses(errors.message)} resize-none`} placeholder="Tell us what's slowing you down..." />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="relative w-full overflow-hidden group btn-primary py-5 sm:py-6 rounded-xl sm:rounded-2xl text-lg sm:text-xl font-black transition-all active:scale-[0.98]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="flex items-center justify-center gap-2 sm:gap-3">
                {isSubmitting ? 'Deploying...' : 'Initiate Consultation'}
                <HiPaperAirplane className={`rotate-90 transition-transform w-5 h-5 sm:w-6 sm:h-6 ${isSubmitting ? 'translate-x-10 opacity-0' : ''}`} />
              </span>
            </button>

            <AnimatePresence>
              {submitStatus && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }} 
                  animate={{ height: 'auto', opacity: 1 }}
                  className={`flex items-center gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl border-2 ${submitStatus === 'success' ? 'bg-green-500/10 border-green-500/20 text-green-400' : 'bg-red-500/10 border-red-500/20 text-red-400'}`}
                >
                  {submitStatus === 'success' ? <HiCheckCircle size={20} className="sm:w-6 sm:h-6 flex-shrink-0"/> : <HiExclamationCircle size={20} className="sm:w-6 sm:h-6 flex-shrink-0"/>}
                  <p className="font-bold text-sm sm:text-base">{submitStatus === 'success' ? "Transmission Received. We'll be in touch." : "Transmission Failed. Check your connection."}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;