import { c as createComponent } from './astro-component_CKvgteqe.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from './entrypoint_B2khXH54.mjs';
import { $ as $$Layout } from './Layout_Do8cOrly.mjs';
import { g as getSupabaseServer } from './supabase_Y0nK4rLo.mjs';

const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const supabase = getSupabaseServer(Astro2.cookies);
  const { data: book, error: bookError } = await supabase.from("books").select("*").eq("id", id).single();
  if (bookError || !book) {
    return Astro2.redirect("/search?error=not_found");
  }
  const { data: { user } } = await supabase.auth.getUser();
  let userRole = "user";
  if (user) {
    const { data: profile } = await supabase.from("profiles").select("role").eq("id", user.id).single();
    if (profile) userRole = profile.role || "user";
  }
  let isPreview = true;
  let basePdfUrl = "";
  if (book.price === 0 || userRole === "admin") {
    isPreview = false;
    basePdfUrl = book.pdf_full_url || book.pdf_preview_url;
  } else {
    isPreview = true;
    basePdfUrl = book.pdf_preview_url;
  }
  const formattedPrice = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(book.price || 0);
  const finalPdfUrl = basePdfUrl ? `${basePdfUrl}#view=FitH` : "";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-ydqni7bf": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="native-reader-layout" data-astro-cid-ydqni7bf> <header class="app-header" data-astro-cid-ydqni7bf> <div class="header-left" data-astro-cid-ydqni7bf> <a${addAttribute(`/buku/${book.id}`, "href")} class="back-btn" title="Kembali" data-astro-cid-ydqni7bf> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-ydqni7bf><line x1="19" y1="12" x2="5" y2="12" data-astro-cid-ydqni7bf></line><polyline points="12 19 5 12 12 5" data-astro-cid-ydqni7bf></polyline></svg> <span class="back-text" data-astro-cid-ydqni7bf>Kembali</span> </a> <div class="book-title-meta" data-astro-cid-ydqni7bf> <h1 data-astro-cid-ydqni7bf>${book.title}</h1> <span class="author" data-astro-cid-ydqni7bf>${book.author}</span> </div> </div> <div class="header-right" data-astro-cid-ydqni7bf> ${isPreview ? renderTemplate`<span class="status-badge preview" data-astro-cid-ydqni7bf>Mode Pratinjau</span>` : renderTemplate`<span class="status-badge full" data-astro-cid-ydqni7bf>Akses Penuh</span>`} </div> </header> <main class="native-pdf-container" data-astro-cid-ydqni7bf> ${finalPdfUrl ? renderTemplate`<iframe${addAttribute(finalPdfUrl, "src")} class="browser-pdf-iframe"${addAttribute(`Membaca ${book.title}`, "title")} allowfullscreen data-astro-cid-ydqni7bf></iframe>` : renderTemplate`<div class="empty-state" data-astro-cid-ydqni7bf> <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-ydqni7bf><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" data-astro-cid-ydqni7bf></path><polyline points="14 2 14 8 20 8" data-astro-cid-ydqni7bf></polyline><line x1="9" y1="15" x2="15" y2="15" data-astro-cid-ydqni7bf></line></svg> <p data-astro-cid-ydqni7bf>Dokumen PDF belum tersedia.</p> </div>`} </main> ${isPreview && renderTemplate`<div class="preview-banner" data-astro-cid-ydqni7bf> <div class="banner-content" data-astro-cid-ydqni7bf> <div class="banner-text" data-astro-cid-ydqni7bf> <strong data-astro-cid-ydqni7bf>Suka dengan buku ini?</strong> <p data-astro-cid-ydqni7bf>Anda sedang membaca pratinjau. Dapatkan akses penuh sekarang.</p> </div> <button class="buy-btn" data-astro-cid-ydqni7bf>Beli - ${formattedPrice}</button> </div> </div>`} </div> ` })}`;
}, "D:/Projects/mitra-perpus/src/pages/baca/[id].astro", void 0);

const $$file = "D:/Projects/mitra-perpus/src/pages/baca/[id].astro";
const $$url = "/baca/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
