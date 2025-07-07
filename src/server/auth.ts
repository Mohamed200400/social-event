import { Pages, Routes } from "@/constant/enums";
import { db } from "@/lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";


export const authOptions:NextAuthOptions = {
    session: {
    strategy: "jwt",
    maxAge: 7 * 24 * 60 * 60, // 7 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [Credentials(
    
    {
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "hello@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      authorize : ,
      adapter: PrismaAdapter(db),
      pages: {
        signIn: `/${Routes.AUTH}/${Pages.REGISTER}` ,
       }
    }
  )],

}