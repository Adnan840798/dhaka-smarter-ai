import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection, ProblemSection, FeaturesSection, CTASection } from "@/components/LandingSections";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "GhostHunter AI — Detect Duplicate Land Titles in Dhaka" },
      { name: "description", content: "AI-powered system that cross-references 4 disconnected land registries in Dhaka to detect duplicate titles, expose fraud, and protect citizens." },
      { property: "og:title", content: "GhostHunter AI — Detect Duplicate Land Titles in Dhaka" },
      { property: "og:description", content: "AI cross-referencing 4 disconnected land registries to expose property fraud." },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </div>
  );
}
