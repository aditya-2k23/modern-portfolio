"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

import { useCallback, useRef, useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: React.ReactNode;
    description: React.ReactNode;
    link?: string;
    className?: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 py-10",
        className,
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item?.link || idx}
          className={cn(
            "relative group block p-2 h-full w-full",
            item.className,
          )}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-slate-800/80 block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<number | null>(null);

  const setTransform = useCallback((x: number, y: number, hovered: boolean) => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = hovered
      ? `translate3d(${x}px, ${y}px, 0) scale3d(1, 1, 1)`
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
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transition: "transform 0.1s ease-out",
        willChange: "transform",
      }}
      className={cn(
        "rounded-3xl h-full w-full p-4 overflow-hidden bg-[#0B0F19] border border-white/10 group-hover:border-white/20 relative z-20 transition-colors shadow-xl",
        className,
      )}
    >
      {/* Ambient Background Glow */}
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/10 blur-[50px] transition-all group-hover:bg-cyan-400/20" />
      <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-purple-500/10 blur-[50px] transition-all group-hover:bg-purple-500/20" />

      <div className="relative z-50 h-full flex flex-col">
        <div className="p-4 h-full">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={cn("pointer-events-none mb-0 w-full", className)}>
      {children}
    </div>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "text-zinc-400 tracking-wide leading-relaxed text-sm grow",
        className,
      )}
    >
      {children}
    </div>
  );
};
