import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Cloud, Shield, GitBranch } from 'lucide-react';
import { GithubIcon } from '../components/Icons';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeader from '../components/SectionHeader';

const achievements = [
  { label: 'Azure & DevOps Certified', icon: Cloud, value: '✓' },
  { label: 'IBM Cloud Project Experience', icon: Shield, value: '✓' },
  { label: 'NASSCOM Certified Cloud Developer', icon: Award, value: '✓' },
  { label: 'Multiple Cloud Projects', icon: GitBranch, value: '4+' },
  { label: 'Active GitHub Contributor', icon: GithubIcon, value: '✓' },
];

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <SectionWrapper id="achievements">
      <SectionHeader title="Achievements" subtitle="Key milestones in my professional journey" />
      <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {achievements.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="glass rounded-2xl p-5 text-center card-hover group"
          >
            <div className="w-12 h-12 rounded-xl bg-azure-500/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-azure-500/20 transition-colors">
              <item.icon size={22} className="text-azure-400" />
            </div>
            <div className="text-2xl font-bold text-azure-400 mb-1">{item.value}</div>
            <p className="text-xs font-medium text-brand-secondary leading-snug">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
