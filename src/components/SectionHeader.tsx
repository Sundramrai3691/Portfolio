interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
}

export function SectionHeader({ eyebrow, title, description, align = "center" }: SectionHeaderProps) {
  const alignment = align === "left" ? "text-left" : "text-center";
  const paragraphWidth = align === "left" ? "max-w-2xl" : "max-w-3xl mx-auto";

  return (
    <div className={`mb-16 md:mb-20 ${alignment}`}>
      <span className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.26em] text-cyan-200/80">
        {eyebrow}
      </span>
      <h2 className="section-heading text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">{title}</h2>
      <p className={`mt-5 text-base leading-7 text-muted-foreground md:text-lg ${paragraphWidth}`}>{description}</p>
    </div>
  );
}
