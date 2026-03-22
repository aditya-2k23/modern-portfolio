"use client";

import SectionHeading from "./SectionHeading";
import ArsenalHoverEffect from "./ArsenalHoverEffect";

export default function TechnicalArsenal() {
  return (
    <section id="arsenal" className="pt-24 px-12">
      <SectionHeading
        eyebrow="Section 2"
        title="Technical Arsenal"
        description="A production-oriented toolkit used to build modern full-stack and AI-enabled applications. I prioritize clean system design, efficient data handling, intelligent caching, and smooth deployment workflows to deliver performant and maintainable software."
      />

      <div className="w-full relative">
        <ArsenalHoverEffect />
      </div>
    </section>
  );
}
