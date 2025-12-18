import { PropsWithChildren } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

interface SectionTransitionProps extends PropsWithChildren {
  className?: string;
  /** Adds an anchor for skip links / nav */
  id?: string;
}

/**
 * Lightweight in-view transition using IntersectionObserver.
 * Avoids interfering with sticky scroll-lock sections.
 */
export function SectionTransition({ children, className, id }: SectionTransitionProps) {
  const prefersReducedMotion = useReducedMotion();
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.15,
    rootMargin: "-10% 0px -10% 0px",
    triggerOnce: true,
  });

  return (
    <motion.div
      id={id}
      // @ts-expect-error ref typing (HTMLElement vs HTMLDivElement)
      ref={ref}
      initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
      animate={
        prefersReducedMotion
          ? { opacity: 1, y: 0 }
          : isIntersecting
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 18 }
      }
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
