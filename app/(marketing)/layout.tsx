import { NEXT_AUTH_OPTIONS } from "@storedocs/lib/next-auth/auth-options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(NEXT_AUTH_OPTIONS);
  if (session) {
    redirect("/documents");
  }

  return <div>{children}</div>;
}
