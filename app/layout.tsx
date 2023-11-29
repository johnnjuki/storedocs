import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextAuthProvider } from "@storedocs/providers/next-auth";
import { getServerSession } from "next-auth";

import { authOptions } from "./api/auth/[...nextauth]/route";

import "./globals.css";

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
  const session = await getServerSession(authOptions);

  return (
    <NextAuthProvider session={session}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </NextAuthProvider>
  );
}
