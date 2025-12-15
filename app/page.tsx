import { HeroSection } from "@/components/sections/hero-section";
import { SolutionsSection } from "@/components/sections/solutions-section";
import { TeamSection } from "@/components/sections/team-section";
import { PerformanceSection } from "@/components/sections/performance-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <SolutionsSection />
      <PerformanceSection />
      <PortfolioSection />
      <TeamSection />
    </div>
  );
}
