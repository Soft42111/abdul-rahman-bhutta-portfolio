"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Users, Calendar, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Nexus Community Platform",
    description: "Founded and built a comprehensive community management platform serving multiple Web3 projects with advanced analytics and automation.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop&crop=entropy&auto=format",
    tags: ["Community Building", "Web3", "Leadership", "Analytics"],
    metrics: [
      { icon: Users, label: "Team Members", value: "120+" },
      { icon: Calendar, label: "Events Hosted", value: "50+" },
      { icon: TrendingUp, label: "Growth Rate", value: "300%" }
    ],
    links: {
      live: "https://nexus-community.com",
      github: "https://github.com/nexus-community"
    }
  },
  {
    title: "Aethir Gaming Events",
    description: "Designed and executed large-scale gaming events and community programs, including karaoke nights and interactive story sessions.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=400&fit=crop&crop=entropy&auto=format",
    tags: ["Event Management", "Gaming", "Community Engagement", "Web3"],
    metrics: [
      { icon: Users, label: "Participants", value: "400+" },
      { icon: Calendar, label: "Events", value: "25+" },
      { icon: TrendingUp, label: "Engagement", value: "85%" }
    ],
    links: {
      live: "https://aethir.com/events"
    }
  },
  {
    title: "Phoenix Growth AMA Series",
    description: "Organized and moderated high-impact AMA panel discussions and 10-day gaming tournaments that significantly boosted community engagement.",
    image: "https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=800&h=400&fit=crop&crop=entropy&auto=format",
    tags: ["AMA Management", "Gaming Tournaments", "Panel Discussions", "Growth"],
    metrics: [
      { icon: Users, label: "AMA Attendees", value: "400+" },
      { icon: Calendar, label: "Tournament Days", value: "10" },
      { icon: TrendingUp, label: "Player Growth", value: "350+" }
    ],
    links: {
      live: "https://phoenix-growth.com"
    }
  }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-tight">
            Featured{" "}
            <span className="bg-accent text-accent-foreground px-3 py-1">
              Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-mono">
            A showcase of community initiatives, events, and platforms that have 
            driven measurable growth and engagement across Web3 ecosystems.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="border-4 border-foreground bg-card transition-all duration-300 hover:shadow-[8px_8px_0px_0px_hsl(var(--foreground))]">
                {/* Project Image */}
                <div className="relative overflow-hidden border-b-4 border-foreground">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    {project.links.live && (
                      <a 
                        href={project.links.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-accent text-accent-foreground border-2 border-accent-foreground px-4 py-2 font-bold uppercase text-sm hover:bg-accent-foreground hover:text-accent transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 inline mr-1" />
                        Live
                      </a>
                    )}
                    {project.links.github && (
                      <a 
                        href={project.links.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-background text-foreground border-2 border-foreground px-4 py-2 font-bold uppercase text-sm hover:bg-foreground hover:text-background transition-colors"
                      >
                        <Github className="w-4 h-4 inline mr-1" />
                        Code
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 uppercase tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 font-mono">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-1 border-2 border-foreground bg-muted text-foreground text-xs font-bold uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 pt-4 border-t-2 border-foreground">
                    {project.metrics.map((metric) => (
                      <div key={metric.label} className="text-center">
                        <metric.icon className="w-4 h-4 mx-auto mb-1 text-accent" />
                        <div className="text-lg font-bold text-foreground">
                          {metric.value}
                        </div>
                        <div className="text-[10px] text-muted-foreground font-mono uppercase">
                          {metric.label}
                        </div>
                      </div>
                    ))}
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
