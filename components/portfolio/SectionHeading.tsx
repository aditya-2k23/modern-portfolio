type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  const words = title.trim().split(" ");
  const lastWord = words.pop();
  const restOfTitle = words.join(" ");

  return (
    <header className={`mb-10 ${className ?? ""}`}>
      <p className="text-sm tracking-widest text-[#cbacf9] uppercase mb-2 flex items-center gap-2">
        <span>{eyebrow}</span>
        <span className="w-12 h-[1px] bg-[#cbacf9]/50"></span>
      </p>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-sans">
        {restOfTitle ? <span>{restOfTitle} </span> : null}
        <span className="text-[#cbacf9]">{lastWord}</span>
      </h2>
      {description ? (
        <p className="mt-4 text-gray-400 max-w-xl text-base">{description}</p>
      ) : null}
    </header>
  );
}
