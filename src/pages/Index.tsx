import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { LazySection } from "@/components/lazy-section"
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
      
      <Navigation />
      
      <main id="main-content" className="relative focus:outline-none" tabIndex={-1}>
        <HeroSection />
        
        <LazySection fallback={<div className="h-96 animate-pulse bg-muted/30" />}>
          <AboutSection />
        </LazySection>
        
        <LazySection fallback={<div className="h-96 animate-pulse bg-muted/30" />}>
          <ExperienceSection />
        </LazySection>
        
        <LazySection fallback={<div className="h-96 animate-pulse bg-muted/30" />}>
          <SkillsSection />
        </LazySection>
        
        <LazySection fallback={<div className="h-96 animate-pulse bg-muted/30" />}>
          <ContactSection />
        </LazySection>
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
