import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

app.use('/static/*', serveStatic({ root: './public' }))

app.get('/', (c) => {
  return c.html(PAGE_HTML)
})

export default app

const PAGE_HTML = `<!doctype html>
<html lang="en" data-mode="dark" data-density="balanced" data-accent="gold" dir="ltr">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>GRC Forge — Governance, Risk &amp; Decisions, forged into instruments.</title>
<link rel="icon" href="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3E%3Cpath%20d='M32%204%20L54%2011%20V31%20C54%2047%2044%2055%2032%2060%20C20%2055%2010%2047%2010%2031%20V11%20Z'%20fill='%230E1B33'%20stroke='%23C9A34A'%20stroke-width='4'%20stroke-linejoin='round'/%3E%3Ccircle%20cx='32'%20cy='17'%20r='3.5'%20fill='%23C9A34A'/%3E%3Ccircle%20cx='23'%20cy='26'%20r='3.5'%20fill='%23C9A34A'/%3E%3Ccircle%20cx='41'%20cy='26'%20r='3.5'%20fill='%23C9A34A'/%3E%3Cpath%20d='M16%2034%20H48%20V40%20H38%20V45%20H42%20V50%20H22%20V45%20H26%20V40%20H16%20Z'%20fill='%23C9A34A'/%3E%3C/svg%3E">
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
    <svg class="nav__brand-mark" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <path d="M32 4 L54 11 V31 C54 47 44 55 32 60 C20 55 10 47 10 31 V11 Z" fill="var(--navy-shield)" stroke="var(--gold)" stroke-width="3" stroke-linejoin="round"/>
      <line x1="32" y1="16" x2="22" y2="26" stroke="var(--gold)" stroke-width="2"/>
      <line x1="32" y1="16" x2="42" y2="26" stroke="var(--gold)" stroke-width="2"/>
      <line x1="22" y1="26" x2="32" y2="36" stroke="var(--gold)" stroke-width="2"/>
      <line x1="42" y1="26" x2="32" y2="36" stroke="var(--gold)" stroke-width="2"/>
      <line x1="32" y1="36" x2="32" y2="42" stroke="var(--gold)" stroke-width="2"/>
      <circle cx="32" cy="16" r="3.2" fill="var(--gold)"/>
      <circle cx="22" cy="26" r="3.2" fill="var(--gold)"/>
      <circle cx="42" cy="26" r="3.2" fill="var(--gold)"/>
      <circle cx="32" cy="36" r="3.2" fill="var(--gold)"/>
      <path d="M17 42 H47 V46 H38 V49 H41 V52 H23 V49 H26 V46 H17 Z" fill="var(--gold)"/>
    </svg>
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
          <span class="eyebrow"><span data-i18n="platforms.eyebrow">Pillars</span></span>
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
          <div class="pillar__meta">
            <span class="badge badge--soon"><span class="badge__dot"></span>Coming Soon</span>
            <span class="mono">5 modules</span>
          </div>
        </div>
        <h3 class="pillar__title">Governance</h3>
        <p class="pillar__desc">Enterprise access governance, internal audit, compliance and enterprise risk — reframed as instruments a working risk officer would use on a Monday morning.</p>
        <ul class="pillar__submodules">
          <li><span class="pillar__sub-num">2.1</span><span class="pillar__sub-name">GRC Professional</span><span class="badge badge--soon" style="padding:2px 8px;">Q3 2026</span></li>
          <li><span class="pillar__sub-num">2.2</span><span class="pillar__sub-name">Delegation of Authority</span><span class="badge badge--soon" style="padding:2px 8px;">Q3 2026</span></li>
          <li><span class="pillar__sub-num">2.3</span><span class="pillar__sub-name">Internal Audit</span><span class="badge" style="padding:2px 8px;">Q4 2026</span></li>
          <li><span class="pillar__sub-num">2.4</span><span class="pillar__sub-name">Compliance</span><span class="badge" style="padding:2px 8px;">Q1 2027</span></li>
          <li><span class="pillar__sub-num">2.5</span><span class="pillar__sub-name">Risk Management</span><span class="badge" style="padding:2px 8px;">Q1 2027</span></li>
        </ul>
        <a href="#governance" class="pillar__cta">Preview Governance teaser <span>→</span></a>
      </article>

      <!-- 03 Business -->
      <article class="pillar" data-reveal>
        <div class="pillar__head">
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
        <a href="#business" class="pillar__cta">Explore Business Engine <span>→</span></a>
      </article>

      <!-- 04 Venture -->
      <article class="pillar" data-reveal>
        <div class="pillar__head">
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
        <a href="#venture" class="pillar__cta">Explore Venture Studio <span>→</span></a>
      </article>

      <!-- 05 AI -->
      <article class="pillar" data-reveal>
        <div class="pillar__head">
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
        <a href="#ai" class="pillar__cta">Explore AI Core <span>→</span></a>
      </article>

      <!-- 06 Research + Resources + About : flat pillars -->
      <article class="pillar pillar--flat" data-reveal>
        <div class="pillar__head">
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
        <span class="eyebrow"><span data-i18n="gold.eyebrow">Intelligence · Gold Intelligence</span></span>
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
          <span class="eyebrow">Governance · GRC Professional</span>
          <h2 class="h2" style="margin-top: 18px;">Governance,<br><span class="serif" style="color: var(--gold-light);">without the ceremony.</span></h2>
        </div>
        <p class="lead" style="max-width: 44ch;">
          Delegation of authority, internal audit, compliance, risk management. Reframed as
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
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ================= BUSINESS SECTION ================= -->
<section class="section" id="business">
  <div class="container">
    <div class="section-head" data-reveal>
      <div class="section-head__row">
        <div>
          <span class="eyebrow" style="color: var(--business, #10b981); border-color: var(--business, #10b981);">Pillar 03 · Business</span>
          <h2 class="h2" style="margin-top: 18px;">Business Engine,<br><span class="serif" style="color: var(--business, #10b981);">structured for performance.</span></h2>
        </div>
        <p class="lead" style="max-width: 44ch;">
          Executive consulting, operating model design, and digital transformation playbooks to convert strategic intent into measurable execution.
        </p>
      </div>
      <hr class="hairline">
    </div>

    <div class="pillars" data-reveal>
      <article class="pillar">
        <h3 class="pillar__title">Consulting &amp; Strategy</h3>
        <p class="pillar__desc">High-impact advisory frameworks for corporate strategy, market positioning, and executive decision intelligence under regulatory constraint.</p>
      </article>

      <article class="pillar">
        <h3 class="pillar__title">Operating Model</h3>
        <p class="pillar__desc">Designing modern, agile organizational structures that align governance with operational speed and clear accountability.</p>
      </article>

      <article class="pillar">
        <h3 class="pillar__title">Digital Transformation</h3>
        <p class="pillar__desc">Modernizing legacy enterprise processes through cloud-edge infrastructure, automated compliance, and real-time integrations.</p>
      </article>

      <article class="pillar">
        <h3 class="pillar__title">Performance &amp; Scale</h3>
        <p class="pillar__desc">Data-driven KPI frameworks, resource allocation models, and continuous improvement metrics tailored for high-growth firms.</p>
      </article>
    </div>
  </div>
</section>

<!-- ================= VENTURE SECTION ================= -->
<section class="section" id="venture" style="background: linear-gradient(180deg, transparent 0%, var(--bg-elev) 30%, var(--bg-elev) 70%, transparent 100%);">
  <div class="container">
    <div class="section-head" data-reveal>
      <div class="section-head__row">
        <div>
          <span class="eyebrow" style="color: var(--venture, #d97706); border-color: var(--venture, #d97706);">Pillar 04 · Venture</span>
          <h2 class="h2" style="margin-top: 18px;">Venture Studio,<br><span class="serif" style="color: var(--venture, #d97706);">forging new systems.</span></h2>
        </div>
        <p class="lead" style="max-width: 44ch;">
          Building, funding, and scaling the next generation of risk, governance, and enterprise SaaS companies from ground zero.
        </p>
      </div>
      <hr class="hairline">
    </div>

    <div class="pillars" data-reveal>
      <article class="pillar">
        <h3 class="pillar__title">Entrepreneurship</h3>
        <p class="pillar__desc">Incubating high-conviction ideas into market-ready SaaS instruments with compliance baked in from line one.</p>
      </article>

      <article class="pillar">
        <h3 class="pillar__title">Startup Builder</h3>
        <p class="pillar__desc">Practical execution frameworks, product architecture blueprints, and rapid prototyping workflows for technical founders.</p>
      </article>

      <article class="pillar">
        <h3 class="pillar__title">Funding &amp; Capital</h3>
        <p class="pillar__desc">Strategic seed investments, venture partnerships, and capital allocation models optimized for long-term equity growth.</p>
      </article>

      <article class="pillar">
        <h3 class="pillar__title">Scaling Math</h3>
        <p class="pillar__desc">Battle-tested playbooks for international market entry, customer acquisition mechanics, and enterprise sales readiness.</p>
      </article>
    </div>
  </div>
</section>

<!-- ================= AI SECTION ================= -->
<section class="section" id="ai">
  <div class="container">
    <div class="section-head" data-reveal>
      <div class="section-head__row">
        <div>
          <span class="eyebrow" style="color: var(--ai, #8b5cf6); border-color: var(--ai, #8b5cf6);">Pillar 05 · AI</span>
          <h2 class="h2" style="margin-top: 18px;">AI Intelligence Core,<br><span class="serif" style="color: var(--ai, #8b5cf6);">reasoning on data.</span></h2>
        </div>
        <p class="lead" style="max-width: 44ch;">
          Domain-specific artificial intelligence models powering decision intelligence across gold markets, enterprise risk, and venture scaling.
        </p>
      </div>
      <hr class="hairline">
    </div>

    <div class="pillars" data-reveal>
      <article class="pillar">
        <h3 class="pillar__title">Gold AI</h3>
        <p class="pillar__desc">Predictive market intelligence and physical asset modeling tuned for precision asset allocation and macro risk hedging.</p>
      </article>

      <article class="pillar">
        <h3 class="pillar__title">GRC AI</h3>
        <p class="pillar__desc">Automated regulatory tracking, policy generator, and real-time gap analysis reasoning engines grounded in audit standards.</p>
      </article>

      <article class="pillar">
        <h3 class="pillar__title">Business AI</h3>
        <p class="pillar__desc">Executive copilot for operational workflow optimization, financial scenario simulation, and organizational bottleneck analysis.</p>
      </article>

      <article class="pillar">
        <h3 class="pillar__title">Venture AI</h3>
        <p class="pillar__desc">Market opportunity detection, valuation assistance, and growth traction analytics tailored for startup investment boards.</p>
      </article>
    </div>
  </div>
</section>

<!-- ================= RESEARCH / RESOURCES / ABOUT ================= -->
<section class="section" id="research" style="background: linear-gradient(180deg, transparent 0%, var(--bg-elev) 30%, var(--bg-elev) 70%, transparent 100%);">
  <div class="container">
    <div class="section-head" data-reveal>
      <div class="section-head__row">
        <div>
          <span class="eyebrow">Knowledge &amp; Foundation</span>
          <h2 class="h2" style="margin-top: 18px;">Research, Resources &amp; About.</h2>
        </div>
        <p class="lead" style="max-width: 44ch;">
          Our open knowledge base, downloadable instruments, and the core philosophy driving GRC Forge.
        </p>
      </div>
      <hr class="hairline">
    </div>

    <div class="pillars" data-reveal id="resources">
      <article class="pillar">
        <h3 class="pillar__title">Research Hub</h3>
        <p class="pillar__desc">Applied whitepapers on gold market liquidity, governance automation, and edge decision engines.</p>
      </article>
      <article class="pillar">
        <h3 class="pillar__title">Resources &amp; Toolkits</h3>
        <p class="pillar__desc">Downloadable risk matrices, delegation of authority templates, and policy frameworks.</p>
      </article>
      <article class="pillar" id="about">
        <h3 class="pillar__title">About GRC Forge</h3>
        <p class="pillar__desc">Built to replace bloated advisory slides with interactive, real-time software instruments.</p>
      </article>
    </div>
  </div>
</section>

<!-- ================= FOOTER ================= -->
<footer class="footer" role="contentinfo" style="padding: 4rem 0 2rem; border-top: 1px solid var(--border); background: var(--bg-elev);">
  <div class="container">
    <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 2rem; margin-bottom: 2rem;">
      <div style="display: flex; align-items: center; gap: 12px;">
        <svg viewBox="0 0 64 64" fill="none" style="width: 28px; height: 28px;">
          <path d="M32 4 L54 11 V31 C54 47 44 55 32 60 C20 55 10 47 10 31 V11 Z" fill="var(--navy-shield)" stroke="var(--gold)" stroke-width="3" stroke-linejoin="round"/>
          <circle cx="32" cy="16" r="3.2" fill="var(--gold)"/>
          <circle cx="22" cy="26" r="3.2" fill="var(--gold)"/>
          <circle cx="42" cy="26" r="3.2" fill="var(--gold)"/>
          <circle cx="32" cy="36" r="3.2" fill="var(--gold)"/>
        </svg>
        <span style="font-weight: 700; letter-spacing: 1px; color: var(--text);">GRC · FORGE</span>
      </div>
      <p class="mono" style="font-size: 13px; color: var(--text-3);">
        © 2026 GRC Forge. Governance, Risk &amp; Decisions, forged into instruments.
      </p>
    </div>
  </div>
</footer>

<!-- ================= CLIENT ENGINE JS ================= -->
<script>
(function() {
  // Theme & Mode Toggle
  const modeBtn = document.getElementById('mode-toggle');
  const rtlBtn = document.getElementById('rtl-toggle');
  const html = document.documentElement;

  if (modeBtn) {
    modeBtn.addEventListener('click', () => {
      const current = html.getAttribute('data-mode') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-mode', next);
    });
  }

  if (rtlBtn) {
    rtlBtn.addEventListener('click', () => {
      const dir = html.getAttribute('dir') === 'rtl' ? 'ltr' : 'rtl';
      html.setAttribute('dir', dir);
    });
  }

  // Ticker Data Generation
  const tickerTrack = document.getElementById('ticker-track');
  if (tickerTrack) {
    const items = [
      { label: 'XAU/USD', val: '$2,384.20', delta: '+1.84%' },
      { label: '24K SAR/g', val: '287.60', delta: '+0.52%' },
      { label: 'RISK INDEX', val: '18', delta: 'STABLE' },
      { label: 'COMPLIANCE', val: '92%', delta: 'TARGET 95%' },
      { label: 'GOLD SPREAD', val: '3.4%', delta: '-0.10%' }
    ];
    let htmlStr = '';
    items.concat(items).forEach(item => {
      htmlStr += \`<div class="ticker__item">
        <span class="mono" style="color: var(--text-2);">\${item.label}</span>
        <strong>\${item.val}</strong>
        <span class="mono" style="color: var(--success);">\${item.delta}</span>
      </div>\`;
    });
    tickerTrack.innerHTML = htmlStr;
  }

  // Gold Investment Planner Logic
  const amountSlider = document.getElementById('amount');
  const horizonSlider = document.getElementById('horizon');
  const amountLabel = document.getElementById('amount-label');
  const horizonLabel = document.getElementById('horizon-label');
  const allocPctEl = document.getElementById('alloc-pct');
  const allocGramsEl = document.getElementById('alloc-grams');
  const legendGold = document.getElementById('legend-gold');
  const legendOther = document.getElementById('legend-other');
  const legendBreakeven = document.getElementById('legend-breakeven');

  const refPrice = 287.60;

  function updatePlanner() {
    if (!amountSlider || !horizonSlider) return;
    const amount = parseFloat(amountSlider.value);
    const horizon = parseInt(horizonSlider.value);

    if (amountLabel) amountLabel.textContent = amount.toLocaleString() + ' SAR';
    if (horizonLabel) horizonLabel.textContent = horizon + ' years';

    // Calculation formula
    const allocPct = 25;
    const goldSAR = amount * (allocPct / 100);
    const otherSAR = amount - goldSAR;
    const grams = Math.round(goldSAR / refPrice);
    const breakeven = (refPrice * 1.035).toFixed(2);

    if (allocPctEl) allocPctEl.textContent = allocPct;
    if (allocGramsEl) allocGramsEl.textContent = grams;
    if (legendGold) legendGold.textContent = goldSAR.toLocaleString() + ' SAR';
    if (legendOther) legendOther.textContent = otherSAR.toLocaleString() + ' SAR';
    if (legendBreakeven) legendBreakeven.textContent = breakeven + ' SAR/g';

    updateChart(amount, horizon);
  }

  function updateChart(amount, years) {
    const chartSvg = document.getElementById('scenario-chart');
    const chartYears = document.getElementById('chart-years');
    if (chartYears) chartYears.textContent = years;
    if (!chartSvg) return;

    const goldSAR = amount * 0.25;
    const worstVal = Math.round(goldSAR * 0.88);
    const baseVal = Math.round(goldSAR * 1.38);
    const bestVal = Math.round(goldSAR * 1.82);

    const worstEl = document.getElementById('scenario-worst');
    const baseEl = document.getElementById('scenario-base');
    const bestEl = document.getElementById('scenario-best');

    if (worstEl) worstEl.textContent = worstVal.toLocaleString() + ' SAR';
    if (baseEl) baseEl.textContent = baseVal.toLocaleString() + ' SAR';
    if (bestEl) bestEl.textContent = bestVal.toLocaleString() + ' SAR';

    // Draw SVG SVG curves
    chartSvg.innerHTML = \`
      <path d="M0,150 Q300,160 600,170" fill="none" stroke="var(--danger, #ef4444)" stroke-width="2"/>
      <path d="M0,150 Q300,110 600,80" fill="none" stroke="var(--gold)" stroke-width="2.5"/>
      <path d="M0,150 Q300,60 600,20" fill="none" stroke="var(--success, #10b981)" stroke-width="2"/>
    \`;
  }

  if (amountSlider) amountSlider.addEventListener('input', updatePlanner);
  if (horizonSlider) horizonSlider.addEventListener('input', updatePlanner);

  updatePlanner();
})();
</script>
</body>
</html>`