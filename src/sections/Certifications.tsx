import { useState } from "react";
import SectionHeader from "../components/SectionHeader";
import Lightbox from "../components/Lightbox";
import { ZoomIn } from "lucide-react";

export default function Certifications() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const certificates = [
    {
      id: "cert-7",
      title: "Advanced Certification in Cloud Azure & DevOps",
      issuer: "iHUB IIT Roorkee & Intellipaat",
      year: "2025",
      image: "assets/certs/cert-7.jpeg",
      isPriority: true,
      tag: "IIT Roorkee Elite"
    },
    {
      id: "cert-3",
      title: "IBM Cloud Hosting & Auto-Scaling",
      issuer: "IBM & IIT Guwahati",
      year: "2025",
      image: "assets/certs/cert-3.jpeg",
      isPriority: true,
      tag: "IBM & IIT Guwahati"
    },
    {
      id: "cert-1",
      title: "Microsoft Azure Administration AZ-104",
      issuer: "Intellipaat",
      year: "2025",
      image: "assets/certs/cert-1.png",
      isPriority: false,
      tag: "Administration"
    },
    {
      id: "cert-2",
      title: "Microsoft Azure DevOps Certification",
      issuer: "Intellipaat",
      year: "2025",
      image: "assets/certs/cert-2.png",
      isPriority: false,
      tag: "CI/CD Automation"
    },
    {
      id: "cert-6",
      title: "Linux System Administration",
      issuer: "Udemy",
      year: "2025",
      image: "assets/certs/cert-6.jpeg",
      isPriority: false,
      tag: "SysAdmin"
    },
    {
      id: "cert-4",
      title: "Cloud Application Development",
      issuer: "Rooman Technologies",
      year: "2025",
      image: "assets/certs/cert-4.jpeg",
      isPriority: false,
      tag: "Cloud Dev"
    },
    {
      id: "cert-5",
      title: "Life Skills Jeevan Kaushal 2.0",
      issuer: "Wadhwani Foundation",
      year: "2025",
      image: "assets/certs/cert-5.jpeg",
      isPriority: false,
      tag: "Core Skills"
    }
  ];

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + certificates.length) % certificates.length);
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % certificates.length);
  };

  const featuredCerts = certificates.filter(c => c.isPriority);
  const regularCerts = certificates.filter(c => !c.isPriority);

  return (
    <section id="certifications" className="py-20 border-b border-brand-border/40 bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <SectionHeader 
          number="04" 
          category="CREDENTIALS" 
          title="Verified Professional Certifications" 
          subtitle="Rigorous professional courses and verified examinations validating Cloud, DevOps, and Linux Systems competencies."
        />

        {/* Priority / Highlighted Row */}
        <div className="mb-10">
          <span className="text-[10px] uppercase font-mono tracking-widest text-brand-accent font-bold block mb-4 text-left select-none">
            [Featured Elite Credentials]
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredCerts.map((cert) => {
              const fullIndex = certificates.findIndex(c => c.id === cert.id);
              return (
                <div 
                  key={cert.id}
                  onClick={() => setLightboxIndex(fullIndex)}
                  className="bg-[#0F172A] border border-brand-accent/30 hover:border-brand-accent rounded-lg p-5 flex flex-col sm:flex-row gap-5 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all duration-300 group cursor-zoom-in text-left select-none"
                >
                  {/* Image container */}
                  <div className="relative w-full sm:w-36 h-28 flex-shrink-0 bg-brand-bg border border-brand-border rounded overflow-hidden select-none">
                    <img 
                      src={cert.image} 
                      alt={cert.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-[#0B0F19]/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                      <ZoomIn className="text-brand-accent w-6 h-6" />
                    </div>
                  </div>

                  {/* Info details */}
                  <div className="flex flex-col justify-between flex-grow space-y-3">
                    <div className="space-y-1.5">
                      <span className="px-2 py-0.5 bg-brand-accent/10 border border-brand-accent/30 text-brand-accent font-mono text-[9px] font-semibold uppercase tracking-wider rounded-sm">
                        {cert.tag}
                      </span>
                      <h4 className="text-sm font-bold text-brand-primary tracking-wide leading-tight group-hover:text-brand-accent transition-colors select-text">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-brand-secondary select-text">
                        {cert.issuer}
                      </p>
                    </div>
                    <span className="text-[10px] text-brand-secondary font-mono block">
                      Issued: {cert.year} · Verified
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Regular Grid */}
        <div>
          <span className="text-[10px] uppercase font-mono tracking-widest text-brand-secondary font-bold block mb-4 text-left select-none">
            [Specialized Systems &amp; Core Credentials]
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularCerts.map((cert) => {
              const fullIndex = certificates.findIndex(c => c.id === cert.id);
              return (
                <div 
                  key={cert.id}
                  onClick={() => setLightboxIndex(fullIndex)}
                  className="bg-[#0F172A] border border-brand-border hover:border-brand-accent/40 rounded-lg p-4 flex flex-col justify-between hover:shadow-[0_0_15px_rgba(6,182,212,0.08)] transition-all duration-300 group cursor-zoom-in text-left select-none"
                >
                  <div className="space-y-4">
                    {/* Thumbnail */}
                    <div className="relative w-full h-36 bg-brand-bg border border-brand-border rounded overflow-hidden select-none">
                      <img 
                        src={cert.image} 
                        alt={cert.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-[#0B0F19]/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                        <ZoomIn className="text-brand-accent w-6 h-6" />
                      </div>
                    </div>

                    {/* Metadata */}
                    <div className="space-y-1.5">
                      <span className="px-2 py-0.5 bg-brand-border text-brand-secondary font-mono text-[9px] uppercase tracking-wider rounded-sm border border-brand-border">
                        {cert.tag}
                      </span>
                      <h4 className="text-xs font-bold text-brand-primary tracking-wide leading-snug group-hover:text-brand-accent transition-colors select-text">
                        {cert.title}
                      </h4>
                      <p className="text-[11px] text-brand-secondary select-text">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  <span className="text-[10px] text-brand-secondary font-mono block mt-4 select-none">
                    Issued: {cert.year}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Lightbox Modal Render */}
      <Lightbox
        certificates={certificates}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
}
