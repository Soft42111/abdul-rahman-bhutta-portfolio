import { useEffect, RefObject, useRef } from "react";

interface UseScrollLockOptions {
  containerRef: RefObject<HTMLElement>;
  length: number;
  /** Current index from UI interactions (e.g., dots click). Keeps scroll math in sync. */
  index?: number;
  scrollPerItem?: number;
  onIndexChange: (index: number) => void;
}

/**
 * Improved scroll-lock index controller for sticky full-screen sections.
 * Uses continuous RAF polling for better Lenis compatibility.
 */
export function useScrollLockIndex({
  containerRef,
  length,
  index,
  scrollPerItem = 150,
  onIndexChange,
}: UseScrollLockOptions) {
  const lastIndex = useRef<number>(0);
  const rafId = useRef<number | null>(null);
  const isActive = useRef(false);

  // Sync external index changes (e.g., clicking progress dots)
  useEffect(() => {
    if (typeof index !== "number") return;
    const clamped = Math.max(0, Math.min(index, Math.max(0, length - 1)));
    lastIndex.current = clamped;
  }, [index, length]);

  useEffect(() => {
    const totalScrollNeeded = scrollPerItem * Math.max(0, length - 1);
    
    const handle = () => {
      const el = containerRef.current;
      if (!el) {
        rafId.current = requestAnimationFrame(handle);
        return;
      }

      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Check if section is in the "locked" state (sticky)
      const isLocked = rect.top <= 0 && rect.bottom >= viewportHeight;

      if (isLocked) {
        isActive.current = true;
        
        // Calculate how far we've scrolled into the section
        // The section top is at or above viewport top, so -rect.top gives us scroll distance into section
        const scrolledIntoSection = -rect.top;
        
        // The total height beyond the viewport that we scroll through
        const sectionScrollHeight = rect.height - viewportHeight;
        
        // Map the scroll position to an index
        const scrollProgress = Math.max(0, Math.min(scrolledIntoSection / sectionScrollHeight, 1));
        const newIndex = Math.round(scrollProgress * (length - 1));
        const clampedIndex = Math.max(0, Math.min(newIndex, length - 1));

        if (clampedIndex !== lastIndex.current) {
          lastIndex.current = clampedIndex;
          onIndexChange(clampedIndex);
        }
      } else {
        // Reset when leaving section
        if (rect.top > 0) {
          // Section is below viewport - reset to first item
          if (lastIndex.current !== 0) {
            lastIndex.current = 0;
            onIndexChange(0);
          }
        } else if (rect.bottom < viewportHeight) {
          // Section is above viewport - set to last item
          const endIndex = Math.max(0, length - 1);
          if (lastIndex.current !== endIndex) {
            lastIndex.current = endIndex;
            onIndexChange(endIndex);
          }
        }
        isActive.current = false;
      }

      rafId.current = requestAnimationFrame(handle);
    };

    // Start the animation loop
    rafId.current = requestAnimationFrame(handle);

    return () => {
      if (rafId.current != null) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [containerRef, length, scrollPerItem, onIndexChange]);
}
