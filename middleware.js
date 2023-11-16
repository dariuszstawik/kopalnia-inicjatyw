import createMiddleware from "next-intl/middleware";
import { pathnames, locales } from "./config";

export default createMiddleware({
  // A list of all locales that are supported
  // locales: ["en", "pl"],

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  // defaultLocale: "pl",
  defaultLocale: "en",
  locales,
  pathnames,
});

export const config = {
  // Skip all paths that should not be internationalized. This example skips
  // certain folders and all pathnames with a dot (e.g. favicon.ico)
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
  // matcher: ["/", "/(de|en)/:path*"],
};
