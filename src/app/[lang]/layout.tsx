import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css";
import { ThemeClientProvider } from "../context/theme-provider";
import { i18n, Locale } from "../../../i18n-config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - Pedro Leal",
  description: "Software Engineer from Brazil",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: { lang: Locale };
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  return (
    <>
      <html lang={params.lang} suppressHydrationWarning>
        <head />
        <body className={inter.className}>
          <ThemeClientProvider>{children}</ThemeClientProvider>
        </body>
      </html>
    </>
  );
}
