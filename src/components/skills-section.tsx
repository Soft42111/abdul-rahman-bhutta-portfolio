"use client"

import { motion } from "framer-motion"
import { 
  MessageSquare, 
  Calendar, 
  Users, 
  Bot, 
  Video, 
  Globe, 
  Gamepad2, 
  Brain,
  Settings,
  TrendingUp,
  Shield,
  Zap
} from "lucide-react"

const skillCategories = [
  {
    title: "Community Management",
    icon: Users,
    color: "from-blue-500 to-cyan-500",
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
    color: "from-purple-500 to-pink-500",
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
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Workflow Automation", level: 85, icon: Settings },
      { name: "Analytics & Growth", level: 88, icon: TrendingUp },
      { name: "Moderation Systems", level: 90, icon: Shield },
      { name: "Event Tech Setup", level: 82, icon: Zap }
    ]
  }
]

const languages = [
  { name: "English", level: 100, flag: "🇺🇸" },
  { name: "Hindi", level: 95, flag: "🇮🇳" },
  { name: "Urdu", level: 100, flag: "🇵🇰" }
]

export function SkillsSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills &{" "}
            <span className="text-gradient bg-gradient-to-r from-accent to-yellow-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience 
            in community building, event management, and Web3 ecosystem development.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 shadow-card hover:shadow-premium/20 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} p-0.5`}>
                  <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <skill.icon className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.3 }}
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card border border-border rounded-2xl p-8 shadow-card">
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
              Languages
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {languages.map((language, index) => (
                <motion.div
                  key={language.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="text-4xl mb-4">{language.flag}</div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {language.name}
                  </h4>
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground">
                      Proficiency: {language.level}%
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${language.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                        className="h-2 rounded-full bg-gradient-to-r from-accent to-yellow-400"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}