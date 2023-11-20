import { supabaseDataProvider } from 'ra-supabase';
import { createClient } from '../supabase/client';

export const dataProvider = supabaseDataProvider({
  instanceUrl: process.env.NEXT_PUBLIC_SUPABASE_URL!,
  apiKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  supabaseClient: createClient(),
});