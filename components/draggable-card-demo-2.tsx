import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import { cn } from "@/utils/cn";
import { skillCategories } from "@/data/index";

export default function DraggableCardDemo() {
  const cardPositions = [
    "absolute top-0 left-[1%] md:left-[3%] lg:left-[5%] rotate-[-3deg]", // Programming Languages
    "absolute top-[2%] left-1/2 -translate-x-1/2 rotate-[1.5deg]", // Frontend
    "absolute top-0 right-[1%] md:right-[3%] lg:right-[5%] rotate-[4deg]", // Backend
    "absolute top-[50%] left-[6%] md:left-[10%] lg:left-[12%] -translate-y-1/2 rotate-[3.5deg]", // Databases
    "absolute top-[50%] right-[6%] md:right-[10%] lg:right-[12%] -translate-y-1/2 rotate-[-2.5deg]", // DevOps & Tools
    "absolute bottom-0 left-[14%] md:left-[18%] lg:left-[20%] rotate-[-4deg]", // AI
    "absolute bottom-0 right-[14%] md:right-[18%] lg:right-[20%] rotate-[3deg]", // Data Science
  ];

  return (
    <DraggableCardContainer className="relative flex min-h-[86vh] md:min-h-[82vh] lg:min-h-[78vh] w-full items-center justify-center overflow-visible py-8 md:py-10 px-4">
      <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-sm text-center text-xl font-bold text-neutral-600/50 md:text-3xl pointer-events-none select-none">
        Drag around to explore the arsenal
      </p>

      {skillCategories.map((bucket, idx) => (
        <DraggableCardBody
          key={idx}
          className={cardPositions[idx % cardPositions.length]}
        >
          <div className="relative overflow-hidden rounded-4xl bg-[#0B0F19] p-6 shadow-2xl border border-white/10 w-68 sm:w-72 md:w-76 flex flex-col gap-4 group hover:border-white/20 transition-colors">
            {/* Ambient Background Glow */}
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/10 blur-[50px] transition-all group-hover:bg-cyan-400/20" />
            <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-purple/10 blur-[50px] transition-all group-hover:bg-purple/20" />

            <div className="relative z-10 flex flex-col h-full gap-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white pointer-events-none">
                {bucket.category}
              </h3>

              <ul className="flex flex-wrap gap-2 pointer-events-none">
                {bucket.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className={cn(
                      "flex items-center gap-2 rounded-full border px-3 py-1.5 text-[13px] font-medium",
                      skill.featured
                        ? "border-cyan-500/30 bg-cyan-500/10 text-cyan-300"
                        : "border-white/10 bg-white/5 text-slate-300",
                    )}
                  >
                    <span
                      className={cn(
                        "flex items-center justify-center rounded-full p-1",
                        skill.featured
                          ? "bg-cyan-500/20 text-cyan-200"
                          : "bg-white/10 text-slate-400",
                      )}
                      style={skill.color ? { color: skill.color } : {}}
                    >
                      <skill.icon className="w-3.5 h-3.5" />
                    </span>
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
