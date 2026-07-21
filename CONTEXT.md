# GRC Forge — Project Context Brief

> **How to use this file:** Paste the whole thing at the top of every new component chat.
> It gives each fresh chat the shared context it otherwise wouldn't have.
> When a chat produces a real decision (a schema, an API route, a naming rule),
> come back and update the relevant section below so it propagates to the next chat.
> Keep the "STABLE" sections short and the "RUNNING LOGS" current.

---

## 1. PROJECT OVERVIEW  *(stable)*

**Product:** GRC Forge — a Governance, Risk & Compliance (GRC) toolkit for businesses.
**Sites:** www.grc-forge.com · grc-3q2.pages.dev
**Goal:** Grow into an enterprise-ready, highly available B2B SaaS. Free tools drive
organic traffic; premium/API tiers monetize (exported reports, custom branding,
team collaboration).

**Core tool modules (planned):**
- Policy Generator
- Risk Assessment Calculator
- Compliance Gap Analyzer
- Audit Readiness Checklist

---

## 2. STACK & HOSTING  *(stable)*

- **Frontend:** Vite + React + TypeScript. Production build output → `dist/`.
- **Hosting:** Cloudflare Pages (connected to GitHub for CI/CD).
- **Backend:** Cloudflare Pages Functions / Workers (edge-first).
- **Data:** Cloudflare D1 (relational), KV (sessions/cache/rate-limits), R2 (files/exports).
- **Payments (planned):** Stripe.
- **Observability (planned):** Sentry, Cloudflare Web Analytics / PostHog.

---

## 3. ENVIRONMENT & WORKFLOW CONSTRAINTS  *(stable — important, read every time)*

- **NO local terminal.** The founder works entirely in browser-based tools:
  GitHub Web IDE (github.dev / VS Code for Web) and the Cloudflare dashboard.
- **Do NOT suggest** `npm run dev`, git CLI, or local build commands unless explicitly asked.
- **DO provide:** complete copy-paste-ready code snippets + clear step-by-step UI actions
  (which dashboard button, which file to edit in the Web IDE).
- **Secrets** live in Cloudflare Environment Variables (dashboard) — never hard-coded,
  never committed. Local `.dev.vars` only if/when a local flow is introduced.

---

## 4. ARCHITECTURE DECISIONS  *(running log — update as you decide)*

Record each decision as one line so future chats don't re-litigate them.

| # | Decision | Chat / Date | Notes |
|---|----------|-------------|-------|
| 1 | _e.g. API lives in `/functions` as Pages Functions, not standalone Worker_ | L2 · YYYY-MM-DD | |
| 2 | | | |

---

## 5. DATA MODEL  *(running log — fill from the L1 Data chat)*

Once the schema exists, paste the current table list + key columns here so the
API and Feature chats build against the real shape.

**D1 tables:**
- `users` — _(id, email, ...)_
- `subscriptions` — _(...)_
- `assessments` — _(...)_
- `reports` — _(...)_

**KV namespaces:** _(sessions, cache, rate_limits, ...)_
**R2 buckets:** _(exports, ...)_

---

## 6. API CONTRACT  *(running log — fill from the L2 Backend chat)*

List routes as they're agreed so frontend and backend stay in sync.

| Method | Path | Purpose | Auth req'd | Tier |
|--------|------|---------|-----------|------|
| GET | `/api/health` | health check | no | free |
| | | | | |

---

## 7. CONVENTIONS  *(running log)*

- **Folder structure:** _(fill from L0 Foundation chat)_
- **Naming:** _(files, components, routes)_
- **Error handling:** _(standard error response shape, e.g. `{ error, code }`)_
- **Auth/session pattern:** _(fill from L3 Auth chat)_
- **Feature-gating pattern:** _(how free vs premium is checked)_

---

## 8. MONETIZATION MODEL  *(stable-ish)*

- **Free tier:** core tools usable, drives SEO traffic. Limits: _(e.g. no export, watermark)_
- **Premium tier:** _(exported PDF reports, custom branding, ...)_
- **Team tier:** _(collaboration, seats, ...)_
- **API tier:** _(programmatic access, ...)_

---

## 9. SECURITY POSTURE  *(running log — this IS part of the product for a GRC tool)*

- SSL: enforced via Cloudflare.
- Secrets: Cloudflare env vars only.
- Headers: CSP + CORS configured — _(status: TODO / done)_
- Rate limiting: _(via KV — status)_
- No real personal data / no fake compliance certs generated, ever.

---

## 10. CURRENT STATUS  *(running log — update as layers complete)*

| Layer | Component | Status |
|-------|-----------|--------|
| L0 | Foundation & Repo | ⬜ not started |
| L1 | Data & Storage | ⬜ |
| L2 | Backend / API | ⬜ |
| L3 | Auth & Roles | ⬜ |
| L4 | Frontend / UI system | ⬜ |
| L5 | Feature modules | ⬜ |
| L6 | Payments | ⬜ |
| — | Observability | ⬜ |
| — | Security hardening | ⬜ |

Legend: ⬜ not started · 🟨 in progress · ✅ done