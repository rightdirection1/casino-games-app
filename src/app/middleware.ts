// // import { NextRequest, NextResponse } from "next/server";
// // import { languages } from "./i18n/config";

// // export function middleware(req: NextRequest) {
// //   const pathname = req.nextUrl.pathname;

// //   const pathnameIsMissingLocale = languages.every(
// //     (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
// //   );

// //   if (pathnameIsMissingLocale) {
// //     const locale = req.cookies.get("NEXT_LOCALE")?.value || "en";
// //     return NextResponse.redirect(new URL(`/${locale}${pathname}`, req.url));
// //   }

// //   return NextResponse.next();
// // }

// // export const config = {
// //   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// // };
