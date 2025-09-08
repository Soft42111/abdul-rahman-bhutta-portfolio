"use client"

import { motion } from "framer-motion"
import { Linkedin, Twitter, Send, Mail, MessageSquare } from "lucide-react"

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/abdul-rehman-194588337",
    icon: Linkedin
  },
  {
    name: "Twitter/X",
    href: "https://x.com/aluubukharaa",
    icon: Twitter
  },
  {
    name: "Discord",
    href: "https://discord.com/users/663291840048660481",
    icon: MessageSquare
  },
  {
    name: "Telegram",
    href: "https://t.me/aluubukhara",
    icon: Send
  },
  {
    name: "Email",
    href: "mailto:aliabdulibrahim52@gmail.com",
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
              <span className="text-xl font-semibold text-foreground">Abdul Rehman Bhutta</span>
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
            <p>© {new Date().getFullYear()} Abdul Rehman Bhutta. All rights reserved.</p>
            <p className="mt-1">Built with passion for community excellence.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}