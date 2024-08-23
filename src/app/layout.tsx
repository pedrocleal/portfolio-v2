import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { appWithTranslation } from "next-i18next"
import type { AppProps } from "next/app";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - Pedro Leal",
  description: "Software Engineer from Brazil",
};


interface RootLayoutProps extends AppProps {
  children: React.ReactNode;
}

function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

export default appWithTranslation(RootLayout);
