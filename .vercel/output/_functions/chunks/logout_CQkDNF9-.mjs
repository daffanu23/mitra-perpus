import { g as getSupabaseServer } from './supabase_Y0nK4rLo.mjs';

// src/pages/auth/logout.js

async function GET({ cookies, redirect }) {
  const supabase = getSupabaseServer(cookies);
  
  // Hancurkan sesi di Supabase & bersihkan cookies
  await supabase.auth.signOut();
  
  // Lempar kembali ke Beranda
  return redirect('/');
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
