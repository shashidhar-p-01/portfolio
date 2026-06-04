import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, CheckCircle } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeader from '../components/SectionHeader';

const certifications = [
  { title: 'Advanced Certification in Cloud Azure & DevOps', issuer: 'IIT Roorkee & Intellipaat', color: 'from-azure-500 to-azure-600' },
  { title: 'Cloud Application Developer', issuer: 'Rooman Technologies, IBM & NASSCOM', color: 'from-azure-400 to-brand-purple' },
  { title: 'Scalable Web Hosting Using Auto-Scaling and Load Balancing', issuer: 'IBM', color: 'from-brand-purple to-brand-purpleLight' },
  { title: 'Linux System Administration', issuer: 'Professional Certification', color: 'from-emerald-500 to-emerald-600' },
  { title: 'Jeevan Kaushal 2.0', issuer: 'Wadhwani Foundation', color: 'from-amber-500 to-orange-500' },
];

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <SectionWrapper id="certifications">
      <SectionHeader title="Certifications" subtitle="Professional certifications and industry recognitions" />
      <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="glass rounded-2xl p-6 card-hover group"
          >
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
              <Award size={22} className="text-white" />
            </div>
            <h3 className="font-semibold text-brand-primary text-sm mb-2 leading-snug">{cert.title}</h3>
            <div className="flex items-center gap-1.5 text-brand-secondary text-xs">
              <CheckCircle size={12} className="text-azure-400 flex-shrink-0" />
              <span>{cert.issuer}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
