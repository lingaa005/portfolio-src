import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { profileData } from '../profileData';
import { Mail, Linkedin, Github, MapPin, Phone, Send, CheckCircle2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const profile = profileData.candidate_profile;
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stampStatus, setStampStatus] = useState<'idle' | 'stamping' | 'stamped'>('idle');
  const [submitError, setSubmitError] = useState('');
  
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
    return;
  }

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const contactTemplateId = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID;
  const thankYouTemplateId = import.meta.env.VITE_EMAILJS_THANKYOU_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !contactTemplateId || !thankYouTemplateId || !publicKey) {
    setSubmitError('Email service is not configured. Please try again later.');
    return;
  }

  setIsSubmitting(true);
  setSubmitError('');
  setStampStatus('stamping');

  const templateParams = {
    name: formData.name.trim(),
    email: formData.email.trim(),
    subject: formData.subject.trim() || 'Portfolio inquiry',
    message: formData.message.trim(),
  };

  try {
    // 1. Send the visitor's message to your email.
    await emailjs.send(
      serviceId,
      contactTemplateId,
      templateParams,
      { publicKey }
    );

    // 2. Send an acknowledgment to the visitor.
    await emailjs.send(
      serviceId,
      thankYouTemplateId,
      templateParams,
      { publicKey }
    );

    // Show the existing confirmation animation only after both succeed.
    setStampStatus('stamped');
  } catch (error) {
    console.error('Contact form email error:', error);

    setStampStatus('idle');
    setSubmitError(
      'Your message could not be sent. Please try again or contact me directly by email.'
    );
  } finally {
    setIsSubmitting(false);
  }
};


  const handleResetForm = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setStampStatus('idle');
  };

  return (
    <div className="parchment-texture border border-amber-800/40 p-6 sm:p-10 rounded-sm shadow-xl relative overflow-hidden select-none">
      
      {/* Decorative calligraphic layout */}
      <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-amber-900/10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-amber-900/10 pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
        
        {/* Contact info ledger (Cols 1-5) */}
        <div className="lg:col-span-5 flex flex-col justify-between py-2 border-b lg:border-b-0 lg:border-r border-amber-900/15 pb-8 lg:pb-0 lg:pr-8 space-y-6">
          <div className="space-y-4">
            <span className="font-mono text-xs text-amber-800 tracking-[0.2em] uppercase block">
              The Correspondence Desk
            </span>
            <h3 className="font-display font-bold text-2xl text-stone-900 leading-tight">
              Direct Inquiries
            </h3>
            <p className="font-serif italic text-[#462c0e] text-sm leading-relaxed">
              "For transmittals regarding system designs, technical reviews, backends, or deployment architectures, write your letter and apply the seal."
            </p>
          </div>

          {/* Details list */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-stone-900/5 rounded border border-amber-900/15">
                <Mail className="w-4.5 h-4.5 text-[#623f14]" />
              </div>
              <div className="font-mono text-xs">
                <p className="text-stone-500 uppercase text-[9px] tracking-widest">Email Ledger</p>
                <a href={`mailto:${profile.contact.email}`} className="text-stone-900 hover:text-amber-700 underline font-medium">
                  {profile.contact.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-stone-900/5 rounded border border-amber-900/15">
                <Phone className="w-4.5 h-4.5 text-[#623f14]" />
              </div>
              <div className="font-mono text-xs">
                <p className="text-stone-500 uppercase text-[9px] tracking-widest">Call Registry</p>
                <a href={`tel:${profile.contact.phone}`} className="text-[#3b2a1a] font-medium hover:text-amber-800">
                  {profile.contact.phone}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-stone-900/5 rounded border border-amber-900/15">
                <MapPin className="w-4.5 h-4.5 text-[#623f14]" />
              </div>
              <div className="font-mono text-xs">
                <p className="text-stone-500 uppercase text-[9px] tracking-widest">Base Coordinates</p>
                <span className="text-stone-800 font-medium">
                  {profile.location.city}, {profile.location.state}, {profile.location.country}
                </span>
              </div>
            </div>
          </div>

          {/* Social connections */}
          <div className="space-y-2.5">
            <span className="font-mono text-[9px] text-[#cca043] tracking-widest uppercase font-bold block">
              Digital Signal Nodes
            </span>
            <div className="flex gap-3">
              <a 
                id="contact-linkedin"
                href={`https://linkedin.com/in/${profile.contact.linkedin}`} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 px-3  h-9 rounded bg-[#2c1f16] text-[#eedda0] hover:bg-stone-950 font-mono text-xs transition-colors duration-200 border border-amber-900/30"
              >
                <Linkedin className="w-4 h-4 text-amber-500" />
                <span>LinkedIn</span>
              </a>
              <a 
                id="contact-github"
                href={`https://github.com/${profile.contact.github}`} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 px-3 h-9 rounded bg-[#2c1f16] text-[#eedda0] hover:bg-stone-950 font-mono text-xs transition-colors duration-200 border border-amber-900/30"
              >
                <Github className="w-4 h-4 text-amber-500" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Interactive Form (Cols 6-12) */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {stampStatus !== 'stamped' ? (
              <motion.form
                onSubmit={handleSubmit}
                key="contact-form-inner"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="font-mono text-[10px] uppercase text-stone-500">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Admiral Nelson"
                      className="w-full bg-[#ebdcb9]/40 border border-amber-900/20 rounded px-3 py-2 text-sm font-sans placeholder-stone-400 text-stone-900 focus:outline-none focus:border-gold-600 focus:bg-white transition-colors duration-200"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-mono text-[10px] uppercase text-stone-500">Electronic Mail *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. reviewer@guild.org"
                      className="w-full bg-[#ebdcb9]/40 border border-amber-900/20 rounded px-3 py-2 text-sm font-sans placeholder-stone-400 text-stone-900 focus:outline-none focus:border-gold-600 focus:bg-white transition-colors duration-200"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-mono text-[10px] uppercase text-stone-500">Subject / Intent</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Distributed System Consult"
                    className="w-full bg-[#ebdcb9]/40 border border-amber-900/20 rounded px-3 py-2 text-sm font-sans placeholder-stone-400 text-stone-900 focus:outline-none focus:border-gold-600 focus:bg-white transition-colors duration-200"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-mono text-[10px] uppercase text-stone-500">Interactive Message *</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Transcribe the details of your query..."
                    className="w-full bg-[#ebdcb9]/40 border border-amber-900/20 rounded px-3 py-2 text-sm font-sans placeholder-stone-400 text-stone-900 focus:outline-none focus:border-gold-600 focus:bg-white transition-colors duration-200 resize-none"
                  />
                </div>

                {/* Submitting seal buttons overlay */}
                <div className="flex justify-end pt-2 relative">
                  <button
                    id="contact-submit"
                    type="submit"
                    disabled={isSubmitting}
                    className="relative px-8 py-3 bg-stone-950 hover:bg-stone-900 rounded border border-amber-800 text-[#eedda0] font-display text-sm tracking-widest uppercase transition-all duration-300 disabled:opacity-50 cursor-pointer flex items-center gap-3 overflow-hidden"
                  >
                    <Send className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>Apply Wax Seal</span>

                    {/* Stamping pulse indicator */}
                    {stampStatus === 'stamping' && (
                      <span className="absolute inset-0 bg-red-900 opacity-20 animate-pulse pointer-events-none" />
                    )}
                  </button>

                  {/* Physical stamp overlay animation during press */}
                  {stampStatus === 'stamping' && (
                    <motion.div
                      initial={{ scale: 2.5, opacity: 0, rotate: 15 }}
                      animate={{ scale: 1, opacity: 1, rotate: 0 }}
                      transition={{ duration: 0.6, ease: "easeIn" }}
                      className="absolute inset-0 pointer-events-none bg-[#801010]/30 w-full rounded flex items-center justify-center font-display font-bold text-[#fdfaf2] text-xl"
                    >
                      STAMPING INK...
                    </motion.div>
                  )}
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="contact-stamped-confirmation"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-6 px-4 space-y-6 flex flex-col items-center"
              >
                {/* Imprinted Wax Stamp */}
                <motion.div
                  initial={{ scale: 2.2, opacity: 0, rotate: -15 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 140, damping: 15 }}
                  className="w-24 h-24 rounded-full wax-seal-bg flex items-center justify-center relative shadow-[0_15px_30px_rgba(0,0,0,0.5)] border border-red-400/20"
                >
                  <div className="w-18 h-18 rounded-full border border-dashed border-red-950/20 flex items-center justify-center">
                    <span className="font-display font-black text-amber-100 tracking-tighter text-sm italic drop-shadow-[1px_2px_2px_rgba(0,0,0,0.8)]">
                      CONFIRMED
                    </span>
                  </div>
                </motion.div>

                <div className="space-y-2">
                  <h4 className="font-display font-semibold text-lg text-stone-900">
                    Transmittal Sealed Successfully
                  </h4>
                  <p className="font-serif italic text-sm text-stone-700 leading-relaxed max-w-sm mx-auto">
                    "Thank you, <strong>{formData.name}</strong>. Your correspondence has been stamped with the credentials of KASILINGAM.M and routed into the asynchronous queue backlog."
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    id="reset-form"
                    onClick={handleResetForm}
                    className="px-4 py-2 font-mono text-xs uppercase tracking-widest text-stone-600 hover:text-amber-800 border-b border-dashed border-stone-400 hover:border-amber-800 transition-colors duration-200 cursor-pointer"
                  >
                    Draft Another Correspondence
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
