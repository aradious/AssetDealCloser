// i18n-core.no-module.js (generated)
(function(){
// i18n-core.js — เสถียร: รอ DOM เอง, bind ปุ่มภาษา, จำค่าใน localStorage
const DEFAULT_STORAGE_KEY = "adc_lang";
const DEFAULT_SUPPORTED = ["th","en","zh"];

function initI18n(pageDict, {
  storageKey = DEFAULT_STORAGE_KEY,
  supported = DEFAULT_SUPPORTED
} = {}) {
  if (!pageDict || typeof pageDict !== "object") {
    throw new Error("initI18n: pageDict is required (object)");
  }

  const getInitialLang = () => {
    const fromHash = (location.hash || "").replace("#","");
    const fromStore = localStorage.getItem(storageKey);
    if (supported.includes(fromHash)) return fromHash;
    if (supported.includes(fromStore)) return fromStore;
    return supported[0] || "th";
  };

  const applyLang = (lang = supported[0], scope = document) => {
    const dict = pageDict[lang] || pageDict[supported[0]] || {};
    scope.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });
    scope.querySelectorAll("[data-i18n-attr]").forEach(el => {
      const spec = el.getAttribute("data-i18n-attr");
      if (!spec || !spec.includes(":")) return;
      const [attr, key] = spec.split(":");
      if (dict[key]) el.setAttribute(attr, dict[key]);
    });

    document.documentElement.setAttribute("lang", lang);
    if (dict.__doc_title) document.title = dict.__doc_title;

    // Mark current language button/link
    document.querySelectorAll('[data-lang]').forEach(el => {
      const isActive = el.getAttribute('data-lang') === lang;
      el.classList.toggle('is-active', isActive);
      el.setAttribute('aria-pressed', String(isActive));
    });


    localStorage.setItem(storageKey, lang);
    history.replaceState(null, "", `#${lang}`);
  };

  const boot = () => {
    const current = getInitialLang();
    applyLang(current);

    // bind ปุ่มภาษา
    document.querySelectorAll("[data-lang]").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const target = e.currentTarget.closest('[data-lang]') || btn;
        const lang = target.getAttribute('data-lang');
        if (!lang) return;
        applyLang(lang);
      });
    });

    // เผื่อดีบั๊กใน Console
    window.__i18nApply = applyLang;
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot, { once: true });
  } else {
    boot();
  }

  // เผื่อบางหน้าต้องเรียกซ้ำเฉพาะส่วน
  return { applyLang };
}

  window.initI18n = initI18n;
})();
