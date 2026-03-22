"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { featuredProjects } from "@/data/index";
import SectionHeading from "./SectionHeading";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="pt-20">
      <SectionHeading
        eyebrow="Section 3"
        title="Featured Projects"
        description="Real-world applications I designed and built end-to-end, focusing on performance, reliability, modern UX patterns and practical problem solving across full-stack and AI workflows."
      />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.12 } },
        }}
        className="grid gap-6 lg:grid-cols-3"
      >
        {featuredProjects.map((project) => (
          <motion.article
            key={project.id}
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <CardContainer className="inter-var w-full p-0">
              <CardBody className="group/card relative h-auto w-full rounded-3xl border border-white/10 bg-[#0B0F19] hover:shadow-2xl hover:shadow-purple/20 transition-all">
                <CardItem
                  as="a"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  translateZ="100"
                  className="relative block h-60 w-full overflow-hidden rounded-t-3xl border-b border-white/10 cursor-pointer pointer-events-auto z-10"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover scale-95 rotate-2 rounded-xl transition duration-500 group-hover/card:scale-100 group-hover/card:rotate-0 group-hover/card:rounded-none"
                  />
                </CardItem>

                <div className="p-6">
                  <CardItem
                    translateZ="50"
                    className="text-2xl font-extrabold text-white"
                  >
                    {project.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="mt-3 text-sm leading-relaxed text-slate-300"
                  >
                    {project.description}
                  </CardItem>

                  <CardItem
                    translateZ="40"
                    className="mt-4 flex flex-wrap gap-2"
                  >
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-purple/45 bg-purple/10 px-3 py-1 text-xs font-semibold text-purple"
                      >
                        {tech}
                      </span>
                    ))}
                  </CardItem>

                  <CardItem
                    translateZ="40"
                    as="ul"
                    className="mt-5 space-y-2 text-sm text-slate-200"
                  >
                    {project.features.map((feature) => (
                      <li key={feature} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </CardItem>

                  <CardItem
                    translateZ="30"
                    as="p"
                    className="mt-5 rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-slate-300"
                  >
                    Outcome: {project.outcome}
                  </CardItem>

                  <div className="mt-8 flex items-center justify-between relative z-50 pointer-events-auto pb-2">
                    <CardItem
                      translateZ={40}
                      as="a"
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl px-2 sm:px-4 py-3 text-[13px] sm:text-sm font-semibold text-slate-300 transition hover:text-purple cursor-pointer flex-1 text-center ring-2 ring-white/10 hover:ring-purple"
                    >
                      Source Code
                    </CardItem>
                    <CardItem
                      translateZ={40}
                      as="a"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl bg-purple px-4 sm:px-6 py-3 text-[13px] sm:text-sm font-bold text-slate-950 transition hover:bg-purple/90 cursor-pointer flex-1 text-center ml-2"
                    >
                      Live Demo
                    </CardItem>
                  </div>
                </div>
              </CardBody>
            </CardContainer>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
