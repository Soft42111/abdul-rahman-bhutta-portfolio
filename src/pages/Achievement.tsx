import { useParams, Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowLeft, Trophy, Award, Users, Calendar, Target, Zap, Star, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const achievements = [
  {
    id: "1",
    icon: Trophy,
    title: "Community Excellence Award 2024",
    description: "Recognized for outstanding leadership in Web3 community building and engagement.",
    fullDescription: "This prestigious award was granted in recognition of exceptional community leadership, innovative engagement strategies, and consistent delivery of value to Web3 communities. The award highlights achievements in growing communities from scratch, implementing successful retention strategies, and fostering meaningful connections between community members and projects.",
    date: "2024",
    category: "Leadership",
    color: "from-amber-400 to-orange-500",
    image: "/lovable-uploads/4e0c0df8-ec0c-4f79-8bf2-1d2eaa05a93a.png",
    highlights: [
      "Led community growth initiatives resulting in 400% member increase",
      "Developed and implemented innovative engagement frameworks",
      "Mentored 50+ community managers across multiple projects",
      "Established best practices adopted by industry leaders"
    ]
  },
  {
    id: "2",
    icon: Users,
    title: "Team Leadership Milestone",
    description: "Successfully led and coordinated a team of 120+ members across multiple projects.",
    fullDescription: "A significant milestone in leadership demonstrating the ability to manage, coordinate, and inspire large teams across diverse projects and time zones. This achievement reflects expertise in delegation, conflict resolution, performance management, and team building.",
    date: "2023-2024",
    category: "Management",
    color: "from-rose-400 to-pink-500",
    image: "/lovable-uploads/4f10758a-777b-4380-9ff1-496936661dfb.png",
    highlights: [
      "Coordinated 120+ team members across 5 different time zones",
      "Implemented efficient workflow systems reducing overhead by 40%",
      "Achieved 95% team satisfaction rate",
      "Developed leadership training programs for team leads"
    ]
  },
  {
    id: "3",
    icon: Calendar,
    title: "Event Excellence Record",
    description: "Organized and hosted events with 700+ attendees, achieving 95% satisfaction rate.",
    fullDescription: "Demonstrated exceptional event management skills by organizing and executing large-scale virtual and hybrid events. Each event was meticulously planned with attention to attendee experience, technical execution, and post-event engagement.",
    date: "2023",
    category: "Events",
    color: "from-emerald-400 to-teal-500",
    image: "/lovable-uploads/975906f0-0df2-47b2-935e-39578a484dfe.png",
    highlights: [
      "Organized 25+ successful community events",
      "Managed events with 700+ concurrent attendees",
      "Achieved 95% attendee satisfaction rating",
      "Pioneered interactive event formats in Web3 space"
    ]
  },
  {
    id: "4",
    icon: Target,
    title: "Community Growth Achievement",
    description: "Achieved 400% community growth rate across Discord and social platforms.",
    fullDescription: "Spearheaded community growth initiatives that resulted in unprecedented expansion across multiple platforms. This achievement reflects deep understanding of community dynamics, content strategy, and platform-specific engagement tactics.",
    date: "2023",
    category: "Growth",
    color: "from-violet-400 to-purple-500",
    image: "/lovable-uploads/ba906a73-dba9-4a93-9c26-7aba9ea2f320.png",
    highlights: [
      "Grew Discord community from 2K to 10K+ active members",
      "Increased Twitter engagement by 350%",
      "Developed viral content campaigns",
      "Created sustainable growth frameworks"
    ]
  },
  {
    id: "5",
    icon: Award,
    title: "Web3 Strategy Innovation",
    description: "Developed innovative engagement strategies adopted by leading DeFi protocols.",
    fullDescription: "Created and refined community engagement strategies specifically designed for Web3 ecosystems. These strategies have been adopted by multiple leading projects and have become industry benchmarks.",
    date: "2024",
    category: "Innovation",
    color: "from-red-400 to-rose-500",
    image: "/lovable-uploads/d159263e-ea1b-4911-b4d0-2f1e4c6847ed.png",
    highlights: [
      "Developed 10+ innovative engagement frameworks",
      "Strategies adopted by 5 leading DeFi protocols",
      "Published thought leadership content",
      "Consulted for major Web3 projects"
    ]
  },
  {
    id: "6",
    icon: Zap,
    title: "Platform Integration Mastery",
    description: "Expert-level proficiency across Discord, Telegram, Twitter, and Web3 platforms.",
    fullDescription: "Achieved mastery across all major community platforms, understanding the unique dynamics and best practices for each. This expertise enables seamless multi-platform community management and cross-platform engagement strategies.",
    date: "Ongoing",
    category: "Technical",
    color: "from-cyan-400 to-blue-500",
    image: "/lovable-uploads/d73a7973-0e76-4ad0-bb23-0371fd1f55ac.png",
    highlights: [
      "Expert in Discord bot configuration and automation",
      "Telegram community management specialist",
      "Twitter/X growth hacking expertise",
      "Web3 platform integration experience"
    ]
  },
  {
    id: "7",
    icon: Star,
    title: "Top Contributor Recognition",
    description: "Recognized as top contributor in multiple blockchain communities.",
    fullDescription: "Received recognition as a top contributor across multiple blockchain ecosystems, demonstrating consistent value addition, thought leadership, and community support.",
    date: "2024",
    category: "Recognition",
    color: "from-yellow-400 to-amber-500",
    image: "/lovable-uploads/4e0c0df8-ec0c-4f79-8bf2-1d2eaa05a93a.png",
    highlights: [
      "Top 1% contributor in 3 major blockchain communities",
      "Regular speaker at community events",
      "Authored educational content for newcomers",
      "Built lasting relationships with industry leaders"
    ]
  },
  {
    id: "8",
    icon: Rocket,
    title: "Launch Success Record",
    description: "Successfully launched 15+ community initiatives with 90%+ engagement rates.",
    fullDescription: "Led the successful launch of numerous community initiatives, each achieving exceptional engagement and retention rates. These launches demonstrate expertise in campaign planning, execution, and community activation.",
    date: "2023-2024",
    category: "Launches",
    color: "from-indigo-400 to-violet-500",
    image: "/lovable-uploads/4f10758a-777b-4380-9ff1-496936661dfb.png",
    highlights: [
      "Launched 15+ successful community initiatives",
      "Average 90%+ engagement rate on launches",
      "Zero failed launches in track record",
      "Developed replicable launch frameworks"
    ]
  }
]

export default function Achievement() {
  const { id } = useParams<{ id: string }>()
  const achievement = achievements.find(a => a.id === id)

  if (!achievement) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Achievement not found</h1>
          <Link to="/">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background bg-mesh pt-24 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/#achievements">
              <Button variant="ghost" className="mb-8">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Achievements
              </Button>
            </Link>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-card border border-border rounded-2xl p-8 shadow-premium"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row gap-6 mb-8">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${achievement.color} flex items-center justify-center flex-shrink-0`}>
                  <achievement.icon className="w-10 h-10 text-white" />
                </div>
                <div>
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3">
                    {achievement.category}
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    {achievement.title}
                  </h1>
                  <p className="text-primary font-medium">{achievement.date}</p>
                </div>
              </div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-8"
              >
                <h2 className="text-xl font-semibold text-foreground mb-4">Overview</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {achievement.fullDescription}
                </p>
              </motion.div>

              {/* Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-xl font-semibold text-foreground mb-4">Key Highlights</h2>
                <ul className="space-y-3">
                  {achievement.highlights.map((highlight, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${achievement.color} mt-2 flex-shrink-0`} />
                      <span className="text-muted-foreground">{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
