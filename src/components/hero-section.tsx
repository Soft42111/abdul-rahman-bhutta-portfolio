"use client"

import { motion } from "framer-motion"
import { Download, Mail, Code, Users, Zap, Globe, Gamepad2, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TypewriterEffect } from "@/components/typewriter-effect"

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
                  className="absolute flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-r shadow-premium backdrop-blur-sm border border-white/20"
                  style={{
                    background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                    transform: `translate(-50%, -50%) translate(${item.radius}, 0)`,
                  }}
                  whileHover={{ 
                    scale: 1.4, 
                    rotate: 360,
                    boxShadow: "0 0 30px rgba(255, 255, 255, 0.6)",
                    zIndex: 20
                  }}
                  whileTap={{ scale: 0.9 }}
                  animate={{
                    rotate: -360,
                    boxShadow: [
                      "0 8px 30px rgba(0, 0, 0, 0.3)",
                      "0 8px 30px rgba(139, 92, 246, 0.4)",
                      "0 8px 30px rgba(0, 0, 0, 0.3)"
                    ]
                  }}
                  transition={{
                    rotate: {
                      duration: 15 + index * 3,
                      repeat: Infinity,
                      ease: "linear"
                    },
                    boxShadow: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    },
                    scale: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                >
                  <motion.div
                    initial={{ rotateY: 0 }}
                    animate={{ rotateY: 360 }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",  
                      delay: index * 0.2
                    }}
                  >
                    <item.icon className="w-5 h-5 md:w-6 md:h-6 text-white drop-shadow-lg" />
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Name and Title with enhanced animations */}
          <motion.h1
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, type: "spring", stiffness: 100 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight"
          >
            <motion.span
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8, type: "spring", stiffness: 120 }}
              className="inline-block"
            >
              Abdul Rehman{" "}
            </motion.span>
            <motion.span 
              className="text-gradient bg-gradient-to-r from-accent to-yellow-300 bg-clip-text text-transparent inline-block"
              initial={{ opacity: 0, x: 100, rotateY: 90 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1, delay: 1, type: "spring", stiffness: 120 }}
              whileHover={{ 
                scale: 1.05,
                textShadow: "0 0 20px rgba(139, 92, 246, 0.5)",
                transition: { duration: 0.3, type: "spring", stiffness: 400 }
              }}
            >
              Bhutta
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl md:text-2xl lg:text-3xl font-light mb-6 text-white/90"
          >
            <span className="inline-block">I'm Winston — </span>
            <span className="inline-block text-transparent bg-clip-text bg-gradient-neon font-semibold">
              <TypewriterEffect 
                phrases={[
                  "Developer",
                  "Designer", 
                  "Builder",
                  "Community Lead",
                  "Web3 Expert"
                ]}
              />
            </span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-base md:text-lg max-w-2xl mx-auto mb-12 text-white/70 font-light leading-relaxed"
          >
            Crafting digital experiences that push boundaries. Specializing in community building, 
            Web3 ecosystems, and creating meaningful connections in the decentralized world.
          </motion.p>

          {/* CTA Buttons with enhanced animations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, type: "spring", stiffness: 100 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.div
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="hero" 
                size="lg" 
                className="group relative overflow-hidden neon-border bg-gradient-to-r from-neon-purple to-neon-cyan hover:shadow-neon-strong"
                onClick={() => window.location.href = '#contact'}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-neon opacity-0 group-hover:opacity-20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <Mail className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                Get in Touch
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                size="lg" 
                className="group relative overflow-hidden glass-effect neon-border hover:bg-neon-cyan/10"
              >
                <motion.div
                  className="absolute inset-0 bg-neon-cyan/10"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <Download className="mr-2 h-5 w-5 transition-transform group-hover:scale-110 relative z-10" />
                <span className="relative z-10">Download Resume</span>
              </Button>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}