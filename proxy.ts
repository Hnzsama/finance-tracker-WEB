import { NextRequest, NextResponse } from 'next/server'
import { decrypt } from '@/lib/session'
import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { languages, fallbackLng } from './i18n/settings'

// 1. Specify protected and public routes
const protectedRoutes = ['/dashboard']
const publicRoutes = ['/login', '/', '/register']

function getLocale(request: NextRequest): string | undefined {
    // Check cookie first
    const cookieLocale = request.cookies.get('i18next')?.value
    if (cookieLocale && languages.includes(cookieLocale)) {
        return cookieLocale
    }

    // Negotiator expects plain object so we need to transform headers
    const negotiatorHeaders: Record<string, string> = {}
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

    // @ts-ignore locales are readonly
    const locales: string[] = languages
    let languagesHeader = new Negotiator({ headers: negotiatorHeaders }).languages(
        locales
    )

    try {
        return matchLocale(languagesHeader, locales, fallbackLng)
    } catch (e) {
        console.warn('Locale matching failed', e)
        return fallbackLng
    }
}

export default async function proxy(req: NextRequest) {
    const pathname = req.nextUrl.pathname

    // Check if there is any supported locale in the pathname
    const pathnameIsMissingLocale = languages.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    )

    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
        const locale = getLocale(req)
        return NextResponse.redirect(
            new URL(
                `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
                req.url
            )
        )
    }

    // Extract locale and internal path to check against protected/public routes
    const pathSegments = pathname.split('/')
    const locale = pathSegments[1] // The locale part (e.g., 'en', 'id')

    // Construct internal path (remove locale prefix)
    // Handle root /en -> /
    // Handle /en/dashboard -> /dashboard
    const internalPath = pathname.substring(1 + locale.length) || '/'

    // 2. Check if the current route is protected or public
    const isProtectedRoute = protectedRoutes.some((route) => internalPath.startsWith(route))
    const isPublicRoute = publicRoutes.includes(internalPath)

    // 3. Decrypt the session from the cookie
    const cookie = req.cookies.get('session')?.value
    const session = await decrypt(cookie)

    // 4. Redirect to /login if the user is not authenticated
    if (isProtectedRoute && !session?.userId) {
        return NextResponse.redirect(new URL(`/${locale}/login`, req.nextUrl))
    }

    // 5. Redirect to /dashboard if the user is authenticated
    if (
        isPublicRoute &&
        session?.userId &&
        !internalPath.startsWith('/dashboard')
    ) {
        return NextResponse.redirect(new URL(`/${locale}/dashboard`, req.nextUrl))
    }

    return NextResponse.next()
}

// Routes Middleware should not run on
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
}
