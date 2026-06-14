interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : "text-left"}`}>
      {eyebrow && (
        <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#C9A84C] mb-3">
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-3xl sm:text-4xl font-bold leading-tight mb-4 ${
          light ? "text-white" : "text-[#0A1628]"
        }`}
      >
        {title}
      </h2>
      <div className={`section-divider ${!centered ? "mx-0" : ""}`} />
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg max-w-2xl leading-relaxed ${
            centered ? "mx-auto" : ""
          } ${light ? "text-gray-300" : "text-gray-500"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
