import { c as createComponent } from './astro-component_CKvgteqe.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, h as addAttribute, m as maybeRenderHead } from './entrypoint_B2khXH54.mjs';
import { $ as $$Layout } from './Layout_Do8cOrly.mjs';
import { s as supabase } from './supabase_Y0nK4rLo.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const { data: categories } = await supabase.from("categories").select("*");
  const { data: books } = await supabase.from("books").select("*");
  const booksByCategory = {};
  if (categories && books) {
    categories.forEach((category) => {
      booksByCategory[category.name] = books.filter((book) => book.category_id === category.id).slice(0, 4);
    });
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([' <script type="module" src="https://unpkg.com/@lottiefiles/dotlottie-wc@0.3.0/dist/dotlottie-wc.js"><\/script> ', '<section class="section-wrapper" data-astro-cid-j7pv25f6> <div class="hero" data-astro-cid-j7pv25f6> <div class="hero-bg-lottie" data-astro-cid-j7pv25f6> ', ' </div> <div class="hero-overlay" data-astro-cid-j7pv25f6></div> <div class="hero-text" data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>Perpustakaan online, <br data-astro-cid-j7pv25f6>tanpa batasan.</h1> <p data-astro-cid-j7pv25f6>Eksplorasi ribuan judul buku dari berbagai kategori. Susun koleksi Anda. Baca kapan saja.</p> <form action="/search" method="get" class="hero-search" data-astro-cid-j7pv25f6> <input type="text" name="q" placeholder="Cari judul buku, penulis, atau ISBN..." required data-astro-cid-j7pv25f6> <button type="submit" class="btn-modern search-btn-icon" aria-label="Cari Buku" data-astro-cid-j7pv25f6> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-j7pv25f6> <circle cx="11" cy="11" r="8" data-astro-cid-j7pv25f6></circle> <line x1="21" y1="21" x2="16.65" y2="16.65" data-astro-cid-j7pv25f6></line> </svg> </button> </form> </div> </div> </section> <div class="section-wrapper categories-list" data-astro-cid-j7pv25f6> ', ` </div> <section class="section-wrapper" data-astro-cid-j7pv25f6> <div class="newsletter-card" data-astro-cid-j7pv25f6> <div class="newsletter-content" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Keep track of what we're working on with the Mitra Newsletter.</h2> <form class="newsletter-form" data-astro-cid-j7pv25f6> <input type="email" placeholder="Your email" required data-astro-cid-j7pv25f6> <button type="submit" class="btn-modern" data-astro-cid-j7pv25f6>Subscribe</button> </form> </div> </div> </section> `])), maybeRenderHead(), renderComponent($$result2, "dotlottie-wc", "dotlottie-wc", { "src": "https://lottie.host/9b06680b-94f3-4e1a-8b9d-7cb0bc1cf38a/PDyc2SgTNO.lottie", "autoplay": true, "loop": true, "data-astro-cid-j7pv25f6": true }), categories && categories.map((category) => {
    const categoryBooks = booksByCategory[category.name];
    if (!categoryBooks || categoryBooks.length === 0) return null;
    return renderTemplate`<section class="category-card" data-astro-cid-j7pv25f6> <div class="catalog-container" data-astro-cid-j7pv25f6> <div class="category-header" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>${category.name}</h2> <a${addAttribute(`/kategori/${category.slug}`, "href")} class="go-to" data-astro-cid-j7pv25f6>Lihat semua &rarr;</a> </div> <div class="book-grid" data-astro-cid-j7pv25f6> ${categoryBooks.map((book) => renderTemplate`<a${addAttribute(`/buku/${book.id}`, "href")} class="book-card" data-astro-cid-j7pv25f6> <div class="card-img-wrapper" data-astro-cid-j7pv25f6> <img${addAttribute(book.cover_url || "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=300", "src")}${addAttribute(`Cover ${book.title}`, "alt")} data-astro-cid-j7pv25f6> </div> <div class="book-info" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>${book.title}</h3> <p data-astro-cid-j7pv25f6>${book.author}</p> </div> </a>`)} </div> </div> </section>`;
  })) })}`;
}, "D:/Projects/mitra-perpus/src/pages/index.astro", void 0);

const $$file = "D:/Projects/mitra-perpus/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
