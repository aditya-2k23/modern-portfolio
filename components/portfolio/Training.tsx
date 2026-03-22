"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { ExternalLink } from "lucide-react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { trainingData } from "@/data/index";

export default function Training() {
  return (
    <section id="training" className="pt-24 px-12">
      <SectionHeading
        eyebrow="Section 5"
        title="Industrial Training & Hands-on Experience"
        description="Comprehensive industrial training overview showcasing full-stack application development and modern frameworks."
      />

      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0B0F19] p-6 lg:p-10 shadow-black/10 ring-1 ring-black/5 dark:shadow-white/10 dark:ring-white/5 group"
      >
        <div className="relative z-10 w-full h-full">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-white/10 pb-6">
            <div>
              <h3 className="text-2xl font-extrabold text-white">
                {trainingData.title}
              </h3>
              <p className="mt-1 flex items-center gap-2 text-slate-300 font-medium">
                <span className="text-purple">{trainingData.company}</span>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <span className="rounded-full bg-purple/10 border border-purple/20 px-4 py-2 text-sm font-semibold text-purple">
                {trainingData.date}
              </span>
              <HoverBorderGradient
                as="a"
                href={trainingData.certificateLink}
                target="_blank"
                rel="noreferrer"
                containerClassName="rounded-full"
                className="flex items-center gap-2 rounded-full bg-black transition-colors px-4 py-2 text-sm font-semibold text-slate-200"
              >
                <span>Certificate</span>
                <ExternalLink className="h-4 w-4" />
              </HoverBorderGradient>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">
              Overview
            </h4>
            <ul className="space-y-4 text-slate-300">
              {trainingData.bullets.map((bullet, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple" />
                  <span className="leading-relaxed text-sm md:text-base">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {trainingData.techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-xs font-semibold text-slate-300 shadow-sm transition-colors hover:bg-white/10"
                >
                  <tech.icon
                    className="h-4 w-4"
                    style={{ color: tech.color || "currentColor" }}
                  />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.article>
    </section>
  );
}
