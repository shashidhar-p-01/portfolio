interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
}

export default function SectionHeader({ title, subtitle, align = 'center' }: SectionHeaderProps) {
  return (
    <div className={`mb-14 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <h2 className="section-heading">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && <p className="section-subheading">{subtitle}</p>}
    </div>
  );
}
