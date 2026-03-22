"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { ExternalLink } from "lucide-react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGooglegemini,
  SiVercel,
} from "react-icons/si";

export default function Training() {
  const trainingData = {
    title: "MERN Full Stack Developer",
    company: "Gokboru Tech Pvt. Ltd",
    date: "Jun’ 25",
    certificateLink: "#",
    bullets: [
      "Completed a six-week industrial training program focused on full-stack web development using modern frameworks like React, NextJS, TailwindCSS and best practices with Git & GitHub.",
      "Gained practical experience in building dynamic UIs, developing secure RESTful APIs, and integrating databases using Firebase for end-to-end application development.",
      "Learned deployment workflows, authentication, basic CI/CD setups for production applications.",
    ],
    techStack: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Gemini", icon: SiGooglegemini },
      { name: "Vercel", icon: SiVercel },
    ],
  };

  return (
    <section id="training" className="pt-24">
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
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
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
                  className="flex items-center gap-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 text-xs font-semibold text-cyan-400 shadow-sm"
                >
                  <tech.icon className="h-4 w-4" />
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
