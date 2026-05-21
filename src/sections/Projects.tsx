import SectionHeader from "../components/SectionHeader";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projectList = [
    {
      title: "Multi-Region Azure Web Hosting",
      challenge: "Establish a resilient cloud configuration capable of withstanding local zone outages and intelligently routing dynamic traffic based on client proximity.",
      solution: "Designed a high-availability multi-region Azure architecture using Traffic Manager and Application Gateway, eliminating regional single points of failure by 100% and optimizing global response latencies.",
      techStack: ["Azure", "Traffic Manager", "App Gateway", "High Availability", "DNS Routing"],
      githubUrl: "https://github.com/p-shashidhar-gowda/multi-region-web-hosting-using-azure.git"
    },
    {
      title: "Scalable Web Hosting on IBM Cloud",
      challenge: "Mitigate crash risks on high-traffic websites during massive sudden surges while maintaining low operational expenditures.",
      solution: "Engineered auto-scaling groups and dynamic load balancers on IBM Cloud, creating an auto-healing infrastructure that maintained 0% downtime and optimized cost efficiency by 30%.",
      techStack: ["IBM Cloud", "Auto-Scaling", "Load Balancing", "Cloud-Native Architecture"],
      githubUrl: "https://github.com/p-shashidhar-gowda/portfolio-website"
    },
    {
      title: "Kubernetes & NGINX Deployment",
      challenge: "Orchestrate, expose, and scale containerized web applications in a cluster environment with secure external routing.",
      solution: "Provisioned and managed a 3-node Kubernetes cluster. Configured NodePort, ClusterIP, and Inginx Ingress controllers to enable secure external traffic routing and automatic replica scaling.",
      techStack: ["Kubernetes", "Docker", "NGINX", "Ingress Controllers", "YAML Configs"],
      githubUrl: "https://github.com/p-shashidhar-gowda/portfolio-website"
    },
    {
      title: "Phishing Website Detection (ML)",
      challenge: "Detect and isolate deceptive domain links in real-time before cyber threats compromise critical enterprise endpoints.",
      solution: "Developed a supervised machine learning classifier in Python with extensive feature extraction, using ensemble models to achieve a 94.2% threat detection accuracy rating.",
      techStack: ["Python", "Machine Learning", "Cybersecurity", "Threat Intelligence"],
      githubUrl: "https://github.com/p-shashidhar-gowda/portfolio-website"
    },
    {
      title: "DevOps Engineer Portfolio",
      challenge: "Construct a highly optimized, premium developer portfolio that conveys professional competence and logs to recruiters with ultra-low latencies.",
      solution: "Coded this state-of-the-art portfolio from scratch using Vite + React + TS, featuring a custom interactive mock terminal, achieving perfect Lighthouse scores and zero external dependencies.",
      techStack: ["Vite", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/p-shashidhar-gowda/portfolio.git"
    }
  ];

  return (
    <section id="projects" className="py-20 border-b border-brand-border/40 bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <SectionHeader 
          number="03" 
          category="PORTFOLIO" 
          title="Featured Production & Deployed Projects" 
          subtitle="A selection of cloud architectures, automation infrastructures, and security deployments engineered to solve real scalability problems."
        />

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {projectList.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              challenge={project.challenge}
              solution={project.solution}
              techStack={project.techStack}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
