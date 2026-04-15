import { AuthStrategy } from 'src/utils/auth/strategy';

export const config = {
  auth: {
    strategy: import.meta.env.VITE_AUTH_STRATEGY || AuthStrategy.CUSTOM,
  },
  supabase: {
    url: import.meta.env.VITE_SUPABASE_URL,
    anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY,
  },
  gtm: {
    id: import.meta.env.VITE_GOOGLE_TAG_MANAGER_ID,
  }, 
};
