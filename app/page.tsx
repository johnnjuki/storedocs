"use client";
import { Button } from "@storedocs/components/ui/button";
import { useSession, signIn, signOut } from "next-auth/react";

import Link from "next/link";

export default function Home() {
  const { data: session } = useSession();

  return (
    <main>
      <div className="flex justify-center items-center h-screen flex-col">
        <Link href="/">
          <p className="mb-4">NextAuth.js</p>
        </Link>
        {session && (
          <Link href="#" onClick={() => signOut()}>
            <Button>Sign out</Button>
          </Link>
        )}
        {!session && (
          <Link href="#" onClick={() => signIn()}>
            <Button>Sign in</Button>
          </Link>
        )}
      </div>
    </main>
  );
}
