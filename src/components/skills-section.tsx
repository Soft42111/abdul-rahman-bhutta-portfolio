"use client"

import { useRef, useEffect, useState, useCallback } from "react"
import { motion } from "framer-motion"
import { 
  MessageSquare, Calendar, Users, Bot, Video, Globe, Gamepad2, Brain,
  Settings, TrendingUp, Shield, Zap, Code, Palette, Database, Cloud
} from "lucide-react"

const skillCategories = [
  {
    title: "Community Management",
    icon: Users,
    color: "from-rose-500 to-pink-500",
    skills: [
      { name: "Discord Management", level: 95, icon: MessageSquare },
      { name: "Event Operations", level: 90, icon: Calendar },
      { name: "Team Leadership", level: 88, icon: Users },
      { name: "Bot Administration", level: 85, icon: Bot }
    ]
  },
  {
    title: "Content & Strategy",
    icon: Brain,
    color: "from-amber-500 to-orange-500",
    skills: [
      { name: "Content Creation", level: 90, icon: Video },
      { name: "Web3 Strategy", level: 88, icon: Globe },
      { name: "Gaming Communities", level: 92, icon: Gamepad2 },
      { name: "AI Workflows", level: 80, icon: Brain }
    ]
  },
  {
    title: "Technical & Operations",
    icon: Settings,
    color: "from-emerald-500 to-teal-500",
    skills: [
      { name: "Workflow Automation", level: 85, icon: Settings },
      { name: "Analytics & Growth", level: 88, icon: TrendingUp },
      { name: "Moderation Systems", level: 90, icon: Shield },
      { name: "Event Tech Setup", level: 82, icon: Zap }
    ]
  },
  {
    title: "Development Skills",
    icon: Code,
    color: "from-violet-500 to-purple-500",
    skills: [
      { name: "Frontend Development", level: 85, icon: Code },
      { name: "UI/UX Design", level: 80, icon: Palette },
      { name: "Database Management", level: 75, icon: Database },
      { name: "Cloud Services", level: 78, icon: Cloud }
    ]
  }
]

const languages = [
  { name: "English", level: 100, flag: "🇺🇸", country: "United States" },
  { name: "Hindi", level: 95, flag: "🇮🇳", country: "India" },
  { name: "Urdu", level: 100, flag: "🇵🇰", country: "Pakistan" },
  { name: "Arabic", level: 60, flag: "🇸🇦", country: "Saudi Arabia" }
]

export function SkillsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isLocked, setIsLocked] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      
      const rect = containerRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const sectionTop = rect.top
      const sectionHeight = rect.height
      const currentScrollY = window.scrollY
      const scrollingDown = currentScrollY > lastScrollY.current
      lastScrollY.current = currentScrollY
      
      // Check if section is in viewport
      if (sectionTop <= 0 && sectionTop + sectionHeight >= viewportHeight) {
        setIsLocked(true)
        
        // Calculate progress through the section
        const scrollableHeight = sectionHeight - viewportHeight
        const scrolled = Math.abs(sectionTop)
        const progress = scrolled / scrollableHeight
        
        // Map progress to active index
        const newIndex = Math.min(
          Math.floor(progress * skillCategories.length),
          skillCategories.length - 1
        )
        setActiveIndex(Math.max(0, newIndex))
      } else {
        setIsLocked(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section 
      ref={containerRef}
      className="relative bg-muted/30 bg-mesh"
      style={{ height: `${(skillCategories.length + 1) * 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Skills &{" "}
              <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit built through years of hands-on experience.
            </p>
          </motion.div>

          {/* Skill Categories with scroll lock */}
          <div className="max-w-4xl mx-auto relative">
            {/* Main skill cards */}
            <div className="relative h-[400px]">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ 
                    opacity: categoryIndex === activeIndex ? 1 : 0,
                    y: categoryIndex === activeIndex ? 0 : (categoryIndex < activeIndex ? -100 : 100),
                    scale: categoryIndex === activeIndex ? 1 : 0.9
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className={`absolute inset-0 ${categoryIndex === activeIndex ? 'z-10' : 'z-0 pointer-events-none'}`}
                >
                  <SkillCard category={category} isActive={categoryIndex === activeIndex} />
                </motion.div>
              ))}
            </div>

            {/* Progress indicators */}
            <div className="flex justify-center gap-3 mt-8">
              {skillCategories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? "w-8 h-3 bg-primary" 
                      : "w-3 h-3 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto mt-12"
          >
            <div className="bg-card border border-border rounded-2xl p-6 shadow-card">
              <h3 className="text-xl font-semibold text-foreground mb-6 text-center">Languages</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {languages.map((language, index) => (
                  <motion.div
                    key={language.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="text-4xl mb-2">{language.flag}</div>
                    <h4 className="text-sm font-semibold text-foreground mb-1">{language.name}</h4>
                    <div className="w-full bg-muted rounded-full h-1.5 mt-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${language.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                        className="h-1.5 rounded-full bg-gradient-to-r from-primary to-accent"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

interface SkillCardProps {
  category: typeof skillCategories[0]
  isActive?: boolean
}

function SkillCard({ category, isActive }: SkillCardProps) {
  return (
    <div className={`bg-card border border-border rounded-2xl p-8 shadow-card transition-all duration-300 ${isActive ? 'shadow-premium border-primary/30' : ''}`}>
      <div className="flex items-center gap-4 mb-8">
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${category.color} p-0.5`}>
          <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
            <category.icon className="w-7 h-7 text-primary" />
          </div>
        </div>
        <h3 className="text-2xl font-semibold text-foreground">{category.title}</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {category.skills.map((skill, skillIndex) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -20 }}
            transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
            className="space-y-2"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <skill.icon className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">{skill.name}</span>
              </div>
              <span className="text-xs text-muted-foreground font-medium">{skill.level}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: isActive ? `${skill.level}%` : 0 }}
                transition={{ duration: 1, delay: skillIndex * 0.1 + 0.3 }}
                className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}