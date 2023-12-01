import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { getLocale } from "@storedocs/lib/server-only/headers/get-locale";

import { Toaster } from "@storedocs/components/ui/toaster";

import "./globals.css";
import { LocaleProvider } from "@storedocs/providers/client-only/locale";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Storedocs",
  description: "Open Source document storage",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = getLocale();

  return (
    <html lang="en">
      <body className={inter.className}>
        <LocaleProvider locale={locale}>
          <main>{children}</main>
          <Toaster />
        </LocaleProvider>
      </body>
    </html>
  );
}
