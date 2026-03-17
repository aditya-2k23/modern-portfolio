"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data";

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
        <motion.a
          href={siteConfig.resumeUrl}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-full border border-cyan-200/50 bg-slate-900/90 px-5 py-2.5 text-sm font-semibold text-cyan-200 shadow-[0_10px_40px_-15px_rgba(34,211,238,0.9)] backdrop-blur md:bottom-8 md:left-auto md:right-8 md:translate-x-0"
        >
          Download Resume
        </motion.a>
      ) : null}
    </AnimatePresence>
  );
}
