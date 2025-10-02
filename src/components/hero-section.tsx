"use client"

import { motion } from "framer-motion"
import { Download, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TypewriterEffect } from "@/components/typewriter-effect"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-cyan/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-6xl mx-auto"
        >
          {/* Profile Image with cyan neon glow - Ali Awab style */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mb-12 flex justify-center"
          >
            {/* Central Profile Image with cyan neon glow */}
            <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden z-10 neon-border">
              <img
                src="/lovable-uploads/93a92d81-fa62-47f9-8b94-91e23a9a97ac.png"
                alt="Abdul Rehman Bhutta - Community Lead"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Name with NEON GLOW like Ali Awab */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-wider neon-text"
            style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800 }}
          >
            Abdul Rehman Bhutta
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-2xl md:text-3xl lg:text-4xl font-light mb-6 text-white/90"
          >
            <span className="inline-block text-white/70">I'm a </span>
            <span className="inline-block neon-text font-semibold">
              <TypewriterEffect 
                phrases={[
                  "Web3 Strategist!",
                  "Community Builder!",
                  "Developer!",
                  "Designer!", 
                  "Blockchain Expert!"
                ]}
              />
            </span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-base md:text-lg max-w-2xl mx-auto mb-12 text-white/60 font-light leading-relaxed"
          >
            Motivated and enthusiastic community manager with a strong background in the Web3 and crypto space. 
            Committed to creating engaging community experiences, fostering growth, and ensuring member satisfaction. 🙌
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
                size="lg" 
                className="group relative overflow-hidden bg-transparent neon-border text-neon-cyan hover:bg-neon-cyan/10 font-semibold px-8 py-6 text-lg transition-all duration-300"
                onClick={() => window.location.href = '#contact'}
              >
                <Mail className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                Get In Touch
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
                size="lg" 
                className="group relative overflow-hidden bg-transparent border-2 border-neon-cyan/40 text-neon-cyan/80 hover:bg-neon-cyan/5 hover:border-neon-cyan/60 font-semibold px-8 py-6 text-lg transition-all duration-300"
              >
                <Download className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                View My Work
              </Button>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}