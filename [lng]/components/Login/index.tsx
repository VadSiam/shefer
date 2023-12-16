'use client'
import Link from 'next/link'
// import { headers, cookies } from 'next/headers'
import { createClient } from '@/utils/supabase/client'
import { redirect } from 'next/navigation'
import { useMainContext } from '@/utils/context/main.context'

const Login = ({
  searchParams,
  lng,
}: {
  searchParams?: { message?: string },
  lng: string
}) => {
  const { afterLogin } = useMainContext();

  const signIn = async (formData: FormData) => {

    // 'use server'

    const email = formData.get('email') as string
    const password = formData.get('password') as string
    // const cookieStore = cookies()
    const supabase = createClient()

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      return redirect('/login?message=Could not authenticate user')
    }

    afterLogin()
  }

  const signUp = async (formData: FormData) => {
    // 'use server'

    // const origin = headers().get('origin')
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    // const cookieStore = cookies()
    const supabase = createClient()

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        // emailRedirectTo: `${origin}/auth/callback`,
      },
    })

    if (error) {
      return redirect('/login?message=Could not authenticate user')
    }

    return redirect('/login?message=Check email to continue sign in process')
  }

  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission
    const formData = new FormData(event.currentTarget);
    await signIn(formData);
  };

  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2 bg-back">
      <Link
        href="/"
        className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>{' '}
        Back
      </Link>

      <form
        className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
        onSubmit={handleSignIn}
      >
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
        <input
          className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          id="email"
          name="email"
          placeholder="you@example.com"
          required
        />
        <label
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="password"
          id="password"
          name="password"
          placeholder="••••••••"
          required
        />
        <button className="bg-green-700 rounded-md px-4 py-2 text-foreground mb-2 mt-6">
          Sign In
        </button>
        <Link
          href={`/${lng}/signup`}
          className="text-center py-2.5 px-5 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-inherit hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-inherit dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Sign Up
        </Link>
        {searchParams?.message && (
          <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
            {searchParams.message}
          </p>
        )}
      </form>
    </div>
  )
}

export default Login