"use client";

import { useMemo } from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { cn } from "@/utils/cn";
import { skillCategories } from "@/data/index";
import {
  FaCode,
  FaDesktop,
  FaServer,
  FaDatabase,
  FaCogs,
  FaBrain,
  FaChartBar,
} from "react-icons/fa";

export default function ArsenalHoverEffect() {
  const getGridSpan = (category: string) => {
    switch (category) {
      case "Programming Languages":
        return "lg:col-span-2";
      case "Frontend":
        return "lg:col-span-4";
      case "Backend":
        return "lg:col-span-2";
      case "Databases":
        return "lg:col-span-3";
      case "DevOps & Tools":
        return "lg:col-span-2";
      case "AI/ML Integration":
        return "lg:col-span-2";
      case "Data Science":
        return "lg:col-span-3";
      default:
        return "lg:col-span-2";
    }
  };

  const getHeaderInfo = (category: string) => {
    switch (category) {
      case "Programming Languages":
        return {
          icon: FaCode,
          subtitle: "CORE LOGIC & ALGORITHMS",
          iconColor: "text-teal-400",
          iconBg: "bg-teal-400/10 border-teal-400/20",
        };
      case "Frontend":
        return {
          icon: FaDesktop,
          subtitle: "INTERFACE & INTERACTION ARCHITECTURE",
          iconColor: "text-cyan-400",
          iconBg: "bg-cyan-400/10 border-cyan-400/20",
        };
      case "Backend":
        return {
          icon: FaServer,
          subtitle: "DISTRIBUTED LOGIC & SERVERS",
          iconColor: "text-purple-400",
          iconBg: "bg-purple-400/10 border-purple-400/20",
        };
      case "Databases":
        return {
          icon: FaDatabase,
          subtitle: "PERSISTENCE & QUERY OPTIMIZATION",
          iconColor: "text-pink-400",
          iconBg: "bg-pink-400/10 border-pink-400/20",
        };
      case "DevOps & Tools":
        return {
          icon: FaCogs,
          subtitle: "AUTOMATION & DEPLOYMENT",
          iconColor: "text-emerald-400",
          iconBg: "bg-emerald-400/10 border-emerald-400/20",
        };
      case "AI/ML Integration":
        return {
          icon: FaBrain,
          subtitle: "NEURAL PROCESSING & MODELS",
          iconColor: "text-amber-400",
          iconBg: "bg-amber-400/10 border-amber-400/20",
        };
      case "Data Science":
        return {
          icon: FaChartBar,
          subtitle: "DATA ANALYSIS & INSIGHTS",
          iconColor: "text-blue-400",
          iconBg: "bg-blue-400/10 border-blue-400/20",
        };
      default:
        return {
          icon: FaCode,
          subtitle: "TOOLS & TECHNOLOGIES",
          iconColor: "text-white",
          iconBg: "bg-white/10 border-white/20",
        };
    }
  };

  const orderedCategories = [
    "Programming Languages",
    "Frontend",
    "Backend",
    "AI/ML Integration",
    "DevOps & Tools",
    "Databases",
    "Data Science",
  ];

  const items = useMemo(() => {
    const sortedCategories = [...skillCategories].sort(
      (a, b) =>
        orderedCategories.indexOf(a.category) -
        orderedCategories.indexOf(b.category),
    );

    return sortedCategories.map((bucket) => {
      const {
        icon: Icon,
        subtitle,
        iconColor,
        iconBg,
      } = getHeaderInfo(bucket.category);

      return {
        title: (
          <div className="flex items-center gap-4">
            <div
              className={cn(
                "flex shrink-0 items-center justify-center w-12 h-12 rounded-xl border",
                iconBg,
                iconColor,
              )}
            >
              <Icon size={24} />
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg sm:text-xl font-bold text-neutral-800 dark:text-neutral-100 tracking-wide uppercase">
                {bucket.category}
              </h3>
              <p className="text-[10px] sm:text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-widest font-semibold mt-0.5">
                {subtitle}
              </p>
            </div>
          </div>
        ),
        className: getGridSpan(bucket.category),
        description: (
          <div className="relative z-10 flex flex-col h-full gap-4 mt-6">
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
                    style={skill.color ? { color: skill.color } : {}}
                  >
                    <skill.icon className="w-3.5 h-3.5" />
                  </span>
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ),
      };
    });
  }, []);

  return (
    <div className="w-full">
      <HoverEffect items={items} className="lg:grid-cols-6" />
    </div>
  );
}
