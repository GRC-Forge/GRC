/* GRC Forge — Gold Investment Planner (interactive) */
(() => {
  // Reference values (educational only)
  const REF_PRICE_SAR_PER_GRAM_24K = 287.60;
  const PREMIUM = 0.034;      // 3.4% dealer premium
  const VAT     = 0.15;       // 15% VAT

  // Allocation rules by risk
  const ALLOC = {
    conservative: 0.15,
    balanced:     0.25,
    aggressive:   0.45,
  };

  // Scenario multipliers by risk × horizon (per year, base return in gold price)
  // These are illustrative rules-of-thumb, not forecasts.
  const SCENARIO = {
    conservative: { worst: -0.020, base: 0.045, best: 0.080 },
    balanced:     { worst: -0.030, base: 0.065, best: 0.110 },
    aggressive:   { worst: -0.055, base: 0.085, best: 0.155 },
  };

  const el = (id) => document.getElementById(id);
  const fmt = (n, d = 0) => n.toLocaleString('en-US', { minimumFractionDigits: d, maximumFractionDigits: d });

  const state = {
    amount: 100000,
    horizon: 5,
    risk: 'balanced',
    entry: 'immediate',
  };

  function updateSliderFill(input) {
    const min = +input.min, max = +input.max, v = +input.value;
    const pct = ((v - min) / (max - min)) * 100;
    input.style.setProperty('--v', pct + '%');
  }

  function calculate() {
    const alloc = ALLOC[state.risk];
    const goldAmount = state.amount * alloc;
    const otherAmount = state.amount - goldAmount;

    // Break-even accounts for premium
    const breakEven = REF_PRICE_SAR_PER_GRAM_24K * (1 + PREMIUM);
    const grams = goldAmount / breakEven;

    // Scenarios: compound annual over horizon
    const s = SCENARIO[state.risk];
    const worstFV = goldAmount * Math.pow(1 + s.worst, state.horizon);
    const baseFV  = goldAmount * Math.pow(1 + s.base,  state.horizon);
    const bestFV  = goldAmount * Math.pow(1 + s.best,  state.horizon);

    // Update DOM
    el('alloc-pct').textContent = Math.round(alloc * 100);
    el('alloc-grams').textContent = fmt(grams, 0);
    el('legend-gold').textContent = fmt(goldAmount, 0) + ' SAR';
    el('legend-other').textContent = fmt(otherAmount, 0) + ' SAR';
    el('legend-breakeven').textContent = fmt(breakEven, 2) + ' SAR/g';

    // Donut arc — circumference 2πr = 289.03 for r=46
    const C = 2 * Math.PI * 46;
    el('donut-arc').setAttribute('stroke-dasharray', `${(alloc * C).toFixed(1)} ${C.toFixed(1)}`);

    // Scenario cards
    const worstPct = (worstFV / goldAmount - 1) * 100;
    const basePct  = (baseFV  / goldAmount - 1) * 100;
    const bestPct  = (bestFV  / goldAmount - 1) * 100;

    el('scenario-worst').textContent = fmt(worstFV, 0);
    el('scenario-base').textContent  = fmt(baseFV, 0);
    el('scenario-best').textContent  = fmt(bestFV, 0);

    el('scenario-worst-pct').textContent = (worstPct >= 0 ? '+' : '') + worstPct.toFixed(1) + '% · ' + fmt(worstFV - goldAmount, 0) + ' SAR';
    el('scenario-base-pct').textContent  = (basePct  >= 0 ? '+' : '') + basePct.toFixed(1)  + '% · +' + fmt(baseFV  - goldAmount, 0) + ' SAR';
    el('scenario-best-pct').textContent  = (bestPct  >= 0 ? '+' : '') + bestPct.toFixed(1)  + '% · +' + fmt(bestFV  - goldAmount, 0) + ' SAR';

    // Update labels
    el('amount-label').textContent = fmt(state.amount, 0) + ' SAR';
    el('horizon-label').textContent = state.horizon + (state.horizon === 1 ? ' year' : ' years');
    el('risk-label').textContent = state.risk.charAt(0).toUpperCase() + state.risk.slice(1);
    el('entry-label').textContent = {
      immediate: 'Immediate',
      staggered: 'Staggered · 6mo',
      dca: 'DCA · 12mo'
    }[state.entry];
    el('chart-years').textContent = state.horizon;

    // Draw scenario chart
    drawChart(goldAmount, s, state.horizon);
  }

  function drawChart(principal, s, years) {
    const svg = el('scenario-chart');
    const W = 600, H = 200, padL = 46, padR = 12, padT = 12, padB = 28;
    const chartW = W - padL - padR;
    const chartH = H - padT - padB;

    // Generate series (1 point per year)
    const worst = [], base = [], best = [];
    for (let y = 0; y <= years; y++) {
      worst.push(principal * Math.pow(1 + s.worst, y));
      base.push(principal * Math.pow(1 + s.base,  y));
      best.push(principal * Math.pow(1 + s.best,  y));
    }

    const allVals = [...worst, ...base, ...best];
    const minV = Math.min(...allVals) * 0.95;
    const maxV = Math.max(...allVals) * 1.02;

    const x = (i) => padL + (i / years) * chartW;
    const y = (v) => padT + chartH - ((v - minV) / (maxV - minV)) * chartH;

    const path = (arr) => arr.map((v, i) => `${i === 0 ? 'M' : 'L'} ${x(i).toFixed(1)} ${y(v).toFixed(1)}`).join(' ');
    const area = (arr) => path(arr) + ` L ${x(years).toFixed(1)} ${padT + chartH} L ${x(0).toFixed(1)} ${padT + chartH} Z`;

    // grid lines: 4 horizontal
    let grid = '';
    for (let i = 0; i <= 4; i++) {
      const gy = padT + (chartH * i) / 4;
      const val = minV + (maxV - minV) * (1 - i / 4);
      grid += `<line x1="${padL}" x2="${W - padR}" y1="${gy}" y2="${gy}" stroke="var(--chart-grid)" stroke-width="1"/>`;
      grid += `<text x="${padL - 8}" y="${gy + 4}" fill="var(--text-3)" font-family="var(--font-mono)" font-size="10" text-anchor="end">${(val / 1000).toFixed(1)}k</text>`;
    }

    // x-axis labels
    let xLabels = '';
    const step = years <= 5 ? 1 : years <= 10 ? 2 : 5;
    for (let i = 0; i <= years; i += step) {
      xLabels += `<text x="${x(i)}" y="${H - 8}" fill="var(--text-3)" font-family="var(--font-mono)" font-size="10" text-anchor="middle">Y${i}</text>`;
    }

    svg.innerHTML = `
      <defs>
        <linearGradient id="area-best" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stop-color="var(--success)" stop-opacity="0.20"/>
          <stop offset="1" stop-color="var(--success)" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="area-base" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stop-color="var(--gold)" stop-opacity="0.28"/>
          <stop offset="1" stop-color="var(--gold)" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="area-worst" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stop-color="var(--danger)" stop-opacity="0.20"/>
          <stop offset="1" stop-color="var(--danger)" stop-opacity="0"/>
        </linearGradient>
      </defs>
      ${grid}
      <path d="${area(best)}"  fill="url(#area-best)"/>
      <path d="${area(base)}"  fill="url(#area-base)"/>
      <path d="${area(worst)}" fill="url(#area-worst)"/>
      <path d="${path(worst)}" fill="none" stroke="var(--danger)"  stroke-width="1.5" stroke-dasharray="3 3"/>
      <path d="${path(base)}"  fill="none" stroke="var(--gold)"    stroke-width="2.2"/>
      <path d="${path(best)}"  fill="none" stroke="var(--success)" stroke-width="1.5" stroke-dasharray="3 3"/>
      <circle cx="${x(years).toFixed(1)}" cy="${y(base[years]).toFixed(1)}" r="4" fill="var(--gold)" stroke="var(--bg)" stroke-width="2"/>
      ${xLabels}
    `;
  }

  // Wire inputs
  const amountInput = el('amount');
  const horizonInput = el('horizon');
  [amountInput, horizonInput].forEach(input => {
    updateSliderFill(input);
    input.addEventListener('input', () => {
      updateSliderFill(input);
      state.amount = +amountInput.value;
      state.horizon = +horizonInput.value;
      calculate();
    });
  });

  // Segmented controls
  const wireSeg = (segId, key) => {
    const seg = el(segId);
    seg.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        seg.querySelectorAll('button').forEach(b => b.removeAttribute('aria-pressed'));
        btn.setAttribute('aria-pressed', 'true');
        state[key] = btn.dataset.val;
        calculate();
      });
    });
  };
  wireSeg('risk-seg', 'risk');
  wireSeg('entry-seg', 'entry');

  // Initial paint
  calculate();

  // Recalc on mode change (colors) via mutation observer
  const mo = new MutationObserver(() => {
    // just re-draw chart to pick up CSS vars
    drawChart(state.amount * ALLOC[state.risk], SCENARIO[state.risk], state.horizon);
  });
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-mode', 'data-accent'] });
})();
