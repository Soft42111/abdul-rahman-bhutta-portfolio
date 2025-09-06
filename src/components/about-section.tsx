"use client"

import { motion } from "framer-motion"
import { Users, Trophy, Zap, Globe } from "lucide-react"

const stats = [
  { icon: Users, label: "Team Members Led", value: "120+" },
  { icon: Trophy, label: "Event Attendees", value: "700+" },
  { icon: Zap, label: "Years Experience", value: "3+" },
  { icon: Globe, label: "Languages", value: "3" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About{" "}
            <span className="text-gradient bg-gradient-to-r from-accent to-yellow-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A passionate Community Lead with expertise in Web3 ecosystems, event management, 
            and team leadership. I specialize in building thriving communities, scaling engagement, 
            and creating memorable experiences that drive growth and foster meaningful connections.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                <stat.icon className="w-8 h-8 text-accent" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                Driving Community Excellence
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                From founding Nexus and leading a team of 120+ community professionals 
                to hosting AMAs with 700+ attendees, I bring a proven track record of 
                scaling engagement and building meaningful connections in the Web3 space.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My approach combines strategic thinking with hands-on execution, whether 
                it's implementing AI workflows, managing Discord communities, or creating 
                localized content that resonates with diverse audiences.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="p-6 rounded-xl bg-card border border-border shadow-card hover:shadow-premium/20 transition-all duration-300">
                <h4 className="font-semibold text-foreground mb-3">Core Expertise</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Discord Community Management
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Event Strategy & Execution
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Web3 & Gaming Communities
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    AI Workflow Implementation
                  </li>
                </ul>
              </div>
              
              <div className="p-6 rounded-xl bg-card border border-border shadow-card hover:shadow-premium/20 transition-all duration-300">
                <h4 className="font-semibold text-foreground mb-3">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {["English", "Hindi", "Urdu"].map(lang => (
                    <span
                      key={lang}
                      className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}