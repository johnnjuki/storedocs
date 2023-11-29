import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { NextAuthProvider } from "@storedocs/providers/next-auth";
import { NEXT_AUTH_OPTIONS } from "@storedocs/lib/next-auth/auth-options";

type AuthenticatedDashboardLayoutProps = {
  children: React.ReactNode;
};

export default async function AuthenticatedDashboardLayout({
  children,
}: AuthenticatedDashboardLayoutProps) {
  const session = await getServerSession(NEXT_AUTH_OPTIONS);
  if (!session) {
    redirect("/signin");
  }
  return (
    <NextAuthProvider session={session}>
      <main>{children}</main>
    </NextAuthProvider>
  );
}
