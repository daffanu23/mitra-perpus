// src/lib/supabase.js
import { createClient } from '@supabase/supabase-js';
import { createServerClient } from '@supabase/ssr';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

// Client standar untuk fetch data publik
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Fungsi utilitas backend untuk membaca Cookies & Autentikasi
export const getSupabaseServer = (cookies) => {
  return createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      get(key) {
        return cookies.get(key)?.value;
      },
      set(key, value, options) {
        try {
          cookies.set(key, value, options);
        } catch (error) {
          // Sistem pengaman: Abaikan error jika Astro mengeluh "ResponseSentError" 
          // karena header/cookies sudah telanjur dikirim ke browser.
        }
      },
      remove(key, options) {
        try {
          cookies.delete(key, options);
        } catch (error) {
          // Sistem pengaman: Abaikan error
        }
      },
    },
  });
};