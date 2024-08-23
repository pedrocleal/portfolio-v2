import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeClientProvider } from "./components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - Pedro Leal",
  description: "Software Engineer from Brazil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={inter.className}>
          <ThemeClientProvider>{children}</ThemeClientProvider>
        </body>
      </html>
    </>
  );
}
