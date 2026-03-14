import { c as createComponent } from './astro-component_CKvgteqe.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from './entrypoint_B2khXH54.mjs';
import { $ as $$Layout, r as renderScript } from './Layout_Do8cOrly.mjs';
import { g as getSupabaseServer } from './supabase_Y0nK4rLo.mjs';

const $$TambahBuku = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$TambahBuku;
  const supabase = getSupabaseServer(Astro2.cookies);
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return Astro2.redirect("/login");
  const { data: profile } = await supabase.from("profiles").select("role").eq("id", user.id).single();
  if (profile?.role !== "admin") {
    return Astro2.redirect("/");
  }
  const { data: categories } = await supabase.from("categories").select("*").order("name");
  let errorMessage = "";
  let successMessage = "";
  if (Astro2.request.method === "POST") {
    try {
      const formData = await Astro2.request.formData();
      const title = formData.get("title")?.toString();
      const author = formData.get("author")?.toString();
      const publisher = formData.get("publisher")?.toString();
      const publish_year = formData.get("publish_year")?.toString();
      const isbn = formData.get("isbn")?.toString();
      const description = formData.get("description")?.toString();
      const price = parseFloat(formData.get("price")?.toString() || "0");
      let category_id = formData.get("category_id")?.toString();
      const new_category_name = formData.get("new_category_name")?.toString();
      if (category_id === "new" && new_category_name) {
        const slug = new_category_name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
        const { data: newCat, error: catError } = await supabase.from("categories").insert([{ name: new_category_name, slug }]).select().single();
        if (catError) {
          console.error("Supabase Category Error:", catError);
          throw new Error(`Gagal menambah kategori: ${catError.message || catError.details}`);
        }
        category_id = newCat.id;
      }
      const coverFile = formData.get("cover_image");
      const previewPdfFile = formData.get("pdf_preview");
      const fullPdfFile = formData.get("pdf_full");
      let cover_url = null;
      let pdf_preview_url = null;
      let pdf_full_url = null;
      const uploadFile = async (file, bucket, folder) => {
        if (file && file.size > 0) {
          const fileExt = file.name.split(".").pop();
          const fileName = `${folder}/${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
          const { error } = await supabase.storage.from(bucket).upload(fileName, file);
          if (error) throw error;
          return supabase.storage.from(bucket).getPublicUrl(fileName).data.publicUrl;
        }
        return null;
      };
      cover_url = await uploadFile(coverFile, "covers", "images");
      pdf_preview_url = await uploadFile(previewPdfFile, "pdfs", "preview");
      pdf_full_url = await uploadFile(fullPdfFile, "pdfs", "full");
      const { error: insertError } = await supabase.from("books").insert([{
        title,
        author,
        publisher,
        publish_year,
        isbn,
        description,
        price,
        category_id,
        cover_url,
        pdf_preview_url,
        pdf_full_url
      }]);
      if (insertError) throw insertError;
      successMessage = `Buku "${title}" berhasil ditambahkan ke perpustakaan!`;
    } catch (error) {
      errorMessage = error.message || "Terjadi kesalahan saat mengunggah buku.";
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-fvdmzr5h": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="admin-page section-wrapper" data-astro-cid-fvdmzr5h> <div class="admin-header" data-astro-cid-fvdmzr5h> <h1 data-astro-cid-fvdmzr5h>Tambah Koleksi Baru</h1> <p data-astro-cid-fvdmzr5h>Unggah detail buku beserta file PDF Pratinjau dan Full untuk pembaca.</p> </div> ${errorMessage && renderTemplate`<div class="alert error" data-astro-cid-fvdmzr5h>${errorMessage}</div>`} ${successMessage && renderTemplate`<div class="alert success" data-astro-cid-fvdmzr5h>${successMessage}</div>`} <form method="POST" enctype="multipart/form-data" class="admin-form" data-astro-cid-fvdmzr5h> <div class="form-grid" data-astro-cid-fvdmzr5h> <div class="input-group" data-astro-cid-fvdmzr5h> <label for="title" data-astro-cid-fvdmzr5h>Judul Buku *</label> <input type="text" id="title" name="title" required placeholder="Cth: Figma untuk Pemula" data-astro-cid-fvdmzr5h> </div> <div class="input-group" data-astro-cid-fvdmzr5h> <label for="author" data-astro-cid-fvdmzr5h>Nama Penulis *</label> <input type="text" id="author" name="author" required placeholder="Cth: Daniel Fick" data-astro-cid-fvdmzr5h> </div> <div class="input-group" data-astro-cid-fvdmzr5h> <label for="publisher" data-astro-cid-fvdmzr5h>Penerbit</label> <input type="text" id="publisher" name="publisher" placeholder="Cth: PT Mediacivitas" data-astro-cid-fvdmzr5h> </div> <div class="input-group" data-astro-cid-fvdmzr5h> <label for="publish_year" data-astro-cid-fvdmzr5h>Tahun Terbit</label> <input type="number" id="publish_year" name="publish_year" placeholder="Cth: 2026" data-astro-cid-fvdmzr5h> </div> <div class="input-group" data-astro-cid-fvdmzr5h> <label for="isbn" data-astro-cid-fvdmzr5h>ISBN</label> <input type="text" id="isbn" name="isbn" placeholder="Cth: 978-602-..." data-astro-cid-fvdmzr5h> </div> <div class="input-group" data-astro-cid-fvdmzr5h> <label for="price" data-astro-cid-fvdmzr5h>Harga (Rp) *</label> <input type="number" id="price" name="price" required value="0" min="0" data-astro-cid-fvdmzr5h> <small data-astro-cid-fvdmzr5h>Isi 0 jika buku ini gratis.</small> </div> </div> <div class="category-section" data-astro-cid-fvdmzr5h> <div class="input-group" data-astro-cid-fvdmzr5h> <label for="category_id" data-astro-cid-fvdmzr5h>Kategori Buku *</label> <select id="category_id" name="category_id" required data-astro-cid-fvdmzr5h> <option value="" disabled selected data-astro-cid-fvdmzr5h>Pilih Kategori...</option> ${categories?.map((cat) => renderTemplate`<option${addAttribute(cat.id, "value")} data-astro-cid-fvdmzr5h>${cat.name}</option>`)} <option value="new" class="highlight-option" data-astro-cid-fvdmzr5h>+ Buat Kategori Baru...</option> </select> </div> <div class="input-group hidden" id="new-category-wrapper" data-astro-cid-fvdmzr5h> <label for="new_category_name" data-astro-cid-fvdmzr5h>Nama Kategori Baru *</label> <input type="text" id="new_category_name" name="new_category_name" placeholder="Ketik kategori baru di sini..." data-astro-cid-fvdmzr5h> </div> </div> <div class="input-group full-width" data-astro-cid-fvdmzr5h> <label for="description" data-astro-cid-fvdmzr5h>Uraian / Sinopsis Singkat</label> <textarea id="description" name="description" rows="4" placeholder="Ceritakan sekilas tentang isi buku ini..." data-astro-cid-fvdmzr5h></textarea> </div> <div class="file-upload-section" data-astro-cid-fvdmzr5h> <h3 data-astro-cid-fvdmzr5h>Berkas Buku</h3> <div class="file-grid" data-astro-cid-fvdmzr5h> <div class="file-card" id="card-cover" data-astro-cid-fvdmzr5h> <span class="file-label-title" data-astro-cid-fvdmzr5h>Sampul Buku (Gambar) *</span> <label for="cover_image" class="custom-file-upload" data-astro-cid-fvdmzr5h> <div class="upload-icon" data-astro-cid-fvdmzr5h> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-fvdmzr5h><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" data-astro-cid-fvdmzr5h></path><polyline points="17 8 12 3 7 8" data-astro-cid-fvdmzr5h></polyline><line x1="12" y1="3" x2="12" y2="15" data-astro-cid-fvdmzr5h></line></svg> </div> <span class="upload-text" data-astro-cid-fvdmzr5h>Klik untuk memilih</span> <span class="file-name" id="name-cover" data-astro-cid-fvdmzr5h>Belum ada file</span> </label> <input type="file" id="cover_image" name="cover_image" accept="image/png, image/jpeg, image/webp" class="hidden-input" required data-astro-cid-fvdmzr5h> </div> <div class="file-card" id="card-preview" data-astro-cid-fvdmzr5h> <span class="file-label-title" data-astro-cid-fvdmzr5h>PDF Pratinjau (Opsional)</span> <label for="pdf_preview" class="custom-file-upload" data-astro-cid-fvdmzr5h> <div class="upload-icon" data-astro-cid-fvdmzr5h> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-fvdmzr5h><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" data-astro-cid-fvdmzr5h></path><polyline points="17 8 12 3 7 8" data-astro-cid-fvdmzr5h></polyline><line x1="12" y1="3" x2="12" y2="15" data-astro-cid-fvdmzr5h></line></svg> </div> <span class="upload-text" data-astro-cid-fvdmzr5h>Klik untuk memilih</span> <span class="file-name" id="name-preview" data-astro-cid-fvdmzr5h>Belum ada file</span> </label> <input type="file" id="pdf_preview" name="pdf_preview" accept="application/pdf" class="hidden-input" data-astro-cid-fvdmzr5h> </div> <div class="file-card highlight-card" id="card-full" data-astro-cid-fvdmzr5h> <span class="file-label-title" data-astro-cid-fvdmzr5h>PDF Full (Wajib) *</span> <label for="pdf_full" class="custom-file-upload" data-astro-cid-fvdmzr5h> <div class="upload-icon" data-astro-cid-fvdmzr5h> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-fvdmzr5h><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" data-astro-cid-fvdmzr5h></path><polyline points="17 8 12 3 7 8" data-astro-cid-fvdmzr5h></polyline><line x1="12" y1="3" x2="12" y2="15" data-astro-cid-fvdmzr5h></line></svg> </div> <span class="upload-text" data-astro-cid-fvdmzr5h>Klik untuk memilih</span> <span class="file-name" id="name-full" data-astro-cid-fvdmzr5h>Belum ada file</span> </label> <input type="file" id="pdf_full" name="pdf_full" accept="application/pdf" class="hidden-input" required data-astro-cid-fvdmzr5h> </div> </div> </div> <div class="form-actions" data-astro-cid-fvdmzr5h> <button type="submit" class="btn-modern" data-astro-cid-fvdmzr5h>Unggah Buku ke Sistem</button> </div> </form> </div> ` })} ${renderScript($$result, "D:/Projects/mitra-perpus/src/pages/tambah-buku.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Projects/mitra-perpus/src/pages/tambah-buku.astro", void 0);

const $$file = "D:/Projects/mitra-perpus/src/pages/tambah-buku.astro";
const $$url = "/tambah-buku";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TambahBuku,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
