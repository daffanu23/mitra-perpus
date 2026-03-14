import { c as createComponent } from './astro-component_CKvgteqe.mjs';
import 'piccolore';
import { n as createRenderInstruction, m as maybeRenderHead, r as renderTemplate, l as renderComponent, h as addAttribute, o as renderSlot, p as renderHead } from './entrypoint_B2khXH54.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { g as getSupabaseServer } from './supabase_Y0nK4rLo.mjs';
import 'clsx';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

function ThemeToggle() {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(savedTheme);
    setMounted(true);
  }, []);
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };
  if (!mounted) return /* @__PURE__ */ jsx("div", { style: { width: "36px", height: "36px" } });
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick: toggleTheme,
      style: {
        background: "transparent",
        border: "none",
        cursor: "pointer",
        padding: "0.5rem",
        borderRadius: "50%",
        color: "var(--text)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "transform 0.2s"
      },
      onMouseEnter: (e) => {
        e.currentTarget.style.transform = "scale(1.1)";
      },
      onMouseLeave: (e) => {
        e.currentTarget.style.transform = "scale(1)";
      },
      "aria-label": "Toggle Dark Mode",
      children: theme === "light" ? (
        /* Ikon Bulan Minimalis (Mode Terang -> Menuju Mode Gelap) */
        /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "22", height: "22", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" }) })
      ) : (
        /* Ikon Matahari Minimalis (Mode Gelap -> Menuju Mode Terang) */
        /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "22", height: "22", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
          /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "4" }),
          /* @__PURE__ */ jsx("path", { d: "M12 2v2" }),
          /* @__PURE__ */ jsx("path", { d: "M12 20v2" }),
          /* @__PURE__ */ jsx("path", { d: "m4.93 4.93 1.41 1.41" }),
          /* @__PURE__ */ jsx("path", { d: "m17.66 17.66 1.41 1.41" }),
          /* @__PURE__ */ jsx("path", { d: "M2 12h2" }),
          /* @__PURE__ */ jsx("path", { d: "M20 12h2" }),
          /* @__PURE__ */ jsx("path", { d: "m6.34 17.66-1.41 1.41" }),
          /* @__PURE__ */ jsx("path", { d: "m19.07 4.93-1.41 1.41" })
        ] })
      )
    }
  );
}

const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Navbar;
  const consent = Astro2.cookies.get("mitra-consent")?.value;
  let isLoggedIn = false;
  let userRole = "user";
  let userName = "";
  let userAvatar = "";
  if (consent === "accepted") {
    const supabaseServer = getSupabaseServer(Astro2.cookies);
    const { data: { user }, error: authError } = await supabaseServer.auth.getUser();
    isLoggedIn = !authError && !!user;
    if (isLoggedIn && user) {
      const { data: profile } = await supabaseServer.from("profiles").select("username, role").eq("id", user.id).single();
      if (profile) {
        userRole = profile.role || "user";
        userName = profile.username || user.email?.split("@")[0] || "Member";
      } else {
        userName = user.email?.split("@")[0] || "Member";
      }
      const googleAvatarUrl = user.user_metadata?.avatar_url || user.user_metadata?.picture;
      if (googleAvatarUrl) {
        userAvatar = googleAvatarUrl;
      } else {
        userAvatar = `https://api.dicebear.com/7.x/initials/svg?seed=${userName}&backgroundColor=0a2472&textColor=ffffff`;
      }
    }
  }
  return renderTemplate`${maybeRenderHead()}<nav class="navbar" id="main-navbar" data-astro-cid-5blmo7yk> <div class="nav-brand" data-astro-cid-5blmo7yk> <a href="/" class="logo" data-astro-cid-5blmo7yk>Mita.</a> </div> <button class="hamburger" id="hamburger-btn" aria-label="Menu" data-astro-cid-5blmo7yk> <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-5blmo7yk> <line x1="3" y1="12" x2="21" y2="12" data-astro-cid-5blmo7yk></line> <line x1="3" y1="6" x2="21" y2="6" data-astro-cid-5blmo7yk></line> <line x1="3" y1="18" x2="21" y2="18" data-astro-cid-5blmo7yk></line> </svg> </button> <div class="nav-menu" id="nav-menu" data-astro-cid-5blmo7yk> <ul class="nav-links" data-astro-cid-5blmo7yk> <li data-astro-cid-5blmo7yk><a href="/" data-astro-cid-5blmo7yk>Beranda</a></li> <li data-astro-cid-5blmo7yk><a href="/search" data-astro-cid-5blmo7yk>Buku</a></li> <li data-astro-cid-5blmo7yk><a href="/pustakaku" data-astro-cid-5blmo7yk>Pustakaku</a></li>  ${userRole === "admin" && renderTemplate`<li data-astro-cid-5blmo7yk><a href="/tambah-buku" class="admin-link btn-modern-outline" style="padding: 0.4rem 1.2rem; font-size: 0.85rem;" data-astro-cid-5blmo7yk>Tambah buku</a></li>`} </ul> <div class="user-profile" data-astro-cid-5blmo7yk> ${renderComponent($$result, "ThemeToggle", ThemeToggle, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Projects/mitra-perpus/src/components/ThemeToggle.jsx", "client:component-export": "default", "data-astro-cid-5blmo7yk": true })} ${isLoggedIn ? renderTemplate`<div class="profile-wrapper" data-astro-cid-5blmo7yk> <a href="/profile" class="profile-info" data-astro-cid-5blmo7yk> <span data-astro-cid-5blmo7yk>Hai, ${userName}</span> <div class="avatar" data-astro-cid-5blmo7yk> <img${addAttribute(userAvatar, "src")}${addAttribute(`Avatar ${userName}`, "alt")} data-astro-cid-5blmo7yk> </div> </a> <a href="/auth/logout" class="btn-icon-round" style="width: 36px; height: 36px; border: none; background: color-mix(in oklch, var(--danger) 15%, transparent); color: var(--danger);" title="Keluar dari akun" data-astro-cid-5blmo7yk> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-5blmo7yk> <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" data-astro-cid-5blmo7yk></path> <polyline points="16 17 21 12 16 7" data-astro-cid-5blmo7yk></polyline> <line x1="21" y1="12" x2="9" y2="12" data-astro-cid-5blmo7yk></line> </svg> </a> </div>` : renderTemplate`<a href="/login" class="btn-modern" style="padding: 0.6rem 1.5rem;" data-astro-cid-5blmo7yk>Login / Daftar</a>`} </div> </div> </nav> ${renderScript($$result, "D:/Projects/mitra-perpus/src/components/Navbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Projects/mitra-perpus/src/components/Navbar.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="footer" data-astro-cid-sz7xmlte> <div class="footer-content" data-astro-cid-sz7xmlte> <h2 data-astro-cid-sz7xmlte>Mita.</h2> <p data-astro-cid-sz7xmlte>Membaca buku kini lebih mudah, dikonfigurasi sekali, dibaca kapan saja. <br data-astro-cid-sz7xmlte>Perpustakaan online generasi baru.</p> <div class="footer-bottom" data-astro-cid-sz7xmlte> <p class="copyright" data-astro-cid-sz7xmlte>&copy; ${currentYear} @mediacivitas. All rights reserved.</p> </div> </div> </footer>`;
}, "D:/Projects/mitra-perpus/src/components/Footer.astro", void 0);

const $$CookieConsent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$CookieConsent;
  const consentCookie = Astro2.cookies.get("mitra-consent")?.value;
  if (consentCookie) {
    return null;
  }
  return renderTemplate`${maybeRenderHead()}<div id="cookie-banner" class="cookie-consent show" data-astro-cid-garwan2p> <div class="cookie-content" data-astro-cid-garwan2p> <p class="cookie-title" data-astro-cid-garwan2p>🍪 Privasi & Keamanan Anda</p> <p class="cookie-desc" data-astro-cid-garwan2p>
Kami memerlukan <em data-astro-cid-garwan2p>cookies</em> untuk menjalankan fitur penting seperti Login dan Autentikasi. Tanpa persetujuan, Anda bisa menjelajahi koleksi buku, namun fitur Login akan dinonaktifkan.
</p> </div> <div class="cookie-actions" data-astro-cid-garwan2p> <button id="reject-cookies" class="cookie-btn reject" data-astro-cid-garwan2p>Tolak</button> <button id="accept-cookies" class="cookie-btn accept" data-astro-cid-garwan2p>Saya Mengerti</button> </div> </div> ${renderScript($$result, "D:/Projects/mitra-perpus/src/components/CookieConsent.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Projects/mitra-perpus/src/components/CookieConsent.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template([`<html lang="id"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Mitra Perpus</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap" rel="stylesheet"><script>
      const theme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      document.documentElement.setAttribute('data-theme', theme);
    <\/script>`, "</head> <body> ", " <main> ", " </main> ", " ", " </body></html>"])), renderHead(), renderComponent($$result, "Navbar", $$Navbar, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}), renderComponent($$result, "CookieConsent", $$CookieConsent, {}));
}, "D:/Projects/mitra-perpus/src/layouts/Layout.astro", void 0);

export { $$Layout as $, renderScript as r };
