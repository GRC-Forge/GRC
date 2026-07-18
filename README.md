# GRC Forge

## Project Overview
- **Name**: GRC Forge
- **Goal**: Bilingual (EN/AR) professional intelligence platform — the umbrella brand for a
  suite of decision-making instruments across five practice pillars, plus three flat sections.
- **Source**: Built from a Genspark Design handoff (`designer2-e19222a0-...`) — the
  `design_handoff_grc_forge` bundle, already renamed from "MH Forge" to **GRC Forge** with the
  full pillar taxonomy below.

### Information architecture

```
GRC FORGE
├── Intelligence
│   ├── Gold Intelligence     (live · MVP)
│   ├── Market Intelligence   (Q4 2026)
│   └── AI Research           (beta)
├── Governance
│   ├── GRC Professional      (Q3 2026)
│   ├── Delegation of Authority (Q3 2026)
│   ├── Internal Audit         (Q4 2026)
│   ├── Compliance             (Q1 2027)
│   └── Risk Management        (Q1 2027)
├── Business
│   ├── Consulting
│   ├── Strategy
│   ├── Operating Model
│   ├── Digital Transformation
│   └── Performance
├── Venture
│   ├── Entrepreneurship
│   ├── Startup Builder
│   ├── Funding
│   └── Scaling
├── AI
│   ├── Gold AI
│   ├── GRC AI
│   ├── Business AI
│   └── Venture AI
├── Research
├── Resources
└── About
```

## Features Implemented
- Single-page, long-scroll landing site with sticky glass nav (8 top-level items matching the
  taxonomy above) and a "Launch platform" CTA.
- Hero section with a live "Forge Console" mock, animated ticker marquee, and headline.
- Metrics strip (5 pillars / 20+ modules / 2 languages / 1 brand system).
- **Pillars overview** — 6 cards (Intelligence, Governance, Business, Venture, AI, and a flat
  Research·Resources·About card), each listing its submodules with status badges.
- **Gold Investment Planner** — fully working interactive MVP (sliders for amount/horizon,
  segmented controls for risk/entry, live-recomputed allocation %, donut chart, 3-scenario SVG
  line chart, break-even math). Math ported verbatim from the design's `planner.js`.
- **Governance control-plane teaser** — dashboard mock with stats, approval workflow & risk-heat
  tables, and 5 tool cards (GRC Professional, Delegation of Authority, Internal Audit, Compliance, Risk Mgmt).
- **Research hub** — category chips + 9-card research grid.
- **Resources** — 6 downloadable-template cards.
- **About / Why GRC Forge** — 4 principle cards.
- Updates timeline + Design-system documentation section + closing CTA panel + 7-column footer.
- **Tweaks panel** (floating, bottom-right): theme (dark/light), direction (LTR/RTL with full
  Arabic copy swap via `data-i18n`), density (airy/balanced/dense), accent palette
  (gold/platinum/copper). All persisted to `localStorage`.
- Scroll-reveal animations (IntersectionObserver) on every section.

## URLs
- **Local sandbox preview**: served on port 3000 via `wrangler pages dev`
- **Production**: not yet deployed (see Deployment section)

## Data Architecture
- **No backend/database** — this is a static marketing/product-tour site. All "live" data
  (prices, stats) is illustrative and hardcoded in the reference HTML / `ticker.js`.
- **Client-side state only**: theme/direction/density/accent preferences in `localStorage`;
  Gold Planner inputs are ephemeral component state recomputed on every slider/segment change.
- **Static assets**: `public/static/css/{tokens,app}.css` (design tokens + component styles),
  `public/static/js/{i18n,tweaks,planner,reveal,ticker}.js`.

## User Guide
1. Open the site — lands on the Hero section.
2. Use the sticky nav (or scroll) to jump to Intelligence, Governance, Business, Venture, AI,
   Research, Resources, or About.
3. In the **Intelligence** section, use the Gold Investment Planner: drag the amount/horizon
   sliders and click risk-profile / entry-timing buttons — allocation %, donut chart, break-even
   and 3-scenario chart recalculate live. Not financial advice — MVP/educational only.
4. Use the bottom-right **Tweaks** panel to toggle dark/light theme, LTR/RTL (English/Arabic),
   density, and accent color.

## Deployment
- **Platform**: Cloudflare Pages (target)
- **Status**: ✅ Running locally in sandbox (PM2 + `wrangler pages dev`) — not yet deployed to
  production Cloudflare Pages.
- **Tech Stack**: Hono (backend serves the full HTML via a single route) + static CSS/JS design
  system assets served from `/static/*` + Cloudflare Workers/Pages runtime.
- **Last Updated**: 2026-07-18
