import { createClient } from '@supabase/supabase-js';
import { createServerClient } from '@supabase/ssr';

const supabaseUrl = "https://crakyqccmudfeoeeljug.supabase.co";
const supabaseAnonKey = "sb_publishable_0SqBL464IEmuTtWFsAYy4Q_V5JyboVj";
const supabase = createClient(supabaseUrl, supabaseAnonKey);
const getSupabaseServer = (cookies) => {
  return createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      get(key) {
        return cookies.get(key)?.value;
      },
      set(key, value, options) {
        try {
          cookies.set(key, value, options);
        } catch (error) {
        }
      },
      remove(key, options) {
        try {
          cookies.delete(key, options);
        } catch (error) {
        }
      }
    }
  });
};

export { getSupabaseServer as g, supabase as s };
