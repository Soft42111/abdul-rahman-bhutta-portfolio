"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "VP of Marketing",
    company: "TechCorp",
    image: "/lovable-uploads/4e0c0df8-ec0c-4f79-8bf2-1d2eaa05a93a.png",
    rating: 5,
    text: "Abdul Rehman transformed our community engagement strategy completely. Under his leadership, our Discord community grew by 400% in just 6 months.",
  },
  {
    id: 2,
    name: "Michael Chen", 
    role: "CEO",
    company: "Blockchain Ventures",
    image: "/lovable-uploads/4f10758a-777b-4380-9ff1-496936661dfb.png",
    rating: 5,
    text: "Working with Abdul Rehman was a game-changer for our project launch. His ability to coordinate 120+ team members shows exceptional leadership.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Community Manager",
    company: "DeFi Protocol",
    image: "/lovable-uploads/975906f0-0df2-47b2-935e-39578a484dfe.png",
    rating: 5,
    text: "Abdul Rehman's mentorship elevated my community management skills to the next level. His deep understanding of Web3 ecosystems is impressive.",
  },
  {
    id: 4,
    name: "David Park",
    role: "Head of Operations",
    company: "GameFi Studio", 
    image: "/lovable-uploads/ba906a73-dba9-4a93-9c26-7aba9ea2f320.png",
    rating: 5,
    text: "The events Abdul Rehman organized for us were phenomenal. His attention to detail and ability to create engaging experiences is outstanding.",
  },
  {
    id: 5,
    name: "Lisa Wang",
    role: "Founder",
    company: "Web3 Studio",
    image: "/lovable-uploads/d159263e-ea1b-4911-b4d0-2f1e4c6847ed.png",
    rating: 5,
    text: "Abdul's strategic thinking and execution capabilities are unmatched. He helped us build a thriving community from scratch.",
  },
  {
    id: 6,
    name: "James Morrison",
    role: "Marketing Director",
    company: "CryptoHub",
    image: "/lovable-uploads/d73a7973-0e76-4ad0-bb23-0371fd1f55ac.png",
    rating: 5,
    text: "Incredible professionalism and results-driven approach. Our engagement metrics improved dramatically under his guidance.",
  },
]

export function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      
      const rect = containerRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const sectionTop = rect.top
      const sectionHeight = rect.height
      
      // Check if section is in viewport for scroll lock
      if (sectionTop <= 0 && sectionTop + sectionHeight >= viewportHeight) {
        const scrollableHeight = sectionHeight - viewportHeight
        const scrolled = Math.abs(sectionTop)
        const progress = scrolled / scrollableHeight
        
        const newIndex = Math.min(
          Math.floor(progress * testimonials.length),
          testimonials.length - 1
        )
        setActiveIndex(Math.max(0, newIndex))
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section 
      ref={containerRef}
      className="relative bg-background bg-mesh"
      style={{ height: `${(testimonials.length + 1) * 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              What Leaders Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Testimonials from industry leaders and collaborators.
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Left blur hint */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-48 opacity-25 blur-[2px] hidden lg:block">
              {activeIndex > 0 && (
                <div className="transform scale-75">
                  <TestimonialCard testimonial={testimonials[activeIndex - 1]} />
                </div>
              )}
            </div>

            {/* Main testimonial */}
            <div className="max-w-2xl mx-auto relative h-[320px]">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, x: 200 }}
                  animate={{ 
                    opacity: index === activeIndex ? 1 : 0,
                    x: index === activeIndex ? 0 : (index < activeIndex ? -200 : 200),
                    scale: index === activeIndex ? 1 : 0.9
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className={`absolute inset-0 ${index === activeIndex ? 'z-10' : 'z-0 pointer-events-none'}`}
                >
                  <TestimonialCard testimonial={testimonial} isActive={index === activeIndex} />
                </motion.div>
              ))}
            </div>

            {/* Right blur hint */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-48 opacity-25 blur-[2px] hidden lg:block">
              {activeIndex < testimonials.length - 1 && (
                <div className="transform scale-75">
                  <TestimonialCard testimonial={testimonials[activeIndex + 1]} />
                </div>
              )}
            </div>
          </div>

          {/* Progress indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? "w-8 h-2.5 bg-primary" 
                    : "w-2.5 h-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

interface TestimonialCardProps {
  testimonial: typeof testimonials[0]
  isActive?: boolean
}

function TestimonialCard({ testimonial, isActive }: TestimonialCardProps) {
  return (
    <Card className={`bg-card/90 backdrop-blur-sm border-border/50 transition-all duration-300 ${isActive ? 'shadow-premium border-primary/20' : 'shadow-card'}`}>
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <Quote className="w-6 h-6 text-primary mr-3" />
          <div className="flex">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
            ))}
          </div>
        </div>
        
        <blockquote className="text-base text-foreground mb-5 leading-relaxed">
          "{testimonial.text}"
        </blockquote>
        
        <div className="flex items-center">
          <Avatar className="w-10 h-10 mr-3 ring-2 ring-primary/20">
            <AvatarImage src={testimonial.image} alt={testimonial.name} />
            <AvatarFallback className="bg-primary text-primary-foreground text-sm font-semibold">
              {testimonial.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
            <div className="text-xs text-muted-foreground">{testimonial.role}, {testimonial.company}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}