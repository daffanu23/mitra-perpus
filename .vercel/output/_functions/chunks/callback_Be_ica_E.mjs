import { g as getSupabaseServer } from './supabase_Y0nK4rLo.mjs';

// src/pages/auth/callback.js

async function GET({ request, url, cookies, redirect }) {
  const authCode = url.searchParams.get('code');

  // Jika tidak ada kode (mungkin batal login), kembalikan ke login
  if (!authCode) {
    return redirect('/login?error=Akses ditolak atau dibatalkan');
  }

  // Tukar kode rahasia dari Google menjadi Cookies Sesi
  const supabase = getSupabaseServer(cookies);
  const { error } = await supabase.auth.exchangeCodeForSession(authCode);

  if (error) {
    return redirect(`/login?error=${encodeURIComponent(error.message)}`);
  }

  // Kalau sukses, langsung masuk ke Beranda!
  return redirect('/');
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
