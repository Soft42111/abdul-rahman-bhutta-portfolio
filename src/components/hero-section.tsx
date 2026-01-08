"use client"

import { motion } from "framer-motion"
import { Download, Mail, Code, Users, Zap, Globe, Gamepad2, Smartphone } from "lucide-react"

const orbitingItems = [
  { icon: Code, label: "React", delay: 0, radius: "120px", color: "from-blue-400 to-blue-600" },
  { icon: Users, label: "Community", delay: 0.5, radius: "140px", color: "from-green-400 to-green-600" },
  { icon: Zap, label: "Aethir", delay: 1, radius: "160px", color: "from-purple-400 to-purple-600" },
  { icon: Globe, label: "Web3", delay: 1.5, radius: "130px", color: "from-yellow-400 to-orange-500" },
  { icon: Gamepad2, label: "Gaming", delay: 2, radius: "150px", color: "from-red-400 to-pink-600" },
  { icon: Smartphone, label: "Mobile", delay: 2.5, radius: "135px", color: "from-indigo-400 to-cyan-500" },
]

const resumeUrl = "/assets/Abdul_Rehman_Bhutta_Resume_FULL (2).pdf"

export function HeroSection() {
  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = resumeUrl
    link.download = "Abdul_Rehman_Bhutta_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleContactClick = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 gradient-hero" />
      
      {/* Brutalist background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border-4 border-foreground" />
        <div className="absolute bottom-32 right-32 w-24 h-24 bg-foreground" />
        <div className="absolute top-1/3 right-1/4 w-16 h-16 border-4 border-foreground rotate-45" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center text-foreground">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-6xl mx-auto"
        >
          {/* Profile Image with Orbiting Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mb-8 flex justify-center"
          >
            {/* Central Profile Image */}
            <div className="relative w-48 h-48 md:w-56 md:h-56 border-4 border-foreground overflow-hidden shadow-[8px_8px_0px_0px_hsl(var(--foreground))] z-10">
              <img
                src="/lovable-uploads/93a92d81-fa62-47f9-8b94-91e23a9a97ac.png"
                alt="Abdul Rehman Bhutta - Community Lead"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Orbiting Skills/Projects with enhanced animations */}
            {orbitingItems.map((item, index) => (
              <motion.div
                key={item.label}
                className="absolute top-1/2 left-1/2"
                style={{
                  transformOrigin: `0 0`,
                }}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  rotate: 360
                }}
                transition={{
                  opacity: { duration: 0.8, delay: 1 + item.delay },
                  scale: { duration: 0.8, delay: 1 + item.delay, type: "spring", stiffness: 200 },
                  rotate: {
                    duration: 15 + index * 3,
                    repeat: Infinity,
                    ease: "linear",
                    delay: item.delay
                  }
                }}
              >
                <motion.div
                  className="absolute flex items-center justify-center w-12 h-12 md:w-16 md:h-16 border-4 border-foreground bg-background shadow-[4px_4px_0px_0px_hsl(var(--foreground))]"
                  style={{
                    transform: `translate(-50%, -50%) translate(${item.radius}, 0)`,
                  }}
                  whileHover={{ 
                    scale: 1.4, 
                    rotate: 360,
                    zIndex: 20
                  }}
                  whileTap={{ scale: 0.9 }}
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    rotate: {
                      duration: 15 + index * 3,
                      repeat: Infinity,
                      ease: "linear"
                    },
                    scale: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                >
                  <item.icon className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Name and Title with enhanced animations */}
          <motion.h1
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, type: "spring", stiffness: 100 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight uppercase"
          >
            <motion.span
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8, type: "spring", stiffness: 120 }}
              className="inline-block mr-4"
            >
              Abdul Rehman
            </motion.span>
            <motion.span 
              className="bg-foreground text-background px-4 py-1 inline-block"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1, type: "spring", stiffness: 120 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3, type: "spring", stiffness: 400 }
              }}
            >
              Bhutta
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.6, type: "spring", stiffness: 100 }}
            className="text-xl md:text-2xl lg:text-3xl font-mono mb-6 text-muted-foreground tracking-wide"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="inline-block mr-2"
            >
              Community Lead
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="inline-block mr-2"
            >
              &
            </motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.4, type: "spring" }}
              className="inline-block bg-accent text-accent-foreground px-2 font-bold"
            >
              Web3 Strategy Expert
            </motion.span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl max-w-3xl mx-auto mb-12 text-muted-foreground font-mono leading-relaxed"
          >
            Building thriving communities and scaling engagement across Web3 ecosystems. 
            From leading 120+ team members to hosting events with 700+ attendees.
          </motion.p>

          {/* CTA Buttons with brutalist styling */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, type: "spring", stiffness: 100 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.button
              onClick={handleDownloadResume}
              whileHover={{ 
                y: -4,
                boxShadow: "8px 8px 0px 0px hsl(var(--foreground))",
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              whileTap={{ scale: 0.95, y: 0, boxShadow: "0px 0px 0px 0px hsl(var(--foreground))" }}
              className="bg-foreground text-background border-4 border-foreground px-8 py-4 font-bold uppercase tracking-wide flex items-center gap-2 shadow-[4px_4px_0px_0px_hsl(var(--foreground))] hover:bg-accent hover:text-accent-foreground hover:border-foreground transition-colors"
            >
              <Download className="h-5 w-5" />
              Download Resume
            </motion.button>
            
            <motion.button
              onClick={handleContactClick}
              whileHover={{ 
                y: -4,
                boxShadow: "8px 8px 0px 0px hsl(var(--foreground))",
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              whileTap={{ scale: 0.95, y: 0, boxShadow: "0px 0px 0px 0px hsl(var(--foreground))" }}
              className="bg-background text-foreground border-4 border-foreground px-8 py-4 font-bold uppercase tracking-wide flex items-center gap-2 shadow-[4px_4px_0px_0px_hsl(var(--foreground))] hover:bg-foreground hover:text-background transition-colors"
            >
              <Mail className="h-5 w-5" />
              Contact Me
            </motion.button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
