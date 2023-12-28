import { QueryClientProviderWrapper } from '@/utils/context/main.context'
import { Toaster } from 'react-hot-toast'
import { dir } from 'i18next'
import './globals.css'
import Loader from '@/[lng]/components/Loader'
import Header from '@/[lng]/components/Header'
import { languages } from '../i18n/settings'
import Footer from '@/[lng]/components/Footer'
import { Suspense } from 'react'
import LoaderBody from '@/[lng]/components/Loader/LoaderBody'
import { Arsenal } from 'next/font/google'


export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Shefer brand',
  description: 'Shefer online shop',
}

const arsenal = Arsenal({
  subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext'],
  weight: ['400', '700'],
})

export default function RootLayout({
  children,
  params: {
    lng
  }
}: {
  children: React.ReactNode,
  params: {
    lng: string
  }
}) {


  return (
    <html lang={lng} dir={dir(lng)} className={arsenal.className}>
      <body className="bg-background-white text-foreground-dark-gray dark:bg-background dark:text-foreground">
        <main className="min-h-screen flex flex-col items-center">
          <QueryClientProviderWrapper>
            <Header lng={lng} />
            <Loader />
            <Toaster position="top-center" reverseOrder={false} />
            <div className="flex-1 w-full flex flex-col gap-2 items-center mt-22 md:mt-22">
              <Suspense fallback={<LoaderBody />}>
                {children}
              </Suspense>
            </div>
            <Footer lng={lng} />
          </QueryClientProviderWrapper>
        </main>
      </body>
    </html>
  )
}
