import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Area, AreaChart } from "recharts";
import { AlertTriangle, CheckCircle, XCircle, TrendingUp, MapPin, FileSearch, Shield } from "lucide-react";

const registryData = [
  { name: "Sub-Registry", total: 42350, duplicates: 3200, clean: 39150 },
  { name: "RAJUK", total: 28700, duplicates: 2100, clean: 26600 },
  { name: "City Corp", total: 35100, duplicates: 2800, clean: 32300 },
  { name: "Porashava", total: 19400, duplicates: 1500, clean: 17900 },
];

const fraudTypes = [
  { name: "Duplicate Title", value: 42, color: "oklch(0.65 0.22 25)" },
  { name: "Boundary Overlap", value: 28, color: "oklch(0.8 0.16 85)" },
  { name: "Circular Ownership", value: 18, color: "oklch(0.65 0.2 260)" },
  { name: "Forged Documents", value: 12, color: "oklch(0.72 0.19 160)" },
];

const monthlyData = [
  { month: "Jan", scans: 1200, frauds: 89 },
  { month: "Feb", scans: 1800, frauds: 134 },
  { month: "Mar", scans: 2400, frauds: 178 },
  { month: "Apr", scans: 3100, frauds: 201 },
  { month: "May", scans: 4200, frauds: 267 },
  { month: "Jun", scans: 5800, frauds: 312 },
];

const summaryCards = [
  { label: "Titles Scanned", value: "125,550", change: "+18%", icon: FileSearch, color: "text-primary" },
  { label: "Frauds Detected", value: "9,600", change: "+12%", icon: AlertTriangle, color: "text-warning" },
  { label: "Cases Resolved", value: "4,230", change: "+25%", icon: CheckCircle, color: "text-success" },
  { label: "Zones Monitored", value: "64", change: "+8", icon: MapPin, color: "text-chart-4" },
];

const recentAlerts = [
  { id: "ALT-2847", plot: "Mirpur-12, Plot 34A", type: "Duplicate Title", severity: "high", registry: "Sub-Registry vs RAJUK" },
  { id: "ALT-2846", plot: "Uttara Sec-7, Plot 112", type: "Boundary Overlap", severity: "medium", registry: "City Corp vs RAJUK" },
  { id: "ALT-2845", plot: "Gulshan-2, Plot 8B", type: "Circular Ownership", severity: "high", registry: "Sub-Registry" },
  { id: "ALT-2844", plot: "Dhanmondi-27, Plot 56", type: "Forged Document", severity: "critical", registry: "All Registries" },
  { id: "ALT-2843", plot: "Banani, Plot 22C", type: "Duplicate Title", severity: "medium", registry: "City Corp vs Porashava" },
];

function SeverityBadge({ severity }: { severity: string }) {
  const styles: Record<string, string> = {
    critical: "bg-danger/15 text-danger",
    high: "bg-warning/15 text-warning",
    medium: "bg-chart-4/15 text-chart-4",
    low: "bg-success/15 text-success",
  };
  return (
    <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${styles[severity] || styles.low}`}>
      {severity}
    </span>
  );
}

export function DashboardContent() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold">Fraud Detection Dashboard</h1>
        <p className="mt-2 text-muted-foreground">Real-time cross-registry analysis across Dhaka</p>
      </div>

      {/* Summary Cards */}
      <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {summaryCards.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="rounded-xl border border-border/50 bg-card p-5"
          >
            <div className="flex items-center justify-between">
              <c.icon className={`h-5 w-5 ${c.color}`} />
              <span className="text-xs text-success font-medium">{c.change}</span>
            </div>
            <div className="mt-3 font-display text-2xl font-bold">{c.value}</div>
            <div className="mt-1 text-xs text-muted-foreground">{c.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="mb-8 grid gap-6 lg:grid-cols-2">
        {/* Registry Comparison */}
        <div className="rounded-xl border border-border/50 bg-card p-6">
          <h3 className="mb-4 font-display font-semibold">Registry Comparison</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={registryData}>
              <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.28 0.015 250)" />
              <XAxis dataKey="name" tick={{ fill: "oklch(0.6 0.015 250)", fontSize: 12 }} />
              <YAxis tick={{ fill: "oklch(0.6 0.015 250)", fontSize: 12 }} />
              <Tooltip
                contentStyle={{ backgroundColor: "oklch(0.18 0.015 250)", border: "1px solid oklch(0.28 0.015 250)", borderRadius: "8px", color: "oklch(0.95 0.01 250)" }}
              />
              <Bar dataKey="clean" fill="oklch(0.72 0.19 160)" radius={[4, 4, 0, 0]} name="Clean" />
              <Bar dataKey="duplicates" fill="oklch(0.65 0.22 25)" radius={[4, 4, 0, 0]} name="Duplicates" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Fraud Types */}
        <div className="rounded-xl border border-border/50 bg-card p-6">
          <h3 className="mb-4 font-display font-semibold">Fraud Types Distribution</h3>
          <div className="flex items-center gap-6">
            <ResponsiveContainer width="50%" height={250}>
              <PieChart>
                <Pie data={fraudTypes} cx="50%" cy="50%" innerRadius={50} outerRadius={90} dataKey="value" stroke="none">
                  {fraudTypes.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: "oklch(0.18 0.015 250)", border: "1px solid oklch(0.28 0.015 250)", borderRadius: "8px", color: "oklch(0.95 0.01 250)" }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-3">
              {fraudTypes.map((f, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <div className="h-3 w-3 rounded-full" style={{ backgroundColor: f.color }} />
                  <span className="text-muted-foreground">{f.name}</span>
                  <span className="font-semibold">{f.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Trend Chart */}
      <div className="mb-8 rounded-xl border border-border/50 bg-card p-6">
        <h3 className="mb-4 font-display font-semibold">Monthly Scan & Detection Trend</h3>
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.28 0.015 250)" />
            <XAxis dataKey="month" tick={{ fill: "oklch(0.6 0.015 250)", fontSize: 12 }} />
            <YAxis tick={{ fill: "oklch(0.6 0.015 250)", fontSize: 12 }} />
            <Tooltip
              contentStyle={{ backgroundColor: "oklch(0.18 0.015 250)", border: "1px solid oklch(0.28 0.015 250)", borderRadius: "8px", color: "oklch(0.95 0.01 250)" }}
            />
            <Area type="monotone" dataKey="scans" stroke="oklch(0.72 0.19 160)" fill="oklch(0.72 0.19 160 / 20%)" name="Total Scans" />
            <Area type="monotone" dataKey="frauds" stroke="oklch(0.65 0.22 25)" fill="oklch(0.65 0.22 25 / 20%)" name="Frauds Detected" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Alerts */}
      <div className="rounded-xl border border-border/50 bg-card p-6">
        <h3 className="mb-4 font-display font-semibold">Recent Fraud Alerts</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50 text-left text-xs text-muted-foreground">
                <th className="pb-3 pr-4">Alert ID</th>
                <th className="pb-3 pr-4">Plot Location</th>
                <th className="pb-3 pr-4">Fraud Type</th>
                <th className="pb-3 pr-4">Severity</th>
                <th className="pb-3">Registries</th>
              </tr>
            </thead>
            <tbody>
              {recentAlerts.map((a) => (
                <tr key={a.id} className="border-b border-border/30 last:border-0">
                  <td className="py-3 pr-4 font-mono text-xs text-primary">{a.id}</td>
                  <td className="py-3 pr-4">{a.plot}</td>
                  <td className="py-3 pr-4">{a.type}</td>
                  <td className="py-3 pr-4"><SeverityBadge severity={a.severity} /></td>
                  <td className="py-3 text-muted-foreground">{a.registry}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
