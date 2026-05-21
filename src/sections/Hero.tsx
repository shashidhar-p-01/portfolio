import type { SVGProps } from "react";
import Terminal from "../components/Terminal";
import { ArrowDown, FileText, Mail } from "lucide-react";
import { motion } from "framer-motion";

const GithubIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Hero() {
  const stats = [
    { num: "7", label: "Professional Certs" },
    { num: "4+", label: "Deployed Systems" },
    { num: "1yr+", label: "Internship Journey" },
    { num: "2+", label: "Cloud Platforms" }
  ];

  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-24 pb-16 flex flex-col justify-center items-center overflow-hidden grid-pattern-dots"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 flex flex-col justify-between h-full">
        
        {/* Main Grid: Info on Left, Terminal on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-6 lg:mt-12">
          
          {/* Left: Introduction Details */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Eyebrow */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-brand-accent/10 border border-brand-accent/20 rounded-none text-brand-accent text-xs font-mono tracking-widest uppercase"
            >
              <span className="w-1.5 h-1.5 bg-brand-accent animate-ping rounded-full" />
              Cloud &amp; Infrastructure Engineer
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-extrabold text-brand-primary tracking-tight leading-none"
            >
              Shashidhar <br />
              <span className="text-brand-accent font-mono font-bold tracking-tighter">Gowda P.</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-sm sm:text-base text-brand-secondary max-w-xl leading-relaxed"
            >
              Building secure, scalable systems at the intersection of cloud, networking, and cybersecurity. 
              Currently working as an <span className="text-brand-primary font-medium">Infrastructure &amp; Security Engineer Trainee</span> at <span className="text-brand-accent font-semibold font-mono">ATAS</span>.
            </motion.p>

            {/* CTA Actions */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-wrap gap-3 pt-2 select-none"
            >
              <a 
                href="#contact" 
                className="px-5 py-2.5 bg-brand-accent hover:bg-brand-accent/95 text-brand-bg font-bold uppercase tracking-wider text-xs transition-all duration-300"
              >
                Hire Engineer &rarr;
              </a>
              <a 
                href="/Shashidhar_Cloud_Engineer.pdf" 
                download
                className="px-5 py-2.5 border border-brand-border hover:border-brand-accent hover:text-brand-accent text-brand-primary font-mono text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2"
              >
                <FileText size={14} /> Resume PDF
              </a>
            </motion.div>

            {/* Social handles */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex items-center space-x-4 pt-4 select-none"
            >
              <a 
                href="https://github.com/p-shashidhar-gowda" 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 border border-brand-border text-brand-secondary hover:text-brand-accent hover:border-brand-accent transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-[16px] h-[16px]" />
              </a>
              <a 
                href="https://www.linkedin.com/in/shashidhar-gowda-p" 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 border border-brand-border text-brand-secondary hover:text-brand-accent hover:border-brand-accent transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-[16px] h-[16px]" />
              </a>
              <a 
                href="mailto:shashidhar.gowda.p@outlook.com" 
                className="p-2 border border-brand-border text-brand-secondary hover:text-brand-accent hover:border-brand-accent transition-all duration-300"
                aria-label="Email Address"
              >
                <Mail size={16} />
              </a>
            </motion.div>
          </div>

          {/* Right: Interactive DevOps Terminal */}
          <motion.div 
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-6 flex justify-center w-full"
          >
            <Terminal />
          </motion.div>
        </div>

        {/* Bottom Metrics Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-16 border-t border-brand-border/40 mt-16 w-full text-left"
        >
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="p-4 bg-[#0F172A]/40 border border-brand-border/60 hover:border-brand-accent/25 transition-all duration-300 group select-none"
            >
              <span className="text-xl sm:text-2xl font-mono font-bold text-brand-accent group-hover:text-brand-accent/80 transition-colors block mb-1">
                {stat.num}
              </span>
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-brand-secondary">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

      </div>

      {/* Downwards Scroll Cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 select-none pointer-events-none hidden md:flex flex-col items-center text-[10px] font-mono tracking-widest text-brand-secondary">
        <span className="mb-2">SCROLL DOWN</span>
        <motion.div 
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} className="text-brand-accent" />
        </motion.div>
      </div>
    </section>
  );
}
