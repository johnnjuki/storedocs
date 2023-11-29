"use server";

import { cache } from "react";
import { getServerSession } from "next-auth";

import { prisma } from "@storedocs/lib/db";
import { NEXT_AUTH_OPTIONS } from "./auth-options";

export const getServerComponentSession = cache(async () => {
  const session = await getServerSession(NEXT_AUTH_OPTIONS);

  if (!session || !session.user?.email) {
    return { user: null, session: null };
  }

  const user = await prisma.user.findFirstOrThrow({
    where: {
      email: session.user.email,
    },
  });

  return { user, session };
});

export const getRequiredServerComponentSession = cache(async () => {
  const { user, session } = await getServerComponentSession();

  if (!user || !session) {
    throw new Error("No session found");
  }

  return { user, session };
});
