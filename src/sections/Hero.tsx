import { motion } from 'framer-motion';
import { Download, FolderOpen, Mail, Cloud, Server, Container, Box, Terminal, MonitorCog } from 'lucide-react';

const floatingIcons = [
  { Icon: Cloud, label: 'Azure', x: '10%', y: '20%', delay: 0, size: 28 },
  { Icon: Server, label: 'AWS', x: '85%', y: '15%', delay: 0.5, size: 24 },
  { Icon: Container, label: 'Docker', x: '75%', y: '70%', delay: 1, size: 26 },
  { Icon: Box, label: 'Kubernetes', x: '15%', y: '75%', delay: 1.5, size: 22 },
  { Icon: MonitorCog, label: 'Jenkins', x: '90%', y: '45%', delay: 2, size: 24 },
  { Icon: Terminal, label: 'Linux', x: '5%', y: '50%', delay: 2.5, size: 22 },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-azure-500/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-purple/6 rounded-full blur-[100px]" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-azure-600/5 rounded-full blur-[80px]" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,114,245,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,114,245,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating tech icons */}
      {floatingIcons.map(({ Icon, label, x, y, delay, size }) => (
        <motion.div
          key={label}
          className="absolute hidden md:flex items-center gap-2 text-brand-muted/40"
          style={{ left: x, top: y }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5 + delay,
            repeat: Infinity,
            ease: 'easeInOut',
            delay,
          }}
        >
          <Icon size={size} />
          <span className="text-xs font-mono">{label}</span>
        </motion.div>
      ))}

      {/* Cloud illustration */}
      <motion.div
        className="absolute top-20 right-10 md:right-20 opacity-10"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Cloud size={120} className="text-azure-400" />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full glass text-sm text-azure-400 font-medium"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for opportunities
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="text-brand-primary">SHASHIDHAR</span>
            <br />
            <span className="gradient-text">GOWDA P</span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-2 mb-6"
          >
            <p className="text-xl md:text-2xl font-semibold text-brand-primary/90">
              Cloud & DevOps Engineer
            </p>
            <p className="text-base md:text-lg text-azure-400 font-medium">
              Infrastructure & Security Enthusiast
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-brand-secondary text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Building reliable cloud infrastructure, automating deployment workflows, 
            and continuously learning modern DevOps and cybersecurity practices.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="/resume.pdf"
              download
              className="btn-primary"
            >
              <Download size={18} />
              Download Resume
            </a>
            <button
              onClick={() =>
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="btn-secondary"
            >
              <FolderOpen size={18} />
              View Projects
            </button>
            <button
              onClick={() =>
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="btn-secondary"
            >
              <Mail size={18} />
              Contact Me
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-brand-border flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-azure-400"
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
