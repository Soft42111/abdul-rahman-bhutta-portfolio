import { useParams, Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowLeft, Users, Calendar, Trophy, Rocket, Mic, Gamepad2, Building2, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

// Achievement data matching the IDs from achievements-section.tsx
const achievements: Record<string, {
  icon: typeof Trophy;
  title: string;
  description: string;
  fullDescription: string;
  date: string;
  category: string;
  logo: string;
  highlights: string[];
  metrics: { label: string; value: string }[];
}> = {
  "aethir-ama": {
    icon: Mic,
    title: "700+ Attendee AMA",
    description: "Hosted high-impact AMA with CEO of Saltwater Games and XR One",
    fullDescription: "Successfully organized and hosted a landmark AMA session featuring the CEO of Saltwater Games and XR One, drawing over 700 live attendees. This event showcased exceptional ability to coordinate high-profile speakers, manage large virtual audiences, and create engaging content that resonated with the Web3 gaming community.",
    date: "2024",
    category: "Aethir",
    logo: "/lovable-uploads/4e0c0df8-ec0c-4f79-8bf2-1d2eaa05a93a.png",
    highlights: [
      "Coordinated with C-level executives for speaker slots",
      "Managed live Q&A with 700+ concurrent participants",
      "Achieved 95% positive feedback from attendees",
      "Generated significant social media engagement post-event"
    ],
    metrics: [
      { label: "Live Attendees", value: "700+" },
      { label: "Questions Answered", value: "50+" },
      { label: "Duration", value: "90 min" }
    ]
  },
  "team-leadership": {
    icon: Users,
    title: "100+ Team Leadership",
    description: "Led teams of over 100 community managers and ambassadors across multiple projects",
    fullDescription: "Demonstrated exceptional leadership by managing and coordinating teams of over 100 community managers and ambassadors across multiple Web3 projects simultaneously. This involved developing training programs, establishing communication protocols, and ensuring consistent community engagement standards across all teams.",
    date: "2023-2024",
    category: "Leadership",
    logo: "/lovable-uploads/93a92d81-fa62-47f9-8b94-91e23a9a97ac.png",
    highlights: [
      "Recruited and onboarded 100+ team members",
      "Developed comprehensive training documentation",
      "Implemented performance tracking systems",
      "Achieved 90%+ team retention rate"
    ],
    metrics: [
      { label: "Team Members", value: "120+" },
      { label: "Projects", value: "5+" },
      { label: "Retention Rate", value: "90%" }
    ]
  },
  "community-scaling": {
    icon: Rocket,
    title: "0 to 1K in Hours",
    description: "Scaled new communities from zero to 1,000 members within hours using organic strategies",
    fullDescription: "Pioneered rapid community growth strategies that consistently scaled new Discord and Telegram communities from zero to 1,000+ members within hours. This achievement demonstrates deep understanding of community dynamics, viral content creation, and strategic partnership leveraging for organic growth.",
    date: "2024",
    category: "Nexus Marketing",
    logo: "/lovable-uploads/d73a7973-0e76-4ad0-bb23-0371fd1f55ac.png",
    highlights: [
      "Developed replicable rapid-growth frameworks",
      "Zero paid advertising spend",
      "Maintained high engagement despite rapid growth",
      "Created viral onboarding experiences"
    ],
    metrics: [
      { label: "Growth Time", value: "<24h" },
      { label: "Members Gained", value: "1K+" },
      { label: "Ad Spend", value: "$0" }
    ]
  },
  "pakistan-event": {
    icon: Calendar,
    title: "First IRL Event Pakistan",
    description: "Organized first IRL Aethir community event in Pakistan with 41+ attendees",
    fullDescription: "Made history by organizing and executing the first-ever Aethir in-real-life community meetup in Pakistan, bringing together 41+ passionate community members. This groundbreaking event established Aethir's physical presence in the South Asian region and created lasting connections among community members.",
    date: "2024",
    category: "Aethir",
    logo: "/lovable-uploads/4e0c0df8-ec0c-4f79-8bf2-1d2eaa05a93a.png",
    highlights: [
      "First-ever Aethir IRL event in Pakistan",
      "Managed all logistics and venue coordination",
      "Created networking opportunities for attendees",
      "Received recognition from Aethir leadership"
    ],
    metrics: [
      { label: "Attendees", value: "41+" },
      { label: "Duration", value: "4 hours" },
      { label: "Satisfaction", value: "98%" }
    ]
  },
  "a-games-tournament": {
    icon: Gamepad2,
    title: "A-GAMES Tournament",
    description: "Independently organized and executed a 10-day tournament with 350 participants",
    fullDescription: "Single-handedly conceptualized, organized, and executed the A-GAMES Tournament, a 10-day competitive gaming event that attracted 350 participants. This initiative demonstrated exceptional project management skills, community engagement capabilities, and ability to create memorable experiences for gamers in the Web3 space.",
    date: "2024",
    category: "Aethir",
    logo: "/lovable-uploads/4e0c0df8-ec0c-4f79-8bf2-1d2eaa05a93a.png",
    highlights: [
      "Managed entire tournament independently",
      "Coordinated 350 participants over 10 days",
      "Designed bracket and scoring systems",
      "Distributed prizes and recognition"
    ],
    metrics: [
      { label: "Participants", value: "350" },
      { label: "Duration", value: "10 days" },
      { label: "Matches Played", value: "500+" }
    ]
  },
  "starterras-cmo": {
    icon: Building2,
    title: "CMO & Partner",
    description: "Led end-to-end marketing for Real World Asset initiative at Starterras",
    fullDescription: "Served as Chief Marketing Officer and Partner at Starterras, leading all marketing initiatives for their Real World Asset (RWA) platform. This role involved developing go-to-market strategies, building brand awareness, and establishing partnerships within the emerging RWA sector of blockchain technology.",
    date: "2023-2024",
    category: "Starterras",
    logo: "/lovable-uploads/975906f0-0df2-47b2-935e-39578a484dfe.png",
    highlights: [
      "Developed comprehensive marketing strategy",
      "Built brand identity from ground up",
      "Established key industry partnerships",
      "Led product launch campaigns"
    ],
    metrics: [
      { label: "Role", value: "CMO" },
      { label: "Campaigns", value: "15+" },
      { label: "Partnerships", value: "10+" }
    ]
  },
  "discord-10x": {
    icon: TrendingUp,
    title: "10x Discord Engagement",
    description: "Increased Discord event participation and engagement by 10x at Boinkers",
    fullDescription: "Achieved remarkable 10x increase in Discord event participation and overall community engagement for Boinkers through innovative event formats, gamification strategies, and community incentive programs. This transformation turned a passive community into an active, engaged ecosystem.",
    date: "2024",
    category: "Boinkers",
    logo: "/lovable-uploads/c72cbcd0-3d2e-4a8e-a0ea-2b42bb86b432.png",
    highlights: [
      "Implemented gamification strategies",
      "Created recurring event series",
      "Developed engagement reward systems",
      "Boosted daily active users significantly"
    ],
    metrics: [
      { label: "Engagement Increase", value: "10x" },
      { label: "Event Frequency", value: "Daily" },
      { label: "Active Users", value: "5x" }
    ]
  },
  "depin-ama": {
    icon: Trophy,
    title: "DePIN Panel 400+ Live",
    description: "Hosted Web3 DePIN panel AMA with 400+ live attendees",
    fullDescription: "Hosted an influential DePIN (Decentralized Physical Infrastructure Networks) panel discussion that attracted 400+ live attendees from the Web3 space. This event brought together industry experts to discuss the future of decentralized infrastructure and its real-world applications.",
    date: "2024",
    category: "Web3",
    logo: "/lovable-uploads/ba906a73-dba9-4a93-9c26-7aba9ea2f320.png",
    highlights: [
      "Curated expert panel of DePIN leaders",
      "Moderated complex technical discussions",
      "Engaged 400+ live participants",
      "Generated industry thought leadership content"
    ],
    metrics: [
      { label: "Live Attendees", value: "400+" },
      { label: "Panelists", value: "5" },
      { label: "Duration", value: "75 min" }
    ]
  }
}

export default function Achievement() {
  const { id } = useParams<{ id: string }>()
  const achievement = id ? achievements[id] : null

  if (!achievement) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center border-4 border-foreground p-12">
          <h1 className="text-3xl font-black text-foreground mb-6 uppercase tracking-tight">Achievement not found</h1>
          <Link to="/#achievements">
            <Button className="border-4 border-foreground font-bold uppercase tracking-wide">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Achievements
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link to="/#achievements">
              <Button variant="outline" className="mb-8 border-4 border-foreground font-bold uppercase tracking-wide hover:bg-foreground hover:text-background transition-colors">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Achievements
              </Button>
            </Link>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="border-4 border-foreground bg-card p-8 md:p-12"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row gap-6 mb-10">
                <div className="w-24 h-24 border-4 border-foreground overflow-hidden flex-shrink-0">
                  <img
                    src={achievement.logo}
                    alt={achievement.category}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="inline-block px-4 py-2 bg-foreground text-background text-sm font-black uppercase tracking-wider mb-4">
                    {achievement.category}
                  </div>
                  <h1 className="text-3xl md:text-5xl font-black text-foreground mb-3 uppercase tracking-tight leading-none">
                    {achievement.title}
                  </h1>
                  <p className="text-lg font-mono text-muted-foreground">{achievement.date}</p>
                </div>
              </div>

              {/* Metrics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="grid grid-cols-3 gap-4 mb-10"
              >
                {achievement.metrics.map((metric, index) => (
                  <div
                    key={index}
                    className="border-4 border-foreground p-4 text-center"
                  >
                    <div className="text-2xl md:text-3xl font-black text-foreground">{metric.value}</div>
                    <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">{metric.label}</div>
                  </div>
                ))}
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="mb-10"
              >
                <h2 className="text-xl font-black text-foreground mb-4 uppercase tracking-tight border-b-4 border-foreground pb-2 inline-block">Overview</h2>
                <p className="text-muted-foreground leading-relaxed text-lg font-mono">
                  {achievement.fullDescription}
                </p>
              </motion.div>

              {/* Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <h2 className="text-xl font-black text-foreground mb-4 uppercase tracking-tight border-b-4 border-foreground pb-2 inline-block">Key Highlights</h2>
                <ul className="space-y-4">
                  {achievement.highlights.map((highlight, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-3 h-3 bg-foreground mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground font-mono">{highlight}</span>
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
