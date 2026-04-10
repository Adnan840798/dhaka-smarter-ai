import { Shield } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15">
              <Shield className="h-4 w-4 text-primary" />
            </div>
            <span className="font-display text-sm font-bold">
              Ghost<span className="text-primary">Hunter</span> AI
            </span>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <Link to="/dashboard" className="hover:text-foreground transition-colors">Dashboard</Link>
            <Link to="/title-check" className="hover:text-foreground transition-colors">Title Check</Link>
            <Link to="/how-it-works" className="hover:text-foreground transition-colors">How It Works</Link>
          </div>
          <p className="text-xs text-muted-foreground">
            Built for Impact Dhaka 2026 Hackathon
          </p>
        </div>
      </div>
    </footer>
  );
}
