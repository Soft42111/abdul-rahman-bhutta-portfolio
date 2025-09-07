"use client"

import { ReactNode, useState, useEffect, useRef } from "react"

interface LazySectionProps {
  children: ReactNode
  fallback?: ReactNode
  threshold?: number
  rootMargin?: string
}

export function LazySection({ 
  children, 
  fallback = null, 
  threshold = 0.1, 
  rootMargin = "100px" 
}: LazySectionProps) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return (
    <div ref={ref}>
      {isIntersecting ? children : fallback}
    </div>
  )
}