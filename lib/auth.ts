import { NextAuthOptions } from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import { db } from "@/lib/db"

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db) as any,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id
        // Add user role and credits to session
        const dbUser = await db.user.findUnique({
          where: { id: user.id },
          select: { role: true, credits: true, plan: true }
        })
        if (dbUser) {
          session.user.role = dbUser.role
          session.user.credits = dbUser.credits
          session.user.plan = dbUser.plan
        }
      }
      return session
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
  },
  events: {
    async createUser({ user }) {
      // Initialize new user with default credits and plan
      await db.user.update({
        where: { id: user.id },
        data: {
          credits: 100,
          plan: 'FREE',
        },
      })
    },
  },
  session: {
    strategy: "database",
  },
}