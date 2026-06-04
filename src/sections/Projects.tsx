import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GithubIcon } from '../components/Icons';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeader from '../components/SectionHeader';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  gradient: string;
  github?: string;
}

const projects: Project[] = [
  {
    title: 'Multi-Region Web Hosting Using Azure',
    description: 'Designed and implemented a highly available web hosting solution using Azure Traffic Manager and Application Gateway.',
    techStack: ['Azure', 'Linux'],
    gradient: 'from-azure-500 to-azure-600',
    github: 'https://github.com/shashidhar-p-01',
  },
  {
    title: 'CI/CD Pipeline Automation Using Jenkins',
    description: 'Built automated deployment pipelines using Jenkins and Git to streamline build and release workflows.',
    techStack: ['Jenkins', 'Git', 'Docker', 'Linux'],
    gradient: 'from-azure-400 to-brand-purple',
    github: 'https://github.com/shashidhar-p-01',
  },
  {
    title: 'Scalable Web Hosting Using IBM Cloud',
    description: 'Created a scalable hosting environment using load balancing and auto-scaling concepts.',
    techStack: ['IBM Cloud', 'Linux'],
    gradient: 'from-brand-purple to-brand-purpleLight',
    github: 'https://github.com/shashidhar-p-01',
  },
  {
    title: 'Phishing Website Detection System',
    description: 'Developed a machine learning model for identifying potentially malicious websites.',
    techStack: ['Python', 'Machine Learning'],
    gradient: 'from-emerald-500 to-teal-500',
    github: 'https://github.com/shashidhar-p-01',
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="glass rounded-2xl overflow-hidden card-hover group"
    >
      <div className={`relative h-44 bg-gradient-to-br ${project.gradient} p-6 flex items-end`}>
        <div className="absolute inset-0 bg-black/20" />
        <h3 className="relative z-10 text-xl font-bold text-white leading-tight">{project.title}</h3>
      </div>
      <div className="p-6">
        <p className="text-brand-secondary text-sm leading-relaxed mb-5">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.techStack.map((tech) => (
            <span key={tech} className="px-2.5 py-1 text-xs font-medium rounded-md bg-azure-500/10 text-azure-400 border border-azure-500/20">{tech}</span>
          ))}
        </div>
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-bg/60 border border-brand-border hover:border-azure-500/40 text-brand-secondary hover:text-azure-400 text-sm font-medium transition-all">
            <GithubIcon size={16} /> GitHub
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionHeader title="Projects" subtitle="Cloud infrastructure and DevOps projects I've built" />
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
