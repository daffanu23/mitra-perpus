// src/pages/auth/callback.js
import { getSupabaseServer } from '../../lib/supabase.js';

export async function GET({ request, url, cookies, redirect }) {
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