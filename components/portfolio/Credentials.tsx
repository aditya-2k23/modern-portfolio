"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { credentialsData } from "@/data/index";
import SectionHeading from "./SectionHeading";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import {
  FiCheckCircle,
  FiAward,
  FiExternalLink,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

const enhancedCertifications = credentialsData.certifications.map((cert) => ({
  ...cert,
  image: cert.img,
  date: cert.date,
  description: cert.description,
  tags:
    cert.tags ||
    (cert.issuer === "Oracle"
      ? ["OCI", "Cloud", "Security"]
      : cert.issuer === "NPTEL"
        ? ["ML", "Modeling", "Data"]
        : ["DSA", "JavaScript", "Problem Solving"]),
}));

export default function Credentials() {
  const [activeCert, setActiveCert] = useState(0);

  return (
    <section id="credentials" className="pt-24 relative overflow-hidden px-4 sm:px-6 lg:px-24">
      {/* Background Mesh/Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent opacity-50 blur-3xl" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="relative z-10">
        <SectionHeading
          eyebrow="Section 4"
          title="Credentials & Achievements"
          description="A curated showcase of professional certifications, education milestones, and key technical achievements."
        />

        {/* Top: Certifications Showcase */}
        <div className="mt-10 flex flex-col lg:flex-row gap-6 lg:gap-8 items-center lg:items-start">
          {/* Left: Certificate Preview & Tabs */}
          <div className="w-full lg:w-3/5 flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="relative p-1 rounded-2xl bg-linear-to-br from-white/10 to-white/0 border border-white/10 shadow-[0_0_30px_-12px_rgba(103,232,249,0.2)] group overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-2xl" />
              <motion.div
                whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative z-10 h-75 md:h-87.5 lg:h-100 w-full rounded-xl overflow-hidden border border-white/10 bg-black/50 flex items-center justify-center p-5"
                style={{ perspective: 1000 }}
              >
                {/* Glow behind image */}
                <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeCert}
                    initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
                    whileHover={{
                      scale: 1.08,
                      rotateX: 10,
                      rotateY: -10,
                      skewX: -2,
                      skewY: 2,
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() =>
                      window.open(
                        enhancedCertifications[activeCert].link,
                        "_blank",
                        "noreferrer",
                      )
                    }
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    src={enhancedCertifications[activeCert].image}
                    alt={enhancedCertifications[activeCert].name}
                    className="w-full h-full object-contain relative z-10 drop-shadow-2xl cursor-pointer"
                  />
                </AnimatePresence>
              </motion.div>
            </motion.div>

            {/* Certification Tabs */}
            <div className="flex items-center gap-3">
              <button
                onClick={() =>
                  setActiveCert((prev) =>
                    prev === 0 ? enhancedCertifications.length - 1 : prev - 1,
                  )
                }
                className="p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-colors"
                aria-label="Previous Certificate"
              >
                <FiChevronLeft className="text-2xl" />
              </button>

              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide snap-x flex-1 justify-center">
                {enhancedCertifications.map((cert, idx) => (
                  <button
                    key={cert.name}
                    onClick={() => setActiveCert(idx)}
                    className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 snap-center shrink-0 border ${
                      activeCert === idx
                        ? "text-cyan-300 border-cyan-400/50 bg-cyan-900/20 shadow-[0_0_20px_-5px_rgba(103,232,249,0.3)]"
                        : "text-slate-400 border-white/5 bg-white/5 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {cert.issuer}
                    {activeCert === idx && (
                      <motion.div
                        layoutId="activeCertTab"
                        className="absolute inset-0 border border-cyan-400/50 rounded-full"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                  </button>
                ))}
              </div>

              <button
                onClick={() =>
                  setActiveCert((prev) =>
                    prev === enhancedCertifications.length - 1 ? 0 : prev + 1,
                  )
                }
                className="p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-colors"
                aria-label="Next Certificate"
              >
                <FiChevronRight className="text-2xl" />
              </button>
            </div>
          </div>

          {/* Right: Detailed Credential Card */}
          <div className="w-full lg:w-2/5 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="relative p-7 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl flex flex-col"
            >
              <div className="relative z-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCert}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-linear-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-cyan-500/30 text-cyan-400 text-lg shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                        <FiAward />
                      </div>
                      <div>
                        <p className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-1">
                          {enhancedCertifications[activeCert].issuer} •{" "}
                          {enhancedCertifications[activeCert].date}
                        </p>
                        <h3 className="text-xl font-bold text-white leading-tight">
                          {enhancedCertifications[activeCert].name}
                        </h3>
                      </div>
                    </div>

                    <p className="text-slate-300 text-sm leading-relaxed mb-6">
                      {enhancedCertifications[activeCert].description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {enhancedCertifications[activeCert].tags.map((tag, i) => (
                        <motion.span
                          key={tag}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 + 0.2 }}
                          className="px-2.5 py-1 text-xs font-semibold rounded-md bg-white/5 border border-white/10 text-slate-200"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    <div className="w-full">
                      <HoverBorderGradient
                        as="a"
                        href={enhancedCertifications[activeCert].link}
                        target="_blank"
                        rel="noreferrer"
                        containerClassName="w-full rounded-xl"
                        className="group relative inline-flex items-center justify-center gap-2 w-full py-3 px-5 rounded-xl font-bold text-white overflow-hidden bg-black border-none transition-all hover:text-cyan-300"
                      >
                        <span className="absolute inset-0 bg-linear-to-r from-cyan-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <span className="relative z-10 flex items-center gap-2">
                          View Certificate{" "}
                          <FiExternalLink className="text-lg group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </span>
                      </HoverBorderGradient>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom: Secondary Grid (Education & Achievements) */}
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {/* Card 1: Education Timeline */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-8 shadow-2xl backdrop-blur-xl group"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20 text-blue-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">
                  Academic Journey
                </h3>
              </div>

              <div className="space-y-6">
                {credentialsData.education.map((item, idx) => (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15 }}
                    key={item.title}
                    className="relative pl-8 group/edu"
                  >
                    <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-cyan-400 bg-black shadow-[0_0_10px_rgba(34,211,238,0.5)] group-hover/edu:bg-cyan-400 transition-colors duration-300" />
                    <span className="absolute left-1.25 top-6 h-[calc(100%-8px)] w-0.5 bg-linear-to-b from-cyan-400/50 to-transparent" />

                    <div className="bg-white/5 border border-white/5 hover:border-white/10 rounded-xl p-4 transition-all duration-300 hover:bg-white/10">
                      <p className="text-sm font-bold text-cyan-50 mb-1">
                        {item.title}
                      </p>
                      <p className="text-sm text-slate-400 mb-2">
                        {item.institute}
                      </p>
                      <div className="flex items-center gap-3 text-xs font-semibold">
                        <span className="px-2 py-1 rounded-md bg-cyan-950/50 text-cyan-300 border border-cyan-900/50">
                          {item.score}
                        </span>
                        <span className="text-slate-500">{item.year}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.article>

          {/* Card 2: Achievements */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-8 shadow-2xl backdrop-blur-xl group"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 text-emerald-400">
                  <FiCheckCircle className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Co-Curricular Activities
                </h3>
              </div>

              <div className="space-y-4">
                {credentialsData.achievements.map((item, idx) => (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15 + 0.2 }}
                    key={item.title}
                    className="group/achieve flex gap-4 items-start rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 p-4 transition-all duration-300 hover:border-cyan-500/30 hover:shadow-[0_0_15px_-5px_rgba(34,211,238,0.2)] hover:-translate-y-1"
                  >
                    <div className="mt-0.5 shrink-0 w-8 h-8 rounded-full bg-cyan-950/50 border border-cyan-800/50 flex flex-col items-center justify-center group-hover/achieve:bg-cyan-500/20 group-hover/achieve:border-cyan-400/50 transition-colors duration-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_5px_rgba(34,211,238,1)]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-cyan-50">
                        {item.title}
                      </p>
                      <p className="mt-1 text-sm text-slate-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
