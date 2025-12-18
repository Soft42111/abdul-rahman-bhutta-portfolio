"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Trophy, Award, Users, Calendar, Target, Zap, X, Star, Rocket } from "lucide-react"
import { CounterAnimation } from "@/components/counter-animation"

const achievements = [
  {
    id: 1,
    icon: Trophy,
    title: "Community Excellence Award 2024",
    description: "Recognized for outstanding leadership in Web3 community building and engagement.",
    date: "2024",
    category: "Leadership",
    color: "from-amber-400 to-orange-500",
    image: "/lovable-uploads/4e0c0df8-ec0c-4f79-8bf2-1d2eaa05a93a.png"
  },
  {
    id: 2,
    icon: Users,
    title: "Team Leadership Milestone",
    description: "Successfully led and coordinated a team of 120+ members across multiple projects.",
    date: "2023-2024",
    category: "Management",
    color: "from-rose-400 to-pink-500",
    image: "/lovable-uploads/4f10758a-777b-4380-9ff1-496936661dfb.png"
  },
  {
    id: 3,
    icon: Calendar,
    title: "Event Excellence Record",
    description: "Organized and hosted events with 700+ attendees, achieving 95% satisfaction rate.",
    date: "2023",
    category: "Events",
    color: "from-emerald-400 to-teal-500",
    image: "/lovable-uploads/975906f0-0df2-47b2-935e-39578a484dfe.png"
  },
  {
    id: 4,
    icon: Target,
    title: "Community Growth Achievement",
    description: "Achieved 400% community growth rate across Discord and social platforms.",
    date: "2023",
    category: "Growth",
    color: "from-violet-400 to-purple-500",
    image: "/lovable-uploads/ba906a73-dba9-4a93-9c26-7aba9ea2f320.png"
  },
  {
    id: 5,
    icon: Award,
    title: "Web3 Strategy Innovation",
    description: "Developed innovative engagement strategies adopted by leading DeFi protocols.",
    date: "2024",
    category: "Innovation",
    color: "from-red-400 to-rose-500",
    image: "/lovable-uploads/d159263e-ea1b-4911-b4d0-2f1e4c6847ed.png"
  },
  {
    id: 6,
    icon: Zap,
    title: "Platform Integration Mastery",
    description: "Expert-level proficiency across Discord, Telegram, Twitter, and Web3 platforms.",
    date: "Ongoing",
    category: "Technical",
    color: "from-cyan-400 to-blue-500",
    image: "/lovable-uploads/d73a7973-0e76-4ad0-bb23-0371fd1f55ac.png"
  },
  {
    id: 7,
    icon: Star,
    title: "Top Contributor Recognition",
    description: "Recognized as top contributor in multiple blockchain communities.",
    date: "2024",
    category: "Recognition",
    color: "from-yellow-400 to-amber-500",
    image: "/lovable-uploads/4e0c0df8-ec0c-4f79-8bf2-1d2eaa05a93a.png"
  },
  {
    id: 8,
    icon: Rocket,
    title: "Launch Success Record",
    description: "Successfully launched 15+ community initiatives with 90%+ engagement rates.",
    date: "2023-2024",
    category: "Launches",
    color: "from-indigo-400 to-violet-500",
    image: "/lovable-uploads/4f10758a-777b-4380-9ff1-496936661dfb.png"
  }
]

const stats = [
  { label: "Team Members Led", value: "120+", icon: Users },
  { label: "Event Attendees", value: "700+", icon: Calendar },
  { label: "Community Growth", value: "400%", icon: Target },
  { label: "Years Experience", value: "5+", icon: Trophy },
]

export function AchievementsSection() {
  const [selectedAchievement, setSelectedAchievement] = useState<typeof achievements[0] | null>(null)

  // Lock page scroll when popup is open (body + html for mobile Safari)
  useEffect(() => {
    const html = document.documentElement

    if (selectedAchievement) {
      html.style.overflow = "hidden"
      document.body.style.overflow = "hidden"
    } else {
      html.style.overflow = ""
      document.body.style.overflow = ""
    }

    return () => {
      html.style.overflow = ""
      document.body.style.overflow = ""
    }
  }, [selectedAchievement])

  return (
    <section className="py-24 bg-background bg-mesh relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Achievements & Recognition
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A track record of exceptional leadership, innovation, and results.
          </p>
        </motion.div>

        {/* Key Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              className="group"
              whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 400, damping: 10 } }}
            >
              <div className="bg-card border border-border rounded-xl p-6 text-center shadow-card hover:shadow-premium transition-all duration-300">
                <motion.div whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.6 }}>
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                </motion.div>
                <div className="text-3xl font-bold text-foreground mb-2">
                  <CounterAnimation 
                    end={parseInt(stat.value.replace(/[^0-9]/g, ''))}
                    suffix={stat.value.replace(/[0-9]/g, '')}
                    duration={2.5}
                    className="text-3xl font-bold text-foreground"
                  />
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive Achievement Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card border border-border rounded-2xl p-8 shadow-card relative overflow-hidden">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Click on the balls to view achievements
              </h3>
              <p className="text-muted-foreground">
                Explore each milestone by clicking on the circular icons below
              </p>
            </div>

            <div className="relative aspect-square max-w-xl mx-auto">
              {/* Dots pattern */}
              <div className="absolute inset-0">
                {Array.from({ length: 400 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-muted-foreground/10"
                    style={{ left: `${(i % 20) * 5}%`, top: `${Math.floor(i / 20) * 5}%` }}
                  />
                ))}
              </div>

              {/* Achievement balls */}
              {achievements.map((achievement, index) => {
                const positions = [
                  { x: 20, y: 12 }, { x: 75, y: 15 }, { x: 50, y: 30 }, { x: 15, y: 50 },
                  { x: 80, y: 45 }, { x: 35, y: 65 }, { x: 65, y: 75 }, { x: 50, y: 90 }
                ]
                const pos = positions[index]

                return (
                  <motion.button
                    key={achievement.id}
                    className={`absolute w-14 h-14 rounded-full bg-gradient-to-r ${achievement.color} p-1 cursor-pointer z-10 shadow-lg hover:shadow-premium transition-shadow`}
                    style={{ left: `${pos.x}%`, top: `${pos.y}%`, transform: 'translate(-50%, -50%)' }}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedAchievement(achievement)}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    <div className="w-full h-full rounded-full overflow-hidden bg-background/20">
                      <img src={achievement.image} alt={achievement.title} className="w-full h-full object-cover" />
                    </div>
                  </motion.button>
                )
              })}
            </div>
          </div>
        </motion.div>

        {/* Achievement Popup - Viewport centered with scroll lock and strong blur */}
        <AnimatePresence>
          {selectedAchievement && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-md z-[100] flex items-center justify-center p-4"
              onClick={() => setSelectedAchievement(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 16 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 16 }}
                className="bg-card border border-border rounded-xl p-5 w-full max-w-xs shadow-premium relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedAchievement(null)}
                  className="absolute top-3 right-3 w-7 h-7 rounded-full bg-muted flex items-center justify-center hover:bg-muted-foreground/20 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${selectedAchievement.color} flex items-center justify-center mb-4`}>
                  <selectedAchievement.icon className="w-7 h-7 text-white" />
                </div>

                <div className="inline-block px-2 py-0.5 bg-primary/10 text-primary rounded-full text-xs font-medium mb-3">
                  {selectedAchievement.category}
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2">
                  {selectedAchievement.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {selectedAchievement.description}
                </p>

                <div className="text-xs text-primary font-medium">
                  {selectedAchievement.date}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
