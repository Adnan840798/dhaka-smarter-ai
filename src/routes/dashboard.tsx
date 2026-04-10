import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DashboardContent } from "@/components/DashboardContent";

export const Route = createFileRoute("/dashboard")({
  component: DashboardPage,
  head: () => ({
    meta: [
      { title: "Dashboard — GhostHunter AI" },
      { name: "description", content: "Real-time analytics showing fraud detection across Dhaka's 4 land registries." },
    ],
  }),
});

function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <DashboardContent />
      </main>
      <Footer />
    </div>
  );
}
