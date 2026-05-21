import SectionHeader from "../components/SectionHeader";
import { MapPin, Mail, Phone, Briefcase, Server, Code2, Network, ShieldCheck, Database, Wrench } from "lucide-react";

export default function About() {
  const contactDetails = [
    { icon: <MapPin size={14} className="text-brand-accent" />, label: "Location", value: "Bengaluru, India" },
    { icon: <Mail size={14} className="text-brand-accent" />, label: "Email", value: "shashidhar.gowda.p@outlook.com", isLink: true, href: "mailto:shashidhar.gowda.p@outlook.com" },
    { icon: <Phone size={14} className="text-brand-accent" />, label: "Phone", value: "+91 9019884212", isLink: true, href: "tel:+919019884212" },
    { icon: <Briefcase size={14} className="text-brand-accent" />, label: "Status", value: "Open To Work", highlight: true }
  ];

  const skillCategories = [
    {
      title: "Cloud Platforms",
      icon: <Database className="w-4 h-4 text-brand-accent" />,
      skills: ["Microsoft Azure", "AWS", "Azure VMs", "App Service", "Azure Storage", "Azure Monitor", "Azure AD"]
    },
    {
      title: "DevOps & CI/CD",
      icon: <Server className="w-4 h-4 text-brand-accent" />,
      skills: ["Azure DevOps", "Jenkins", "Git & GitHub", "Docker", "Kubernetes", "Terraform", "Ansible", "YAML"]
    },
    {
      title: "Networking",
      icon: <Network className="w-4 h-4 text-brand-accent" />,
      skills: ["TCP/IP", "DNS", "Subnetting", "Azure VNet", "Load Balancer", "App Gateway", "Traffic Manager", "NGINX Ingress"]
    },
    {
      title: "Cybersecurity",
      icon: <ShieldCheck className="w-4 h-4 text-brand-accent" />,
      skills: ["Firewall Config", "Encryption Basics", "nmap", "Network Security", "Threat Detection", "IAM & RBAC"]
    },
    {
      title: "Scripting & OS",
      icon: <Code2 className="w-4 h-4 text-brand-accent" />,
      skills: ["Python", "Bash Scripting", "PowerShell", "Linux (Ubuntu)", "ARM Templates"]
    },
    {
      title: "Tools & OS",
      icon: <Wrench className="w-4 h-4 text-brand-accent" />,
      skills: ["Linux / Ubuntu", "VS Code", "Azure Portal", "Docker Compose", "Kubernetes CLI"]
    }
  ];

  return (
    <section id="about" className="py-20 border-b border-brand-border/40 bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <SectionHeader 
          number="01" 
          category="ABOUT" 
          title="Core Biography & Technical Expertise" 
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8">
          
          {/* Left Column: Bio and Contacts */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="space-y-4">
              <p className="text-sm text-brand-primary leading-relaxed select-all">
                I'm a <strong className="text-brand-accent font-semibold">Computer Science graduate</strong> with a deep technical foundation in cloud architecture, DevOps principles, network security, and automated system administration.
              </p>
              <p className="text-sm text-brand-secondary leading-relaxed select-all">
                Currently practicing as an <strong className="text-brand-accent">Infrastructure and Security Engineer Trainee at ATAS</strong>, I specialize in architecting secure, reliable systems and optimizing deployment pipelines. 
                My focus lies in building zero-downtime high-availability environments and securing enterprise networks.
              </p>
              <p className="text-sm text-brand-secondary leading-relaxed select-all">
                My objective is to leverage cloud platforms, automated CI/CD infrastructures, and robust cybersecurity protocols to engineer highly resilient IT operations.
              </p>
            </div>

            {/* Recruiter Cheat Sheet (Contact Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 select-none">
              {contactDetails.map((detail, index) => (
                <div 
                  key={index}
                  className="p-3.5 bg-[#0F172A] border border-brand-border rounded flex items-center space-x-3"
                >
                  <div className="p-2 bg-brand-bg border border-brand-border/60 rounded">
                    {detail.icon}
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] text-brand-secondary uppercase font-mono block tracking-wider">
                      {detail.label}
                    </span>
                    {detail.isLink ? (
                      <a 
                        href={detail.href} 
                        className="text-xs text-brand-primary font-medium hover:text-brand-accent hover:underline font-mono"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <span className={`text-xs font-mono font-medium ${
                        detail.highlight 
                          ? "text-[#10B981] font-bold" 
                          : "text-brand-primary"
                      }`}>
                        {detail.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Skill Categories Grid */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillCategories.map((category, idx) => (
                <div 
                  key={idx}
                  className="p-5 bg-[#0F172A] border border-brand-border rounded hover:border-brand-accent/20 transition-all duration-300 group"
                >
                  {/* Category Title */}
                  <div className="flex items-center space-x-2 border-b border-brand-border pb-3 mb-4 select-none">
                    <div className="p-1.5 bg-brand-bg border border-brand-border rounded group-hover:border-brand-accent/20 transition-colors">
                      {category.icon}
                    </div>
                    <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-brand-primary group-hover:text-brand-accent transition-colors">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-1.5 select-none">
                    {category.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-2.5 py-0.5 bg-brand-bg text-[10px] text-brand-secondary font-mono border border-brand-border/60 hover:border-brand-accent hover:text-brand-accent transition-all duration-200 cursor-default rounded-sm"
                      >
                        {skill}
                      </span>
                    ))}
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
