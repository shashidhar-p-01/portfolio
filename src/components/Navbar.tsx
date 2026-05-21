import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  activeSection: string;
}

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Internships", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Certifications", href: "#certifications" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
];

export default function Navbar({ activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Monitor scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B0F19]/90 backdrop-blur-md border-b border-brand-border/60 transition-all duration-300">
      {/* Scroll Progress Line */}
      <div 
        className="h-[2px] bg-brand-accent transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <a href="#home" className="flex items-center space-x-3 group">
            <img 
              src="https://github.com/p-shashidhar-gowda.png" 
              alt="Shashidhar Gowda P" 
              className="w-8 h-8 rounded-full border border-brand-border group-hover:border-brand-accent transition-colors duration-300"
            />
            <span className="font-mono text-sm tracking-widest text-brand-primary font-semibold flex items-center gap-1.5">
              SHASHIDHAR <span className="text-brand-accent">GOWDA</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 text-xs font-mono tracking-wider transition-all duration-200 relative ${
                    isActive 
                      ? "text-brand-accent" 
                      : "text-brand-secondary hover:text-brand-primary"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[1px] bg-brand-accent shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                  )}
                </a>
              );
            })}
            
            {/* Quick Console CTA */}
            <a
              href="#contact"
              className="ml-4 px-4 py-1.5 rounded-none border border-brand-accent/50 text-brand-accent hover:bg-brand-accent/10 transition-all duration-300 font-mono text-[11px] uppercase tracking-wider"
            >
              Get In Touch
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-none text-brand-secondary hover:text-brand-primary hover:bg-[#0F172A] focus:outline-none"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-[#0B0F19]/95 border-b border-brand-border px-4 pt-2 pb-6 space-y-1 sm:px-3">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-none font-mono text-sm tracking-wider border-l-2 transition-all ${
                  isActive
                    ? "border-brand-accent text-brand-accent bg-[#0F172A]/50"
                    : "border-transparent text-brand-secondary hover:text-brand-primary hover:bg-[#0F172A]/20"
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <div className="pt-4 px-3">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center py-2.5 rounded-none border border-brand-accent text-brand-accent font-mono text-xs uppercase tracking-wider hover:bg-brand-accent/10 transition-all"
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
