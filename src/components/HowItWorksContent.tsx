import { motion } from "framer-motion";
import { Database, Cpu, Search, FileCheck, Shield, ArrowDown, Building2, Satellite, AlertTriangle, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Database,
    title: "Data Ingestion",
    desc: "Collect records from all 4 registries: Sub-Registry, RAJUK, City Corporation, and Porashava. OCR processing for scanned documents.",
    color: "bg-chart-4/15 text-chart-4",
  },
  {
    icon: Cpu,
    title: "NLP Document Matching",
    desc: "AI matches plot descriptions across different document formats using Natural Language Processing to identify the same plots registered under different names or IDs.",
    color: "bg-primary/15 text-primary",
  },
  {
    icon: Satellite,
    title: "Satellite Parcel Mapping",
    desc: "Cross-verify physical boundaries using satellite imagery. Detect overlapping parcels where multiple titles claim the same land.",
    color: "bg-chart-5/15 text-chart-5",
  },
  {
    icon: AlertTriangle,
    title: "Anomaly Detection",
    desc: "Flag suspicious ownership patterns: frequent flipping (3+ transfers in 2 years), circular ownership chains, and mismatched registry entries.",
    color: "bg-warning/15 text-warning",
  },
  {
    icon: BarChart3,
    title: "Risk Scoring",
    desc: "Generate a 0-100 health score for each title based on registry consistency, ownership chain integrity, boundary verification, and historical patterns.",
    color: "bg-danger/15 text-danger",
  },
  {
    icon: FileCheck,
    title: "Report Generation",
    desc: "Produce actionable reports for citizens (৳50 title check), banks (API for mortgage due diligence), and courts (dispute risk scoring).",
    color: "bg-success/15 text-success",
  },
];

const techStack = [
  { name: "NLP Engine", desc: "Bangla + English document parsing with named entity recognition for plot identification" },
  { name: "Satellite Integration", desc: "GIS parcel mapping with boundary overlap detection algorithms" },
  { name: "Graph Analysis", desc: "Ownership chain modeling to detect circular patterns and anomalous transfers" },
  { name: "Risk Model", desc: "Multi-factor scoring combining registry consistency, ownership history, and boundary data" },
];

export function HowItWorksContent() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <div className="text-center">
        <h1 className="font-display text-3xl font-bold sm:text-4xl">How GhostHunter AI Works</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          A 6-step AI pipeline that cross-references Dhaka's fragmented land registry system
        </p>
      </div>

      {/* Pipeline Steps */}
      <div className="mt-16 space-y-2">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="flex items-start gap-5 rounded-xl border border-border/50 bg-card p-6 transition-colors hover:border-primary/20">
              <div className="flex flex-col items-center gap-1">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-secondary">
                  <span className="font-display text-sm font-bold text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${s.color}`}>
                    <s.icon className="h-4 w-4" />
                  </div>
                  <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </div>
            {i < steps.length - 1 && (
              <div className="flex justify-center py-1">
                <ArrowDown className="h-4 w-4 text-muted-foreground/50" />
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Tech Stack */}
      <div className="mt-20">
        <h2 className="text-center font-display text-2xl font-bold">AI Technology Stack</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {techStack.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-border/50 bg-card p-5"
            >
              <h4 className="font-display font-semibold text-primary">{t.name}</h4>
              <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Business Model */}
      <div className="mt-20">
        <h2 className="text-center font-display text-2xl font-bold">Business Model</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            { title: "B2C Title Check", price: "৳50/report", desc: "Citizens can verify their property title health instantly" },
            { title: "Bank API Subscription", price: "৳500K+/yr", desc: "Banks get API access for mortgage due diligence" },
            { title: "Law Firm SaaS", price: "Monthly subscription", desc: "Due diligence tools for legal professionals" },
            { title: "Govt Registry Contract", price: "Modernization contract", desc: "Help government unify and modernize registry systems" },
          ].map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-border/50 bg-card p-5"
            >
              <div className="flex items-center justify-between">
                <h4 className="font-display font-semibold">{b.title}</h4>
                <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">{b.price}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
