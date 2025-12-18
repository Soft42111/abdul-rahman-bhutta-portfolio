"use client"

import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { Trophy, Award, Users, Calendar, Target, Zap, Star, Rocket } from "lucide-react"
import { CounterAnimation } from "@/components/counter-animation"

const achievements = [
  {
    id: "1",
    icon: Trophy,
    title: "Community Excellence Award 2024",
    description: "Recognized for outstanding leadership in Web3 community building.",
    category: "Leadership",
    color: "from-amber-400 to-orange-500",
    orbitRadius: 140,
    orbitDuration: 20,
    orbitDelay: 0,
  },
  {
    id: "2",
    icon: Users,
    title: "Team Leadership Milestone",
    description: "Led 120+ members across multiple projects.",
    category: "Management",
    color: "from-rose-400 to-pink-500",
    orbitRadius: 140,
    orbitDuration: 22,
    orbitDelay: 2.5,
  },
  {
    id: "3",
    icon: Calendar,
    title: "Event Excellence Record",
    description: "Events with 700+ attendees.",
    category: "Events",
    color: "from-emerald-400 to-teal-500",
    orbitRadius: 190,
    orbitDuration: 28,
    orbitDelay: 1,
  },
  {
    id: "4",
    icon: Target,
    title: "Community Growth Achievement",
    description: "400% community growth rate.",
    category: "Growth",
    color: "from-violet-400 to-purple-500",
    orbitRadius: 190,
    orbitDuration: 26,
    orbitDelay: 3.5,
  },
  {
    id: "5",
    icon: Award,
    title: "Web3 Strategy Innovation",
    description: "Innovative strategies for DeFi protocols.",
    category: "Innovation",
    color: "from-red-400 to-rose-500",
    orbitRadius: 240,
    orbitDuration: 35,
    orbitDelay: 0.5,
  },
  {
    id: "6",
    icon: Zap,
    title: "Platform Integration Mastery",
    description: "Expert across all major platforms.",
    category: "Technical",
    color: "from-cyan-400 to-blue-500",
    orbitRadius: 240,
    orbitDuration: 32,
    orbitDelay: 4,
  },
  {
    id: "7",
    icon: Star,
    title: "Top Contributor Recognition",
    description: "Top contributor in blockchain communities.",
    category: "Recognition",
    color: "from-yellow-400 to-amber-500",
    orbitRadius: 240,
    orbitDuration: 38,
    orbitDelay: 2,
  },
  {
    id: "8",
    icon: Rocket,
    title: "Launch Success Record",
    description: "15+ initiatives with 90%+ engagement.",
    category: "Launches",
    color: "from-indigo-400 to-violet-500",
    orbitRadius: 190,
    orbitDuration: 30,
    orbitDelay: 5,
  },
]

const stats = [
  { label: "Team Members Led", value: "120+", icon: Users },
  { label: "Event Attendees", value: "700+", icon: Calendar },
  { label: "Community Growth", value: "400%", icon: Target },
  { label: "Years Experience", value: "5+", icon: Trophy },
]

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
          {/* Orbit rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {[140, 190, 240].map((radius) => (
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

          {/* Orbiting Achievement Balls */}
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              className="absolute top-1/2 left-1/2"
              style={{
                width: 0,
                height: 0,
              }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                rotate: 360,
              }}
              transition={{
                opacity: { duration: 0.5, delay: 0.8 + index * 0.1 },
                rotate: {
                  duration: achievement.orbitDuration,
                  repeat: Infinity,
                  ease: "linear",
                  delay: achievement.orbitDelay,
                },
              }}
            >
              <motion.button
                className={`absolute w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br ${achievement.color} shadow-lg cursor-pointer flex items-center justify-center`}
                style={{
                  left: achievement.orbitRadius,
                  top: -24,
                  marginTop: "-3px",
                }}
                whileHover={{
                  scale: 1.3,
                  boxShadow: "0 0 30px rgba(139, 92, 246, 0.5)",
                  zIndex: 50,
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate(`/achievement/${achievement.id}`)}
                animate={{
                  rotate: -360,
                }}
                transition={{
                  rotate: {
                    duration: achievement.orbitDuration,
                    repeat: Infinity,
                    ease: "linear",
                    delay: achievement.orbitDelay,
                  },
                }}
              >
                <achievement.icon className="w-5 h-5 md:w-6 md:h-6 text-white drop-shadow" />
              </motion.button>
            </motion.div>
          ))}
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
