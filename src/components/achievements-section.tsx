"use client"

import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { Users, Calendar, Trophy, Rocket, Mic, Gamepad2, Building2, TrendingUp } from "lucide-react"
import { CounterAnimation } from "@/components/counter-animation"
import { useIsMobile } from "@/hooks/use-mobile"

// Achievements from CV with project logos/images
const achievements = [
  {
    id: "aethir-ama",
    title: "700+ Attendee AMA",
    description: "Hosted high-impact AMA with CEO of Saltwater Games and XR One",
    category: "Aethir",
    logo: "/lovable-uploads/4e0c0df8-ec0c-4f79-8bf2-1d2eaa05a93a.png",
    icon: Mic,
    orbit: 1,
    orbitDuration: 25,
    orbitOffset: 0,
  },
  {
    id: "team-leadership",
    title: "100+ Team Leadership",
    description: "Led teams of over 100 community managers and ambassadors across multiple projects",
    category: "Leadership",
    logo: "/lovable-uploads/93a92d81-fa62-47f9-8b94-91e23a9a97ac.png",
    icon: Users,
    orbit: 1,
    orbitDuration: 28,
    orbitOffset: 180,
  },
  {
    id: "community-scaling",
    title: "0 to 1K in Hours",
    description: "Scaled new communities from zero to 1,000 members within hours using organic strategies",
    category: "Nexus",
    logo: "/lovable-uploads/d73a7973-0e76-4ad0-bb23-0371fd1f55ac.png",
    icon: Rocket,
    orbit: 2,
    orbitDuration: 32,
    orbitOffset: 45,
  },
  {
    id: "pakistan-event",
    title: "First IRL Event Pakistan",
    description: "Organized first IRL Aethir community event in Pakistan with 41+ attendees",
    category: "Aethir",
    logo: "/lovable-uploads/4e0c0df8-ec0c-4f79-8bf2-1d2eaa05a93a.png",
    icon: Calendar,
    orbit: 2,
    orbitDuration: 35,
    orbitOffset: 165,
  },
  {
    id: "a-games-tournament",
    title: "A-GAMES Tournament",
    description: "Independently organized and executed a 10-day tournament with 350 participants",
    category: "Aethir",
    logo: "/lovable-uploads/4e0c0df8-ec0c-4f79-8bf2-1d2eaa05a93a.png",
    icon: Gamepad2,
    orbit: 2,
    orbitDuration: 30,
    orbitOffset: 285,
  },
  {
    id: "starterras-cmo",
    title: "CMO & Partner",
    description: "Led end-to-end marketing for Real World Asset initiative at Starterras",
    category: "Starterras",
    logo: "/lovable-uploads/975906f0-0df2-47b2-935e-39578a484dfe.png",
    icon: Building2,
    orbit: 3,
    orbitDuration: 40,
    orbitOffset: 20,
  },
  {
    id: "discord-10x",
    title: "10x Discord Engagement",
    description: "Increased Discord event participation and engagement by 10x at Boinkers",
    category: "Boinkers",
    logo: "/lovable-uploads/c72cbcd0-3d2e-4a8e-a0ea-2b42bb86b432.png",
    icon: TrendingUp,
    orbit: 3,
    orbitDuration: 38,
    orbitOffset: 140,
  },
  {
    id: "depin-ama",
    title: "DePIN Panel 400+ Live",
    description: "Hosted Web3 DePIN panel AMA with 400+ live attendees",
    category: "Web3",
    logo: "/lovable-uploads/ba906a73-dba9-4a93-9c26-7aba9ea2f320.png",
    icon: Trophy,
    orbit: 3,
    orbitDuration: 42,
    orbitOffset: 260,
  },
]

const stats = [
  { label: "Team Members Led", value: "120+", icon: Users },
  { label: "Event Attendees", value: "700+", icon: Calendar },
  { label: "Communities Scaled", value: "15+", icon: TrendingUp },
  { label: "Years Experience", value: "3+", icon: Trophy },
]

// Define orbit radii for each orbit level (responsive)
const getOrbitRadii = (isMobile: boolean) => ({
  1: isMobile ? 80 : 120,
  2: isMobile ? 130 : 180,
  3: isMobile ? 180 : 240,
})

export function AchievementsSection() {
  const navigate = useNavigate()
  const isMobile = useIsMobile()
  const orbitRadii = getOrbitRadii(isMobile)

  return (
    <section id="achievements" className="py-20 bg-background relative z-10">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 uppercase tracking-tight">
            Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-mono">
            Click on the orbiting achievements to explore each milestone
          </p>
        </motion.div>

        {/* Key Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "8px 8px 0px 0px hsl(var(--foreground))",
                transform: "translate(-4px, -4px)"
              }}
              className="border-4 border-foreground bg-card p-4 text-center transition-all"
            >
              <stat.icon className="w-6 h-6 text-foreground mx-auto mb-2" />
              <div className="text-2xl font-black text-foreground mb-1">
                <CounterAnimation
                  end={parseInt(stat.value.replace(/[^0-9]/g, ""))}
                  suffix={stat.value.replace(/[0-9]/g, "")}
                  duration={2}
                  className="text-2xl font-black text-foreground"
                />
              </div>
              <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Solar System Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative mx-auto"
          style={{ 
            width: isMobile ? "min(400px, 95vw)" : "min(550px, 90vw)", 
            height: isMobile ? "min(400px, 95vw)" : "min(550px, 90vw)" 
          }}
        >
          {/* Orbit rings - 3 distinct orbits */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {Object.values(orbitRadii).map((radius, index) => (
              <div
                key={radius}
                className="absolute border-2 border-foreground/20"
                style={{
                  width: radius * 2,
                  height: radius * 2,
                  borderStyle: index === 1 ? "dashed" : "solid",
                }}
              />
            ))}
          </div>

          {/* Central Profile Image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
              className="relative"
            >
              <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 border-4 border-foreground overflow-hidden">
                <img
                  src="/lovable-uploads/93a92d81-fa62-47f9-8b94-91e23a9a97ac.png"
                  alt="Abdul Rehman Bhutta"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Orbiting Achievement Balls with Project Logos */}
          {achievements.map((achievement, index) => {
            const radius = orbitRadii[achievement.orbit as keyof typeof orbitRadii]
            const ballSize = isMobile ? 44 : 60
            return (
              <motion.div
                key={achievement.id}
                className="absolute top-1/2 left-1/2"
                style={{
                  width: 0,
                  height: 0,
                }}
                initial={{ opacity: 0, rotate: achievement.orbitOffset }}
                animate={{
                  opacity: 1,
                  rotate: achievement.orbitOffset + 360,
                }}
                transition={{
                  opacity: { duration: 0.4, delay: 0.5 + index * 0.1 },
                  rotate: {
                    duration: achievement.orbitDuration,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              >
                <motion.button
                  className="absolute border-4 border-foreground bg-card cursor-pointer flex items-center justify-center overflow-hidden group"
                  style={{
                    width: ballSize,
                    height: ballSize,
                    left: radius,
                    top: -(ballSize / 2),
                  }}
                  whileHover={{
                    scale: 1.3,
                    boxShadow: "8px 8px 0px 0px hsl(var(--foreground))",
                    zIndex: 50,
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate(`/achievement/${achievement.id}`)}
                  animate={{
                    rotate: -(achievement.orbitOffset + 360),
                  }}
                  transition={{
                    rotate: {
                      duration: achievement.orbitDuration,
                      repeat: Infinity,
                      ease: "linear",
                    },
                  }}
                >
                  <img
                    src={achievement.logo}
                    alt={achievement.category}
                    className="w-full h-full object-cover"
                  />
                  {/* Hover overlay with icon */}
                  <div className="absolute inset-0 bg-foreground opacity-0 group-hover:opacity-90 transition-opacity flex items-center justify-center">
                    <achievement.icon className="w-5 h-5 sm:w-6 sm:h-6 text-background" />
                  </div>
                </motion.button>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-muted-foreground mb-4 font-mono">
            Hover over achievements to highlight • Click to view details
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {achievements.map((achievement) => (
              <button
                key={achievement.id}
                onClick={() => navigate(`/achievement/${achievement.id}`)}
                className="inline-flex items-center gap-1.5 px-4 py-2 border-2 border-foreground text-xs font-bold uppercase tracking-wider bg-background text-foreground hover:bg-foreground hover:text-background transition-colors cursor-pointer"
              >
                <achievement.icon className="w-3 h-3" />
                {achievement.category}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
