import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  image: string;
}

interface LightboxProps {
  certificates: Certificate[];
  currentIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({
  certificates,
  currentIndex,
  onClose,
  onPrev,
  onNext
}: LightboxProps) {
  
  // Handle keyboard events
  useEffect(() => {
    if (currentIndex === null) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, onPrev, onNext, onClose]);

  if (currentIndex === null) return null;

  const currentCert = certificates[currentIndex];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B0F19]/95 backdrop-blur-sm p-4">
        {/* Backdrop Close Click */}
        <div className="absolute inset-0 cursor-zoom-out" onClick={onClose} />

        {/* Modal Window Wrapper */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          className="relative max-w-4xl w-full flex flex-col items-center bg-[#0F172A] border border-brand-border p-4 rounded-lg shadow-2xl z-10"
        >
          {/* Header Bar */}
          <div className="w-full flex items-center justify-between border-b border-brand-border pb-3 mb-4 select-none">
            <div>
              <h4 className="text-sm font-semibold text-brand-primary">{currentCert.title}</h4>
              <p className="text-xs text-brand-secondary">{currentCert.issuer}</p>
            </div>
            <div className="flex items-center space-x-3 text-brand-secondary">
              <span className="text-xs font-mono">
                {currentIndex + 1} / {certificates.length}
              </span>
              <button 
                onClick={onClose}
                className="p-1 hover:text-brand-accent transition-colors"
                aria-label="Close lightbox"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Navigation Controls + Image Container */}
          <div className="relative w-full flex items-center justify-center min-h-[300px] max-h-[70vh] overflow-hidden select-none">
            {/* Left Button */}
            <button
              onClick={(e) => { e.stopPropagation(); onPrev(); }}
              className="absolute left-2 p-2 rounded-full bg-brand-bg/80 border border-brand-border text-brand-primary hover:text-brand-accent hover:border-brand-accent transition-all cursor-pointer z-20"
              aria-label="Previous certificate"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Certificate Image */}
            <motion.img
              key={currentCert.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              src={currentCert.image}
              alt={currentCert.title}
              className="max-h-[60vh] max-w-full object-contain rounded border border-brand-border"
            />

            {/* Right Button */}
            <button
              onClick={(e) => { e.stopPropagation(); onNext(); }}
              className="absolute right-2 p-2 rounded-full bg-brand-bg/80 border border-brand-border text-brand-primary hover:text-brand-accent hover:border-brand-accent transition-all cursor-pointer z-20"
              aria-label="Next certificate"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Footer controls */}
          <div className="w-full flex items-center justify-between border-t border-brand-border pt-3 mt-4 text-xs select-none">
            <span className="text-[10px] text-brand-secondary font-mono">
              [Use Left/Right arrows, or ESC key]
            </span>
            <a
              href={currentCert.image}
              download={currentCert.title.replace(/\s+/g, "_")}
              className="flex items-center gap-1.5 px-3 py-1 bg-brand-border/60 hover:bg-brand-accent/15 hover:text-brand-accent text-brand-secondary border border-brand-border hover:border-brand-accent/30 transition-all font-mono text-[11px]"
            >
              <Download size={12} /> SAVE CREDENTIAL
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
