import { useEffect, RefObject, useRef } from "react";

interface UseScrollLockOptions {
  containerRef: RefObject<HTMLElement>;
  length: number;
  scrollPerItem?: number;
  onIndexChange: (index: number) => void;
}

/**
 * Lightweight, rAF-throttled scroll-lock index controller for sticky full-screen sections.
 * Keeps the same behavior as the previous per-scroll handler, but avoids re-render storms.
 */
export function useScrollLockIndex({
  containerRef,
  length,
  scrollPerItem = 150,
  onIndexChange,
}: UseScrollLockOptions) {
  const accumulatedScroll = useRef(0);
  const lastScrollY = useRef(0);
  const lastIndex = useRef<number>(0);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const handle = () => {
      rafId.current = null;
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY.current;
      lastScrollY.current = currentScrollY;

      const isLocked = rect.top <= 0 && rect.bottom >= viewportHeight;

      if (isLocked) {
        accumulatedScroll.current += scrollDelta;

        const totalScrollNeeded = scrollPerItem * Math.max(0, length - 1);
        const clampedScroll = Math.max(0, Math.min(accumulatedScroll.current, totalScrollNeeded));
        const newIndex = Math.max(
          0,
          Math.min(Math.round(clampedScroll / scrollPerItem), Math.max(0, length - 1))
        );

        if (newIndex !== lastIndex.current) {
          lastIndex.current = newIndex;
          onIndexChange(newIndex);
        }
      } else {
        // Reset accumulated scroll when leaving section, matching old logic.
        if (rect.top > 0) {
          accumulatedScroll.current = 0;
          if (lastIndex.current !== 0) {
            lastIndex.current = 0;
            onIndexChange(0);
          }
        } else if (rect.bottom < viewportHeight) {
          const endIndex = Math.max(0, length - 1);
          accumulatedScroll.current = scrollPerItem * endIndex;
          if (lastIndex.current !== endIndex) {
            lastIndex.current = endIndex;
            onIndexChange(endIndex);
          }
        }
      }
    };

    const onScroll = () => {
      if (rafId.current != null) return;
      rafId.current = window.requestAnimationFrame(handle);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // Initialize
    lastScrollY.current = window.scrollY;
    handle();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId.current != null) window.cancelAnimationFrame(rafId.current);
    };
  }, [containerRef, length, scrollPerItem, onIndexChange]);
}
