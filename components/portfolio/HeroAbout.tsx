"use client";

import React, { memo, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { heroData } from "@/data/index";
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import Image from "next/image";

const FactCard = memo(({ label, value }: { label: string; value: string }) => {
  const cardRef = useRef<HTMLElement | null>(null);
  const frameRef = useRef<number | null>(null);

  const setTransform = useCallback((x: number, y: number, hovered: boolean) => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = hovered
      ? `translate3d(${x}px, ${y}px, 0) scale3d(1.05, 1.05, 1)`
      : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)";
  }, []);

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      const { clientX, clientY } = event;
      const rect = event.currentTarget.getBoundingClientRect();
      const x = (clientX - (rect.left + rect.width / 2)) / 20;
      const y = (clientY - (rect.top + rect.height / 2)) / 20;

      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
      frameRef.current = requestAnimationFrame(() => {
        setTransform(x, y, true);
      });
    },
    [setTransform],
  );

  const handleMouseEnter = useCallback(() => {
    setTransform(0, 0, true);
  }, [setTransform]);

  const handleMouseLeave = useCallback(() => {
    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }
    setTransform(0, 0, false);
  }, [setTransform]);

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transition: "transform 0.1s ease-out",
        willChange: "transform",
      }}
      className="flex-1 min-w-35 rounded-2xl border border-white/10 bg-linear-to-b from-white/5 to-transparent p-5 backdrop-blur hover:border-cyan-400/30 transition-colors"
    >
      <p className="text-xs uppercase tracking-[0.22em] text-cyan-500 font-semibold">
        {label}
      </p>
      <p className="mt-2 text-sm font-medium leading-relaxed text-white/90">
        {value}
      </p>
    </article>
  );
});

export default function HeroAbout() {
  return (
    <section
      id="about"
      className="relative pt-16 pb-8 md:pt-20 flex flex-col w-full h-full min-h-screen items-center justify-center"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden w-full h-full">
        <Spotlight
          className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
          fill="white"
        />
        <Spotlight
          className="left-full top-10 h-[80vh] w-[50vw]"
          fill="#22d3ee"
        />
        <Spotlight
          className="left-80 top-28 h-[80vh] w-[50vw]"
          fill="#3b82f6"
        />

        <div className="absolute inset-0 h-full w-full bg-grid-white/[0.06]">
          <div className="absolute inset-0 bg-[#020617] mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div className="flex flex-col items-center mt-12 lg:items-start lg:mt-0">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.8 }}
              className="text-center lg:text-left text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300/75"
            >
              {heroData.eyebrow}
            </motion.p>

            <div className="w-full text-center lg:text-left">
              <TextGenerateEffect
                words={heroData.heading}
                className="mt-4 text-balance text-3xl font-black leading-none text-white sm:text-4xl md:text-5xl lg:text-left"
                delay={2.6}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.8, duration: 0.8 }}
              className="w-full"
            >
              <p className="mt-4 text-center lg:text-left text-base leading-relaxed text-slate-300 md:text-lg max-w-2xl mx-auto lg:mx-0">
                {heroData.subheading}
              </p>

              <div className="mt-9 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                {heroData.ctas.map((cta, index) => {
                  const primary = index === 0;
                  return (
                    <a
                      key={cta.label}
                      href={cta.href}
                      target={cta.external ? "_blank" : undefined}
                      rel={cta.external ? "noreferrer" : undefined}
                      className={[
                        "rounded-full px-6 py-3 text-sm font-semibold transition duration-300",
                        primary
                          ? "bg-linear-to-r from-cyan-400 to-blue-500 text-black shadow-[0_10px_40px_-12px_rgba(56,189,248,0.8)] hover:scale-[1.02]"
                          : "border border-white/20 bg-transparent text-white hover:border-cyan-300/80 hover:bg-white/10",
                      ].join(" ")}
                    >
                      {cta.label}
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.5, duration: 0.8 }}
              className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-107.5 lg:h-107.5 overflow-hidden rounded-full border-4 border-cyan-400/20 shadow-[0_0_60px_-15px_rgba(34,211,238,0.4)] bg-slate-800/50 flex items-center justify-center shrink-0"
            >
              <Image
                src="/me.png"
                alt="Profile placeholder"
                fill
                priority
                sizes="(max-width: 768px) 70vw, (max-width: 1200px) 40vw, 430px"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </motion.div>
          </div>
        </div>

        {/* Quick Facts Section Below Both Columns */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.0, duration: 0.8 }}
          className="mt-10 sm:mt-14 w-full"
        >
          <div className="flex flex-wrap gap-4 w-full max-w-4xl mx-auto lg:mx-0">
            {heroData.quickFacts.map((fact) => (
              <FactCard
                key={fact.label}
                label={fact.label}
                value={fact.value}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
