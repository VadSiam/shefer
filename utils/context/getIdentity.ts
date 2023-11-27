'use server'

import { User } from "@supabase/supabase-js"
import { createClient } from "../supabase/server";
import { cookies } from "next/headers";

export const getIdentity = async (user: User) => {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  const { data, error } = await supabase.auth.getUser()
  console.log('🚀 ~ file: getIdentity.ts:12 ~ data:', data?.user?.identities, user?.identities?.[0]?.identity_data)

  if (!data || error) {
    throw new Error();
  }

  return {
    id: data?.user.id,
    fullName: `${data.user.email}`,
  };
}

// export const getIdentity = async (user: User) => {
//   const { data, error } = await supabaseAdmin.auth.admin.getUserById(user.id)

//   if (!data || error) {
//     throw new Error();
//   }

//   return {
//     id: data?.user.id,
//     fullName: `${data.user.email}`,
//   };
// }