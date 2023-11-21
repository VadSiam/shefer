'use client'

import { supabaseAuthProvider } from 'ra-supabase';
import { createClient } from '../supabase/client';
import { getIdentity } from './getIdentity';

const supabase = createClient()

export const authProvider = supabaseAuthProvider(supabase, {
  getIdentity: user => getIdentity(user),
});