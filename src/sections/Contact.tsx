import { useState } from "react";
import type { SVGProps } from "react";
import SectionHeader from "../components/SectionHeader";
import { Mail, Phone, Terminal as TerminalIcon, Shield } from "lucide-react";

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

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("shashidhar.p.0103@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactLinks = [
    {
      icon: <Mail size={16} className="text-brand-accent" />,
      label: "Email",
      value: "shashidhar.p.0103@gmail.com",
      href: "mailto:shashidhar.p.0103@gmail.com"
    },
    {
      icon: <LinkedinIcon className="w-[16px] h-[16px] text-brand-accent" />,
      label: "LinkedIn",
      value: "linkedin.com/in/shashidhar-gowda-p",
      href: "https://www.linkedin.com/in/shashidhar-gowda-p"
    },
    {
      icon: <GithubIcon className="w-[16px] h-[16px] text-brand-accent" />,
      label: "GitHub",
      value: "github.com/p-shashidhar-gowda",
      href: "https://github.com/p-shashidhar-gowda"
    },
    {
      icon: <Phone size={16} className="text-brand-accent" />,
      label: "Phone",
      value: "+91 9019884212",
      href: "tel:+919019884212"
    }
  ];

  return (
    <section id="contact" className="pt-20 pb-0 border-b-0 bg-[#0B0F19] flex flex-col min-h-screen justify-between relative overflow-hidden">
      
      {/* Contact Main Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow">
        
        {/* Section Title */}
        <SectionHeader 
          number="05" 
          category="CONNECT" 
          title="Establish Communication" 
          subtitle="I'm open to discussing full-time opportunities, internship contracts, or DevOps projects. Reach out via any of my direct coordinates!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8 items-start">
          
          {/* Left Side: Contact Cards */}
          <div className="lg:col-span-5 text-left space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-brand-primary tracking-wide">
                Direct Channels
              </h3>
              <p className="text-xs text-brand-secondary leading-relaxed max-w-sm">
                Feel free to email me directly or reach out on social networks. As a DevOps engineer, I keep my communications optimized and responsive.
              </p>
            </div>

            {/* Link grid */}
            <div className="space-y-3 select-none">
              {contactLinks.map((link, idx) => (
                <a 
                  key={idx}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex items-center justify-between p-4 bg-[#0F172A] border border-brand-border hover:border-brand-accent/40 rounded transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center space-x-3.5">
                    <div className="p-2 bg-brand-bg border border-brand-border/60 rounded group-hover:border-brand-accent/25 transition-colors">
                      {link.icon}
                    </div>
                    <div className="text-left">
                      <span className="text-[9px] uppercase font-mono tracking-wider text-brand-secondary block">
                        {link.label}
                      </span>
                      <span className="text-xs font-mono font-medium text-brand-primary group-hover:text-brand-accent transition-colors select-all">
                        {link.value}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-brand-secondary group-hover:text-brand-accent tracking-widest pl-2">
                    CONNECT &rarr;
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Side: Operational Coordinates Dashboard */}
          <div className="lg:col-span-7 bg-[#0F172A] border border-brand-border rounded-lg p-6 sm:p-8 space-y-6 text-left">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-brand-primary tracking-wide flex items-center gap-2.5 select-none">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10B981]"></span>
                </span>
                Operational Status: OPEN FOR WORK
              </h3>
              <p className="text-xs text-brand-secondary leading-relaxed">
                Currently open to Cloud &amp; DevOps Engineering roles, infrastructure trainee contracts, or security automation consulting. Access my validated coordinates below to fast-track recruitment.
              </p>
            </div>

            {/* Coordinates Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-[11px] select-none">
              <div className="p-3.5 bg-brand-bg border border-brand-border rounded">
                <span className="text-brand-secondary uppercase text-[9px] block mb-1">Current Base</span>
                <span className="text-brand-primary font-semibold">Bengaluru, KA, India</span>
              </div>
              <div className="p-3.5 bg-brand-bg border border-brand-border rounded">
                <span className="text-brand-secondary uppercase text-[9px] block mb-1">Primary Role Class</span>
                <span className="text-brand-accent font-semibold">Cloud &amp; DevOps Engineer</span>
              </div>
              <div className="p-3.5 bg-brand-bg border border-brand-border rounded">
                <span className="text-brand-secondary uppercase text-[9px] block mb-1">Cloud Specialization</span>
                <span className="text-[#10B981] font-semibold">Azure Administration</span>
              </div>
              <div className="p-3.5 bg-brand-bg border border-brand-border rounded">
                <span className="text-brand-secondary uppercase text-[9px] block mb-1">Notice Period</span>
                <span className="text-brand-primary font-semibold">Immediate Availability</span>
              </div>
            </div>

            {/* Premium CTA Actions */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4 select-none">
              {/* Copy coordinates */}
              <button 
                onClick={handleCopy}
                className="flex-1 px-5 py-3 border border-brand-accent text-brand-accent hover:bg-brand-accent/10 transition-colors uppercase font-mono text-xs tracking-wider font-bold rounded-none flex items-center justify-center gap-2 cursor-pointer focus:outline-none"
              >
                {copied ? "✓ EMAIL COPIED" : "COPY EMAIL ADDRESS"}
              </button>

              {/* View/Download Resume */}
              <a 
                href="Shashidhar_Cloud_Engineer.pdf" 
                download
                className="flex-grow px-5 py-3 bg-brand-accent hover:bg-brand-accent/95 text-brand-bg font-bold uppercase tracking-wider text-xs font-mono text-center flex items-center justify-center gap-2"
              >
                DOWNLOAD RESUME (PDF) &darr;
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Terminal-Inspired Footer */}
      <footer className="w-full bg-[#0F172A] border-t border-brand-border mt-20 py-8 font-mono select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          {/* CLI Stats Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 text-[10px] text-brand-secondary border-b border-brand-border/40 pb-4">
            <div className="flex items-center space-x-3">
              <span className="text-[#10B981] font-semibold flex items-center gap-1">
                <TerminalIcon size={12} className="text-brand-accent" /> shashidhar@devops-portfolio:~$
              </span>
              <span className="text-brand-primary">uptime</span>
              <span className="text-brand-border">|</span>
              <span className="text-brand-secondary">system_status: STABLE</span>
              <span className="text-brand-border">|</span>
              <span className="text-brand-secondary">shell: /bin/zsh</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-[#10B981] flex items-center gap-1"><Shield size={11} className="text-[#10B981]" /> SSL Encrypted</span>
              <span className="text-brand-border">|</span>
              <span>Lighthouse score: 100</span>
            </div>
          </div>

          {/* Traditional copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
            <div className="text-left">
              <p className="text-brand-primary font-bold tracking-wider">
                SHASHIDHAR GOWDA P
              </p>
              <p className="text-[10px] text-brand-secondary mt-1">
                Cloud &amp; DevOps Engineering Portfolio · Built originally in 2026.
              </p>
            </div>

            <p className="text-[10px] text-brand-secondary">
              &copy; 2026 P. Shashidhar Gowda. All Rights Reserved. Configured for GitHub Pages.
            </p>
          </div>

        </div>
      </footer>

    </section>
  );
}
