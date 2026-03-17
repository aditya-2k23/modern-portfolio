"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { featuredProjects } from "@/data";
import SectionHeading from "./SectionHeading";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="pt-24">
      <SectionHeading
        eyebrow="Section 3"
        title="Featured Projects"
        description="Selected builds that combine engineering quality, thoughtful UX, and measurable outcomes."
      />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.12 } },
        }}
        className="grid gap-6 lg:grid-cols-2"
      >
        {featuredProjects.map((project) => (
          <motion.article
            key={project.id}
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -8, scale: 1.01 }}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.02]"
          >
            <div className="relative h-52 overflow-hidden border-b border-white/10 bg-black/40">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-extrabold text-white">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-cyan-300/45 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="mt-5 space-y-2 text-sm text-slate-200">
                {project.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-5 rounded-xl border border-white/10 bg-black/25 p-3 text-sm text-cyan-100/90">
                Outcome: {project.outcome}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-cyan-300 px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
                >
                  Live Demo
                </a>
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-200"
                >
                  Source Code
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
