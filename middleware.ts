import { NextResponse, type NextRequest } from 'next/server'
import { createClient } from '@/utils/supabase/middleware'
import acceptLanguage from 'accept-language'
import { fallbackLng, languages, cookieName } from './app/i18n/settings'

acceptLanguage.languages(languages)

export const config = {
  // matcher: '/:lng*'
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)']
}

const PUBLIC_FILE = /\.(.*)$/

export async function middleware(request: NextRequest) {
  // i18n setup start
  let lng
  if (request.cookies.has(cookieName)) lng = acceptLanguage.get(request.cookies.get(cookieName)?.value)
  if (!lng) lng = acceptLanguage.get(request.headers.get('Accept-Language'))
  if (!lng) lng = fallbackLng

  //to take the files from the publisc folder
  if (
    PUBLIC_FILE.test(request?.nextUrl?.pathname)
  ) {
    return
  } 

  // Redirect if lng in path is not supported
  if (
    !languages.some(loc => request.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !request.nextUrl.pathname.startsWith('/_next')
  ) {
    return NextResponse.redirect(new URL(`/${lng}${request.nextUrl.pathname}`, request.url))
  }

  if (request?.headers?.has('referer')) {
    const refererUrl = new URL(request.headers.get('referer') as string)
    const lngInReferer = languages.find((l) => refererUrl.pathname.startsWith(`/${l}`))
    const response = NextResponse.next()
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer)
    return response
  }
  // i18n setup end

}
