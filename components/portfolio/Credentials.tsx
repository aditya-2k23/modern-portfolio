"use client";

import { motion } from "framer-motion";
import { credentialsData } from "@/data";
import SectionHeading from "./SectionHeading";

export default function Credentials() {
  return (
    <section id="credentials" className="pt-24">
      <SectionHeading
        eyebrow="Section 4"
        title="Credentials & Achievements"
        description="Education milestones, certifications, and growth indicators presented in a recruiter-friendly format."
      />

      <div className="grid gap-5 lg:grid-cols-3">
        <motion.article
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-5"
        >
          <h3 className="text-lg font-bold text-white">Education Timeline</h3>
          <ol className="mt-5 space-y-4">
            {credentialsData.education.map((item, idx) => (
              <li key={item.title} className="relative pl-6">
                <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full bg-cyan-300" />
                {idx < credentialsData.education.length - 1 ? (
                  <span className="absolute left-[4px] top-5 h-[calc(100%-8px)] w-px bg-cyan-400/35" />
                ) : null}
                <p className="text-sm font-bold text-white">{item.title}</p>
                <p className="text-sm text-slate-300">{item.institute}</p>
                <p className="text-xs uppercase tracking-wider text-cyan-200/80">
                  {item.score} • {item.year}
                </p>
              </li>
            ))}
          </ol>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-5"
        >
          <h3 className="text-lg font-bold text-white">Certifications</h3>
          <ul className="mt-5 space-y-4">
            {credentialsData.certifications.map((cert) => (
              <li
                key={cert.name}
                className="rounded-xl border border-white/10 bg-black/30 p-3"
              >
                <p className="text-sm font-bold text-white">{cert.name}</p>
                <p className="text-xs uppercase tracking-wide text-slate-400">
                  {cert.issuer}
                </p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex text-xs font-semibold text-cyan-300 hover:text-cyan-200"
                >
                  View Certificate
                </a>
              </li>
            ))}
          </ul>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-5"
        >
          <h3 className="text-lg font-bold text-white">Achievements</h3>
          <ul className="mt-5 space-y-3">
            {credentialsData.achievements.map((item) => (
              <li
                key={item}
                className="flex gap-2 rounded-xl bg-black/30 p-3 text-sm text-slate-200"
              >
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.article>
      </div>
    </section>
  );
}
