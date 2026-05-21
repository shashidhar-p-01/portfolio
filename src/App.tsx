import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  // Track active scroll section using Intersection Observer
  useEffect(() => {
    const sections = ["home", "about", "experience", "certifications", "projects", "contact"];
    
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px", // Trigger when section occupies the upper-middle region of screen
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0F19] text-[#F8FAFC] selection:bg-brand-accent/30 selection:text-white relative grid-pattern">
      {/* Background overlay details */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19] via-[#0B0F19]/90 to-[#0F172A]/50 pointer-events-none" />
      
      {/* Sticky Header Nav */}
      <Navbar activeSection={activeSection} />

      {/* Pages Layout Wrapper */}
      <main className="relative z-10 w-full">
        {/* Hero Section */}
        <Hero />

        {/* Biography & Skills section */}
        <About />

        {/* Internships & Education Timeline */}
        <Experience />

        {/* Deployed Projects Showcase */}
        <Projects />

        {/* Certifications & Lightbox drawer */}
        <Certifications />

        {/* Contact CTA, Recruiter Console SMTP Form, & Terminal status Footer */}
        <Contact />
      </main>
    </div>
  );
}
