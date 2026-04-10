import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TitleCheckContent } from "@/components/TitleCheckContent";

export const Route = createFileRoute("/title-check")({
  component: TitleCheckPage,
  head: () => ({
    meta: [
      { title: "Title Health Check — GhostHunter AI" },
      { name: "description", content: "Check your property title health across all 4 Dhaka registries instantly." },
    ],
  }),
});

function TitleCheckPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <TitleCheckContent />
      </main>
      <Footer />
    </div>
  );
}
