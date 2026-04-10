import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HowItWorksContent } from "@/components/HowItWorksContent";

export const Route = createFileRoute("/how-it-works")({
  component: HowItWorksPage,
  head: () => ({
    meta: [
      { title: "How It Works — GhostHunter AI" },
      { name: "description", content: "Learn how GhostHunter AI cross-references 4 land registries using NLP and satellite data." },
    ],
  }),
});

function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <HowItWorksContent />
      </main>
      <Footer />
    </div>
  );
}
