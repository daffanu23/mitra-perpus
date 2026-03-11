// src/pages/auth/logout.js
import { getSupabaseServer } from '../../lib/supabase.js';

export async function GET({ cookies, redirect }) {
  const supabase = getSupabaseServer(cookies);
  
  // Hancurkan sesi di Supabase & bersihkan cookies
  await supabase.auth.signOut();
  
  // Lempar kembali ke Beranda
  return redirect('/');
}