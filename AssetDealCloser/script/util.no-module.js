// util.no-module.js (generated)
// util.js — ฟังก์ชันช่วยเหลือ
export const $ = (sel, parent = document) => parent.querySelector(sel);
export const $$ = (sel, parent = document) => [...parent.querySelectorAll(sel)];

export const on = (el, evt, fn) => el && el.addEventListener(evt, fn);

export const scrollToId = (id) => {
  const el = $(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export const setAttrAll = (nodes, name, val) => nodes.forEach(n => n.setAttribute(name, val));
