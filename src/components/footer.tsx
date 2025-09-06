"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Send, Mail } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/abdulrahman",
    icon: Github
  },
  {
    name: "LinkedIn", 
    href: "https://linkedin.com/in/abdulrahman-bhutta",
    icon: Linkedin
  },
  {
    name: "Twitter",
    href: "https://twitter.com/abdulrahman_dev",
    icon: Twitter
  },
  {
    name: "Telegram",
    href: "https://t.me/abdulrahman_dev",
    icon: Send
  },
  {
    name: "Email",
    href: "mailto:hello@abdulrahman.dev",
    icon: Mail
  }
]

export function Footer() {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-accent flex items-center justify-center">
                <span className="text-primary font-bold">AR</span>
              </div>
              <span className="text-xl font-semibold text-foreground">Abdul Rahman Bhutta</span>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex space-x-4 mb-8"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full bg-muted hover:bg-accent/20 flex items-center justify-center transition-colors group"
                aria-label={link.name}
              >
                <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm text-muted-foreground"
          >
            <p>© {new Date().getFullYear()} Abdul Rahman Bhutta. All rights reserved.</p>
            <p className="mt-1">Built with passion for community excellence.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}