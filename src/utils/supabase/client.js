import { createClient as createBrowserClient } from '@supabase/supabase-js';
import { config } from 'src/utils/config';

let client;
export function createClient() {
  if (client) {
    return client;
  }
  client = createBrowserClient(config.supabase.url, config.supabase.anonKey);
  return client;
}
