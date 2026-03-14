import { c as createComponent } from './astro-component_CKvgteqe.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_B2khXH54.mjs';
import { $ as $$Layout, r as renderScript } from './Layout_Do8cOrly.mjs';
import { g as getSupabaseServer } from './supabase_Y0nK4rLo.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Login;
  const supabase = getSupabaseServer(Astro2.cookies);
  const { data: { user } } = await supabase.auth.getUser();
  if (user) {
    return Astro2.redirect("/");
  }
  const urlError = Astro2.url.searchParams.get("error");
  let errorMessage = urlError || "";
  let successMessage = "";
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const action = formData.get("action")?.toString();
    if (action === "google") {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${Astro2.url.origin}/auth/callback`
        }
      });
      if (error) {
        errorMessage = error.message;
      } else if (data.url) {
        return Astro2.redirect(data.url);
      }
    } else {
      const email = formData.get("email")?.toString();
      const password = formData.get("password")?.toString();
      if (email && password) {
        if (action === "register") {
          const { error } = await supabase.auth.signUp({ email, password });
          if (error) errorMessage = error.message;
          else successMessage = "Registrasi berhasil! Silakan langsung login.";
        } else if (action === "login") {
          const { error } = await supabase.auth.signInWithPassword({ email, password });
          if (error) errorMessage = "Email atau password salah!";
          else return Astro2.redirect("/");
        }
      } else {
        errorMessage = "Email dan password wajib diisi!";
      }
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-sgpqyurt": true }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([' <script type="module" src="https://unpkg.com/@lottiefiles/dotlottie-wc@0.3.0/dist/dotlottie-wc.js"><\/script> ', '<div class="auth-page section-wrapper" data-astro-cid-sgpqyurt> <div class="auth-split-card" data-astro-cid-sgpqyurt> <div class="auth-content" data-astro-cid-sgpqyurt> <div class="auth-header" data-astro-cid-sgpqyurt> <h1 id="auth-title" data-astro-cid-sgpqyurt>Masuk ke Mita.</h1> <p id="auth-subtitle" data-astro-cid-sgpqyurt>Lanjutkan membaca koleksi buku favorit Anda.</p> </div> ', " ", ' <div class="forms-wrapper" data-astro-cid-sgpqyurt> <form method="POST" class="auth-form" data-astro-cid-sgpqyurt> <input type="hidden" name="action" id="form-action" value="login" data-astro-cid-sgpqyurt> <div class="input-group" data-astro-cid-sgpqyurt> <label for="email" data-astro-cid-sgpqyurt>Email</label> <input type="email" id="email" name="email" placeholder="nama@email.com" data-astro-cid-sgpqyurt> </div> <div class="input-group" data-astro-cid-sgpqyurt> <label for="password" data-astro-cid-sgpqyurt>Password</label> <input type="password" id="password" name="password" placeholder="Minimal 6 karakter" minlength="6" data-astro-cid-sgpqyurt> </div> <div class="checkbox-group" data-astro-cid-sgpqyurt> <input type="checkbox" id="remember" name="remember" data-astro-cid-sgpqyurt> <label for="remember" data-astro-cid-sgpqyurt>Ingat saya</label> </div> <button type="submit" class="btn-modern" id="submit-btn" style="width: 100%;" data-astro-cid-sgpqyurt>Masuk</button> </form> <div class="divider" data-astro-cid-sgpqyurt> <span data-astro-cid-sgpqyurt>Atau</span> </div> <form method="POST" class="google-form" data-astro-cid-sgpqyurt> <input type="hidden" name="action" id="google-action" value="google" data-astro-cid-sgpqyurt> <button type="submit" class="google-btn" data-astro-cid-sgpqyurt> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="20px" height="20px" data-astro-cid-sgpqyurt> <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" data-astro-cid-sgpqyurt></path> <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" data-astro-cid-sgpqyurt></path> <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" data-astro-cid-sgpqyurt></path> <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" data-astro-cid-sgpqyurt></path> </svg> <span id="google-btn-text" data-astro-cid-sgpqyurt>Masuk dengan Google</span> </button> </form> </div> <div class="auth-footer" data-astro-cid-sgpqyurt> <p id="toggle-text" data-astro-cid-sgpqyurt>Belum punya akun? <button type="button" id="toggle-btn-inner" data-astro-cid-sgpqyurt>Daftar disini</button></p> </div> </div> <div class="auth-media" data-astro-cid-sgpqyurt> <div class="media-bg" data-astro-cid-sgpqyurt> ', " </div> </div> </div> </div> "])), maybeRenderHead(), errorMessage && renderTemplate`<div class="alert error" data-astro-cid-sgpqyurt>${errorMessage}</div>`, successMessage && renderTemplate`<div class="alert success" data-astro-cid-sgpqyurt>${successMessage}</div>`, renderComponent($$result2, "dotlottie-wc", "dotlottie-wc", { "src": "https://lottie.host/49331709-31aa-40b6-8863-5b4bd4558327/MV3A444BWr.lottie", "autoplay": true, "loop": true, "style": "width: 100%; height: 100%; object-fit: cover;", "data-astro-cid-sgpqyurt": true })) })} ${renderScript($$result, "D:/Projects/mitra-perpus/src/pages/login.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Projects/mitra-perpus/src/pages/login.astro", void 0);

const $$file = "D:/Projects/mitra-perpus/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
