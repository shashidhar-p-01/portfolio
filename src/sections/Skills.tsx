import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Cloud,
  GitBranch,
  Monitor,
  Code,
  Network,
  Shield,
} from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeader from '../components/SectionHeader';

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  color: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Cloud Platforms',
    icon: Cloud,
    color: 'from-azure-500 to-azure-600',
    skills: ['Microsoft Azure', 'AWS', 'IBM Cloud'],
  },
  {
    title: 'DevOps Tools',
    icon: GitBranch,
    color: 'from-azure-400 to-brand-purple',
    skills: ['Git', 'Jenkins', 'Docker', 'Kubernetes', 'Terraform', 'Ansible', 'Azure DevOps'],
  },
  {
    title: 'Operating Systems',
    icon: Monitor,
    color: 'from-emerald-500 to-emerald-600',
    skills: ['Linux', 'Windows'],
  },
  {
    title: 'Programming & Scripting',
    icon: Code,
    color: 'from-amber-500 to-orange-500',
    skills: ['Python', 'Bash', 'YAML', 'SQL'],
  },
  {
    title: 'Networking',
    icon: Network,
    color: 'from-brand-purple to-brand-purpleLight',
    skills: ['TCP/IP', 'DNS', 'Subnetting'],
  },
  {
    title: 'Security',
    icon: Shield,
    color: 'from-red-500 to-rose-500',
    skills: ['Firewall Configuration', 'Access Control', 'Vulnerability Assessment', 'Security Monitoring'],
  },
];

function SkillCard({ category, index }: { category: SkillCategory; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="glass rounded-2xl p-6 card-hover group"
    >
      <div className="flex items-center gap-3 mb-5">
        <div
          className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
        >
          <category.icon size={20} className="text-white" />
        </div>
        <h3 className="font-semibold text-brand-primary">{category.title}</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 text-xs font-medium rounded-lg bg-brand-bg/60 text-brand-secondary border border-brand-border hover:border-azure-500/30 hover:text-azure-400 transition-all duration-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionHeader
        title="Skills & Technologies"
        subtitle="Technologies and tools I work with to build and manage cloud infrastructure"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, i) => (
          <SkillCard key={category.title} category={category} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
