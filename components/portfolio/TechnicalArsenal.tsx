"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/index";
import SectionHeading from "./SectionHeading";
import { Button } from "@/components/ui/MovingBorder";

export default function TechnicalArsenal() {
  return (
    <section id="arsenal" className="pt-24">
      <SectionHeading
        eyebrow="Section 2"
        title="Technical Arsenal"
        description="Categorized stack depth with focus on production-ready tools for modern full-stack and AI workflows."
      />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((bucket, idx) => (
          <motion.div
            key={bucket.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.06 }}
            whileHover={{ y: -8 }}
          >
            <Button
              as="article"
              borderRadius="1.2rem"
              duration={4500 + idx * 500}
              className="h-full min-h-56 items-start border-white/10 bg-slate-950/75 p-5"
              containerClassName="h-full w-full"
              borderClassName="bg-[radial-gradient(var(--cyan-400)_40%,transparent_60%)]"
            >
              <h3 className="text-lg font-bold text-white">
                {bucket.category}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {bucket.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className={[
                      "rounded-xl border px-2.5 py-2 text-xs font-semibold transition duration-300",
                      skill.featured
                        ? "border-cyan-300/55 bg-cyan-400/10 text-cyan-200"
                        : "border-white/15 bg-white/5 text-slate-200",
                    ].join(" ")}
                  >
                    <span className="mr-2 rounded-md border border-white/15 bg-black/35 px-1.5 py-0.5 text-[10px] tracking-wide text-slate-300">
                      {skill.icon}
                    </span>
                    {skill.name}
                  </li>
                ))}
              </ul>
            </Button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
