import { useState, useRef, type FormEvent } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeader from '../components/SectionHeader';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'shashidhar.gowda.p@outlook.com', href: 'mailto:shashidhar.gowda.p@outlook.com' },
  { icon: MapPin, label: 'Location', value: 'Bengaluru, Karnataka', href: undefined },
];

const socialLinks = [
  { icon: GithubIcon, label: 'GitHub', href: 'https://github.com/shashidhar-p-01' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://linkedin.com/in/shashidhar-gowda-p' },
  { icon: Mail, label: 'Email', href: 'mailto:shashidhar.gowda.p@outlook.com' },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:shashidhar.gowda.p@outlook.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`;
    window.open(mailtoLink, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <SectionWrapper id="contact">
      <SectionHeader title="Get In Touch" subtitle="Let's connect and discuss opportunities" />
      <div ref={ref} className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }} className="space-y-8">
          <div className="space-y-4">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-azure-500/10 flex items-center justify-center flex-shrink-0">
                  <item.icon size={20} className="text-azure-400" />
                </div>
                <div>
                  <p className="text-xs text-brand-muted font-medium uppercase tracking-wider">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-brand-primary hover:text-azure-400 transition-colors font-medium text-sm">{item.value}</a>
                  ) : (
                    <p className="text-brand-primary font-medium text-sm">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div>
            <p className="text-sm font-medium text-brand-secondary mb-4">Connect with me</p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl glass flex items-center justify-center text-brand-secondary hover:text-azure-400 hover:border-azure-500/40 transition-all" aria-label={link.label}>
                  <link.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.form initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2, duration: 0.6 }} onSubmit={handleSubmit} className="glass rounded-2xl p-6 md:p-8 space-y-5">
          <div>
            <label htmlFor="contact-name" className="block text-sm font-medium text-brand-secondary mb-2">Name</label>
            <input id="contact-name" type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-brand-bg/80 border border-brand-border focus:border-azure-500/50 focus:outline-none focus:ring-1 focus:ring-azure-500/30 text-brand-primary placeholder-brand-muted text-sm transition-all" placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="contact-email" className="block text-sm font-medium text-brand-secondary mb-2">Email</label>
            <input id="contact-email" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-brand-bg/80 border border-brand-border focus:border-azure-500/50 focus:outline-none focus:ring-1 focus:ring-azure-500/30 text-brand-primary placeholder-brand-muted text-sm transition-all" placeholder="your@email.com" />
          </div>
          <div>
            <label htmlFor="contact-message" className="block text-sm font-medium text-brand-secondary mb-2">Message</label>
            <textarea id="contact-message" required rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-brand-bg/80 border border-brand-border focus:border-azure-500/50 focus:outline-none focus:ring-1 focus:ring-azure-500/30 text-brand-primary placeholder-brand-muted text-sm transition-all resize-none" placeholder="Your message..." />
          </div>
          <button type="submit" className="btn-primary w-full justify-center" disabled={submitted}>
            {submitted ? (<><CheckIcon /> Message Sent!</>) : (<><Send size={18} /> Send Message</>)}
          </button>
        </motion.form>
      </div>
    </SectionWrapper>
  );
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
