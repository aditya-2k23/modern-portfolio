import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import { cn } from "@/utils/cn";
import { skillCategories } from "@/data/index";

export default function DraggableCardDemo() {
  const cardPositions = [
    "absolute top-[0%] left-[2%] md:left-[5%] rotate-[-5deg]", // Programming Languages
    "absolute top-[10%] left-[30%] md:left-[35%] lg:left-[40%] rotate-[4deg]", // Frontend
    "absolute top-[0%] right-[2%] md:right-[5%] lg:right-[10%] rotate-[8deg]", // Backend
    "absolute bottom-[5%] left-[2%] md:left-[5%] lg:left-[8%] rotate-[6deg]", // Databases
    "absolute bottom-[0%] left-[35%] md:left-[38%] rotate-[-4deg]", // DevOps & Tools
    "absolute bottom-[5%] right-[2%] md:right-[5%] rotate-[-7deg]", // AI / Data Science
  ];

  return (
    <DraggableCardContainer className="relative flex min-h-[90vh] md:min-h-[70vh] lg:min-h-[85vh] w-full items-center justify-center overflow-visible py-24 px-4">
      <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-sm text-center text-xl font-bold text-neutral-400 md:text-3xl dark:text-neutral-600/50 pointer-events-none select-none">
        Drag around to explore the arsenal
      </p>

      {skillCategories.map((bucket, idx) => (
        <DraggableCardBody
          key={idx}
          className={cardPositions[idx % cardPositions.length]}
        >
          <div className="relative overflow-hidden rounded-[2rem] bg-white p-6 shadow-2xl dark:bg-[#0B0F19] border border-neutral-200 dark:border-white/10 w-64 sm:w-[22rem] flex flex-col gap-4 group hover:border-white/20 transition-colors">
            {/* Ambient Background Glow */}
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/10 blur-[50px] transition-all group-hover:bg-cyan-400/20" />
            <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-purple/10 blur-[50px] transition-all group-hover:bg-purple/20" />

            <div className="relative z-10 flex flex-col h-full gap-4">
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-800 dark:text-white pointer-events-none">
                {bucket.category}
              </h3>

              <ul className="flex flex-wrap gap-2 pointer-events-none">
                {bucket.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className={cn(
                      "flex items-center gap-2 rounded-full border px-3 py-1.5 text-[13px] font-medium",
                      skill.featured
                        ? "border-cyan-500/30 bg-cyan-500/10 text-cyan-500 dark:text-cyan-300"
                        : "border-black/5 dark:border-white/10 bg-black/5 dark:bg-white/5 text-slate-700 dark:text-slate-300",
                    )}
                  >
                    <span
                      className={cn(
                        "flex items-center justify-center rounded-full p-1",
                        skill.featured
                          ? "bg-cyan-500/20 text-cyan-600 dark:text-cyan-200"
                          : "bg-black/10 dark:bg-white/10 text-slate-600 dark:text-slate-400",
                      )}
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
