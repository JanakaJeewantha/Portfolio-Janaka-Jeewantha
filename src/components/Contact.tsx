import React, { useState } from 'react';
import { MailIcon, MapPinIcon, LinkedinIcon, GithubIcon, SendIcon } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Contact = () => {
  const [formData, setFormData]       = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle'|'success'|'error'>('idle');

  const titleRef = useScrollAnimation();
  const leftRef  = useScrollAnimation();
  const rightRef = useScrollAnimation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Replace this with EmailJS / Formspree for real email sending
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const INPUT_CLS = 'w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/60 focus:bg-indigo-500/5 transition-all duration-200 text-sm';

  return (
    <section id="contact" className="py-24 w-full bg-slate-950 relative">
      <div className="absolute inset-0 opacity-30" style={{backgroundImage:'radial-gradient(circle at 30% 70%, rgba(139,92,246,0.1) 0%, transparent 55%)'}} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative">

        {/* Title */}
        <div ref={titleRef} className="fade-in-up text-center mb-16">
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-white">Contact Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

          {/* Left: Info */}
          <div ref={leftRef} className="slide-in-left lg:col-span-2 space-y-6">
            <div className="gradient-card glass p-6 space-y-5">
              <h3 className="text-white font-semibold text-xl">Let's connect</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                I'm open to freelance projects, internship opportunities, and interesting collaborations.
                Feel free to reach out!
              </p>
              <div className="space-y-3">
                <a href="mailto:janakajeewantha2000@gmail.com" className="flex items-center gap-3 text-slate-400 hover:text-indigo-400 transition-colors group">
                  <div className="p-2.5 bg-indigo-500/10 rounded-xl group-hover:bg-indigo-500/20 transition-colors">
                    <MailIcon size={18} className="text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Email</p>
                    <p className="text-sm font-medium text-slate-300">janakajeewantha2000@gmail.com</p>
                  </div>
                </a>
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-violet-500/10 rounded-xl">
                    <MapPinIcon size={18} className="text-violet-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Location</p>
                    <p className="text-sm font-medium text-slate-300">Sri Lanka</p>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-white/10">
                <p className="text-slate-500 text-xs mb-3">Find me on</p>
                <div className="flex gap-3">
                  <a href="https://www.linkedin.com/in/janaka-jeewantha-9759a8369/" target="_blank" rel="noopener noreferrer"
                    className="p-3 bg-white/5 border border-white/10 hover:bg-indigo-500/15 hover:border-indigo-500/30 text-slate-400 hover:text-indigo-400 rounded-xl transition-all duration-200 hover:scale-110"
                    aria-label="LinkedIn">
                    <LinkedinIcon size={18} />
                  </a>
                  <a href="https://github.com/JanakaJeewantha" target="_blank" rel="noopener noreferrer"
                    className="p-3 bg-white/5 border border-white/10 hover:bg-violet-500/15 hover:border-violet-500/30 text-slate-400 hover:text-violet-400 rounded-xl transition-all duration-200 hover:scale-110"
                    aria-label="GitHub">
                    <GithubIcon size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div ref={rightRef} className="slide-in-right lg:col-span-3">
            <div className="gradient-card glass p-6 sm:p-8">
              <h3 className="text-white font-semibold text-xl mb-6">Send me a message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1.5">Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" className={INPUT_CLS} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1.5">Email</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="your@email.com" className={INPUT_CLS} />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-1.5">Message</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder="Tell me about your project or opportunity..." className={INPUT_CLS + ' resize-none'} />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={'w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-white font-semibold transition-all duration-300 ' + (isSubmitting ? 'bg-slate-700 cursor-not-allowed' : 'bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 hover:scale-[1.02] shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40')}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <SendIcon size={16} />
                    </>
                  )}
                </button>
                {submitStatus === 'success' && (
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl text-sm text-center">
                    Message sent! I'll get back to you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-4 bg-rose-500/10 border border-rose-500/20 text-rose-400 rounded-xl text-sm text-center">
                    Something went wrong. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
