import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { SkillsSection } from "@/components/skills-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { AchievementsSection } from "@/components/achievements-section"
import { ResumeSection } from "@/components/resume-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { LazySection } from "@/components/lazy-section"
import { FloatingElements } from "@/components/floating-elements"
import { AnimatedGridBackground } from "@/components/animated-grid-background"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useLenis } from "@/hooks/use-lenis"

const Index = () => {
  useLenis()
  
  return (
    <>
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-[100] font-medium transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      >
        Skip to main content
      </a>
      
      <AnimatedGridBackground />
      <FloatingElements />
      <Navigation />
      
      <main id="main-content" className="relative focus:outline-none" tabIndex={-1}>
        <HeroSection />
        
        <ScrollReveal>
          <LazySection fallback={<div className="h-96 animate-pulse bg-muted/30" />}>
            <AboutSection />
          </LazySection>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <LazySection fallback={<div className="h-96 animate-pulse bg-muted/30" />}>
            <ExperienceSection />
          </LazySection>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <LazySection fallback={<div className="h-96 animate-pulse bg-muted/30" />}>
            <SkillsSection />
          </LazySection>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <LazySection fallback={<div className="h-96 animate-pulse bg-muted/30" />}>
            <TestimonialsSection />
          </LazySection>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <LazySection fallback={<div className="h-96 animate-pulse bg-muted/30" />}>
            <AchievementsSection />
          </LazySection>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <LazySection fallback={<div className="h-96 animate-pulse bg-muted/30" />}>
            <ResumeSection />
          </LazySection>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <LazySection fallback={<div className="h-96 animate-pulse bg-muted/30" />}>
            <ContactSection />
          </LazySection>
        </ScrollReveal>
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
