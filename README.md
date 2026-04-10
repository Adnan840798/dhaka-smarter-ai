# 🔍 GhostHunter AI — Detect Duplicate Land Titles in Dhaka

![GhostHunter AI](https://img.shields.io/badge/AI-Powered-emerald) ![Hackathon](https://img.shields.io/badge/Impact%20Dhaka-2026-blue) ![Status](https://img.shields.io/badge/Status-Prototype-yellow)

## Problem Statement

Dhaka's land registry system is fragmented across **4 disconnected offices** (AC Land, Sub-Registry, RAJUK, City Corporation), enabling widespread **duplicate title fraud**. Over **3.7 million pending land cases** clog Bangladesh's courts, with an estimated **68% linked to title disputes**. Citizens have no way to cross-check ownership across registries.

## Our Solution

**GhostHunter AI** is an AI-powered system that cross-references all 4 land registries in Dhaka to detect duplicate titles, expose fraud patterns, and protect citizens. It uses NLP document matching, satellite parcel mapping, and anomaly detection to flag suspicious ownership overlaps in real time.

## Key Features

- **🔗 Cross-Registry Matching** — NLP-driven entity resolution across AC Land, Sub-Registry, RAJUK & City Corporation databases
- **🛰️ Satellite Parcel Verification** — GIS overlay matching to detect boundary conflicts and ghost parcels
- **📊 Fraud Analytics Dashboard** — Real-time visualization of duplicate detection rates, fraud hotspots, and registry gaps
- **🏥 Title Health Check** — Citizens can verify their deed against all 4 registries with a single search
- **⚡ Anomaly Detection Pipeline** — 6-step AI pipeline scoring ownership chains for risk

## Target Users

- **Citizens** — Verify property ownership before purchase
- **Government agencies** — Detect and resolve duplicate registrations
- **Legal professionals** — Access cross-referenced title history for court cases
- **Urban planners** — Identify land fraud hotspots for development planning

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19, TypeScript, TanStack Router |
| Styling | Tailwind CSS v4, Framer Motion |
| Charts | Recharts |
| Build | Vite 7, Bun |
| Deployment | Cloudflare Workers (SSR) |

## Setup Instructions

```bash
# Clone the repository
git clone https://github.com/<your-username>/ghosthunter-ai.git
cd ghosthunter-ai

# Install dependencies
bun install

# Start development server
bun run dev
```

The app will be available at `http://localhost:5173`.

## Project Structure

```
src/
├── routes/
│   ├── __root.tsx          # Root layout (HTML shell, fonts)
│   ├── index.tsx           # Landing page
│   ├── dashboard.tsx       # Fraud analytics dashboard
│   ├── title-check.tsx     # Title health check tool
│   └── how-it-works.tsx    # AI pipeline explanation
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Footer.tsx          # Footer
│   ├── LandingSections.tsx # Hero, Problem, Features, CTA
│   ├── DashboardContent.tsx# Charts and analytics
│   ├── TitleCheckContent.tsx# Search and results UI
│   └── HowItWorksContent.tsx# Pipeline visualization
└── styles.css              # Design system tokens
```

## Demo

🎥 [Watch 3-minute demo video](https://youtube.com/your-demo-link)

🌐 [Live Preview](https://id-preview--6efafe2f-972c-48a5-904f-c455b3d16789.lovable.app)

## Team

Built for **Impact Dhaka 2026** Hackathon — Smart City Intelligence track.

## License

MIT
