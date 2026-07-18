/* GRC Forge — Live ticker */
(() => {
  const track = document.getElementById('ticker-track');
  if (!track) return;

  const items = [
    { label: 'XAU/USD',    v: '2,384.20', d: '+1.84%', dir: 'up' },
    { label: '24K SAR/g',  v: '287.60',   d: '+0.52%', dir: 'up' },
    { label: '22K SAR/g',  v: '263.61',   d: '+0.48%', dir: 'up' },
    { label: '18K SAR/g',  v: '215.70',   d: '+0.44%', dir: 'up' },
    { label: 'DXY',        v: '104.31',   d: '−0.22%', dir: 'down' },
    { label: 'BRENT',      v: '$82.14',   d: '+0.61%', dir: 'up' },
    { label: 'SAR/USD',    v: '3.7503',   d: '±0.00%', dir: 'flat' },
    { label: 'TASI',       v: '11,842',   d: '+0.34%', dir: 'up' },
    { label: 'GOLD ETF',   v: 'GLD 218.4',d: '+1.72%', dir: 'up' },
    { label: 'SILVER/oz',  v: '31.24',    d: '+2.10%', dir: 'up' },
    { label: 'RISK IDX',   v: '18',       d: 'stable', dir: 'flat' },
    { label: 'GRC READY',  v: '92%',      d: '+2pp',   dir: 'up' },
  ];

  const html = items.map(i =>
    `<span class="ticker__item">
       <span style="color: var(--text-3);">${i.label}</span>
       <strong>${i.v}</strong>
       <span class="${i.dir === 'up' ? 'up' : i.dir === 'down' ? 'down' : ''}">${i.d}</span>
       <span class="ticker__dot"></span>
     </span>`
  ).join('');

  // duplicate for seamless loop
  track.innerHTML = html + html;
})();
