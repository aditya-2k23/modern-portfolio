import { cn } from "@/lib/utils";

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
  const trimmedTitle = (title || "").trim();
  const words = trimmedTitle ? trimmedTitle.split(" ") : [];
  const lastWord = words.length > 0 ? (words.pop() as string) : "";
  const restOfTitle = words.join(" ");

  return (
    <header className={cn("mb-10", className)}>
      <p className="text-sm tracking-widest text-purple uppercase mb-2 flex items-center gap-2">
        <span>{eyebrow}</span>
        <span className="w-12 h-px bg-purple/50"></span>
      </p>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-sans">
        {restOfTitle ? <span>{restOfTitle} </span> : null}
        <span className="text-purple">{lastWord}</span>
      </h2>
      {description ? (
        <p className="mt-4 text-gray-400 max-w-xl text-base">{description}</p>
      ) : null}
    </header>
  );
}
