"use client"

import { motion } from "framer-motion"
import { Calendar, Users, TrendingUp, Award, Zap, Shield, Crown } from "lucide-react"

const experiences = [
  {
    company: "Aethir",
    role: "Senior Community Moderator",
    period: "December 2025 - Present",
    description: "Promoted for exceptional performance in IRL events and innovative event hosting and engaging community in various ways!",
    achievements: [
      "Promoted due to strong IRL event execution",
      "Created engaging programs including karaoke and story time sessions",
      "Managed high-volume Discord community interactions",
      "Coordinated cross-functional team initiatives"
    ],
    logo: "/lovable-uploads/4e0c0df8-ec0c-4f79-8bf2-1d2eaa05a93a.png",
    website: "https://aethir.com", // Added website URL for Aethir
    icon: TrendingUp,
    color: "from-blue-500 to-cyan-500"
  },
  {
    company: "Boinkers (Acid Labs)",
    role: "Community Manager", 
    period: "January 2025 - March 2025",
    description: "Transformed community engagement and support systems at Acid Labs",
    achievements: [
      "Managed 40+ community ambassadors",
      "Increased event engagement by 10x through strategic initiatives", 
      "Implemented Zammad for scalable customer support",
      "Established community guidelines and moderation protocols"
    ],
    logo: "/lovable-uploads/4f10758a-777b-4380-9ff1-496936661dfb.png",
    website: "https://boinkers.io",
    icon: Users,
    color: "from-green-500 to-emerald-500"
  },
  {
    company: "Nexus",
    role: "Founder & Chief Executive Officer",
    period: "January 2025 - Present", 
    description: "Founded and led a comprehensive community management company",
    achievements: [
      "Led team of 22 Community Managers and 98 Ambassadors",
      "Hosted AMA sessions with 700+ attendees",
      "Developed scalable community strategies across multiple Web3 projects",
      "Implemented AI-driven workflow systems for enhanced efficiency"
    ],
    logo: "/lovable-uploads/d73a7973-0e76-4ad0-bb23-0371fd1f55ac.png",
    website: "https://mktingnexus.com",
    icon: Users,
    color: "from-purple-500 to-pink-500"
  },
  {
    company: "Phoenix Growth",
    role: "Community Manager",
    period: "September 2021 - Present",
    description: "Scaled community engagement and led ambassador programs",
    achievements: [
      "Organized AMA panel discussions with 400+ participants",
      "Executed 10-day gaming event attracting 350+ players",
      "Led and mentored team of 9 ambassadors", 
      "Developed content strategies for multiple platforms"
    ],
    logo: null,
    website: "https://phoenixgrowth.io", // Added website URL for Phoenix Growth
    icon: Award,
    color: "from-orange-500 to-red-500"
  },
  {
    company: "Bullet",
    role: "Community Manager",
    period: "December 2024 - Present",
    description: "Pioneered workshop formats and localization strategies",
    achievements: [
      "Conducted interactive workshops and training sessions",
      "Scaled event participation from 1-2 to 25+ attendees",
      "Led localization efforts for multi-language support",
      "Developed sustainable engagement frameworks"
    ],
    logo: "/lovable-uploads/d159263e-ea1b-4911-b4d0-2f1e4c6847ed.png",
    website: "https://bullet.xyz",
    icon: Calendar,
    color: "from-indigo-500 to-purple-500"
  },
  {
    company: "Overtrip",
    role: "Bug Hunter & Beta Tester", 
    period: "July 2024 - August 2024",
    description: "Specialized in quality assurance and community feedback for gaming platform",
    achievements: [
      "Identified and reported critical bugs during beta phase",
      "Provided comprehensive feedback on user experience",
      "Collaborated with development team for feature improvements",
      "Contributed to platform stability and launch readiness"
    ],
    logo: "/lovable-uploads/c72cbcd0-3d2e-4a8e-a0ea-2b42bb86b432.png",
    website: "https://playovertrip.com",
    icon: Shield,
    color: "from-red-500 to-pink-500"
  },
  {
    company: "Sophon",
    role: "Community Manager",
    period: "January 2023 - December 2024",
    description: "Led community initiatives and engagement strategies for Web3 platform",
    achievements: [
      "Developed community engagement frameworks",
      "Coordinated cross-platform marketing initiatives", 
      "Managed ambassador programs and user onboarding",
      "Facilitated communication between users and development team"
    ],
    logo: "/lovable-uploads/975906f0-0df2-47b2-935e-39578a484dfe.png",
    website: "https://sophon.xyz",
    icon: Crown,
    color: "from-cyan-500 to-blue-500"
  },
  {
    company: "Nyan Heroes",
    role: "Independent Bug Hunter",
    period: "September 4 - September 25, 2025", 
    description: "Specialized quality assurance and testing for blockchain gaming project",
    achievements: [
      "Conducted thorough testing of game mechanics and features",
      "Reported and documented critical gameplay bugs",
      "Provided detailed feedback on user interface and experience",
      "Contributed to game balance and stability improvements"
    ],
    logo: "/lovable-uploads/ba906a73-dba9-4a93-9c26-7aba9ea2f320.png",
    website: "https://x.com/nyanheroes",
    icon: Zap,
    color: "from-yellow-500 to-orange-500"
  },
  {
    company: "Web3 Clan HISS",
    role: "Founder & Team Leader",
    period: "August 2020 - Present",
    description: "Web3 gaming team leadership - Founded and led competitive Web3 gaming clan",
    achievements: [
      "Established HISS Clan with growing roster of skilled players",
      "Focused on achieving top rankings in competitive Web3 games", 
      "Led teams in Star Atlas, Nyan Heroes, and Overtrip competitions",
      "Developed strategic gameplay approaches and team coordination"
    ],
    logo: null,
    website: "https://web3clanhiss.com", // Added website URL for Web3 Clan HISS
    icon: Users,
    color: "from-emerald-500 to-teal-500"
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
                {/* Logo and Icon */}
                <div className="flex-shrink-0 flex items-center gap-4">
                  {exp.logo && (
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-card border border-border shadow-sm hover:shadow-md transition-all duration-300">
                      {exp.website ? (
                        <a 
                          href={exp.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block w-full h-full hover:scale-105 transition-transform duration-300"
                        >
                          <img 
                            src={exp.logo} 
                            alt={`${exp.company} logo`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </a>
                      ) : (
                        <img 
                          src={exp.logo} 
                          alt={`${exp.company} logo`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      )}
                    </div>
                  )}
                  
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
                        <p className="text-accent font-medium">
                          {exp.website ? (
                            <a 
                              href={exp.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              {exp.company}
                            </a>
                          ) : (
                            exp.company
                          )}
                        </p>
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
