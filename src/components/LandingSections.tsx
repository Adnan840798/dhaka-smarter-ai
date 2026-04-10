import { motion } from "framer-motion";
import { Shield, AlertTriangle, Search, FileCheck, ArrowRight, Building2, Scale, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

const stats = [
  { value: "3.7M", label: "Pending Cases", icon: Scale },
  { value: "$15B", label: "Disputed Value", icon: AlertTriangle },
  { value: "4", label: "Disconnected Registries", icon: Building2 },
  { value: "3-4x", label: "Duplicate Titles Per Plot", icon: FileCheck },
];

const features = [
  { icon: Search, title: "Multi-Registry NLP Matching", desc: "AI cross-references Sub-Registry, RAJUK, City Corporation & Porashava using NLP to match plot descriptions across different document formats." },
  { icon: MapPin, title: "Satellite Parcel Verification", desc: "Detect overlapping boundaries via satellite parcel mapping to expose fraudulent land claims." },
  { icon: AlertTriangle, title: "Ownership Chain Anomaly Detection", desc: "Flag suspicious ownership chains including frequent flipping and circular ownership patterns." },
  { icon: FileCheck, title: "Citizen Title Health Check", desc: "Citizens get a ৳50 'title health check' report showing the risk level of their property title." },
  { icon: Building2, title: "Bank Due Diligence API", desc: "Banks get API access for mortgage due diligence, reducing fraud risk in lending." },
  { icon: Scale, title: "Court Dispute Risk Scoring", desc: "AI-powered risk scoring helps courts prioritize cases and identify likely fraud." },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-16">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background" />

      <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-16 sm:px-6 lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
            <Shield className="h-4 w-4" />
            Public Services · Impact Dhaka 2026
          </div>

          <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
            Property{" "}
            <span className="text-gradient-primary">Ghost-Hunter</span>{" "}
            AI
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Detecting duplicate land titles in Dhaka by cross-referencing{" "}
            <span className="font-semibold text-foreground">4 disconnected land registries</span>{" "}
            to expose fraud and protect citizens.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link to="/title-check">
              <Button variant="hero" size="lg" className="gap-2 text-base">
                Try Title Health Check <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button variant="heroOutline" size="lg" className="text-base">
                How It Works
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-4 lg:grid-cols-4"
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="group rounded-xl border border-border/50 bg-card/80 p-5 text-center backdrop-blur transition-colors hover:border-primary/30"
            >
              <s.icon className="mx-auto mb-2 h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <div className="font-display text-2xl font-bold text-foreground sm:text-3xl">{s.value}</div>
              <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function ProblemSection() {
  return (
    <section className="border-t border-border/50 bg-card/30 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-display text-3xl font-bold sm:text-4xl">The Problem</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Dhaka has <span className="font-semibold text-foreground">4 separate land registries</span> (Sub-Registry, RAJUK, City Corporation, Porashava) that are not connected. The same plot can have{" "}
            <span className="font-semibold text-danger">3-4 fraudulent titles registered simultaneously</span>. Land disputes are Bangladesh's #1 civil court backlog —{" "}
            <span className="font-semibold text-warning">3.7 million pending cases</span> worth $15 billion in disputed value. Ordinary citizens lose life savings to property fraud with no recourse.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export function FeaturesSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Key Features</h2>
          <p className="mt-4 text-muted-foreground">AI-powered tools to detect and prevent land title fraud</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-xl border border-border/50 bg-card/60 p-6 backdrop-blur transition-all hover:border-primary/30 hover:bg-card"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="border-t border-border/50 py-20">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-card p-12"
        >
          <Users className="mx-auto mb-4 h-10 w-10 text-primary" />
          <h2 className="font-display text-3xl font-bold">Protect Your Property</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Run a title health check on your property in seconds. Our AI cross-references all 4 registries to identify potential fraud.
          </p>
          <Link to="/title-check">
            <Button variant="hero" size="lg" className="mt-8 gap-2">
              Check Your Title Now <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
