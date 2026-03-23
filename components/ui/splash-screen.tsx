"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, animate } from "framer-motion";

export const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const controls = animate(0, 100, {
      duration: 1.5,
      onUpdate: (value) => setProgress(Math.round(value)),
      ease: "easeInOut",
    });
    return () => controls.stop();
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(mediaQuery.matches);
    sync();

    mediaQuery.addEventListener("change", sync);
    return () => mediaQuery.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    // 1500ms timeout for the splash screen state
    // remaining 200ms is used by AnimatePresence exit transition
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="fixed inset-0 z-10000 flex flex-col items-center justify-center bg-[#020617] text-white overflow-hidden"
        >
          {/* Subtle Background Elements */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.08),transparent_40%)]" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center justify-center relative z-10 w-70 h-70 sm:w-90 sm:h-90"
          >
            {/* Circular Loader */}
            <svg
              className="absolute inset-0 w-full h-full drop-shadow-[0_0_15px_rgba(6,182,212,0.2)]"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.circle
                cx="50"
                cy="50"
                r="48"
                stroke="url(#gradient-circle)"
                strokeWidth="0.5"
                strokeLinecap="round"
                initial={{ pathLength: 0, rotate: -90 }}
                animate={{ pathLength: 1, rotate: -90 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="origin-center"
              />
              <defs>
                <linearGradient
                  id="gradient-circle"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#22d3ee" /> {/* cyan-400 */}
                  <stop offset="50%" stopColor="#818cf8" />{" "}
                  {/* slate-400/blueish */}
                  <stop offset="100%" stopColor="#9333ea" /> {/* purple-600 */}
                </linearGradient>
              </defs>
            </svg>

            {/* Main Content Info inside the circle */}
            <div className="flex flex-col items-center justify-center -mt-2">
              {/* Shimmer Text */}
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  backgroundPosition: reducedMotion
                    ? "0% center"
                    : ["0% center", "-200% center"],
                }}
                transition={{
                  opacity: { duration: 0.6 },
                  y: { duration: 0.6 },
                  backgroundPosition: {
                    duration: reducedMotion ? 0 : 3,
                    repeat: reducedMotion ? 0 : Infinity,
                    ease: "linear",
                  },
                }}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[0.2em] sm:tracking-[0.3em] ml-[0.1em] sm:ml-[0.15em] text-transparent bg-clip-text bg-[linear-gradient(110deg,#22d3ee,45%,#f8fafc,55%,#9333ea)]"
                style={{ backgroundSize: "200% auto" }}
              >
                ADITYA
              </motion.h1>

              {/* Sub-heading */}
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-4 text-xs sm:text-sm md:text-base font-semibold tracking-[0.3em] sm:tracking-[0.4em] text-slate-400 uppercase"
              >
                Developer Portfolio
              </motion.p>
            </div>

            {/* Minimal Progress Percentage inside the circle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute bottom-12 sm:bottom-16 text-sm sm:text-base font-medium tracking-[0.2em] text-[#22d3ee] tabular-nums"
            >
              {progress}%
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
