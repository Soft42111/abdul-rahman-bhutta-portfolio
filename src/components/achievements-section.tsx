"use client"

import { motion } from "framer-motion"
import { Trophy, Award, Users, Calendar, Target, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CounterAnimation } from "@/components/counter-animation"

const achievements = [
  {
    icon: Trophy,
    title: "Community Excellence Award 2024",
    description: "Recognized for outstanding leadership in Web3 community building and engagement",
    date: "2024",
    category: "Leadership",
    color: "from-yellow-400 to-orange-500"
  },
  {
    icon: Users,
    title: "Team Leadership Milestone",
    description: "Successfully led and coordinated a team of 120+ members across multiple projects",
    date: "2023-2024",
    category: "Management",
    color: "from-blue-400 to-purple-500"
  },
  {
    icon: Calendar,
    title: "Event Excellence Record",
    description: "Organized and hosted events with 700+ attendees, achieving 95% satisfaction rate",
    date: "2023",
    category: "Events",
    color: "from-green-400 to-teal-500"
  },
  {
    icon: Target,
    title: "Community Growth Achievement",
    description: "Achieved 400% community growth rate across Discord and social platforms",
    date: "2023",
    category: "Growth",
    color: "from-purple-400 to-pink-500"
  },
  {
    icon: Award,
    title: "Web3 Strategy Innovation",
    description: "Developed innovative engagement strategies adopted by leading DeFi protocols",
    date: "2024",
    category: "Innovation",
    color: "from-red-400 to-orange-500"
  },
  {
    icon: Zap,
    title: "Platform Integration Mastery",
    description: "Expert-level proficiency across Discord, Telegram, Twitter, and emerging Web3 platforms",
    date: "Ongoing",
    category: "Technical",
    color: "from-cyan-400 to-blue-500"
  }
]

const stats = [
  { label: "Team Members Led", value: "120+", icon: Users },
  { label: "Event Attendees", value: "700+", icon: Calendar },
  { label: "Community Growth", value: "400%", icon: Target },
  { label: "Years Experience", value: "5+", icon: Trophy },
]

export function AchievementsSection() {
  return (
    <section className="py-24 bg-background relative">
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
            A track record of exceptional leadership, innovation, and results in Web3 community building,
            event management, and team coordination.
          </p>
        </motion.div>

        {/* Key Stats with enhanced animations */}
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
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              className="group"
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
            >
              <Card className="bg-gradient-subtle border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-premium">
                <CardContent className="p-6 text-center">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
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
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-premium group-hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${achievement.color} flex items-center justify-center shadow-lg`}>
                      <achievement.icon className="w-8 h-8 text-white" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {achievement.category}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {achievement.description}
                  </p>
                  
                  <div className="text-sm text-accent font-medium">
                    {achievement.date}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}