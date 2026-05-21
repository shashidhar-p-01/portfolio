import SectionHeader from "../components/SectionHeader";
import { Briefcase, GraduationCap } from "lucide-react";

export default function Experience() {
  const internships = [
    {
      role: "Infrastructure & Security Engineer Trainee",
      company: "ATAS",
      period: "Feb 2026 – Present",
      isCurrent: true,
      description: "Working on infrastructure design, security monitoring, and IT systems administration. Applying cloud and cybersecurity principles to maintain secure, reliable enterprise environments.",
      tags: ["Infrastructure", "Security", "Networking"]
    },
    {
      role: "Azure Cloud & DevOps Intern",
      company: "Intellipaat Software Solutions",
      period: "Feb 2025 – Feb 2026",
      isCurrent: false,
      description: "Hands-on experience in designing, deploying, and managing scalable cloud infrastructure on Microsoft Azure. Built and maintained CI/CD pipelines using Azure DevOps and Jenkins.",
      tags: ["Azure", "DevOps", "CI/CD", "Terraform"]
    },
    {
      role: "Cloud Application Developer Intern",
      company: "IBM & IIT Guwahati",
      period: "Nov 2024 – Feb 2025",
      isCurrent: false,
      description: "Developed and deployed cloud-native applications on IBM Cloud. Implemented auto-scaling strategies and load-balancing configurations for high availability workloads.",
      tags: ["IBM Cloud", "Cloud-Native", "Auto-Scaling"]
    }
  ];

  const education = [
    {
      degree: "B.E. Computer Science & Engineering",
      institution: "Visvesvaraya Technological University (VTU)",
      board: "VTU, Belagavi",
      period: "2021 – 2025",
      score: "CGPA: 7.54"
    },
    {
      degree: "Pre-University (PCMB)",
      institution: "Universal PU College",
      board: "KSEAB Board",
      period: "2020 – 2021",
      score: "Grade: 83.4%"
    },
    {
      degree: "Pre-University (PCMB)",
      institution: "Shree Swaminarayan Gurukul Residential PU College",
      board: "KSEAB Board",
      period: "2019 – 2020",
      score: "Grade: 77.0%"
    },
    {
      degree: "High School (ICSE)",
      institution: "Bethel International Public School",
      board: "ICSE Board",
      period: "2007 – 2019",
      score: "Grade: 76.6%"
    }
  ];

  return (
    <section id="experience" className="py-20 border-b border-brand-border/40 bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <SectionHeader 
          number="02" 
          category="TIMELINES" 
          title="Professional Journey & Academic Roots" 
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
          
          {/* LEFT COLUMN: INTERNSHIP TIMELINE */}
          <div className="text-left space-y-6">
            <div className="flex items-center space-x-2.5 mb-6 select-none">
              <Briefcase className="text-brand-accent w-5 h-5" />
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-brand-primary">
                Professional Internships
              </h3>
            </div>

            {/* Timeline wrapper */}
            <div className="relative pl-6 border-l border-brand-border space-y-8">
              {internships.map((job, idx) => (
                <div key={idx} className="relative group select-text">
                  {/* Bullet Node */}
                  <span className={`absolute -left-[30px] top-1.5 w-4 h-4 border ${
                    job.isCurrent 
                      ? "bg-brand-bg border-brand-accent shadow-[0_0_8px_rgba(6,182,212,0.8)]" 
                      : "bg-[#0F172A] border-brand-border group-hover:border-brand-accent/50"
                  } transition-all rounded-full flex items-center justify-center`} />

                  <div className="space-y-2">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h4 className="text-sm font-bold text-brand-primary tracking-wide leading-tight group-hover:text-brand-accent transition-colors">
                          {job.role}
                        </h4>
                        <span className="text-xs text-brand-secondary font-mono tracking-wider">
                          {job.company}
                        </span>
                      </div>
                      <span className={`px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider rounded-sm ${
                        job.isCurrent 
                          ? "bg-brand-accent/15 text-brand-accent border border-brand-accent/30" 
                          : "bg-brand-border/60 text-brand-secondary border border-brand-border"
                      }`}>
                        {job.period}
                      </span>
                    </div>

                    {/* Desc */}
                    <p className="text-xs text-brand-secondary leading-relaxed select-all">
                      {job.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1 select-none">
                      {job.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="px-2 py-0.5 bg-[#0F172A] text-[9px] text-brand-secondary font-mono border border-brand-border rounded-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: ACADEMIC BACKGROUND */}
          <div className="text-left space-y-6">
            <div className="flex items-center space-x-2.5 mb-6 select-none">
              <GraduationCap className="text-brand-accent w-5 h-5" />
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-brand-primary">
                Academic Background
              </h3>
            </div>

            {/* School grids */}
            <div className="space-y-4">
              {education.map((edu, idx) => (
                <div 
                  key={idx}
                  className="p-4 bg-[#0F172A] border border-brand-border rounded hover:border-brand-accent/10 transition-all duration-300 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 group"
                >
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-brand-primary tracking-wide group-hover:text-brand-accent transition-colors select-all">
                      {edu.degree}
                    </h4>
                    <p className="text-xs text-brand-secondary select-all">
                      {edu.institution}
                    </p>
                    <span className="text-[10px] text-brand-secondary font-mono block">
                      {edu.board}
                    </span>
                  </div>

                  <div className="flex sm:flex-col items-start sm:items-end justify-between sm:justify-center gap-2 select-none">
                    <span className="px-2 py-0.5 bg-brand-bg text-[9px] text-brand-secondary font-mono border border-brand-border rounded-sm">
                      {edu.period}
                    </span>
                    <span className="px-2.5 py-0.5 bg-[#10B981]/10 text-[#10B981] font-mono text-[10px] font-semibold border border-[#10B981]/20 rounded-sm">
                      {edu.score}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
