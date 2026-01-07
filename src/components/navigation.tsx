"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
const navigation = [{
  name: "About",
  href: "#about"
}, {
  name: "Experience",
  href: "#experience"
}, {
  name: "Skills",
  href: "#skills"
}, {
  name: "Achievements",
  href: "#achievements"
}, {
  name: "Contact",
  href: "#contact"
}];
export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.8;
      setIsScrolled(window.scrollY > heroHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <motion.nav initial={{
    opacity: 0,
    y: -20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.4
  }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background border-b-4 border-foreground" : "bg-transparent"}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a href="#" className="font-black text-xl uppercase tracking-tighter" whileHover={{
          scale: 1.05
        }}>
            
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item, index) => <motion.a key={item.name} href={item.href} initial={{
            opacity: 0,
            y: -10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.1 * index,
            duration: 0.3
          }} whileHover={{
            scale: 1.05,
            backgroundColor: isScrolled ? "hsl(var(--foreground))" : "rgba(255,255,255,0.9)",
            color: isScrolled ? "hsl(var(--background))" : "hsl(0 0% 5%)"
          }} whileTap={{
            scale: 0.95
          }} className={`px-4 py-2 font-bold uppercase text-sm tracking-wider transition-colors ${isScrolled ? "text-foreground border-2 border-transparent hover:border-foreground" : "text-white border-2 border-transparent hover:border-white"}`}>
                {item.name}
              </motion.a>)}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.div whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
              <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`h-10 w-10 border-2 ${isScrolled ? "border-foreground text-foreground" : "border-white text-white"}`}>
                <motion.div initial={false} animate={{
                rotate: isMobileMenuOpen ? 180 : 0
              }} transition={{
                duration: 0.2
              }}>
                  {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </motion.div>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: "auto"
      }} exit={{
        opacity: 0,
        height: 0
      }} transition={{
        duration: 0.2
      }} className="md:hidden border-t-4 border-foreground bg-background">
            <div className="py-4 space-y-2">
              {navigation.map((item, index) => <motion.a key={item.name} href={item.href} initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: index * 0.1,
            duration: 0.2
          }} onClick={() => setIsMobileMenuOpen(false)} whileHover={{
            x: 8,
            backgroundColor: "hsl(var(--foreground))",
            color: "hsl(var(--background))"
          }} className="block px-4 py-3 text-foreground font-bold uppercase tracking-wider border-l-4 border-transparent hover:border-foreground transition-all">
                  {item.name}
                </motion.a>)}
            </div>
          </motion.div>}
      </div>
    </motion.nav>;
}