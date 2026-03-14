import { c as createComponent } from './astro-component_CKvgteqe.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from './entrypoint_B2khXH54.mjs';
import { $ as $$Layout } from './Layout_Do8cOrly.mjs';
import { g as getSupabaseServer } from './supabase_Y0nK4rLo.mjs';

const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const consent = Astro2.cookies.get("mitra-consent")?.value;
  let book = null;
  let recommendedBooks = [];
  if (consent === "accepted") {
    const supabase = getSupabaseServer(Astro2.cookies);
    const { data: fetchedBook } = await supabase.from("books").select("*").eq("id", id).single();
    book = fetchedBook;
    const { data: fetchedRecs } = await supabase.from("books").select("*").neq("id", id).limit(4);
    recommendedBooks = fetchedRecs || [];
  }
  const displayBook = book || {
    id: "demo-1",
    title: "The Design of Everyday Things",
    author: "Don Norman",
    publisher: "-",
    publish_year: "-",
    isbn: "-",
    description: "Buku wajib untuk para desainer. Membahas prinsip-prinsip desain kognitif yang membedakan produk yang mudah digunakan dengan yang membuat frustrasi.",
    price: 0,
    cover_url: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=300",
    created_at: "2026-03-09T13:27:15.263Z"
  };
  const displayRecommendations = recommendedBooks.length > 0 ? recommendedBooks : [
    { id: 2, title: "Ensiklopedia Anak Cerdas : Olahraga", date: "04-02-2026", cover_url: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=150" },
    { id: 3, title: "The Domestic Goddess", date: "04-02-2026", cover_url: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=150" },
    { id: 4, title: "One Bullet Away", date: "04-02-2026", cover_url: "https://images.unsplash.com/photo-1614165936126-2ed18e471b3b?auto=format&fit=crop&q=80&w=150" }
  ];
  const formattedDate = new Date(displayBook.created_at).toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
  const isFree = displayBook.price === 0;
  const buttonText = isFree ? "Baca Buku (Gratis)" : "Baca Pratinjau";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-pwjyap7j": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="book-hero" data-astro-cid-pwjyap7j> <div class="hero-overlay" data-astro-cid-pwjyap7j></div> <div class="hero-content section-wrapper" data-astro-cid-pwjyap7j> <h1 data-astro-cid-pwjyap7j>${displayBook.title}</h1> <p class="breadcrumb" data-astro-cid-pwjyap7j><a href="/" data-astro-cid-pwjyap7j>Home</a> / <a href="/search" data-astro-cid-pwjyap7j>Buku</a> / <strong data-astro-cid-pwjyap7j>${displayBook.title}</strong></p> </div> </div> <div class="book-container section-wrapper" data-astro-cid-pwjyap7j> <div class="book-layout" data-astro-cid-pwjyap7j> <div class="main-content" data-astro-cid-pwjyap7j> <div class="cover-action-wrapper" data-astro-cid-pwjyap7j> <div class="cover-image" data-astro-cid-pwjyap7j> <img${addAttribute(displayBook.cover_url, "src")}${addAttribute(`Cover ${displayBook.title}`, "alt")} data-astro-cid-pwjyap7j> </div> <div class="action-bar" data-astro-cid-pwjyap7j> <a${addAttribute(`/baca/${displayBook.id}`, "href")} class="btn-modern read-btn" data-astro-cid-pwjyap7j> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-pwjyap7j><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" data-astro-cid-pwjyap7j></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" data-astro-cid-pwjyap7j></path></svg> ${buttonText} </a> <div class="action-info" data-astro-cid-pwjyap7j> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-pwjyap7j><rect x="3" y="4" width="18" height="18" rx="2" ry="2" data-astro-cid-pwjyap7j></rect><line x1="16" y1="2" x2="16" y2="6" data-astro-cid-pwjyap7j></line><line x1="8" y1="2" x2="8" y2="6" data-astro-cid-pwjyap7j></line><line x1="3" y1="10" x2="21" y2="10" data-astro-cid-pwjyap7j></line></svg> <span data-astro-cid-pwjyap7j>Diunggah ${formattedDate}</span> </div> <button class="btn-icon-round save-btn" title="Simpan ke Pustakaku" data-astro-cid-pwjyap7j> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-pwjyap7j><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" data-astro-cid-pwjyap7j></path></svg> </button> </div> </div> <div class="detail-section" data-astro-cid-pwjyap7j> <h2 data-astro-cid-pwjyap7j>Informasi Buku</h2> <div class="info-list" data-astro-cid-pwjyap7j> <div class="info-item" data-astro-cid-pwjyap7j> <span class="info-label" data-astro-cid-pwjyap7j>Judul Asli</span> <span class="info-value font-semibold" data-astro-cid-pwjyap7j>${displayBook.title}</span> </div> <div class="info-item" data-astro-cid-pwjyap7j> <span class="info-label" data-astro-cid-pwjyap7j>Penulis</span> <span class="info-value" data-astro-cid-pwjyap7j>${displayBook.author || "-"}</span> </div> <div class="info-item" data-astro-cid-pwjyap7j> <span class="info-label" data-astro-cid-pwjyap7j>Penerbit</span> <span class="info-value" data-astro-cid-pwjyap7j>${displayBook.publisher || "-"}</span> </div> <div class="info-item" data-astro-cid-pwjyap7j> <span class="info-label" data-astro-cid-pwjyap7j>Tahun Terbit</span> <span class="info-value" data-astro-cid-pwjyap7j>${displayBook.publish_year || "-"}</span> </div> <div class="info-item" data-astro-cid-pwjyap7j> <span class="info-label" data-astro-cid-pwjyap7j>ISBN</span> <span class="info-value" data-astro-cid-pwjyap7j>${displayBook.isbn || "-"}</span> </div> <div class="info-item description-item" data-astro-cid-pwjyap7j> <span class="info-label" data-astro-cid-pwjyap7j>Uraian Buku</span> <span class="info-value leading-relaxed" data-astro-cid-pwjyap7j>${displayBook.description || "Tidak ada deskripsi yang tersedia untuk buku ini."}</span> </div> </div> </div> </div> <aside class="sidebar" data-astro-cid-pwjyap7j> <div class="sidebar-card" data-astro-cid-pwjyap7j> <form action="/search" class="sidebar-search" data-astro-cid-pwjyap7j> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-pwjyap7j><circle cx="11" cy="11" r="8" data-astro-cid-pwjyap7j></circle><line x1="21" y1="21" x2="16.65" y2="16.65" data-astro-cid-pwjyap7j></line></svg> <input type="text" name="q" placeholder="Cari buku lain..." data-astro-cid-pwjyap7j> </form> <h3 class="sidebar-title" data-astro-cid-pwjyap7j>Rekomendasi</h3> <div class="recommendation-list" data-astro-cid-pwjyap7j> ${displayRecommendations.map((rec) => renderTemplate`<a${addAttribute(`/buku/${rec.id}`, "href")} class="rec-item" data-astro-cid-pwjyap7j> <img${addAttribute(rec.cover_url, "src")}${addAttribute(`Cover ${rec.title}`, "alt")} data-astro-cid-pwjyap7j> <div class="rec-info" data-astro-cid-pwjyap7j> <h4 data-astro-cid-pwjyap7j>${rec.title}</h4> <p data-astro-cid-pwjyap7j>${rec.author || "Penulis Tidak Diketahui"}</p> </div> </a>`)} </div> </div> </aside> </div> </div> ` })}`;
}, "D:/Projects/mitra-perpus/src/pages/buku/[id].astro", void 0);

const $$file = "D:/Projects/mitra-perpus/src/pages/buku/[id].astro";
const $$url = "/buku/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
