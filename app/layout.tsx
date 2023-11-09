import { GeistSans } from 'geist/font'
import { QueryClientProviderWrapper } from '@/utils/context/main.context'
import { useIsFetching } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import Loader from '@/components/Loader'
import './globals.css'

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Next.js and Supabase Starter Kit',
  description: 'The fastest way to build apps with Next.js and Supabase',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <main className="min-h-screen flex flex-col items-center">
          <QueryClientProviderWrapper>
            <Loader />
            <Toaster position="top-center" reverseOrder={false} />
            {children}
          </QueryClientProviderWrapper>
        </main>
      </body>
    </html>
  )
}
