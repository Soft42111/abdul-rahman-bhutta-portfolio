"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Calendar, Users, Megaphone, Video, Globe, Gamepad2, Brain, Settings, TrendingUp, Shield, Zap, Target, Palette, HandshakeIcon, Mic, Bot, BarChart3, Coins, PenTool } from "lucide-react";
import { useScrollLockIndex } from "@/hooks/use-scroll-lock-index";

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
    scrollPerItem: 200,
    onIndexChange
  });
  
  return (
    <section 
      ref={containerRef} 
      id="skills"
      className="relative isolate bg-background z-20" 
      style={{
        height: `${100 + (skillCategories.length - 1) * 30}vh`
      }}
    >
      <div className="sticky top-0 min-h-screen flex items-center overflow-hidden bg-background py-10">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8 }} 
            className="text-center mb-10"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 uppercase tracking-tight">
              Skills &{" "}
              <span className="bg-foreground text-background px-3 py-1">Expertise</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-mono">
              Built through years of hands-on experience in Web3 community building and marketing.
            </p>
          </motion.div>

          {/* Skill Categories with scroll lock */}
          <div className="max-w-4xl mx-auto relative">
            <div className="relative h-[400px]">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div 
                  key={category.title} 
                  initial={{ opacity: 0, y: 80 }} 
                  animate={{
                    opacity: categoryIndex === activeIndex ? 1 : 0,
                    y: categoryIndex === activeIndex ? 0 : categoryIndex < activeIndex ? -80 : 80,
                    scale: categoryIndex === activeIndex ? 1 : 0.92
                  }} 
                  transition={{ duration: 0.4, ease: "easeOut" }} 
                  className={`absolute inset-0 ${categoryIndex === activeIndex ? "z-10" : "z-0 pointer-events-none"}`}
                >
                  <SkillCard category={category} isActive={categoryIndex === activeIndex} />
                </motion.div>
              ))}
            </div>

            {/* Progress indicators */}
            <div className="flex justify-center gap-3 mt-8">
              {skillCategories.map((_, index) => (
                <button 
                  key={index} 
                  onClick={() => setActiveIndex(index)} 
                  className={`transition-all duration-300 border-2 border-foreground ${
                    index === activeIndex 
                      ? "w-10 h-4 bg-foreground" 
                      : "w-4 h-4 bg-transparent hover:bg-muted"
                  }`} 
                />
              ))}
            </div>
          </div>

          {/* Languages */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8, delay: 0.2 }} 
            className="max-w-4xl mx-auto mt-12"
          >
            <div className="border-4 border-foreground bg-card p-6 shadow-[6px_6px_0px_0px_hsl(var(--foreground))]">
              <h3 className="text-lg font-bold text-foreground mb-4 text-center uppercase tracking-tight">Languages</h3>
              <div className="grid grid-cols-3 gap-4">
                {languages.map((language, index) => (
                  <motion.div 
                    key={language.name} 
                    initial={{ opacity: 0, scale: 0.9 }} 
                    whileInView={{ opacity: 1, scale: 1 }} 
                    viewport={{ once: true }} 
                    transition={{ duration: 0.5, delay: index * 0.08 }} 
                    className="text-center p-4 border-2 border-foreground bg-background hover:shadow-[4px_4px_0px_0px_hsl(var(--foreground))] transition-shadow"
                  >
                    <div className="text-3xl mb-2">{language.flag}</div>
                    <h4 className="text-sm font-bold text-foreground uppercase">{language.name}</h4>
                    <p className="text-xs text-muted-foreground font-mono">{language.country}</p>
                    <div className="w-full bg-muted border-2 border-foreground h-3 mt-3">
                      <motion.div 
                        initial={{ width: 0 }} 
                        whileInView={{ width: `${language.level}%` }} 
                        viewport={{ once: true }} 
                        transition={{ duration: 0.8, delay: index * 0.08 + 0.3 }} 
                        className="h-full bg-foreground" 
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface SkillCardProps {
  category: (typeof skillCategories)[0];
  isActive?: boolean;
}

function SkillCard({ category, isActive }: SkillCardProps) {
  return (
    <div className={`border-4 border-foreground bg-card p-6 transition-all duration-300 ${
      isActive ? "shadow-[8px_8px_0px_0px_hsl(var(--foreground))]" : ""
    }`}>
      <div className="flex items-center gap-4 mb-6 pb-4 border-b-4 border-foreground">
        <div className="w-14 h-14 border-4 border-foreground bg-accent flex items-center justify-center">
          <category.icon className="w-7 h-7 text-accent-foreground" />
        </div>
        <h3 className="text-xl font-bold text-foreground uppercase tracking-tight">{category.title}</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {category.skills.map((skill, skillIndex) => (
          <motion.div 
            key={skill.name} 
            initial={{ opacity: 0, x: -15 }} 
            animate={{
              opacity: isActive ? 1 : 0,
              x: isActive ? 0 : -15
            }} 
            transition={{ duration: 0.4, delay: skillIndex * 0.08 }} 
            className="space-y-2"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <skill.icon className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-bold text-foreground uppercase">{skill.name}</span>
              </div>
              <span className="text-xs text-muted-foreground font-mono font-bold">{skill.level}%</span>
            </div>
            <div className="w-full bg-muted border-2 border-foreground h-3">
              <motion.div 
                initial={{ width: 0 }} 
                animate={{ width: isActive ? `${skill.level}%` : 0 }} 
                transition={{ duration: 0.8, delay: skillIndex * 0.08 + 0.2 }} 
                className="h-full bg-foreground" 
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
