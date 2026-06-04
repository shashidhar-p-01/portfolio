import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeader from '../components/SectionHeader';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  points: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: 'Infrastructure & Security Engineer Trainee',
    company: 'ATAS (Alpha Tech Academy)',
    period: 'Feb 2026 – Present',
    points: [
      'Working with Linux administration, networking, cloud technologies, and cybersecurity concepts',
      'Supporting infrastructure monitoring and troubleshooting activities',
      'Gaining practical exposure to AWS, DevOps workflows, and security operations',
    ],
  },
  {
    title: 'Azure Cloud & DevOps Intern',
    company: 'Intellipaat in association with IIT Roorkee',
    period: 'Feb 2025 – Feb 2026',
    points: [
      'Worked on cloud deployment workflows, CI/CD concepts, and Linux-based environments',
      'Built and managed a Multi-Region Web Hosting solution on Microsoft Azure using Traffic Manager and Application Gateway',
      'Gained hands-on exposure to Docker, Git, Jenkins, and cloud infrastructure management',
      'Assisted in deployment, monitoring, troubleshooting, and maintenance activities',
    ],
  },
  {
    title: 'Cloud Application Developer Intern',
    company: 'Rooman Technologies, IBM & NASSCOM',
    period: 'Sep 2024 – Mar 2025',
    points: [
      'Worked on scalable web hosting and cloud deployment projects',
      'Implemented cloud solutions using IBM Cloud',
      'Learned load balancing, auto-scaling, and cloud infrastructure concepts',
    ],
  },
];

function TimelineItem({ item, index }: { item: ExperienceItem; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="relative flex items-start gap-6 md:gap-10">
      {/* Timeline line and dot */}
      <div className="hidden md:flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.4, type: 'spring' }}
          className="w-4 h-4 rounded-full bg-azure-500 border-4 border-brand-bg z-10 glow-sm flex-shrink-0"
        />
        {index < experiences.length - 1 && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="w-0.5 h-full bg-gradient-to-b from-azure-500/40 to-transparent origin-top"
          />
        )}
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -30 : 30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="flex-1 glass rounded-2xl p-6 md:p-8 card-hover mb-8 md:mb-0"
      >
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <h3 className="text-lg font-bold text-brand-primary">{item.title}</h3>
            <div className="flex items-center gap-2 mt-1">
              <Briefcase size={14} className="text-azure-400" />
              <p className="text-azure-400 font-medium text-sm">{item.company}</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-azure-500/10 text-azure-400 text-xs font-medium flex-shrink-0">
            <Calendar size={12} />
            {item.period}
          </span>
        </div>

        <ul className="space-y-3">
          {item.points.map((point, pi) => (
            <motion.li
              key={pi}
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 + pi * 0.1, duration: 0.4 }}
              className="flex items-start gap-3 text-brand-secondary text-sm leading-relaxed"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-azure-500/60 mt-2 flex-shrink-0" />
              {point}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionHeader
        title="Experience"
        subtitle="My professional journey in cloud and DevOps engineering"
      />

      <div className="max-w-3xl mx-auto">
        {experiences.map((exp, i) => (
          <TimelineItem key={exp.title} item={exp} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
