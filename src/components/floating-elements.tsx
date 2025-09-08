"use client"

import { motion } from "framer-motion"
import { Code, Zap, Globe, Users, Star, Sparkles } from "lucide-react"

const floatingElements = [
  { 
    icon: Code, 
    position: { top: "10%", left: "5%" },
    delay: 0,
    duration: 8,
    color: "text-blue-400"
  },
  { 
    icon: Zap, 
    position: { top: "20%", right: "10%" },
    delay: 1,
    duration: 10,
    color: "text-yellow-400"
  },
  { 
    icon: Globe, 
    position: { bottom: "30%", left: "8%" },
    delay: 2,
    duration: 12,
    color: "text-green-400"
  },
  { 
    icon: Users, 
    position: { bottom: "15%", right: "5%" },
    delay: 3,
    duration: 9,
    color: "text-purple-400"
  },
  { 
    icon: Star, 
    position: { top: "50%", left: "3%" },
    delay: 4,
    duration: 11,
    color: "text-pink-400"
  },
  { 
    icon: Sparkles, 
    position: { top: "70%", right: "8%" },
    delay: 5,
    duration: 7,
    color: "text-cyan-400"
  },
]

export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute opacity-10"
          style={element.position}
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{ 
            opacity: [0, 0.1, 0.05, 0.1, 0],
            scale: [0, 1, 1.2, 1, 0],
            rotate: [0, 180, 360],
            y: [0, -20, 0, 20, 0],
            x: [0, 10, 0, -10, 0]
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut"
          }}
        >
          <element.icon className={`w-8 h-8 ${element.color}`} />
        </motion.div>
      ))}
      
      {/* Animated background dots */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute w-1 h-1 bg-accent/20 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 0.3, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            delay: Math.random() * 2,
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
      ))}
    </div>
  )
}