/* GRC Forge — bilingual copy (EN / AR) */
(() => {
  const AR = {
    'brand': 'جي آر سي · فورج',
    'nav.intelligence': 'الاستخبارات',
    'nav.governance': 'الحوكمة',
    'nav.business': 'الأعمال',
    'nav.venture': 'ريادة الأعمال',
    'nav.ai': 'الذكاء الاصطناعي',
    'nav.research': 'البحث',
    'nav.resources': 'الموارد',
    'nav.about': 'من نحن',
    'nav.launch': 'ابدأ الآن',

    'hero.eyebrow': 'منصة الذكاء المهني للحوكمة والمخاطر',
    'hero.headline': 'الحوكمة والمخاطر<br>و <span class="serif">القرارات</span> — مسبوكة<br>في أدوات عملية.',
    'hero.sub': 'تبني GRC Forge أدوات تفاعلية لصناع القرار تحت الضغط — مسؤولي المخاطر، والمدققين، والمستشارين، ومستثمري الذهب، والمؤسسين. ليست مقالات إضافية. أدوات حقيقية.',
    'hero.cta.primary': 'ادخل قسم الحوكمة',
    'hero.cta.secondary': 'تجول في الركائز',

    'metrics.pillars': 'خمس ركائز عمل — الاستخبارات، الحوكمة، الأعمال، ريادة الأعمال، والذكاء الاصطناعي',
    'metrics.tools': 'أكثر من ٢٠ وحدة عبر الركائز في خارطة طريق ٢٠٢٦',
    'metrics.lang': 'لغتان مدعومتان — العربية والإنجليزية، مع دعم أصلي للاتجاه من اليمين إلى اليسار',
    'metrics.brand': 'نظام علامة تجارية موحد عبر كل منتجات المنصة',

    'platforms.eyebrow': 'القسم ٠١ — الركائز',
    'gold.eyebrow': 'القسم ٠٢ — الاستخبارات · استخبارات الذهب'
  };

  const EN = {}; // English uses whatever is already in the DOM as source of truth

  const originals = new WeakMap();

  function snapshot() {
    document.querySelectorAll('[data-i18n], [data-i18n-html]').forEach(el => {
      if (!originals.has(el)) {
        originals.set(el, { text: el.textContent, html: el.innerHTML });
      }
    });
  }

  function applyLang(lang) {
    snapshot();
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (lang === 'ar' && AR[key]) el.textContent = AR[key];
      else el.textContent = originals.get(el).text;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.dataset.i18nHtml;
      if (lang === 'ar' && AR[key]) el.innerHTML = AR[key];
      else el.innerHTML = originals.get(el).html;
    });
  }

  // expose for tweaks.js
  window.__grcfSetLang = applyLang;

  // Initial pass — respect current dir on html
  const initial = document.documentElement.dir === 'rtl' ? 'ar' : 'en';
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => applyLang(initial));
  } else {
    applyLang(initial);
  }
})();
