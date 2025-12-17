"use client";

import { HeroSection } from "@/components/sections/hero-section";
import { SolutionsSection } from "@/components/sections/solutions-section";
import { TeamSection } from "@/components/sections/team-section";
import { PerformanceSection } from "@/components/sections/performance-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero doesn't need ScrollReveal - uses preloader sync */}
      <HeroSection />

      {/* Sections with scroll reveal + EXIT animations */}
      <ScrollReveal animation="blur" duration={1.2} enableExit={true}>
        <SolutionsSection />
      </ScrollReveal>

      <ScrollReveal animation="fade-up" duration={1} enableExit={true}>
        <PerformanceSection />
      </ScrollReveal>

      {/* Portfolio has its own GSAP scroll animation - NO wrapper needed */}
      <PortfolioSection />

      <ScrollReveal animation="fade-up" duration={1} enableExit={true}>
        <TeamSection />
      </ScrollReveal>
    </div>
  );
}
