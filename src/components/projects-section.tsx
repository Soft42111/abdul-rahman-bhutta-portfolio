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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured{" "}
            <span className="text-gradient bg-gradient-to-r from-accent to-yellow-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of community initiatives, events, and platforms that have 
            driven measurable growth and engagement across Web3 ecosystems.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Project Image */}
              <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="relative group overflow-hidden rounded-2xl shadow-card hover:shadow-premium/20 transition-all duration-500">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-2">
                      {project.links.live && (
                        <Button variant="hero" size="sm" asChild>
                          <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-1" />
                            View Live
                          </a>
                        </Button>
                      )}
                      {project.links.github && (
                        <Button variant="outline" size="sm" asChild className="bg-white/10 backdrop-blur-sm">
                          <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-1" />
                            Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  {project.metrics.map((metric, metricIndex) => (
                    <div key={metric.label} className="text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 mb-2 rounded-full bg-accent/10">
                        <metric.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div className="text-xl font-bold text-foreground">
                        {metric.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  {project.links.live && (
                    <Button variant="premium" size="lg" asChild>
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live
                      </a>
                    </Button>
                  )}
                  {project.links.github && (
                    <Button variant="outline" size="lg" asChild>
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}