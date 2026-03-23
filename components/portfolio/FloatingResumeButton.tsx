"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/index";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export default function FloatingResumeButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 md:bottom-8 md:left-auto md:right-8 md:translate-x-0"
        >
          <HoverBorderGradient
            as="a"
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noreferrer"
            containerClassName="rounded-full shadow-[0_10px_40px_-15px_rgba(34,211,238,0.9)] backdrop-blur"
            className="px-5 py-2.5 text-sm font-semibold text-cyan-200 bg-slate-900/90 rounded-full"
          >
            Download CV
          </HoverBorderGradient>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
