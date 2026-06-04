import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';

const socialLinks = [
  { icon: GithubIcon, href: 'https://github.com/shashidhar-p-01', label: 'GitHub' },
  { icon: LinkedinIcon, href: 'https://linkedin.com/in/shashidhar-gowda-p', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:shashidhar.gowda.p@outlook.com', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-brand-border/50 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-brand-secondary text-sm flex items-center gap-1.5 justify-center md:justify-start">
              Designed & Built by
              <span className="text-brand-primary font-semibold">Shashidhar Gowda P</span>
            </p>
            <p className="text-brand-muted text-xs mt-1.5 tracking-wider">
              Cloud • DevOps • Infrastructure • Security
            </p>
          </div>
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-brand-secondary hover:text-azure-400 hover:border-azure-500/40 transition-all"
                aria-label={link.label}
              >
                <link.icon size={16} />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-brand-border/30 text-center">
          <p className="text-brand-muted text-xs">
            © {new Date().getFullYear()} Shashidhar Gowda P. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
