"use client";

import { heroData } from "@/data";
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";

export default function HeroAbout() {
  return (
    <section id="about" className="relative pt-24 md:pt-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Spotlight
          className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
          fill="white"
        />
        <Spotlight className="left-full top-10 h-[80vh] w-[50vw]" fill="#22d3ee" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="#3b82f6" />

        <div className="absolute inset-0 h-screen w-full bg-grid-white/[0.06]">
          <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300/75">
          {heroData.eyebrow}
        </p>

        <TextGenerateEffect
          words={heroData.heading}
          className="mx-auto mt-4 max-w-5xl text-balance text-center text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl"
        />

        <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-slate-300 md:text-lg">
          {heroData.subheading}
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
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
                    ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-black shadow-[0_10px_40px_-12px_rgba(56,189,248,0.8)] hover:scale-[1.02]"
                    : "border border-white/20 bg-white/5 text-white hover:border-cyan-300/80 hover:bg-white/10",
                ].join(" ")}
              >
                {cta.label}
              </a>
            );
          })}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-slate-400">
          {heroData.about}
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {heroData.quickFacts.map((fact) => (
            <article
              key={fact.label}
              className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.02] p-5 backdrop-blur"
            >
              <p className="text-xs uppercase tracking-[0.22em] text-cyan-300/70">
                {fact.label}
              </p>
              <p className="mt-3 text-sm font-medium leading-relaxed text-white/95">
                {fact.value}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
