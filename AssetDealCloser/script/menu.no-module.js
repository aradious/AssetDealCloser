// menu.no-module.js (generated)
// menu.js — เมนูมือถือ / sticky header
import { $, on } from "./util.js";

function initMenu() {
  const burger = $("#burger");
  const nav = $("#nav");
  on(burger, "click", () => {
    nav?.classList.toggle("is-open");
    burger?.classList.toggle("is-active");
  });

  // Sticky header (เพิ่มคลาสเมื่อเลื่อน)
  const header = $("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 8) header?.classList.add("is-sticky");
    else header?.classList.remove("is-sticky");
  });
}


// expose initMenu globally
if (typeof window !== 'undefined') window.initMenu = initMenu;
