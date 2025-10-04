// form.no-module.js (generated)
// form.js — ตรวจฟอร์ม + placeholder การส่ง (ไม่มี back-end)
import { $, on } from "./util.js";
import { CONFIG } from "./config.js";

function initForm() {
  const form = $(CONFIG.formSelector);
  if (!form) return;

  on(form, "submit", async (e) => {
    e.preventDefault();
    const data = new FormData(form);

    // ตรวจฟิลด์เบื้องต้น
    const name = data.get("name")?.toString().trim();
    const email = data.get("email")?.toString().trim();
    const message = data.get("message")?.toString().trim();
    if (!name || !email || !message) {
      alert("กรุณากรอกข้อมูลให้ครบ");
      return;
    }

    // TODO: เชื่อมบริการส่งอีเมลจริง (Formspree/Netlify/Cloudflare)
    // ที่นี่เป็นเพียงเดโม่ฝั่งหน้าเว็บ
    console.log("Form payload:", Object.fromEntries(data.entries()));
    form.reset();
    alert("ส่งข้อความเรียบร้อย ขอบคุณครับ");
  });
}


// expose initForm globally
if (typeof window !== 'undefined') window.initForm = initForm;
