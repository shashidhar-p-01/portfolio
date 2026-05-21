interface SectionHeaderProps {
  number: string;
  category: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({
  number,
  category,
  title,
  subtitle
}: SectionHeaderProps) {
  return (
    <div className="text-left mb-10 select-none">
      {/* Small Eyebrow Label */}
      <div className="flex items-center space-x-3 mb-2">
        <span className="h-[1px] w-8 bg-brand-accent shadow-[0_0_8px_rgba(6,182,212,0.6)]" />
        <span className="text-[10px] sm:text-xs font-mono tracking-widest text-brand-accent uppercase font-semibold">
          {number} / {category}
        </span>
      </div>

      {/* Main Title */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-primary tracking-tight">
        {title}
      </h2>

      {/* Optional Description */}
      {subtitle && (
        <p className="text-xs sm:text-sm text-brand-secondary mt-2 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
