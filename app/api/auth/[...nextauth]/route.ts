import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@storedocs/lib/db";
import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const NEXT_AUTH_OPTIONS: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET ?? "secret",
  providers: [
    // GithubProvider({
    //   clientId: process.env.NEXT_PRIVATE_GITHUB_CLIENT_ID ?? "",
    //   clientSecret: process.env.NEXT_PRIVATE_GITHUB_CLIENT_SECRET ?? "",
    // }),
    GoogleProvider({
      clientId: process.env.NEXT_PRIVATE_GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.NEXT_PRIVATE_GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  pages: {
    signIn: "/signin",
  },
};

const handler = NextAuth(NEXT_AUTH_OPTIONS);
export { handler as GET, handler as POST}
