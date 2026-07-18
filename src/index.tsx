import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

app.use('/static/*', serveStatic({ root: './public' }))

app.get('/', (c) => {
  return c.html(PAGE_HTML)
})

const PAGE_HTML = `<!doctype html>
<html lang="en" data-mode="dark" data-density="balanced" data-accent="gold" dir="ltr">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>GRC Forge — Governance, Risk &amp; Decisions, forged into instruments.</title>
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='6' fill='%23C9A34A'/%3E%3C/svg%3E">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Fraunces:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=JetBrains+Mono:wght@400;500&family=Cairo:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/static/css/tokens.css">
<link rel="stylesheet" href="/static/css/app.css">
</head>
<body>

<!-- ================= NAV ================= -->
<header class="nav" role="banner">
  <a class="nav__brand" href="#top" aria-label="GRC Forge home">
    <span class="nav__brand-mark" aria-hidden="true"></span>
    <span data-i18n="brand">GRC · FORGE</span>
  </a>
  <nav class="nav__links" aria-label="Primary">
    <a href="#intelligence" data-i18n="nav.intelligence">Intelligence</a>
    <a href="#governance" data-i18n="nav.governance">Governance</a>
    <a href="#business" data-i18n="nav.business">Business</a>
    <a href="#venture" data-i18n="nav.venture">Venture</a>
    <a href="#ai" data-i18n="nav.ai">AI</a>
    <a href="#research" data-i18n="nav.research">Research</a>
    <a href="#resources" data-i18n="nav.resources">Resources</a>
    <a href="#about" data-i18n="nav.about">About</a>
  </nav>
  <div class="nav__actions">
    <button class="nav__icon-btn" id="rtl-toggle" title="Toggle Arabic / RTL" aria-label="Toggle Arabic">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M4 7h16M4 12h10M4 17h16"/></svg>
    </button>
    <button class="nav__icon-btn" id="mode-toggle" title="Toggle theme" aria-label="Toggle theme">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>
    </button>
    <a href="#governance" class="btn" style="padding: 8px 14px; font-size: 13px;">
      <span data-i18n="nav.launch">Launch platform</span>
      <span class="btn__arrow">→</span>
    </a>
  </div>
</header>

<!-- ================= HERO ================= -->
<section class="hero" id="top">
  <div class="hero__glow" aria-hidden="true"></div>
  <div class="hero__grid-bg" aria-hidden="true"></div>
  <div class="container">
    <div class="hero__inner">

      <div>
        <div class="hero__eyebrow-row" data-reveal>
          <span class="eyebrow"><span data-i18n="hero.eyebrow">Professional intelligence platform</span></span>
          <span class="hero__coord">24°42′N · 46°43′E</span>
          <span class="badge badge--live"><span class="badge__dot"></span>System online</span>
        </div>

        <h1 data-reveal data-i18n-html="hero.headline">
          Governance, risk<br>
          &amp; decisions — <span class="serif">forged</span><br>
          into instruments.
        </h1>

        <p class="hero__sub" data-reveal data-i18n="hero.sub">
          GRC Forge builds interactive tools for the people who make decisions under pressure —
          risk officers, auditors, consultants, gold investors and founders. Not more articles. Real instruments.
        </p>

        <div class="hero__cta" data-reveal>
          <a href="#governance" class="btn">
            <span data-i18n="hero.cta.primary">Enter Governance</span>
            <span class="btn__arrow">→</span>
          </a>
          <a href="#platforms" class="btn btn--ghost">
            <span data-i18n="hero.cta.secondary">Tour the pillars</span>
          </a>
        </div>
      </div>

      <!-- Live console mock -->
      <div class="console" data-reveal aria-hidden="true">
        <div class="console__head">
          <div class="console__title">
            <span class="console__dots"><span></span><span></span><span></span></span>
            <span>GRC · <strong>Forge Console</strong> / v1.0</span>
          </div>
          <span class="mono" style="color: var(--success);">● LIVE</span>
        </div>

        <div class="console__body">
          <div class="stat">
            <div class="stat__label">Gold / oz</div>
            <div class="stat__value">2,384</div>
            <div class="stat__delta">▲ +1.84%</div>
          </div>
          <div class="stat">
            <div class="stat__label">24K / gram · SAR</div>
            <div class="stat__value">287.6</div>
            <div class="stat__delta">▲ +0.52%</div>
          </div>
          <div class="stat">
            <div class="stat__label">Risk index</div>
            <div class="stat__value">18</div>
            <div class="stat__delta stat__delta--flat">— stable</div>
          </div>
        </div>

        <div class="console__row">
          <div class="console__list">
            <div class="console__list-item"><span>Compliance coverage</span><strong>92%</strong></div>
            <div class="console__list-item"><span>Open controls</span><strong>134</strong></div>
            <div class="console__list-item"><span>Decision readiness</span><strong>86</strong></div>
          </div>
          <div class="mini-chart">
            <div class="mini-chart__label">7-day trend</div>
            <svg viewBox="0 0 200 40" preserveAspectRatio="none">
              <defs>
                <linearGradient id="sparkFill" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0" stop-color="var(--gold)" stop-opacity="0.3"/>
                  <stop offset="1" stop-color="var(--gold)" stop-opacity="0"/>
                </linearGradient>
              </defs>
              <path d="M0,30 L20,24 L40,26 L60,18 L80,20 L100,14 L120,16 L140,10 L160,12 L180,6 L200,8 L200,40 L0,40 Z" fill="url(#sparkFill)"/>
              <path d="M0,30 L20,24 L40,26 L60,18 L80,20 L100,14 L120,16 L140,10 L160,12 L180,6 L200,8" fill="none" stroke="var(--gold)" stroke-width="1.5"/>
            </svg>
            <div class="mini-chart__value">+4.2% <span class="mono" style="color:var(--text-3)">7D</span></div>
          </div>
        </div>
      </div>

    </div>

    <!-- Ticker -->
    <div class="ticker" data-reveal>
      <div class="ticker__track" id="ticker-track">
        <!-- populated by JS -->
      </div>
    </div>
  </div>
</section>

<!-- ================= METRICS ================= -->
<section class="section section--tight">
  <div class="container">
    <div class="metrics">
      <div class="metrics__cell">
        <div class="metrics__value">05</div>
        <div class="metrics__label" data-i18n="metrics.pillars">Practice pillars — Intelligence, Governance, Business, Venture and AI</div>
      </div>
      <div class="metrics__cell">
        <div class="metrics__value">20+</div>
        <div class="metrics__label" data-i18n="metrics.tools">Modules across the pillars in the 2026 roadmap</div>
      </div>
      <div class="metrics__cell">
        <div class="metrics__value">2</div>
        <div class="metrics__label" data-i18n="metrics.lang">Languages supported — English and Arabic, RTL native</div>
      </div>
      <div class="metrics__cell">
        <div class="metrics__value">01</div>
        <div class="metrics__label" data-i18n="metrics.brand">Unified brand system across every product surface</div>
      </div>
    </div>
  </div>
</section>

<!-- ================= PLATFORMS ================= -->
<section class="section" id="platforms">
  <div class="container">
    <div class="section-head" data-reveal>
      <div class="section-head__row">
        <div>
          <span class="eyebrow"><span data-i18n="platforms.eyebrow">Section 01 — Pillars</span></span>
          <h2 class="h2" style="margin-top: 18px;">Five practice pillars.<br>
            <span class="serif" style="color: var(--gold-light);">One shared spine.</span></h2>
        </div>
        <p class="lead" style="max-width: 42ch;">
          Every pillar inherits the same design language, data model and disclaimers.
          Learn one module; you already know the rest.
        </p>
      </div>
      <hr class="hairline">
    </div>

    <div class="pillars">
      <!-- 01 Intelligence -->
      <article class="pillar" data-reveal>
        <div class="pillar__head">
          <span class="pillar__ordinal">01</span>
          <div class="pillar__meta">
            <span class="badge badge--live"><span class="badge__dot"></span>Live</span>
            <span class="mono">3 modules</span>
          </div>
        </div>
        <h3 class="pillar__title">Intelligence</h3>
        <p class="pillar__desc">Market, gold and applied AI research — turned into planners, calculators and reference feeds you can actually act on.</p>
        <ul class="pillar__submodules">
          <li><span class="pillar__sub-num">1.1</span><span class="pillar__sub-name">Gold Intelligence</span><span class="badge badge--live" style="padding:2px 8px;">Live</span></li>
          <li><span class="pillar__sub-num">1.2</span><span class="pillar__sub-name">Market Intelligence</span><span class="badge badge--soon" style="padding:2px 8px;">Q4 2026</span></li>
          <li><span class="pillar__sub-num">1.3</span><span class="pillar__sub-name">AI Research</span><span class="badge badge--beta" style="padding:2px 8px;">Beta</span></li>
        </ul>
        <div class="pillar__preview">
          <div class="mock-grid">
            <div class="mock-cell">Gold / oz<strong>2,384</strong></div>
            <div class="mock-cell">24K / g<strong>287.6</strong></div>
            <div class="mock-cell">Premium<strong>3.4%</strong></div>
            <div class="mock-cell">Entry<strong style="color: var(--success);">Good</strong></div>
          </div>
        </div>
        <a href="#intelligence" class="pillar__cta">Launch Gold Intelligence <span>→</span></a>
      </article>

      <!-- 02 Governance -->
      <article class="pillar" data-reveal>
        <div class="pillar__head">
          <span class="pillar__ordinal">02</span>
          <div class="pillar__meta">
            <span class="badge badge--soon"><span class="badge__dot"></span>Coming Soon</span>
            <span class="mono">5 modules</span>
          </div>
        </div>
        <h3 class="pillar__title">Governance</h3>
        <p class="pillar__desc">SAP GRC, internal audit, compliance and enterprise risk — reframed as instruments a working risk officer would use on a Monday morning.</p>
        <ul class="pillar__submodules">
          <li><span class="pillar__sub-num">2.1</span><span class="pillar__sub-name">GRC Professional</span><span class="badge badge--soon" style="padding:2px 8px;">Q3 2026</span></li>
          <li><span class="pillar__sub-num">2.2</span><span class="pillar__sub-name">SAP GRC</span><span class="badge badge--soon" style="padding:2px 8px;">Q3 2026</span></li>
          <li><span class="pillar__sub-num">2.3</span><span class="pillar__sub-name">Internal Audit</span><span class="badge" style="padding:2px 8px;">Q4 2026</span></li>
          <li><span class="pillar__sub-num">2.4</span><span class="pillar__sub-name">Compliance</span><span class="badge" style="padding:2px 8px;">Q1 2027</span></li>
          <li><span class="pillar__sub-num">2.5</span><span class="pillar__sub-name">Risk Management</span><span class="badge" style="padding:2px 8px;">Q1 2027</span></li>
        </ul>
        <a href="#governance" class="pillar__cta">Preview Governance teaser <span>→</span></a>
      </article>

      <!-- 03 Business -->
      <article class="pillar" data-reveal>
        <div class="pillar__head">
          <span class="pillar__ordinal">03</span>
          <div class="pillar__meta">
            <span class="badge badge--future"><span class="badge__dot"></span>Future</span>
            <span class="mono">5 modules</span>
          </div>
        </div>
        <h3 class="pillar__title">Business</h3>
        <p class="pillar__desc">Executive dashboards, KPI trackers and strategic decision engines. For leaders who need to convert uncertainty into direction — fast.</p>
        <ul class="pillar__submodules">
          <li><span class="pillar__sub-num">3.1</span><span class="pillar__sub-name">Consulting</span><span class="badge" style="padding:2px 8px;">Roadmap</span></li>
          <li><span class="pillar__sub-num">3.2</span><span class="pillar__sub-name">Strategy</span><span class="badge" style="padding:2px 8px;">Roadmap</span></li>
          <li><span class="pillar__sub-num">3.3</span><span class="pillar__sub-name">Operating Model</span><span class="badge" style="padding:2px 8px;">Roadmap</span></li>
          <li><span class="pillar__sub-num">3.4</span><span class="pillar__sub-name">Digital Transformation</span><span class="badge" style="padding:2px 8px;">Roadmap</span></li>
          <li><span class="pillar__sub-num">3.5</span><span class="pillar__sub-name">Performance</span><span class="badge" style="padding:2px 8px;">Roadmap</span></li>
        </ul>
        <a href="#business" class="pillar__cta">Coming soon <span>→</span></a>
      </article>

      <!-- 04 Venture -->
      <article class="pillar" data-reveal>
        <div class="pillar__head">
          <span class="pillar__ordinal">04</span>
          <div class="pillar__meta">
            <span class="badge badge--future"><span class="badge__dot"></span>Future</span>
            <span class="mono">4 modules</span>
          </div>
        </div>
        <h3 class="pillar__title">Venture</h3>
        <p class="pillar__desc">A founder's operating console — entrepreneurship, MVP framing, funding readiness and scaling math. Built by someone who has done it, not written about it.</p>
        <ul class="pillar__submodules">
          <li><span class="pillar__sub-num">4.1</span><span class="pillar__sub-name">Entrepreneurship</span><span class="badge" style="padding:2px 8px;">Roadmap</span></li>
          <li><span class="pillar__sub-num">4.2</span><span class="pillar__sub-name">Startup Builder</span><span class="badge" style="padding:2px 8px;">Roadmap</span></li>
          <li><span class="pillar__sub-num">4.3</span><span class="pillar__sub-name">Funding</span><span class="badge" style="padding:2px 8px;">Roadmap</span></li>
          <li><span class="pillar__sub-num">4.4</span><span class="pillar__sub-name">Scaling</span><span class="badge" style="padding:2px 8px;">Roadmap</span></li>
        </ul>
        <a href="#venture" class="pillar__cta">Coming soon <span>→</span></a>
      </article>

      <!-- 05 AI -->
      <article class="pillar" data-reveal>
        <div class="pillar__head">
          <span class="pillar__ordinal">05</span>
          <div class="pillar__meta">
            <span class="badge badge--future"><span class="badge__dot"></span>Future</span>
            <span class="mono">4 modules</span>
          </div>
        </div>
        <h3 class="pillar__title">AI</h3>
        <p class="pillar__desc">Domain advisors — Gold AI, GRC AI, Business AI, Venture AI — grounded in the same knowledge base powering every pillar. Not chatbots. Reasoning surfaces.</p>
        <ul class="pillar__submodules">
          <li><span class="pillar__sub-num">5.1</span><span class="pillar__sub-name">Gold AI</span><span class="badge" style="padding:2px 8px;">Roadmap</span></li>
          <li><span class="pillar__sub-num">5.2</span><span class="pillar__sub-name">GRC AI</span><span class="badge" style="padding:2px 8px;">Roadmap</span></li>
          <li><span class="pillar__sub-num">5.3</span><span class="pillar__sub-name">Business AI</span><span class="badge" style="padding:2px 8px;">Roadmap</span></li>
          <li><span class="pillar__sub-num">5.4</span><span class="pillar__sub-name">Venture AI</span><span class="badge" style="padding:2px 8px;">Roadmap</span></li>
        </ul>
        <div class="pillar__preview" style="display: grid; gap: 8px; padding: 12px;">
          <div class="console__list-item" style="background: var(--surface); font-size: 12px;">
            <span style="color: var(--gold);">›</span> <span>What's the SoD conflict for FI-CO role bundle?</span> <strong style="color:var(--success)">▲</strong>
          </div>
          <div class="console__list-item" style="background: var(--surface-2); font-size: 11.5px; color: var(--text-3);">
            <em>Analyzing · 2 conflicts detected in transaction group FB60 ↔ MIRO...</em>
          </div>
        </div>
        <a href="#ai" class="pillar__cta">Coming soon <span>→</span></a>
      </article>

      <!-- 06 Research + Resources + About : flat pillars -->
      <article class="pillar pillar--flat" data-reveal>
        <div class="pillar__head">
          <span class="pillar__ordinal">06</span>
          <div class="pillar__meta">
            <span class="badge badge--beta"><span class="badge__dot"></span>Beta v1</span>
            <span class="mono">Rolling</span>
          </div>
        </div>
        <h3 class="pillar__title">Research · Resources · About</h3>
        <p class="pillar__desc">Applied frameworks, working papers, downloadable toolkits — and the story behind why GRC Forge exists.</p>
        <ul class="pillar__submodules">
          <li><span class="pillar__sub-num">→</span><span class="pillar__sub-name">Research Hub — 24 publications</span><a href="#research" class="pillar__sub-link">Browse →</a></li>
          <li><span class="pillar__sub-num">→</span><span class="pillar__sub-name">Resources — templates &amp; toolkits</span><a href="#resources" class="pillar__sub-link">Open →</a></li>
          <li><span class="pillar__sub-num">→</span><span class="pillar__sub-name">About — mission &amp; principles</span><a href="#about" class="pillar__sub-link">Read →</a></li>
        </ul>
      </article>
    </div>
  </div>
</section>

<!-- ================= INTELLIGENCE : featured module = Gold Intelligence ================= -->
<section class="section" id="intelligence">
  <div class="container">
    <div class="featured__header" data-reveal>
      <div>
        <span class="eyebrow"><span data-i18n="gold.eyebrow">Section 02 — Intelligence · Gold Intelligence</span></span>
        <h2 class="h2" style="margin-top: 18px;">Gold, <span class="serif" style="color: var(--gold-light);">without the guesswork.</span></h2>
        <p class="lead" style="margin-top: 20px;">
          The Investment Planner turns your budget, horizon and risk appetite into a concrete
          allocation, three scenarios and a break-even. Move the sliders — it recalculates live.
        </p>
      </div>
      <div style="display:flex; gap: 8px; flex-wrap: wrap;">
        <span class="badge badge--live"><span class="badge__dot"></span>MVP</span>
        <span class="badge">Educational only</span>
        <span class="badge">Not financial advice</span>
      </div>
    </div>

    <!-- ============ PLANNER ============ -->
    <div class="planner" data-reveal>
      <div class="planner__head">
        <div class="planner__title">
          <span class="console__dots"><span></span><span></span><span></span></span>
          <strong>GOLD · INVESTMENT PLANNER</strong>
          <span>/ v1.0 MVP</span>
        </div>
        <div style="display: flex; gap: 20px; align-items: center;">
          <span class="mono"><span style="color: var(--success)">●</span> Live reference · 24K SAR/g <strong id="ref-price" style="color: var(--text);">287.60</strong></span>
        </div>
      </div>

      <div class="planner__body">
        <!-- Inputs -->
        <div class="planner__inputs">

          <div class="field">
            <div class="field__label">
              <span>Investment amount</span>
              <strong id="amount-label">100,000 SAR</strong>
            </div>
            <input type="range" id="amount" class="slider" min="5000" max="1000000" step="5000" value="100000">
            <div style="display:flex; justify-content: space-between; margin-top: 8px;" class="mono">
              <span>5,000</span><span>1,000,000</span>
            </div>
          </div>

          <div class="field">
            <div class="field__label">
              <span>Time horizon</span>
              <strong id="horizon-label">5 years</strong>
            </div>
            <input type="range" id="horizon" class="slider" min="1" max="20" step="1" value="5">
            <div style="display:flex; justify-content: space-between; margin-top: 8px;" class="mono">
              <span>1Y</span><span>20Y</span>
            </div>
          </div>

          <div class="field">
            <div class="field__label">
              <span>Risk profile</span>
              <strong id="risk-label">Balanced</strong>
            </div>
            <div class="segmented" id="risk-seg">
              <button data-val="conservative">Conservative</button>
              <button data-val="balanced" aria-pressed="true">Balanced</button>
              <button data-val="aggressive">Aggressive</button>
            </div>
          </div>

          <div class="field">
            <div class="field__label">
              <span>Entry timing</span>
              <strong id="entry-label">Immediate</strong>
            </div>
            <div class="segmented" id="entry-seg">
              <button data-val="immediate" aria-pressed="true">Immediate</button>
              <button data-val="staggered">Staggered · 6mo</button>
              <button data-val="dca">DCA · 12mo</button>
            </div>
          </div>

          <div class="disclaimer">
            <strong>⚠</strong>
            <span>Reference values only. Simulated on a hardcoded 24K SAR/gram reference price. Not investment advice — consult a licensed advisor.</span>
          </div>
        </div>

        <!-- Outputs -->
        <div class="planner__outputs">

          <div class="result-grid">
            <div class="result-card">
              <div class="result-card__label">Suggested gold allocation</div>
              <div class="result-card__value"><span id="alloc-pct">25</span><span class="result-card__unit">%</span></div>
              <div class="mono" style="margin-top: 6px; color: var(--text-2)">of your portfolio</div>
            </div>

            <div class="donut-block">
              <div class="donut">
                <svg viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="46" fill="none" stroke="var(--surface-3)" stroke-width="12"/>
                  <circle id="donut-arc" cx="60" cy="60" r="46" fill="none" stroke="var(--gold)"
                          stroke-width="12" stroke-linecap="butt"
                          transform="rotate(-90 60 60)"
                          stroke-dasharray="72 289" stroke-dashoffset="0"/>
                </svg>
                <div class="donut__center">
                  <strong id="alloc-grams">87</strong>
                  <span>grams · 24K</span>
                </div>
              </div>
              <div class="legend">
                <div class="legend__item">
                  <span class="legend__swatch" style="background: var(--gold);"></span>
                  Gold allocation
                  <span class="legend__value" id="legend-gold">25,000 SAR</span>
                </div>
                <div class="legend__item">
                  <span class="legend__swatch" style="background: var(--surface-3);"></span>
                  Other assets
                  <span class="legend__value" id="legend-other">75,000 SAR</span>
                </div>
                <div class="legend__item">
                  <span class="legend__swatch" style="background: transparent; border: 1px dashed var(--border-strong);"></span>
                  Break-even entry
                  <span class="legend__value" id="legend-breakeven">297.66 SAR/g</span>
                </div>
              </div>
            </div>
          </div>

          <div class="chart-line">
            <div class="chart-line__head">
              <span class="chart-line__title">3 scenarios · <span id="chart-years">5</span> years</span>
              <div class="chart-line__legend">
                <span class="l-worst">Worst</span>
                <span class="l-base">Base</span>
                <span class="l-best">Best</span>
              </div>
            </div>
            <svg id="scenario-chart" viewBox="0 0 600 200" preserveAspectRatio="none" style="width:100%; height: 200px;">
              <!-- populated by JS -->
            </svg>
          </div>

          <div class="scenarios">
            <div class="scenario scenario--worst">
              <div class="scenario__name">Worst · –12%</div>
              <div class="scenario__value" id="scenario-worst">22,000</div>
              <div class="scenario__pct" id="scenario-worst-pct">–12.0% · 3,300 SAR loss</div>
            </div>
            <div class="scenario">
              <div class="scenario__name">Base · +38%</div>
              <div class="scenario__value" id="scenario-base">34,500</div>
              <div class="scenario__pct" id="scenario-base-pct">+38.0% · 9,500 SAR gain</div>
            </div>
            <div class="scenario scenario--best">
              <div class="scenario__name">Best · +82%</div>
              <div class="scenario__value" id="scenario-best">45,500</div>
              <div class="scenario__pct" id="scenario-best-pct">+82.0% · 20,500 SAR gain</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Roadmap / future tools -->
    <div class="futures" data-reveal>
      <div class="future">
        <div class="future__icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 12h4l3-8 4 16 3-8h4"/></svg></div>
        <div class="future__title">Live price widget</div>
        <div class="future__desc">Real-time XAU/USD &amp; SAR/g feed with alerts. Q3 2026.</div>
      </div>
      <div class="future">
        <div class="future__icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 3v18"/></svg></div>
        <div class="future__title">Portfolio tracking</div>
        <div class="future__desc">Multi-position tracker with cost basis and premium roll-up.</div>
      </div>
      <div class="future">
        <div class="future__icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2v20M2 12h20"/></svg></div>
        <div class="future__title">VAT &amp; premium calculator</div>
        <div class="future__desc">Country-aware break-even math incl. VAT and dealer premium.</div>
      </div>
      <div class="future">
        <div class="future__icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/></svg></div>
        <div class="future__title">Gold AI advisor</div>
        <div class="future__desc">Ask questions grounded in market context and your positions.</div>
      </div>
    </div>
  </div>
</section>

<!-- ================= GOVERNANCE TEASER ================= -->
<section class="section" id="governance" style="background: linear-gradient(180deg, transparent 0%, var(--bg-elev) 30%, var(--bg-elev) 70%, transparent 100%);">
  <div class="container">
    <div class="section-head" data-reveal>
      <div class="section-head__row">
        <div>
          <span class="eyebrow">Section 03 — Governance · GRC Professional</span>
          <h2 class="h2" style="margin-top: 18px;">Governance,<br><span class="serif" style="color: var(--gold-light);">without the ceremony.</span></h2>
        </div>
        <p class="lead" style="max-width: 44ch;">
          SAP GRC, internal audit, compliance, risk management. Reframed as
          instruments a working risk officer would actually use on a Monday morning.
        </p>
      </div>
      <hr class="hairline">
    </div>

    <!-- Dashboard mock -->
    <div class="grc-dashboard" data-reveal>
      <div class="grc-dashboard__head">
        <div class="planner__title">
          <span class="console__dots"><span></span><span></span><span></span></span>
          <strong>GOVERNANCE · CONTROL PLANE</strong>
          <span>/ demo</span>
        </div>
        <span class="mono" style="color: var(--warning);">● PREVIEW · not connected</span>
      </div>
      <div class="grc-dashboard__body">
        <div class="grc-stat">
          <div class="grc-stat__label">Risk score</div>
          <div class="grc-stat__value">18</div>
          <div class="grc-stat__meta" style="color:var(--success)">▼ –3 this week</div>
        </div>
        <div class="grc-stat">
          <div class="grc-stat__label">Open issues</div>
          <div class="grc-stat__value">24</div>
          <div class="grc-stat__meta" style="color:var(--warning)">6 aging &gt; 30d</div>
        </div>
        <div class="grc-stat">
          <div class="grc-stat__label">Compliance</div>
          <div class="grc-stat__value">92%</div>
          <div class="grc-stat__meta">Target: 95%</div>
        </div>
        <div class="grc-stat">
          <div class="grc-stat__label">Controls</div>
          <div class="grc-stat__value">134</div>
          <div class="grc-stat__meta">128 automated · 6 manual</div>
        </div>
      </div>
      <div class="grc-tables">
        <div class="grc-table">
          <h4 class="h4" style="margin-bottom: 14px;">Approval workflow</h4>
          <div class="grc-table__row"><span>User access request · IT-Admin bundle</span><span class="mono">Rev 2/3</span><span class="badge badge--soon" style="padding: 2px 8px;">In review</span></div>
          <div class="grc-table__row"><span>Policy exception · vendor-master</span><span class="mono">SLA 4d</span><span class="badge" style="padding: 2px 8px;">Pending</span></div>
          <div class="grc-table__row"><span>Role change · FI Controller</span><span class="mono">v3.1</span><span class="badge badge--live" style="padding: 2px 8px;">Approved</span></div>
          <div class="grc-table__row"><span>Control test · SoD FB60↔MIRO</span><span class="mono">Auto</span><span class="badge badge--live" style="padding: 2px 8px;">Active</span></div>
        </div>
        <div class="grc-table">
          <h4 class="h4" style="margin-bottom: 14px;">Risk heat</h4>
          <div class="grc-table__row"><span>Segregation of duties</span><span class="mono">high</span><span style="color: var(--danger); font-family: var(--font-mono); font-size: 12px;">■■■■</span></div>
          <div class="grc-table__row"><span>Vendor master data</span><span class="mono">med</span><span style="color: var(--warning); font-family: var(--font-mono); font-size: 12px;">■■■</span></div>
          <div class="grc-table__row"><span>Delegation of authority</span><span class="mono">med</span><span style="color: var(--warning); font-family: var(--font-mono); font-size: 12px;">■■</span></div>
          <div class="grc-table__row"><span>Access recertification</span><span class="mono">low</span><span style="color: var(--success); font-family: var(--font-mono); font-size: 12px;">■</span></div>
        </div>
      </div>
    </div>

    <div class="grc-tools" data-reveal>
      <div class="grc-tool">
        <div class="grc-tool__num">2.1 · Q3 2026</div>
        <h4 class="h4">GRC Professional</h4>
        <p>SoD Analyzer, DoA Builder, Risk Matrix — the three core instruments packaged for enterprise risk teams.</p>
      </div>
      <div class="grc-tool">
        <div class="grc-tool__num">2.2 · Q3 2026</div>
        <h4 class="h4">SAP GRC</h4>
        <p>Role bundles, access risk analysis and emergency-access management — mapped to the SAP transaction reality.</p>
      </div>
      <div class="grc-tool">
        <div class="grc-tool__num">2.3 · Q4 2026</div>
        <h4 class="h4">Internal Audit</h4>
        <p>Audit universe, sampling plans and workpaper templates — with a live status board for open findings.</p>
      </div>
      <div class="grc-tool">
        <div class="grc-tool__num">2.4 · Q1 2027</div>
        <h4 class="h4">Compliance</h4>
        <p>Regulation-to-control mapping with obligation registers and evidence trails — exportable to the auditor's inbox.</p>
      </div>
      <div class="grc-tool">
        <div class="grc-tool__num">2.5 · Q1 2027</div>
        <h4 class="h4">Risk Management</h4>
        <p>Enterprise risk register, likelihood × impact matrices and residual-risk deltas after control uplift.</p>
      </div>
    </div>
  </div>
</section>

<!-- ================= RESEARCH HUB ================= -->
<section class="section" id="research">
  <div class="container">
    <div class="section-head" data-reveal>
      <div class="section-head__row">
        <div>
          <span class="eyebrow">Section 04 — Research</span>
          <h2 class="h2" style="margin-top: 18px;">Notes written<br><span class="serif" style="color: var(--gold-light);">to be used.</span></h2>
        </div>
        <p class="lead" style="max-width: 42ch;">
          Applied frameworks, working papers and short-form observations. All English/Arabic.
          Free to read; expensive to ignore.
        </p>
      </div>
      <hr class="hairline">
    </div>

    <div class="research-cats" data-reveal>
      <button class="research-cat is-active">All · 24</button>
      <button class="research-cat">Gold · 6</button>
      <button class="research-cat">Governance · 8</button>
      <button class="research-cat">Consulting · 5</button>
      <button class="research-cat">AI · 3</button>
      <button class="research-cat">Notes · 12</button>
    </div>

    <div class="research-grid" data-reveal>
      <a href="#" class="research">
        <div class="research__meta"><span>PAPER · 18 min</span><span>Jul 2026</span></div>
        <h3 class="research__title">Gold cycles 2020–2026: what worked, what didn't</h3>
        <p class="research__brief">Six years of allocation experiments through pandemic, inflation and rate shocks — with the entry rules that would have worked in each regime.</p>
        <div class="research__tags"><span class="tag">Gold</span><span class="tag">Cycles</span></div>
      </a>
      <a href="#" class="research">
        <div class="research__meta"><span>FRAMEWORK · 9 min</span><span>Jun 2026</span></div>
        <h3 class="research__title">SoD design patterns for mid-sized SAP tenants</h3>
        <p class="research__brief">Twelve archetype conflicts and the composite roles that consistently resolve them without paralyzing finance.</p>
        <div class="research__tags"><span class="tag">GRC</span><span class="tag">SAP</span></div>
      </a>
      <a href="#" class="research">
        <div class="research__meta"><span>NOTE · 4 min</span><span>Jun 2026</span></div>
        <h3 class="research__title">Executive decision loops · a working diagram</h3>
        <p class="research__brief">Why most exec dashboards fail on the second Tuesday of the quarter, and a two-layer alternative that survives.</p>
        <div class="research__tags"><span class="tag">Consulting</span></div>
      </a>
      <a href="#" class="research">
        <div class="research__meta"><span>PAPER · 22 min</span><span>May 2026</span></div>
        <h3 class="research__title">Delegation-of-Authority as a product surface</h3>
        <p class="research__brief">Treating DoA as a live app — not a PDF — with typed thresholds, escalation graphs and audit exports.</p>
        <div class="research__tags"><span class="tag">Governance</span><span class="tag">DoA</span></div>
      </a>
      <a href="#" class="research">
        <div class="research__meta"><span>NOTE · 3 min</span><span>May 2026</span></div>
        <h3 class="research__title">The 24K premium math nobody teaches</h3>
        <p class="research__brief">Dealer premium, VAT, spread and refining margin — combined into a single break-even you can carry to a shop.</p>
        <div class="research__tags"><span class="tag">Gold</span><span class="tag">Retail</span></div>
      </a>
      <a href="#" class="research">
        <div class="research__meta"><span>FRAMEWORK · 12 min</span><span>Apr 2026</span></div>
        <h3 class="research__title">Founder funding readiness · a 24-point checklist</h3>
        <p class="research__brief">What we look for before a founder meets money — grounded in fifteen years of teardowns and post-mortems.</p>
        <div class="research__tags"><span class="tag">Startup</span><span class="tag">Funding</span></div>
      </a>
      <a href="#" class="research">
        <div class="research__meta"><span>PAPER · 15 min</span><span>Apr 2026</span></div>
        <h3 class="research__title">AI advisors, grounded in your own knowledge base</h3>
        <p class="research__brief">A pragmatic architecture for domain LLMs that cite their sources — and know when to say "I don't know".</p>
        <div class="research__tags"><span class="tag">AI</span><span class="tag">Architecture</span></div>
      </a>
      <a href="#" class="research">
        <div class="research__meta"><span>NOTE · 5 min</span><span>Mar 2026</span></div>
        <h3 class="research__title">Why "risk appetite" statements almost always lie</h3>
        <p class="research__brief">And the two-column exercise that forces the truth into the open. Short. Uncomfortable. Useful.</p>
        <div class="research__tags"><span class="tag">Risk</span><span class="tag">Governance</span></div>
      </a>
      <a href="#" class="research">
        <div class="research__meta"><span>PAPER · 20 min</span><span>Mar 2026</span></div>
        <h3 class="research__title">Bilingual product design · Arabic as first-class</h3>
        <p class="research__brief">Type, RTL, numerals and cultural framing — designing platforms that don't feel like translated afterthoughts.</p>
        <div class="research__tags"><span class="tag">Design</span><span class="tag">Arabic</span></div>
      </a>
    </div>
  </div>
</section>

<!-- ================= RESOURCES ================= -->
<section class="section" id="resources" style="background: linear-gradient(180deg, transparent 0%, var(--bg-elev) 30%, var(--bg-elev) 70%, transparent 100%);">
  <div class="container">
    <div class="section-head" data-reveal>
      <div class="section-head__row">
        <div>
          <span class="eyebrow">Section 05 — Resources</span>
          <h2 class="h2" style="margin-top: 18px;">Templates,<br><span class="serif" style="color: var(--gold-light);">toolkits, downloads.</span></h2>
        </div>
        <p class="lead" style="max-width: 42ch;">
          Working files you can lift and adapt. Spreadsheets, matrices, checklists — the
          same instruments we use in engagements, minus the client watermark.
        </p>
      </div>
      <hr class="hairline">
    </div>

    <div class="resources-grid" data-reveal>
      <a href="#" class="resource">
        <div class="resource__meta"><span class="mono">XLSX · 24 KB</span><span class="badge badge--live" style="padding:2px 8px;">Live</span></div>
        <h4 class="h4" style="margin-top: 8px;">SoD conflict matrix · SAP FI/CO</h4>
        <p class="resource__desc">Twelve archetype conflicts, colour-coded severity, composite-role suggestions.</p>
        <span class="resource__cta">Download <span>↓</span></span>
      </a>
      <a href="#" class="resource">
        <div class="resource__meta"><span class="mono">PDF · 1.2 MB</span><span class="badge badge--live" style="padding:2px 8px;">Live</span></div>
        <h4 class="h4" style="margin-top: 8px;">Delegation-of-Authority template</h4>
        <p class="resource__desc">Thresholds, approval chains and escalation paths for a mid-sized enterprise.</p>
        <span class="resource__cta">Download <span>↓</span></span>
      </a>
      <a href="#" class="resource">
        <div class="resource__meta"><span class="mono">XLSX · 48 KB</span><span class="badge badge--beta" style="padding:2px 8px;">Beta</span></div>
        <h4 class="h4" style="margin-top: 8px;">Gold allocation planner · offline</h4>
        <p class="resource__desc">The Investment Planner as a working spreadsheet — same math, no browser.</p>
        <span class="resource__cta">Download <span>↓</span></span>
      </a>
      <a href="#" class="resource">
        <div class="resource__meta"><span class="mono">DOCX · 96 KB</span><span class="badge" style="padding:2px 8px;">Preview</span></div>
        <h4 class="h4" style="margin-top: 8px;">Internal audit workpaper set</h4>
        <p class="resource__desc">Planning memo, sampling worksheet, finding template, closing letter.</p>
        <span class="resource__cta">Download <span>↓</span></span>
      </a>
      <a href="#" class="resource">
        <div class="resource__meta"><span class="mono">XLSX · 32 KB</span><span class="badge" style="padding:2px 8px;">Preview</span></div>
        <h4 class="h4" style="margin-top: 8px;">Enterprise risk register</h4>
        <p class="resource__desc">Likelihood × impact grid with control mapping and residual-risk deltas.</p>
        <span class="resource__cta">Download <span>↓</span></span>
      </a>
      <a href="#" class="resource">
        <div class="resource__meta"><span class="mono">PDF · 640 KB</span><span class="badge" style="padding:2px 8px;">Preview</span></div>
        <h4 class="h4" style="margin-top: 8px;">Founder funding readiness checklist</h4>
        <p class="resource__desc">24 points across product, market, team, capital table and metrics.</p>
        <span class="resource__cta">Download <span>↓</span></span>
      </a>
    </div>
  </div>
</section>

<!-- ================= ABOUT / WHY GRC FORGE ================= -->
<section class="section" id="about">
  <div class="container">
    <div class="section-head" data-reveal>
      <div class="section-head__row">
        <div>
          <span class="eyebrow">Section 07 — About</span>
          <h2 class="h2" style="margin-top: 18px;">Why <span class="serif" style="color: var(--gold-light);">GRC Forge</span> exists.</h2>
        </div>
      </div>
      <hr class="hairline">
    </div>

    <div class="why-grid">
      <div class="why" data-reveal>
        <div class="why__num">→ 01</div>
        <h3 class="why__title">Knowledge, not content</h3>
        <p class="why__desc">Everything here comes from doing the work. No filler articles, no SEO padding. If it's not useful on Monday morning, we don't publish it.</p>
      </div>
      <div class="why" data-reveal>
        <div class="why__num">→ 02</div>
        <h3 class="why__title">Instruments, not decks</h3>
        <p class="why__desc">A calculator you can use beats a chart you can look at. Every module ships as an interactive tool with real inputs and honest outputs.</p>
      </div>
      <div class="why" data-reveal>
        <div class="why__num">→ 03</div>
        <h3 class="why__title">Research-first</h3>
        <p class="why__desc">Frameworks are versioned. Numbers are cited. When we're guessing, we say so — clearly, in the same font as everything else.</p>
      </div>
      <div class="why" data-reveal>
        <div class="why__num">→ 04</div>
        <h3 class="why__title">Bilingual, natively</h3>
        <p class="why__desc">Arabic isn't a translation layer. Cairo type, RTL flow and cultural framing are designed in from the first draft — same for every language we add.</p>
      </div>
    </div>
  </div>
</section>

<!-- ================= UPDATES ================= -->
<section class="section section--tight">
  <div class="container">
    <div class="section-head" data-reveal>
      <div class="section-head__row">
        <div>
          <span class="eyebrow">Section 08 — Latest updates</span>
          <h2 class="h2" style="margin-top: 18px;">What we shipped.</h2>
        </div>
        <a href="#" class="pillar__cta">Full changelog <span>→</span></a>
      </div>
      <hr class="hairline">
    </div>

    <div class="updates">
      <div class="update" data-reveal>
        <div class="update__date">18 · JUL · 2026</div>
        <div class="update__body">
          <h4>Investment Planner v1.0 — MVP live</h4>
          <p>Three-slider allocation model with break-even math, scenario chart and full RTL support. Educational reference release.</p>
        </div>
        <span class="badge badge--live"><span class="badge__dot"></span>Live</span>
      </div>
      <div class="update" data-reveal>
        <div class="update__date">02 · JUL · 2026</div>
        <div class="update__body">
          <h4>Design system v1 — light + dark tokens</h4>
          <p>Complete token set for both modes, four accent palettes and Cairo typography wired into the Arabic layer.</p>
        </div>
        <span class="badge badge--live"><span class="badge__dot"></span>Live</span>
      </div>
      <div class="update" data-reveal>
        <div class="update__date">14 · JUN · 2026</div>
        <div class="update__body">
          <h4>GRC Professional teaser page</h4>
          <p>Control-plane dashboard preview and three future-tool cards (SoD Analyzer, DoA Builder, Risk Matrix) shipped as static teasers.</p>
        </div>
        <span class="badge badge--soon"><span class="badge__dot"></span>Preview</span>
      </div>
    </div>
  </div>
</section>

<!-- ================= DESIGN SYSTEM DOC ================= -->
<section class="section" id="system">
  <div class="container">
    <div class="section-head" data-reveal>
      <div class="section-head__row">
        <div>
          <span class="eyebrow">Section 09 — Design system</span>
          <h2 class="h2" style="margin-top: 18px;">The <span class="serif" style="color: var(--gold-light);">spine.</span></h2>
        </div>
        <p class="lead" style="max-width: 42ch;">
          Tokens, type, buttons, badges. Documented here, imported everywhere.
        </p>
      </div>
      <hr class="hairline">
    </div>

    <div class="ds-grid">
      <!-- Colors -->
      <div class="ds-card" data-reveal>
        <h4 class="h4">Color · Brand</h4>
        <div class="color-swatch"><span class="color-swatch__chip" style="background: #C9A34A;"></span><span class="color-swatch__name">Primary Gold</span><span class="color-swatch__hex">#C9A34A</span></div>
        <div class="color-swatch"><span class="color-swatch__chip" style="background: #F1D488;"></span><span class="color-swatch__name">Gold Light</span><span class="color-swatch__hex">#F1D488</span></div>
        <div class="color-swatch"><span class="color-swatch__chip" style="background: #8A6B24;"></span><span class="color-swatch__name">Gold Deep · light-mode primary</span><span class="color-swatch__hex">#8A6B24</span></div>
        <div class="color-swatch"><span class="color-swatch__chip" style="background: #CBD2DC;"></span><span class="color-swatch__name">Silver · secondary</span><span class="color-swatch__hex">#CBD2DC</span></div>
        <h4 class="h4" style="margin: 22px 0 12px;">Color · Surface (dark)</h4>
        <div class="color-swatch"><span class="color-swatch__chip" style="background: #050B12;"></span><span class="color-swatch__name">Background</span><span class="color-swatch__hex">#050B12</span></div>
        <div class="color-swatch"><span class="color-swatch__chip" style="background: #0B1623;"></span><span class="color-swatch__name">Surface</span><span class="color-swatch__hex">#0B1623</span></div>
        <div class="color-swatch"><span class="color-swatch__chip" style="background: #122131;"></span><span class="color-swatch__name">Surface 2</span><span class="color-swatch__hex">#122131</span></div>
        <div class="color-swatch"><span class="color-swatch__chip" style="background: #233445;"></span><span class="color-swatch__name">Border</span><span class="color-swatch__hex">#233445</span></div>
        <h4 class="h4" style="margin: 22px 0 12px;">Color · Semantic</h4>
        <div class="color-swatch"><span class="color-swatch__chip" style="background: #3CCB7F;"></span><span class="color-swatch__name">Success</span><span class="color-swatch__hex">#3CCB7F</span></div>
        <div class="color-swatch"><span class="color-swatch__chip" style="background: #F4B740;"></span><span class="color-swatch__name">Warning</span><span class="color-swatch__hex">#F4B740</span></div>
        <div class="color-swatch"><span class="color-swatch__chip" style="background: #E34D59;"></span><span class="color-swatch__name">Danger</span><span class="color-swatch__hex">#E34D59</span></div>
        <div class="color-swatch"><span class="color-swatch__chip" style="background: #4DA3FF;"></span><span class="color-swatch__name">Info</span><span class="color-swatch__hex">#4DA3FF</span></div>
      </div>

      <!-- Typography -->
      <div class="ds-card" data-reveal>
        <h4 class="h4">Type · Scale</h4>
        <div class="type-row"><span class="type-row__sample" style="font-size: 48px; letter-spacing: -0.035em; line-height: 1;">Aa Aa</span><span class="type-row__meta">H1 · 48–96 · Inter 500</span></div>
        <div class="type-row"><span class="type-row__sample serif" style="font-size: 38px; line-height: 1;">Practical</span><span class="type-row__meta">H1 accent · Fraunces italic</span></div>
        <div class="type-row"><span class="type-row__sample" style="font-size: 28px;">Section title</span><span class="type-row__meta">H2 · 30–44 · Inter 500</span></div>
        <div class="type-row"><span class="type-row__sample" style="font-size: 22px;">Card heading</span><span class="type-row__meta">H3 · 24–30 · Inter 500</span></div>
        <div class="type-row"><span class="type-row__sample" style="font-size: 18px;">Card subhead</span><span class="type-row__meta">H4 · 20–24 · Inter 500</span></div>
        <div class="type-row"><span class="type-row__sample" style="font-size: 16px;">Body copy at 16px reads best.</span><span class="type-row__meta">Body · 16 · Inter 400</span></div>
        <div class="type-row"><span class="type-row__sample" style="font-family: var(--font-mono); font-size: 12px; letter-spacing: 0.14em;">— MONO · EYEBROW LABEL</span><span class="type-row__meta">Mono · 12 · JB Mono 500</span></div>
        <div class="type-row"><span class="type-row__sample" style="font-family: 'Cairo'; font-size: 20px;">المعرفة مسبوكة قرارات</span><span class="type-row__meta">Arabic · Cairo 500</span></div>

        <h4 class="h4" style="margin: 22px 0 12px;">Buttons · States</h4>
        <div class="button-row">
          <button class="btn">Primary <span class="btn__arrow">→</span></button>
          <button class="btn btn--ghost">Ghost</button>
          <button class="btn btn--outline">Outline</button>
        </div>
        <div class="button-row">
          <button class="btn" disabled style="opacity: .5; cursor: not-allowed;">Disabled</button>
          <span class="badge badge--live"><span class="badge__dot"></span>Live</span>
          <span class="badge badge--soon"><span class="badge__dot"></span>Coming Soon</span>
          <span class="badge badge--beta"><span class="badge__dot"></span>Beta</span>
          <span class="badge">Neutral</span>
        </div>

        <h4 class="h4" style="margin: 22px 0 12px;">Motion · Levels</h4>
        <div class="type-row"><span class="type-row__sample">Level 1 — CSS hovers, fade-up on scroll</span><span class="type-row__meta">Built now</span></div>
        <div class="type-row"><span class="type-row__sample">Level 2 — GSAP text/image reveals, magnetic buttons</span><span class="type-row__meta">Phase 2</span></div>
        <div class="type-row"><span class="type-row__sample">Level 3 — Three.js hero orbit, particles</span><span class="type-row__meta">Phase 3, hero only</span></div>
      </div>
    </div>
  </div>
</section>

<!-- ================= CTA PANEL ================= -->
<section class="section">
  <div class="container">
    <div class="cta-panel" data-reveal>
      <span class="eyebrow" style="justify-content: center; display: inline-flex;">Ready when you are</span>
      <h2 class="h2" style="margin-top: 20px; max-width: 24ch; margin-inline: auto;">
        Build <span class="serif" style="color: var(--gold-light);">smarter</span> decisions —
        one instrument at a time.
      </h2>
      <p class="lead" style="margin-inline: auto; margin-top: 16px;">
        Start with the live tool. Come back when the next one ships.
      </p>
      <div class="cta-panel__actions">
        <a href="#intelligence" class="btn">Open Investment Planner <span class="btn__arrow">→</span></a>
        <a href="#platforms" class="btn btn--ghost">See all pillars</a>
      </div>
    </div>
  </div>
</section>

<!-- ================= FOOTER ================= -->
<footer class="footer">
  <div class="container">
    <div class="footer__grid footer__grid--wide">
      <div>
        <div class="footer__brand">GRC · FORGE</div>
        <div class="footer__tag">Governance, risk &amp; decisions — forged into instruments.</div>
      </div>
      <div class="footer__col">
        <h5>Intelligence</h5>
        <ul>
          <li><a href="#intelligence">Gold Intelligence</a></li>
          <li><a href="#">Market Intelligence</a></li>
          <li><a href="#">AI Research</a></li>
        </ul>
      </div>
      <div class="footer__col">
        <h5>Governance</h5>
        <ul>
          <li><a href="#governance">GRC Professional</a></li>
          <li><a href="#">SAP GRC</a></li>
          <li><a href="#">Internal Audit</a></li>
          <li><a href="#">Compliance</a></li>
          <li><a href="#">Risk Management</a></li>
        </ul>
      </div>
      <div class="footer__col">
        <h5>Business</h5>
        <ul>
          <li><a href="#">Consulting</a></li>
          <li><a href="#">Strategy</a></li>
          <li><a href="#">Operating Model</a></li>
          <li><a href="#">Digital Transformation</a></li>
          <li><a href="#">Performance</a></li>
        </ul>
      </div>
      <div class="footer__col">
        <h5>Venture</h5>
        <ul>
          <li><a href="#">Entrepreneurship</a></li>
          <li><a href="#">Startup Builder</a></li>
          <li><a href="#">Funding</a></li>
          <li><a href="#">Scaling</a></li>
        </ul>
      </div>
      <div class="footer__col">
        <h5>AI</h5>
        <ul>
          <li><a href="#">Gold AI</a></li>
          <li><a href="#">GRC AI</a></li>
          <li><a href="#">Business AI</a></li>
          <li><a href="#">Venture AI</a></li>
        </ul>
      </div>
      <div class="footer__col">
        <h5>More</h5>
        <ul>
          <li><a href="#research">Research</a></li>
          <li><a href="#resources">Resources</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Privacy &amp; Disclaimer</a></li>
        </ul>
      </div>
    </div>
    <div class="footer__bottom">
      <span>© 2026 GRC FORGE · All research is educational, not financial advice.</span>
      <span>V1.0 · BUILT IN THE OPEN</span>
    </div>
  </div>
</footer>

<!-- ================= TWEAKS PANEL ================= -->
<aside class="tweaks" id="tweaks-panel" aria-hidden="true">
  <div class="tweaks__head">
    <span class="tweaks__title">Tweaks</span>
    <button class="tweaks__close" id="tweaks-close" aria-label="Close">✕</button>
  </div>

  <div class="tweaks__group">
    <label class="tweaks__label">Theme</label>
    <div class="tweak-seg" data-tweak="mode">
      <button data-val="dark" aria-pressed="true">Dark</button>
      <button data-val="light">Light</button>
    </div>
  </div>

  <div class="tweaks__group">
    <label class="tweaks__label">Direction</label>
    <div class="tweak-seg" data-tweak="dir">
      <button data-val="ltr" aria-pressed="true">LTR · EN</button>
      <button data-val="rtl">RTL · AR</button>
    </div>
  </div>

  <div class="tweaks__group">
    <label class="tweaks__label">Density</label>
    <div class="tweak-seg" data-tweak="density">
      <button data-val="airy">Airy</button>
      <button data-val="balanced" aria-pressed="true">Balanced</button>
      <button data-val="dense">Dense</button>
    </div>
  </div>

  <div class="tweaks__group">
    <label class="tweaks__label">Accent palette</label>
    <div class="tweak-swatches" data-tweak="accent">
      <button class="tweak-swatch" data-val="gold" aria-pressed="true"
              title="Gold" style="background: linear-gradient(135deg, #C9A34A, #8A6B24);"></button>
      <button class="tweak-swatch" data-val="platinum"
              title="Platinum" style="background: linear-gradient(135deg, #E0E5EE, #6E7684);"></button>
      <button class="tweak-swatch" data-val="copper"
              title="Copper" style="background: linear-gradient(135deg, #E8A375, #7A4321);"></button>
    </div>
  </div>
</aside>

<script src="/static/js/i18n.js"></script>
<script src="/static/js/tweaks.js"></script>
<script src="/static/js/planner.js"></script>
<script src="/static/js/reveal.js"></script>
<script src="/static/js/ticker.js"></script>

</body>
</html>`

export default app
