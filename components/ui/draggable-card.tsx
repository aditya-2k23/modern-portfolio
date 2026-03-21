"use client";
import { cn } from "@/utils/cn";
import React, {
  useRef,
  useState,
  useEffect,
  createContext,
  useContext,
} from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
  useVelocity,
  useAnimationControls,
} from "framer-motion";

const DraggableContext =
  createContext<React.RefObject<HTMLDivElement | null> | null>(null);

export const DraggableCardBody = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const containerRef = useContext(DraggableContext);
  const controls = useAnimationControls();

  const velocityX = useVelocity(mouseX);
  const velocityY = useVelocity(mouseY);

  const springConfig = {
    stiffness: 80,
    damping: 30,
    mass: 1,
  };

  const rotateX = useSpring(
    useTransform(mouseY, [-300, 300], [10, -10]),
    springConfig,
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-300, 300], [-10, 10]),
    springConfig,
  );

  const opacity = useSpring(
    useTransform(mouseX, [-300, 0, 300], [0.8, 1, 0.8]),
    springConfig,
  );

  const glareOpacity = useSpring(
    useTransform(mouseX, [-300, 0, 300], [0.2, 0, 0.2]),
    springConfig,
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } =
      cardRef.current?.getBoundingClientRect() ?? {
        width: 0,
        height: 0,
        left: 0,
        top: 0,
      };
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;
    mouseX.set(deltaX);
    mouseY.set(deltaY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      drag
      dragElastic={0.1}
      whileDrag={{ cursor: "grabbing" }}
      dragConstraints={containerRef ?? undefined}
      onDragStart={() => {
        document.body.style.cursor = "grabbing";
      }}
      onDragEnd={(event, info) => {
        document.body.style.cursor = "default";

        controls.start({
          rotateX: 0,
          rotateY: 0,
          transition: {
            type: "spring",
            ...springConfig,
          },
        });
        const currentVelocityX = velocityX.get();
        const currentVelocityY = velocityY.get();

        const velocityMagnitude = Math.sqrt(
          currentVelocityX * currentVelocityX +
            currentVelocityY * currentVelocityY,
        );
        const bounce = Math.min(0.8, velocityMagnitude / 1000);

        animate(info.point.x, info.point.x + currentVelocityX * 0.3, {
          duration: 0.8,
          ease: [0.2, 0, 0, 1],
          bounce,
          type: "spring",
          stiffness: 50,
          damping: 15,
          mass: 0.8,
        });

        animate(info.point.y, info.point.y + currentVelocityY * 0.3, {
          duration: 0.8,
          ease: [0.2, 0, 0, 1],
          bounce,
          type: "spring",
          stiffness: 50,
          damping: 15,
          mass: 0.8,
        });
      }}
      style={{
        rotateX,
        rotateY,
        willChange: "transform",
        cursor: "grab",
      }}
      animate={controls}
      whileHover={{ scale: 1.02 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn("relative transform-3d select-none z-10", className)}
    >
      {children}
      <motion.div
        style={{
          opacity: glareOpacity,
        }}
        className="pointer-events-none absolute inset-0 rounded-4xl bg-white mix-blend-overlay shadow-inner z-20"
      />
    </motion.div>
  );
};

export const DraggableCardContainer = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <DraggableContext.Provider value={containerRef}>
      <div
        ref={containerRef}
        className={cn("perspective-[3000px] w-full h-full relative", className)}
      >
        {children}
      </div>
    </DraggableContext.Provider>
  );
};
