import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { NextAuthProvider } from "@storedocs/providers/next-auth";
import { NEXT_AUTH_OPTIONS } from "@storedocs/lib/next-auth/auth-options";
import { getRequiredServerComponentSession } from "@storedocs/lib/next-auth/get-server-component-session";
import { Header } from "@storedocs/components/(dashboard)/layout/header";
import { ThemeProvider } from "@storedocs/components/theme-provider";

type AuthenticatedDashboardLayoutProps = {
  children: React.ReactNode;
};

export default async function AuthenticatedDashboardLayout({
  children,
}: AuthenticatedDashboardLayoutProps) {
  const session = await getServerSession(NEXT_AUTH_OPTIONS);
  if (!session) {
    redirect("/");
  }

  const { user } = await getRequiredServerComponentSession();

  return (
    <NextAuthProvider session={session}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Header user={user} />
        <main>{children}</main>
      </ThemeProvider>
    </NextAuthProvider>
  );
}
