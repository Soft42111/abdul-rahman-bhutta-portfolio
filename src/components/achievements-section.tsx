"use client"

import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { Users, Calendar, Trophy, Rocket, Mic, Gamepad2, Building2, TrendingUp } from "lucide-react"
import { CounterAnimation } from "@/components/counter-animation"

// Achievements from CV with project logos/images
const achievements = [
  {
    id: "aethir-ama",
    title: "700+ Attendee AMA",
    description: "Hosted high-impact AMA with CEO of Saltwater Games and XR One",
    category: "Aethir",
    logo: "/lovable-uploads/4e0c0df8-ec0c-4f79-8bf2-1d2eaa05a93a.png",
    icon: Mic,
    color: "from-cyan-400 to-blue-500",
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
    color: "from-violet-400 to-purple-500",
    orbit: 1,
    orbitDuration: 28,
    orbitOffset: 180,
  },
  {
    id: "community-scaling",
    title: "0 to 1K in Hours",
    description: "Scaled new communities from zero to 1,000 members within hours using organic strategies",
    category: "Nexus Marketing",
    logo: "/lovable-uploads/d73a7973-0e76-4ad0-bb23-0371fd1f55ac.png",
    icon: Rocket,
    color: "from-emerald-400 to-teal-500",
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
    color: "from-amber-400 to-orange-500",
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
    color: "from-rose-400 to-pink-500",
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
    color: "from-indigo-400 to-violet-500",
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
    color: "from-yellow-400 to-amber-500",
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
    color: "from-red-400 to-rose-500",
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

// Define orbit radii for each orbit level
const orbitRadii = {
  1: 120,
  2: 180,
  3: 240,
}

export function AchievementsSection() {
  const navigate = useNavigate()

  return (
    <section id="achievements" className="py-20 bg-background bg-mesh relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Achievements & Recognition
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Click on the orbiting achievements to explore each milestone in detail
          </p>
        </motion.div>

        {/* Key Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="bg-card border border-border rounded-xl p-4 text-center shadow-card"
            >
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground mb-1">
                <CounterAnimation
                  end={parseInt(stat.value.replace(/[^0-9]/g, ""))}
                  suffix={stat.value.replace(/[0-9]/g, "")}
                  duration={2}
                  className="text-2xl font-bold text-foreground"
                />
              </div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Solar System Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative mx-auto"
          style={{ width: "min(550px, 90vw)", height: "min(550px, 90vw)" }}
        >
          {/* Orbit rings - 3 distinct orbits */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {Object.values(orbitRadii).map((radius) => (
              <div
                key={radius}
                className="absolute rounded-full border border-border/30"
                style={{
                  width: radius * 2,
                  height: radius * 2,
                }}
              />
            ))}
          </div>

          {/* Central Profile Image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
              className="relative"
            >
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden shadow-premium ring-4 ring-primary/30">
                <img
                  src="/lovable-uploads/93a92d81-fa62-47f9-8b94-91e23a9a97ac.png"
                  alt="Abdul Rehman Bhutta"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl -z-10" />
            </motion.div>
          </div>

          {/* Orbiting Achievement Balls with Project Logos */}
          {achievements.map((achievement, index) => {
            const radius = orbitRadii[achievement.orbit as keyof typeof orbitRadii]
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
                  opacity: { duration: 0.5, delay: 0.8 + index * 0.1 },
                  rotate: {
                    duration: achievement.orbitDuration,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              >
                <motion.button
                  className="absolute w-14 h-14 md:w-16 md:h-16 rounded-full bg-card border-2 border-border shadow-lg cursor-pointer flex items-center justify-center overflow-hidden group"
                  style={{
                    left: radius,
                    top: -28,
                    marginTop: "-4px",
                  }}
                  whileHover={{
                    scale: 1.4,
                    boxShadow: "0 0 30px rgba(139, 92, 246, 0.5)",
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
                    className="w-full h-full object-cover rounded-full"
                  />
                  {/* Hover overlay with icon */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-90 transition-opacity flex items-center justify-center rounded-full`}>
                    <achievement.icon className="w-6 h-6 text-white" />
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
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-muted-foreground mb-4">
            Hover over achievements to highlight • Click to view details
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {achievements.map((achievement) => (
              <button
                key={achievement.id}
                onClick={() => navigate(`/achievement/${achievement.id}`)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r ${achievement.color} text-white opacity-80 hover:opacity-100 transition-opacity cursor-pointer`}
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
