import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@storedocs/lib/db";
import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET ?? "secret",
  providers: [
    GithubProvider({
      clientId: process.env.NEXT_PRIVATE_GITHUB_CLIENT_ID ?? "",
      clientSecret: process.env.NEXT_PRIVATE_GITHUB_SECRET ?? "",
    }),
    GoogleProvider({
      clientId: process.env.NEXT_PRIVATE_GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.NEXT_PRIVATE_GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST}