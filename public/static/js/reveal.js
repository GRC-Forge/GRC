/* GRC Forge — Scroll reveal (Level 1 motion) */
(() => {
  document.documentElement.classList.add('js-ready');
  const els = document.querySelectorAll('[data-reveal]');
  if (!('IntersectionObserver' in window) || !els.length) {
    els.forEach(el => el.classList.add('is-in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        // slight stagger for siblings
        const el = e.target;
        setTimeout(() => el.classList.add('is-in'), (i % 6) * 60);
        io.unobserve(el);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => io.observe(el));
})();
