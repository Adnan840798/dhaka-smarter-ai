import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Shield, AlertTriangle, CheckCircle, XCircle, FileText, MapPin, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type ReportData = {
  plotId: string;
  location: string;
  overallScore: number;
  risk: "low" | "medium" | "high" | "critical";
  registries: { name: string; status: "found" | "not_found" | "mismatch"; details: string }[];
  ownershipChain: { name: string; date: string; type: string; flag: boolean }[];
  boundaryCheck: { status: string; overlap: number };
};

const mockReports: Record<string, ReportData> = {
  "DHK-2024-34A": {
    plotId: "DHK-2024-34A",
    location: "Mirpur-12, Block C, Plot 34A",
    overallScore: 32,
    risk: "high",
    registries: [
      { name: "Sub-Registry", status: "found", details: "Title registered 2018, Owner: Abdul Karim" },
      { name: "RAJUK", status: "mismatch", details: "Different owner: Rahim Uddin, registered 2020" },
      { name: "City Corporation", status: "found", details: "Tax records match Sub-Registry" },
      { name: "Porashava", status: "not_found", details: "No records found" },
    ],
    ownershipChain: [
      { name: "Original Owner (Govt)", date: "1985", type: "Allocation", flag: false },
      { name: "Mohammad Ali", date: "1992", type: "Purchase", flag: false },
      { name: "Abdul Karim", date: "2018", type: "Purchase", flag: false },
      { name: "Rahim Uddin", date: "2020", type: "Purchase (RAJUK Only)", flag: true },
    ],
    boundaryCheck: { status: "Overlap Detected", overlap: 23 },
  },
  "DHK-2024-112": {
    plotId: "DHK-2024-112",
    location: "Uttara Sector 7, Plot 112",
    overallScore: 87,
    risk: "low",
    registries: [
      { name: "Sub-Registry", status: "found", details: "Title registered 2015, Owner: Fatima Begum" },
      { name: "RAJUK", status: "found", details: "Records consistent, Owner: Fatima Begum" },
      { name: "City Corporation", status: "found", details: "Tax records match" },
      { name: "Porashava", status: "not_found", details: "Outside jurisdiction" },
    ],
    ownershipChain: [
      { name: "Original Owner (Govt)", date: "1990", type: "Allocation", flag: false },
      { name: "Kamal Hossain", date: "2005", type: "Purchase", flag: false },
      { name: "Fatima Begum", date: "2015", type: "Purchase", flag: false },
    ],
    boundaryCheck: { status: "Clean", overlap: 0 },
  },
};

const samplePlots = ["DHK-2024-34A", "DHK-2024-112"];

export function TitleCheckContent() {
  const [plotId, setPlotId] = useState("");
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState<ReportData | null>(null);
  const [error, setError] = useState("");

  const handleCheck = () => {
    const id = plotId.trim().toUpperCase();
    setError("");
    setReport(null);

    if (!id) {
      setError("Please enter a Plot ID");
      return;
    }

    setLoading(true);
    // Simulate AI processing
    setTimeout(() => {
      const data = mockReports[id];
      if (data) {
        setReport(data);
      } else {
        setError("Plot ID not found. Try one of the sample IDs below.");
      }
      setLoading(false);
    }, 2000);
  };

  const scoreColor = (score: number) => {
    if (score >= 70) return "text-success";
    if (score >= 40) return "text-warning";
    return "text-danger";
  };

  const riskBadge = (risk: string) => {
    const styles: Record<string, string> = {
      low: "bg-success/15 text-success",
      medium: "bg-warning/15 text-warning",
      high: "bg-danger/15 text-danger",
      critical: "bg-danger/20 text-danger font-bold",
    };
    return styles[risk] || styles.low;
  };

  const statusIcon = (status: string) => {
    if (status === "found") return <CheckCircle className="h-4 w-4 text-success" />;
    if (status === "mismatch") return <AlertTriangle className="h-4 w-4 text-warning" />;
    return <XCircle className="h-4 w-4 text-danger" />;
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <div className="text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
          <Shield className="h-7 w-7 text-primary" />
        </div>
        <h1 className="font-display text-3xl font-bold">Title Health Check</h1>
        <p className="mt-3 text-muted-foreground">
          Enter your Plot ID to get an instant AI-powered title health report
        </p>
      </div>

      {/* Search Box */}
      <div className="mx-auto mt-8 max-w-lg">
        <div className="flex gap-3">
          <Input
            value={plotId}
            onChange={(e) => setPlotId(e.target.value)}
            placeholder="Enter Plot ID (e.g., DHK-2024-34A)"
            className="h-12 bg-card text-base font-mono"
            onKeyDown={(e) => e.key === "Enter" && handleCheck()}
          />
          <Button variant="hero" className="h-12 px-6" onClick={handleCheck} disabled={loading}>
            {loading ? (
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground" />
            ) : (
              <Search className="h-5 w-5" />
            )}
          </Button>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="text-xs text-muted-foreground">Try:</span>
          {samplePlots.map((id) => (
            <button
              key={id}
              onClick={() => { setPlotId(id); }}
              className="rounded-md bg-secondary px-2 py-1 font-mono text-xs text-secondary-foreground hover:bg-accent transition-colors"
            >
              {id}
            </button>
          ))}
        </div>
        {error && <p className="mt-3 text-sm text-danger">{error}</p>}
      </div>

      {/* Loading Animation */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mt-12 text-center"
          >
            <div className="mx-auto mb-4 h-16 w-16 animate-spin rounded-full border-4 border-primary/20 border-t-primary" />
            <p className="font-display text-lg font-medium">Analyzing across 4 registries...</p>
            <p className="mt-1 text-sm text-muted-foreground">Cross-referencing NLP documents & satellite data</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Report */}
      <AnimatePresence>
        {report && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 space-y-6"
          >
            {/* Header */}
            <div className="rounded-xl border border-border/50 bg-card p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    <h2 className="font-display text-xl font-bold">Title Health Report</h2>
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {report.location}
                  </div>
                  <div className="mt-1 font-mono text-xs text-muted-foreground">
                    Plot ID: {report.plotId}
                  </div>
                </div>
                <div className="text-center">
                  <div className={`font-display text-5xl font-bold ${scoreColor(report.overallScore)}`}>
                    {report.overallScore}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">Health Score</div>
                  <span className={`mt-2 inline-block rounded-full px-3 py-1 text-xs font-medium ${riskBadge(report.risk)}`}>
                    {report.risk.toUpperCase()} RISK
                  </span>
                </div>
              </div>
            </div>

            {/* Registry Cross-Reference */}
            <div className="rounded-xl border border-border/50 bg-card p-6">
              <h3 className="mb-4 font-display font-semibold">Registry Cross-Reference</h3>
              <div className="space-y-3">
                {report.registries.map((r, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-lg border border-border/30 bg-secondary/30 p-4">
                    {statusIcon(r.status)}
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{r.name}</span>
                        <span className={`rounded px-1.5 py-0.5 text-xs ${
                          r.status === "found" ? "bg-success/15 text-success" :
                          r.status === "mismatch" ? "bg-warning/15 text-warning" :
                          "bg-danger/15 text-danger"
                        }`}>
                          {r.status === "found" ? "Match" : r.status === "mismatch" ? "Mismatch" : "Not Found"}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">{r.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ownership Chain */}
            <div className="rounded-xl border border-border/50 bg-card p-6">
              <h3 className="mb-4 font-display font-semibold">Ownership Chain Analysis</h3>
              <div className="relative ml-4 border-l-2 border-border/50 pl-6">
                {report.ownershipChain.map((o, i) => (
                  <div key={i} className="relative mb-6 last:mb-0">
                    <div className={`absolute -left-[31px] h-4 w-4 rounded-full border-2 ${
                      o.flag ? "border-warning bg-warning/30" : "border-primary bg-primary/30"
                    }`} />
                    <div className={`rounded-lg p-3 ${o.flag ? "border border-warning/30 bg-warning/5" : ""}`}>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{o.name}</span>
                        {o.flag && <AlertTriangle className="h-4 w-4 text-warning" />}
                      </div>
                      <div className="mt-1 flex gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{o.date}</span>
                        <span>{o.type}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Boundary Check */}
            <div className="rounded-xl border border-border/50 bg-card p-6">
              <h3 className="mb-4 font-display font-semibold">Satellite Boundary Verification</h3>
              <div className={`flex items-center gap-3 rounded-lg p-4 ${
                report.boundaryCheck.overlap > 0 ? "bg-warning/10 border border-warning/30" : "bg-success/10 border border-success/30"
              }`}>
                {report.boundaryCheck.overlap > 0 ? (
                  <AlertTriangle className="h-6 w-6 text-warning" />
                ) : (
                  <CheckCircle className="h-6 w-6 text-success" />
                )}
                <div>
                  <div className="font-medium">{report.boundaryCheck.status}</div>
                  {report.boundaryCheck.overlap > 0 && (
                    <p className="text-sm text-muted-foreground">
                      {report.boundaryCheck.overlap}% boundary overlap detected with adjacent plot
                    </p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
