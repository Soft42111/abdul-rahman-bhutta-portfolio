"use client"

import { motion } from "framer-motion"
import { Download, Mail, Code, Users, Zap, Globe, Gamepad2, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"

const orbitingItems = [
  { icon: Code, label: "React", delay: 0, radius: "120px", color: "from-blue-400 to-blue-600" },
  { icon: Users, label: "Community", delay: 0.5, radius: "140px", color: "from-green-400 to-green-600" },
  { icon: Zap, label: "Aethir", delay: 1, radius: "160px", color: "from-purple-400 to-purple-600" },
  { icon: Globe, label: "Web3", delay: 1.5, radius: "130px", color: "from-yellow-400 to-orange-500" },
  { icon: Gamepad2, label: "Gaming", delay: 2, radius: "150px", color: "from-red-400 to-pink-600" },
  { icon: Smartphone, label: "Mobile", delay: 2.5, radius: "135px", color: "from-indigo-400 to-cyan-500" },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 gradient-hero" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center text-white">
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
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-premium ring-4 ring-white/20 z-10">
              <img
                src="/lovable-uploads/93a92d81-fa62-47f9-8b94-91e23a9a97ac.png"
                alt="Abdul Rehman Bhutta - Community Lead"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Orbiting Skills/Projects */}
            {orbitingItems.map((item, index) => (
              <motion.div
                key={item.label}
                className="absolute top-1/2 left-1/2"
                style={{
                  transformOrigin: `0 0`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  rotate: 360
                }}
                transition={{
                  opacity: { duration: 0.5, delay: 1 + item.delay },
                  scale: { duration: 0.5, delay: 1 + item.delay },
                  rotate: {
                    duration: 20 + index * 2,
                    repeat: Infinity,
                    ease: "linear",
                    delay: item.delay
                  }
                }}
              >
                <motion.div
                  className="absolute flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-r shadow-premium backdrop-blur-sm border border-white/20"
                  style={{
                    background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                    transform: `translate(-50%, -50%) translate(${item.radius}, 0)`,
                  }}
                  whileHover={{ scale: 1.2 }}
                  animate={{
                    rotate: -360
                  }}
                  transition={{
                    rotate: {
                      duration: 20 + index * 2,
                      repeat: Infinity,
                      ease: "linear"
                    }
                  }}
                >
                  <item.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Name and Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight"
          >
            Abdul Rehman{" "}
            <span className="text-gradient bg-gradient-to-r from-accent to-yellow-300 bg-clip-text text-transparent">
              Bhutta
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl lg:text-3xl font-light mb-6 text-white/90"
          >
            Community Lead & Web3 Strategy Expert
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl max-w-3xl mx-auto mb-12 text-white/80 font-light leading-relaxed"
          >
            Building thriving communities and scaling engagement across Web3 ecosystems. 
            From leading 120+ team members to hosting events with 700+ attendees.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button variant="hero" size="lg" className="group">
              <Download className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Download Resume
            </Button>
            <Button variant="outline-accent" size="lg" className="group">
              <Mail className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Contact Me
            </Button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}