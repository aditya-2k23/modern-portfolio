"use client";

import { useState, useEffect } from "react";
import { ChevronUp, ChevronDown, Keyboard } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Lens } from "@/components/ui/lens";
import { certificatesData as certificates } from "@/data/index";
import SectionHeading from "./SectionHeading";

export const CoCurricularActivities = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isLensHovering, setIsLensHovering] = useState(false);

  // Auto-play interval
  useEffect(() => {
    if (isHovered) return; // Pause auto-scroll when user is interacting

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % certificates.length);
    }, 4000); // 4 seconds delay

    return () => clearInterval(interval);
  }, [isHovered]);

  // Keyboard navigation when hovered
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isHovered) return;
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex(
          (prev) => (prev - 1 + certificates.length) % certificates.length,
        );
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((prev) => (prev + 1) % certificates.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isHovered]);

  const activeCert = certificates[activeIndex];

  // Helper for images based on ID since files have different extensions/names
  const getCertImage = (id: number) => {
    if (id === 3) return "/certificates/cert3.jpg";
    if (id === 9) return "/certificates/cert9.jpg";
    if (id > 11) return `/certificates/cert1.png`; // fallback if id exceeds 11 currently
    return `/certificates/cert${id}.png`;
  };

  return (
    <section
      className="py-10 relative overflow-hidden bg-[#000319] text-white"
      id="co-curricular"
    >
      {/* Global blur overlay when magnifying lens is active */}
      <div
        className={`fixed inset-0 z-[40] backdrop-blur-[2px] transition-all duration-500 pointer-events-none ${
          isLensHovering ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          eyebrow="SECTION 04"
          title="Co-Curricular Activities"
          description="A curated selection of verified professional achievements in advanced cloud architecture and fullstack engineering."
          className={`relative z-[45] transition-all duration-500 ${isLensHovering ? "blur-[2px] opacity-40" : ""}`}
        />

        <div
          className="flex flex-col lg:flex-row gap-8 mt-10 min-h-[400px] relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Detail Panel (Left) */}
          <div className="flex-1 w-full lg:max-w-3xl relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCert.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-[#0f1123]/80 backdrop-blur-xl border border-[#cbacf9]/20 p-6 rounded-2xl shadow-[0_0_30px_rgba(203,172,249,0.1)] relative overflow-hidden h-full flex flex-col justify-between"
              >
                {/* Glow effect inside card */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#cbacf9]/10 rounded-full blur-[60px] -mr-24 -mt-24 pointer-events-none"></div>

                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-xs font-semibold tracking-wider text-gray-400 uppercase mb-2">
                        VERIFIED PROFESSIONAL ARTIFACT
                      </p>
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">
                        {activeCert.title}
                      </h3>
                      <p className="text-lg text-gray-300">
                        Issued by{" "}
                        <span className="text-purple">{activeCert.issuer}</span>
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-semibold tracking-wider text-gray-400 uppercase">
                        DATE ISSUED
                      </p>
                      <p className="text-base font-medium text-[#cbacf9] mt-1">
                        {activeCert.date}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-300 text-base leading-relaxed mb-6 max-w-xl">
                    {activeCert.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {activeCert.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-[#cbacf9]/10 text-[#cbacf9] rounded-md text-xs font-medium border border-[#cbacf9]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex w-full overflow-hidden rounded-md">
                  <HoverBorderGradient
                    containerClassName="w-full"
                    as="button"
                    className="w-full flex items-center justify-center text-sm font-bold tracking-wider bg-[#0f1123] text-white py-3 cursor-pointer"
                    onClick={() =>
                      window.open(getCertImage(activeCert.id), "_blank")
                    }
                  >
                    VIEW CERTIFICATE
                  </HoverBorderGradient>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Vertical Orbit (Right) */}
          <div className="flex-1 relative hidden lg:flex items-center justify-end overflow-visible perspective-[1500px] z-[50]">
            {/* Up/Down Controls */}
            <div
              className={`absolute right-12 w-64 md:w-80 h-[min(700px,calc(100%-2rem))] pointer-events-none flex flex-col justify-between items-center z-[60] top-1/2 -translate-y-1/2 transition-all duration-500 ${isLensHovering ? "blur-[2px] opacity-40" : ""}`}
            >
              <button
                onClick={() =>
                  setActiveIndex(
                    (prev) =>
                      (prev - 1 + certificates.length) % certificates.length,
                  )
                }
                className="pointer-events-auto p-3 rounded-full bg-[#0f1123] border border-[#cbacf9]/50 text-[#cbacf9] hover:bg-[#cbacf9] hover:text-[#000319] hover:scale-110 transition-all shadow-[0_0_20px_rgba(203,172,249,0.3)] z-[60] cursor-pointer"
              >
                <ChevronUp className="w-8 h-8" />
              </button>

              <button
                onClick={() =>
                  setActiveIndex((prev) => (prev + 1) % certificates.length)
                }
                className="pointer-events-auto p-3 rounded-full bg-[#0f1123] border border-[#cbacf9]/50 text-[#cbacf9] hover:bg-[#cbacf9] hover:text-[#000319] hover:scale-110 transition-all shadow-[0_0_20px_rgba(203,172,249,0.3)] z-[60] cursor-pointer"
              >
                <ChevronDown className="w-8 h-8" />
              </button>
            </div>

            <div className="relative h-full w-full flex items-center justify-center">
              {certificates.map((cert, index) => {
                // Calculate position on the arc
                const total = certificates.length;
                let diff = index - activeIndex;

                // Handle wrap around for smooth infinite appearance (visually)
                if (diff > total / 2) diff -= total;
                if (diff < -total / 2) diff += total;

                // Only show a window of ~5 items
                const isVisible = Math.abs(diff) <= 2;
                if (!isVisible) return null;

                // Calculate arc transforms
                const yOffset = diff * 120; // Vertical spacing compacted to make room for buttons
                const xOffset = Math.abs(diff) * 60; // Push back items on the curve
                const scale = diff === 0 ? 1.25 : 0.75 - Math.abs(diff) * 0.15;
                const opacity = diff === 0 ? 1 : 0.6 - Math.abs(diff) * 0.15;
                const isCenter = diff === 0;

                // Dynamically calculate z-index so hover works without disappearing
                const baseZIndex = 30 - Math.abs(diff);

                return (
                  <motion.div
                    key={cert.id}
                    className={`absolute right-12 cursor-pointer group transition-all duration-500 ${
                      isLensHovering && !isCenter ? "blur-[2px] opacity-40" : ""
                    }`}
                    initial={false}
                    animate={{
                      y: yOffset,
                      x: xOffset,
                      scale: scale,
                      opacity: opacity,
                      zIndex: isCenter ? 40 : baseZIndex,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    whileHover={{
                      scale: isCenter ? 1.3 : scale * 1.05,
                      opacity: 1,
                      zIndex: 50,
                    }}
                    onClick={() => {
                      if (isCenter) {
                        window.open(getCertImage(cert.id), "_blank");
                      } else {
                        setActiveIndex(index);
                      }
                    }}
                  >
                    <div
                      className={`w-72 h-48 md:w-96 md:h-64 rounded-xl flex items-center justify-center overflow-hidden bg-[#0f1123] border ${
                        isCenter
                          ? "border-[#cbacf9] shadow-[0_0_40px_rgba(203,172,249,0.6)] cursor-none"
                          : "border-[#cbacf9]/20 shadow-lg group-hover:border-[#cbacf9]/60"
                      } transition-colors duration-300 relative`}
                    >
                      {isCenter ? (
                        <Lens
                          zoomFactor={2}
                          lensSize={150}
                          className="cursor-none"
                          hovering={isLensHovering}
                          setHovering={setIsLensHovering}
                        >
                          <img
                            src={getCertImage(cert.id)}
                            alt={cert.title}
                            className="w-full h-full object-cover opacity-100 scale-100"
                          />
                        </Lens>
                      ) : (
                        <img
                          src={getCertImage(cert.id)}
                          alt={cert.title}
                          className="w-full h-full object-cover transition-all duration-300 opacity-80 scale-105 group-hover:opacity-100"
                        />
                      )}
                      {!isCenter && (
                        <div className="absolute inset-0 bg-[#000319]/10 z-10 transition-opacity duration-300 group-hover:opacity-0 pointer-events-none"></div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div
              className={`absolute right-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-[#cbacf9] rounded-full shadow-[0_0_15px_rgba(203,172,249,0.8)] transition-all duration-500 ${isLensHovering ? "blur-[2px] opacity-40" : ""}`}
            ></div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 opacity-60 animate-pulse">
          <Keyboard className="w-6 h-6 text-white" />
          <p className="text-[10px] md:text-xs tracking-[0.2em] font-medium uppercase mt-1">
            USE ARROW KEYS OR BUTTONS TO ROTATE CERTIFICATES
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoCurricularActivities;
