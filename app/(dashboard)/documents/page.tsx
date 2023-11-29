"use client"

import Link from "next/link";
import { signOut } from "next-auth/react";

import { Button } from "@storedocs/components/ui/button";

export default function Page() {
  return (
    <main className="flex flex-col h-screen items-center justify-center">
      <div className="mb-4">
        Dashboard / Documents
      </div>

      <Link href="#" onClick={() => signOut()}>
        <Button>Sign out</Button>
      </Link>
    </main>
  );
}
