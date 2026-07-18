/* GRC Forge — Tweaks panel + Edit-mode protocol */
(() => {
  const html = document.documentElement;
  const panel = document.getElementById('tweaks-panel');
  const closeBtn = document.getElementById('tweaks-close');
  const modeToggle = document.getElementById('mode-toggle');
  const rtlToggle = document.getElementById('rtl-toggle');

  // Restore from localStorage
  const load = (k, d) => localStorage.getItem('grcf-' + k) || d;
  const save = (k, v) => localStorage.setItem('grcf-' + k, v);

  const applyState = (key, val) => {
    if (key === 'mode') html.dataset.mode = val;
    else if (key === 'dir') {
      html.dir = val;
      html.lang = val === 'rtl' ? 'ar' : 'en';
      window.__grcfSetLang && window.__grcfSetLang(val === 'rtl' ? 'ar' : 'en');
    }
    else if (key === 'density') html.dataset.density = val;
    else if (key === 'accent') html.dataset.accent = val;
    save(key, val);

    // reflect in tweak seg + swatches
    document.querySelectorAll(`[data-tweak="${key}"] button`).forEach(b => {
      b.setAttribute('aria-pressed', b.dataset.val === val);
    });

    if (key === 'mode') {
      modeToggle && modeToggle.classList.toggle('is-active', val === 'light');
    }
    if (key === 'dir') {
      rtlToggle && rtlToggle.classList.toggle('is-active', val === 'rtl');
    }
  };

  // Initial load
  applyState('mode',    load('mode',    'dark'));
  applyState('dir',     load('dir',     'ltr'));
  applyState('density', load('density', 'balanced'));
  applyState('accent',  load('accent',  'gold'));

  // Wire tweak segments
  document.querySelectorAll('.tweaks [data-tweak]').forEach(seg => {
    const key = seg.dataset.tweak;
    seg.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => applyState(key, btn.dataset.val));
    });
  });

  // Nav shortcuts
  modeToggle && modeToggle.addEventListener('click', () => {
    applyState('mode', html.dataset.mode === 'dark' ? 'light' : 'dark');
  });
  rtlToggle && rtlToggle.addEventListener('click', () => {
    applyState('dir', html.dir === 'rtl' ? 'ltr' : 'rtl');
  });

  closeBtn && closeBtn.addEventListener('click', () => {
    panel.classList.remove('is-open');
    panel.setAttribute('aria-hidden', 'true');
    window.parent.postMessage({ type: '__deactivate_edit_mode' }, '*');
  });

  // ----- Edit-mode protocol -----
  window.addEventListener('message', (e) => {
    const d = e.data || {};
    if (d.type === '__activate_edit_mode') {
      panel.classList.add('is-open');
      panel.setAttribute('aria-hidden', 'false');
    } else if (d.type === '__deactivate_edit_mode') {
      panel.classList.remove('is-open');
      panel.setAttribute('aria-hidden', 'true');
    }
  });
  // Announce availability after listener registered
  try { window.parent.postMessage({ type: '__edit_mode_available' }, '*'); } catch (_) {}
})();
