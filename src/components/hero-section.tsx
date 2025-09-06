"use client"

import { motion } from "framer-motion"
import { Download, Mail, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

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
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative mx-auto w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-premium ring-4 ring-white/20">
              <img
                src="/lovable-uploads/93a92d81-fa62-47f9-8b94-91e23a9a97ac.png"
                alt="Abdul Rahman Bhutta - Community Lead"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight"
          >
            Abdul Rahman{" "}
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

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center text-white/60 cursor-pointer hover:text-white/80 transition-colors"
            >
              <span className="text-sm mb-2">Scroll to explore</span>
              <ArrowDown className="h-5 w-5" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}