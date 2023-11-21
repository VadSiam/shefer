'use server'

import { User } from "@supabase/supabase-js"
import { supabaseAdmin } from "../supabase/admin"

export const getIdentity = async (user: User) => {
  const { data, error } = await supabaseAdmin.auth.admin.getUserById(user.id)

  if (!data || error) {
    throw new Error();
  }

  return {
    id: data?.user.id,
    fullName: `${data.user.email}`,
  };
}