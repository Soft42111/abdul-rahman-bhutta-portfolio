"use client"

import { motion } from "framer-motion"
import { Calendar, Users, TrendingUp, Award } from "lucide-react"

const experiences = [
  {
    company: "Nexus",
    role: "Founder",
    period: "2023 - Present",
    description: "Founded and led a comprehensive community management company",
    achievements: [
      "Led team of 22 Community Managers and 98 Ambassadors",
      "Hosted AMA sessions with 700+ attendees",
      "Developed scalable community strategies across multiple Web3 projects",
      "Implemented AI-driven workflow systems for enhanced efficiency"
    ],
    icon: Users,
    color: "from-purple-500 to-pink-500"
  },
  {
    company: "Aethir",
    role: "Senior Community Moderator",
    period: "2023 - 2024",
    description: "Promoted for exceptional performance in IRL events and innovative programming",
    achievements: [
      "Promoted due to strong IRL event execution",
      "Created engaging programs including karaoke and story time sessions",
      "Managed high-volume Discord community interactions",
      "Coordinated cross-functional team initiatives"
    ],
    icon: TrendingUp,
    color: "from-blue-500 to-cyan-500"
  },
  {
    company: "Phoenix Growth",
    role: "Community Manager",
    period: "2022 - 2023",
    description: "Scaled community engagement and led ambassador programs",
    achievements: [
      "Organized AMA panel discussions with 400+ participants",
      "Executed 10-day gaming event attracting 350+ players",
      "Led and mentored team of 9 ambassadors",
      "Developed content strategies for multiple platforms"
    ],
    icon: Award,
    color: "from-orange-500 to-red-500"
  },
  {
    company: "Boinkers (Acid Labs)",
    role: "Community Manager",
    period: "2022",
    description: "Transformed community engagement and support systems",
    achievements: [
      "Managed 40+ community ambassadors",
      "Increased event engagement by 10x through strategic initiatives",
      "Implemented Zammad for scalable customer support",
      "Established community guidelines and moderation protocols"
    ],
    icon: Users,
    color: "from-green-500 to-emerald-500"
  },
  {
    company: "Bullet",
    role: "Community Manager",
    period: "2021 - 2022",
    description: "Pioneered workshop formats and localization strategies",
    achievements: [
      "Conducted interactive workshops and training sessions",
      "Scaled event participation from 1-2 to 25+ attendees",
      "Led localization efforts for multi-language support",
      "Developed sustainable engagement frameworks"
    ],
    icon: Calendar,
    color: "from-indigo-500 to-purple-500"
  }
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional{" "}
            <span className="text-gradient bg-gradient-to-r from-accent to-yellow-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A track record of scaling communities, leading teams, and delivering 
            exceptional results across the Web3 ecosystem.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-32 bg-gradient-to-b from-accent/50 to-transparent" />
              )}
              
              <div className="flex flex-col md:flex-row gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${exp.color} p-0.5`}>
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                      <exp.icon className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="bg-card border border-border rounded-xl p-6 shadow-card hover:shadow-premium/20 transition-all duration-300 hover:scale-[1.02]">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">
                          {exp.role}
                        </h3>
                        <p className="text-accent font-medium">{exp.company}</p>
                      </div>
                      <span className="text-sm text-muted-foreground font-medium bg-muted px-3 py-1 rounded-full mt-2 md:mt-0 self-start">
                        {exp.period}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">
                      {exp.description}
                    </p>
                    
                    <div className="grid gap-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <div
                          key={achievementIndex}
                          className="flex items-start gap-3 text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}