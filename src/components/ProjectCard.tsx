import { ExternalLink, Shield, Cloud, Server, Cpu } from "lucide-react";

// Lightweight custom GitHub SVG Icon to avoid brand icon resolution issues
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
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

interface ProjectCardProps {
  title: string;
  challenge: string;
  solution: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export default function ProjectCard({
  title,
  challenge,
  solution,
  techStack,
  githubUrl,
  demoUrl
}: ProjectCardProps) {
  // Simple icon selector based on project title keywords
  const getIcon = (name: string) => {
    const lowercaseName = name.toLowerCase();
    if (lowercaseName.includes("security") || lowercaseName.includes("phishing")) {
      return <Shield className="w-5 h-5 text-brand-accent" />;
    }
    if (lowercaseName.includes("cloud") || lowercaseName.includes("azure") || lowercaseName.includes("multi-region")) {
      return <Cloud className="w-5 h-5 text-brand-accent" />;
    }
    if (lowercaseName.includes("kubernetes") || lowercaseName.includes("nginx")) {
      return <Server className="w-5 h-5 text-brand-accent" />;
    }
    return <Cpu className="w-5 h-5 text-brand-accent" />;
  };

  return (
    <div className="flex flex-col h-full bg-[#0F172A] border border-brand-border hover:border-brand-accent/40 rounded-lg p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] group">
      {/* Header Info */}
      <div className="flex items-start justify-between mb-4 select-none">
        <div className="p-2.5 bg-brand-bg border border-brand-border rounded group-hover:border-brand-accent/30 transition-colors duration-300">
          {getIcon(title)}
        </div>
        <div className="flex items-center space-x-2">
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="p-1.5 text-brand-secondary hover:text-brand-accent transition-colors"
              aria-label={`View GitHub source code for ${title}`}
            >
              <GithubIcon className="w-[18px] h-[18px]" />
            </a>
          )}
          {demoUrl && (
            <a 
              href={demoUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="p-1.5 text-brand-secondary hover:text-brand-accent transition-colors"
              aria-label={`View live deployment demo for ${title}`}
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Project Title */}
      <h3 className="text-base font-semibold text-brand-primary tracking-wide mb-3 group-hover:text-brand-accent transition-colors select-all">
        {title}
      </h3>

      {/* Challenge / Problem Statement */}
      <div className="mb-4">
        <span className="text-[10px] uppercase font-mono tracking-wider text-brand-accent/80 font-bold block mb-1">
          [Challenge]
        </span>
        <p className="text-xs text-brand-secondary leading-relaxed select-all">
          {challenge}
        </p>
      </div>

      {/* Solution / Impact Statement */}
      <div className="mb-6 flex-1">
        <span className="text-[10px] uppercase font-mono tracking-wider text-[#10B981] font-bold block mb-1">
          [Engineering Impact]
        </span>
        <p className="text-xs text-brand-primary leading-relaxed font-medium select-all">
          {solution}
        </p>
      </div>

      {/* Tech Stack Badges */}
      <div className="flex flex-wrap gap-1.5 border-t border-brand-border pt-4 select-none">
        {techStack.map((tech) => (
          <span 
            key={tech} 
            className="px-2 py-0.5 bg-brand-bg text-[10px] text-brand-secondary font-mono border border-brand-border rounded-sm group-hover:border-brand-border/60 transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
