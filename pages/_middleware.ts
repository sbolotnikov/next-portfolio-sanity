
import { NextRequest, NextResponse } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/

export function middleware(request: NextRequest) {
  // This Middleware skips adding the default prefix to API Routes and public files like fonts
  //  or images. If a request is made to the default locale, we redirect to our prefix /en.
  const shouldHandleLocale =
    !PUBLIC_FILE.test(request.nextUrl.pathname) &&
    !request.nextUrl.pathname.includes('/api/') &&
    request.nextUrl.locale === 'default'

  if (shouldHandleLocale) {
    const url = request.nextUrl.clone()
    url.pathname = `/en${request.nextUrl.pathname}`
    return NextResponse.redirect(url)
  }

  return undefined
}