import { About } from "@/components/about";
import { Events } from "@/components/events";
import { Faq } from "@/components/faq";
import { FloatingThemeToggle } from "@/components/floating-theme-toggle";
import { Hackathons } from "@/components/hackathons";
import { Hero } from "@/components/hero";
import { RequestSection } from "@/components/request";
import { RoadmapSection } from "@/components/roadmap";
import { StatsBar } from "@/components/stats-bar";
import { Team } from "@/components/team";

export default function Home() {
  return (
    <main id="main" className="flex-1">
      <Hero />
      <StatsBar />
      <About />
      <Hackathons />
      <Events />
      <Team />
      <RequestSection />
      <RoadmapSection />
      <Faq />
      <FloatingThemeToggle />
    </main>
  );
}
