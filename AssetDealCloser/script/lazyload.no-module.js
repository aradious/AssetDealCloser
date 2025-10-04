// lazyload.no-module.js (generated)
// lazyload.js — lazy-load รูป + เผยอนิเมชันเมื่อเข้าหน้าจอ
import { $$ } from "./util.js";
import { CONFIG } from "./config.js";

function initLazy() {
  const imgs = $$(CONFIG.lazySelector);
  const sections = $$("[data-reveal]");

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        const t = e.target;
        if (t.dataset?.lazy) {
          t.src = t.dataset.lazy;
          t.removeAttribute("data-lazy");
        }
        t.classList.add("is-visible");
      }
    });
  }, { threshold: 0.2 });

  imgs.concat(sections).forEach(el => io.observe(el));
}


// expose initLazy globally
if (typeof window !== 'undefined') window.initLazy = initLazy;
