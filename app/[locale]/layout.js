import { Inter } from "next/font/google";
import "./globals.css";
import { useTranslations } from "next-intl";
import { notFound } from "next/navigation";
import { unstable_setRequestLocale } from "next-intl/server";
import Navbar from "./components/global-components/navbar";
import Footer from "./components/global-components/footer";

const locales = ["pl", "en"];

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({ children, params: { locale } }) {
  if (!locales.includes(locale)) notFound();

  const t = useTranslations("Navbar");
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Navbar
          start={t("start")}
          about={t("about")}
          projects={t("projects")}
          news={t("news")}
          contact={t("contact")}
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
