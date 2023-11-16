import createMiddleware from "next-intl/middleware";
import { pathnames, locales } from "./config";

export default createMiddleware({
  locales: ["en", "pl"],

  defaultLocale: "pl",
  // defaultLocale: "en",
  // locales,
  // pathnames,
});

export const config = {
  // Skip all paths that should not be internationalized. This example skips
  // certain folders and all pathnames with a dot (e.g. favicon.ico)
  // matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
  matcher: ["/((?!api|_next|.*\\..*).*)"],
  // matcher: ["/", "/(de|en)/:path*"],
};
