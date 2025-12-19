"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Calendar, Users, Megaphone, Video, Globe, Gamepad2, Brain, Settings, TrendingUp, Shield, Zap, Target, Palette, HandshakeIcon, Mic, Bot, BarChart3, Coins, PenTool } from "lucide-react";
import { useScrollLockIndex } from "@/hooks/use-scroll-lock-index";

// Skills based on CV
const skillCategories = [{
  title: "Community Management",
  icon: Users,
  color: "from-violet-500 to-purple-600",
  skills: [{
    name: "Discord Moderation",
    level: 98,
    icon: MessageSquare
  }, {
    name: "Event Hosting",
    level: 95,
    icon: Calendar
  }, {
    name: "Ambassador Programs",
    level: 92,
    icon: Users
  }, {
    name: "Crisis Management",
    level: 88,
    icon: Shield
  }]
}, {
  title: "Web3 Marketing",
  icon: Megaphone,
  color: "from-orange-500 to-red-500",
  skills: [{
    name: "Go-to-Market (GTM)",
    level: 95,
    icon: Target
  }, {
    name: "User Acquisition",
    level: 92,
    icon: TrendingUp
  }, {
    name: "Retention Strategies",
    level: 90,
    icon: BarChart3
  }, {
    name: "Tokenomics Design",
    level: 85,
    icon: Coins
  }]
}, {
  title: "Content & Streaming",
  icon: Video,
  color: "from-emerald-500 to-teal-500",
  skills: [{
    name: "Video Editing",
    level: 88,
    icon: Video
  }, {
    name: "Streaming",
    level: 90,
    icon: Mic
  }, {
    name: "Branding",
    level: 85,
    icon: Palette
  }, {
    name: "Campaign Management",
    level: 92,
    icon: PenTool
  }]
}, {
  title: "Strategy & Growth",
  icon: Brain,
  color: "from-blue-500 to-cyan-500",
  skills: [{
    name: "Community Strategy",
    level: 96,
    icon: Brain
  }, {
    name: "Partnership Development",
    level: 88,
    icon: HandshakeIcon
  }, {
    name: "Web3 Gaming",
    level: 90,
    icon: Gamepad2
  }, {
    name: "Global Community Scaling",
    level: 92,
    icon: Globe
  }]
}, {
  title: "Tools & Technical",
  icon: Settings,
  color: "from-pink-500 to-rose-500",
  skills: [{
    name: "Zammad Ticketing",
    level: 90,
    icon: Settings
  }, {
    name: "AI Tools",
    level: 85,
    icon: Bot
  }, {
    name: "Analytics & Metrics",
    level: 88,
    icon: BarChart3
  }, {
    name: "Automation Systems",
    level: 82,
    icon: Zap
  }]
}];
const languages = [{
  name: "English",
  level: 100,
  flag: "🇺🇸",
  country: "Fluent"
}, {
  name: "Urdu",
  level: 100,
  flag: "🇵🇰",
  country: "Fluent"
}, {
  name: "Hindi",
  level: 100,
  flag: "🇮🇳",
  country: "Fluent"
}];
export function SkillsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const onIndexChange = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);
  useScrollLockIndex({
    containerRef,
    length: skillCategories.length,
    index: activeIndex,
    scrollPerItem: 150,
    onIndexChange
  });
  return <section ref={containerRef} className="relative isolate bg-muted/30 bg-mesh z-20" style={{
    height: `${100 + Math.max(0, skillCategories.length - 1) * 22}vh`
  }}>
      <div className="sticky top-0 min-h-screen flex items-center overflow-hidden bg-muted/30 bg-mesh py-10">
        <div className="container mx-auto px-6">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-4 mx-[100px] md:text-6xl px-[10px] my-[5px] py-0">
              Skills &{" "}
              <span className="text-gradient font-semibold">Expertise</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built through years of hands-on experience in Web3 community building and marketing.
            </p>
          </motion.div>

          {/* Skill Categories with scroll lock */}
          <div className="max-w-4xl mx-auto relative">
            <div className="relative h-[360px]">
              {skillCategories.map((category, categoryIndex) => <motion.div key={category.title} initial={{
              opacity: 0,
              y: 80
            }} animate={{
              opacity: categoryIndex === activeIndex ? 1 : 0,
              y: categoryIndex === activeIndex ? 0 : categoryIndex < activeIndex ? -80 : 80,
              scale: categoryIndex === activeIndex ? 1 : 0.92
            }} transition={{
              duration: 0.4,
              ease: "easeOut"
            }} className={`absolute inset-0 ${categoryIndex === activeIndex ? "z-10" : "z-0 pointer-events-none"}`}>
                  <SkillCard category={category} isActive={categoryIndex === activeIndex} />
                </motion.div>)}
            </div>

            {/* Progress indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {skillCategories.map((_, index) => <button key={index} onClick={() => setActiveIndex(index)} className={`rounded-full transition-all duration-300 ${index === activeIndex ? "w-8 h-2.5 bg-primary" : "w-2.5 h-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"}`} />)}
            </div>
          </div>

          {/* Languages */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="max-w-4xl mx-auto mt-10">
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-5 shadow-card">
              <h3 className="text-lg font-semibold text-foreground mb-4 text-center">Languages</h3>
              <div className="grid grid-cols-3 md:grid-cols-3 gap-3">
                {languages.map((language, index) => <motion.div key={language.name} initial={{
                opacity: 0,
                scale: 0.9
              }} whileInView={{
                opacity: 1,
                scale: 1
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.5,
                delay: index * 0.08
              }} className="text-center p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                    <div className="text-2xl mb-1">{language.flag}</div>
                    <h4 className="text-xs font-semibold text-foreground">{language.name}</h4>
                    <p className="text-xs text-muted-foreground">{language.country}</p>
                    <div className="w-full bg-muted rounded-full h-1 mt-2">
                      <motion.div initial={{
                    width: 0
                  }} whileInView={{
                    width: `${language.level}%`
                  }} viewport={{
                    once: true
                  }} transition={{
                    duration: 0.8,
                    delay: index * 0.08 + 0.3
                  }} className="h-1 rounded-full bg-gradient-to-r from-primary to-accent" />
                    </div>
                  </motion.div>)}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
}
interface SkillCardProps {
  category: (typeof skillCategories)[0];
  isActive?: boolean;
}
function SkillCard({
  category,
  isActive
}: SkillCardProps) {
  return <div className={`bg-card/90 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-card transition-all duration-300 ${isActive ? "shadow-premium border-primary/30" : ""}`}>
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} p-0.5`}>
          <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
            <category.icon className="w-6 h-6 text-primary" />
          </div>
        </div>
        <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {category.skills.map((skill, skillIndex) => <motion.div key={skill.name} initial={{
        opacity: 0,
        x: -15
      }} animate={{
        opacity: isActive ? 1 : 0,
        x: isActive ? 0 : -15
      }} transition={{
        duration: 0.4,
        delay: skillIndex * 0.08
      }} className="space-y-1.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <skill.icon className="w-3.5 h-3.5 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">{skill.name}</span>
              </div>
              <span className="text-xs text-muted-foreground font-medium">{skill.level}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-1.5">
              <motion.div initial={{
            width: 0
          }} animate={{
            width: isActive ? `${skill.level}%` : 0
          }} transition={{
            duration: 0.8,
            delay: skillIndex * 0.08 + 0.2
          }} className={`h-1.5 rounded-full bg-gradient-to-r ${category.color}`} />
            </div>
          </motion.div>)}
      </div>
    </div>;
}