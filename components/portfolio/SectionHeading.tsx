type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  title,
  description,
}: SectionHeadingProps) {
  const words = title.trim().split(" ");
  const lastWord = words.pop();
  const restOfTitle = words.join(" ");

  return (
    <header className="mx-auto mb-6 md:mb-8 max-w-3xl text-center">
      {/* <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300/80">
        {eyebrow}
      </p> */}
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
        {restOfTitle ? <span>{restOfTitle} </span> : null}
        <span className="text-purple">{lastWord}</span>
      </h2>
      {description ? (
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
          {description}
        </p>
      ) : null}
    </header>
  );
}
