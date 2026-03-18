"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/index";
import SectionHeading from "./SectionHeading";
import DraggableCardDemo from "../draggable-card-demo-2";

export default function TechnicalArsenal() {
  return (
    <section id="arsenal" className="pt-24">
      <SectionHeading
        eyebrow="Section 2"
        title="Technical Arsenal"
        description="Categorized stack depth with focus on production-ready tools for modern full-stack and AI workflows."
      />

      <div className="w-full relative mt-8">
        <DraggableCardDemo />
      </div>
    </section>
  );
}
