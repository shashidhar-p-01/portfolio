import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cloud, Code, Shield, Target } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeader from '../components/SectionHeader';

const highlights = [
  { icon: Cloud, label: 'Cloud Infrastructure', color: 'from-azure-500 to-azure-600' },
  { icon: Code, label: 'DevOps Automation', color: 'from-azure-400 to-brand-purple' },
  { icon: Shield, label: 'Security Practices', color: 'from-brand-purple to-brand-purpleLight' },
  { icon: Target, label: 'Problem Solving', color: 'from-azure-600 to-azure-400' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <SectionWrapper id="about">
      <SectionHeader
        title="About Me"
        subtitle="Passionate about cloud infrastructure and modern DevOps practices"
      />

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Text content */}
        <div className="space-y-6" ref={ref}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-brand-secondary leading-relaxed text-base md:text-lg"
          >
            I'm a Computer Science Engineering graduate with hands-on experience in 
            Cloud Computing, DevOps, Infrastructure Management, and Cybersecurity through 
            internships, industry training programs, and personal projects.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-brand-secondary leading-relaxed text-base md:text-lg"
          >
            My experience includes working with Azure, AWS, Linux, Docker, Kubernetes, 
            Jenkins, and cloud deployment environments. I enjoy solving infrastructure 
            challenges, automating repetitive processes, and exploring how modern systems 
            scale securely and efficiently.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-brand-secondary leading-relaxed text-base md:text-lg"
          >
            Currently, I'm seeking opportunities in Cloud Engineering, DevOps, Infrastructure, 
            and Cybersecurity roles where I can contribute, learn, and grow.
          </motion.p>
        </div>

        {/* Highlights grid */}
        <div className="grid grid-cols-2 gap-4">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              className="glass rounded-2xl p-6 card-hover group"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <item.icon size={22} className="text-white" />
              </div>
              <p className="text-sm font-semibold text-brand-primary">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
