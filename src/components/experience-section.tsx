"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, Users, TrendingUp, Award, Zap, Shield, Crown, ChevronLeft, ChevronRight } from "lucide-react"
import { OptimizedImage } from "./optimized-image"
import { Button } from "@/components/ui/button"

const experiences = [
  {
    company: "Bullet",
    role: "Community Manager",
    period: "December 2024 - Present",
    description: "Pioneered workshop formats and localization strategies",
    achievements: [
      "Conducted interactive workshops and training sessions",
      "Scaled event participation from 1-2 to 25+ attendees",
      "Led localization efforts for multi-language support",
      "Developed sustainable engagement frameworks"
    ],
    logo: "/lovable-uploads/d159263e-ea1b-4911-b4d0-2f1e4c6847ed.png",
    website: "https://bullet.xyz",
    icon: Calendar,
    color: "from-indigo-500 to-purple-500"
  },
  {
    company: "Portal",
    role: "Community Manager",
    period: "Ended November 2024",
    description: "Led community engagement initiatives for Web3 gaming platform",
    achievements: [
      "Managed community growth and engagement strategies",
      "Coordinated events and user onboarding",
      "Built strong community relationships",
      "Developed content and communication frameworks"
    ],
    logo: null,
    website: null,
    icon: Users,
    color: "from-blue-500 to-cyan-500"
  },
  {
    company: "Staterra",
    role: "Community Manager",
    period: "Ended November 2024",
    description: "Community management for blockchain project",
    achievements: [
      "Developed community engagement strategies",
      "Managed Discord and social media presence",
      "Coordinated with team for community updates",
      "Built and maintained community guidelines"
    ],
    logo: null,
    website: null,
    icon: Shield,
    color: "from-green-500 to-emerald-500"
  },
  {
    company: "Aethir",
    role: "Senior Community Moderator",
    period: "Ended December 2, 2025",
    description: "Promoted for exceptional performance in IRL events and innovative event hosting and engaging community in various ways!",
    achievements: [
      "Promoted due to strong IRL event execution",
      "Created engaging programs including karaoke and story time sessions",
      "Managed high-volume Discord community interactions",
      "Coordinated cross-functional team initiatives"
    ],
    logo: "/lovable-uploads/4e0c0df8-ec0c-4f79-8bf2-1d2eaa05a93a.png",
    website: "https://aethir.com",
    icon: TrendingUp,
    color: "from-blue-500 to-cyan-500"
  },
  {
    company: "Boinkers (Acid Labs)",
    role: "Community Manager", 
    period: "January 2025 - March 2025",
    description: "Transformed community engagement and support systems at Acid Labs",
    achievements: [
      "Managed 40+ community ambassadors",
      "Increased event engagement by 10x through strategic initiatives", 
      "Implemented Zammad for scalable customer support",
      "Established community guidelines and moderation protocols"
    ],
    logo: "/lovable-uploads/4f10758a-777b-4380-9ff1-496936661dfb.png",
    website: "https://boinkers.io",
    icon: Users,
    color: "from-green-500 to-emerald-500"
  },
  {
    company: "Nexus",
    role: "Founder & Chief Executive Officer",
    period: "January 2025 - Present", 
    description: "Founded and led a comprehensive community management company",
    achievements: [
      "Led team of 22 Community Managers and 98 Ambassadors",
      "Hosted AMA sessions with 700+ attendees",
      "Developed scalable community strategies across multiple Web3 projects",
      "Implemented AI-driven workflow systems for enhanced efficiency"
    ],
    logo: "/lovable-uploads/d73a7973-0e76-4ad0-bb23-0371fd1f55ac.png",
    website: "https://mktingnexus.com",
    icon: Crown,
    color: "from-purple-500 to-pink-500"
  },
  {
    company: "Phoenix Growth",
    role: "Community Manager",
    period: "September 2021 - Present",
    description: "Scaled community engagement and led ambassador programs",
    achievements: [
      "Organized AMA panel discussions with 400+ participants",
      "Executed 10-day gaming event attracting 350+ players",
      "Led and mentored team of 9 ambassadors", 
      "Developed content strategies for multiple platforms"
    ],
    logo: null,
    website: "https://phoenixgrowth.io",
    icon: Award,
    color: "from-orange-500 to-red-500"
  },
  {
    company: "Sophon",
    role: "Community Manager",
    period: "January 2023 - December 2024",
    description: "Led community initiatives and engagement strategies for Web3 platform",
    achievements: [
      "Developed community engagement frameworks",
      "Coordinated cross-platform marketing initiatives", 
      "Managed ambassador programs and user onboarding",
      "Facilitated communication between users and development team"
    ],
    logo: "/lovable-uploads/975906f0-0df2-47b2-935e-39578a484dfe.png",
    website: "https://sophon.xyz",
    icon: Crown,
    color: "from-cyan-500 to-blue-500"
  },
  {
    company: "Web3 Clan HISS",
    role: "Founder & Team Leader",
    period: "August 2020 - Present",
    description: "Web3 gaming team leadership - Founded and led competitive Web3 gaming clan",
    achievements: [
      "Established HISS Clan with growing roster of skilled players",
      "Focused on achieving top rankings in competitive Web3 games", 
      "Led teams in Star Atlas, Nyan Heroes, and Overtrip competitions",
      "Developed strategic gameplay approaches and team coordination"
    ],
    logo: null,
    website: "https://web3clanhiss.com",
    icon: Users,
    color: "from-emerald-500 to-teal-500"
  }
]

export function ExperienceSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % experiences.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + experiences.length) % experiences.length)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(nextSlide, 4000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  const getVisibleCards = () => {
    const prev = (currentIndex - 1 + experiences.length) % experiences.length
    const next = (currentIndex + 1) % experiences.length
    return { prev, current: currentIndex, next }
  }

  const { prev, current, next } = getVisibleCards()

  return (
    <section id="experience" className="py-24 bg-gradient-subtle relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional{" "}
            <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A track record of scaling communities, leading teams, and delivering 
            exceptional results across the Web3 ecosystem.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div 
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-background/80 backdrop-blur-sm hover:bg-background"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-background/80 backdrop-blur-sm hover:bg-background"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Cards Container */}
          <div className="relative min-h-[400px] md:h-[500px] flex items-center justify-center px-4 md:px-16">
            {/* Previous Card (Blurred) - Hidden on mobile */}
            <motion.div
              key={`prev-${prev}`}
              className="hidden lg:block absolute left-0 w-56 xl:w-72 opacity-40 blur-[2px] scale-90"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 0.4 }}
              transition={{ duration: 0.5 }}
            >
              <ExperienceCard experience={experiences[prev]} isBlurred />
            </motion.div>

            {/* Current Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`current-${current}`}
                className="w-full max-w-xl lg:max-w-2xl z-10"
                initial={{ opacity: 0, scale: 0.9, x: 100 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.9, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <ExperienceCard experience={experiences[current]} />
              </motion.div>
            </AnimatePresence>

            {/* Next Card (Blurred) - Hidden on mobile */}
            <motion.div
              key={`next-${next}`}
              className="hidden lg:block absolute right-0 w-56 xl:w-72 opacity-40 blur-[2px] scale-90"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 0.4 }}
              transition={{ duration: 0.5 }}
            >
              <ExperienceCard experience={experiences[next]} isBlurred />
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {experiences.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "w-8 bg-primary" 
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

interface ExperienceCardProps {
  experience: typeof experiences[0]
  isBlurred?: boolean
}

function ExperienceCard({ experience, isBlurred }: ExperienceCardProps) {
  const Icon = experience.icon

  return (
    <div className={`bg-card border border-border rounded-2xl p-8 shadow-card transition-all duration-300 ${!isBlurred && 'hover:shadow-premium'}`}>
      <div className="flex items-start gap-4 mb-6">
        {experience.logo && (
          <div className="w-16 h-16 rounded-xl overflow-hidden bg-muted flex-shrink-0">
            {experience.website ? (
              <a href={experience.website} target="_blank" rel="noopener noreferrer">
                <OptimizedImage 
                  src={experience.logo} 
                  alt={`${experience.company} logo`}
                  className="w-full h-full object-cover"
                />
              </a>
            ) : (
              <OptimizedImage 
                src={experience.logo} 
                alt={`${experience.company} logo`}
                className="w-full h-full object-cover"
              />
            )}
          </div>
        )}
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${experience.color} flex items-center justify-center flex-shrink-0`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-bold text-foreground truncate">{experience.role}</h3>
          <p className="text-primary font-medium">
            {experience.website ? (
              <a href={experience.website} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {experience.company}
              </a>
            ) : experience.company}
          </p>
          <span className="text-sm text-muted-foreground">{experience.period}</span>
        </div>
      </div>
      
      <p className="text-muted-foreground mb-6">{experience.description}</p>
      
      <div className="space-y-2">
        {experience.achievements.map((achievement, index) => (
          <div key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
            <span>{achievement}</span>
          </div>
        ))}
      </div>
    </div>
  )
}