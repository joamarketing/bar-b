"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  /** Vertraging in seconden — handig voor gespreide (staggered) reveals */
  delay?: number;
  /** Startverschuiving in px (positief = van onder naar boven) */
  y?: number;
  className?: string;
};

/**
 * Herbruikbare scroll-reveal wrapper met een luxueuze, trage easing.
 * Respecteert automatisch `prefers-reduced-motion`.
 */
export default function FadeIn({
  children,
  delay = 0,
  y = 32,
  className,
}: FadeInProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduceMotion ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
