"use client";
import { Input } from "@/components/ui/input";
import { Pages, Routes } from "@/constant/enums";
import { Label } from "@radix-ui/react-label";
import Link from "next/link";
import React, { useActionState, useEffect } from "react";
import { login } from "../_actions/auth";

import Loader from "@/components/Loader";
import { toast } from "sonner";
import { redirect } from "next/navigation";
import { Router } from "next/router";
import { signIn } from "next-auth/react";

function SignInPage() {
  const initialState = {
    message: "",
    error: "",
    success: false,
  };
  const [state, action, isPending] = useActionState(login, initialState);

  useEffect(() => {
    if (state.success) {
      toast(state.message, {
        style: { background: "#fff", color: "green" },
      });
      
       // Use NextAuth signIn after successful validation
      const handleSignIn = async () => {
        const result = await signIn("credentials", {
          email: state.email, // You'll need to return email from server action
          password: state.password, // You'll need to return password from server action
          redirect: false,
        });
        
        
          
        
      };
      
      handleSignIn();
    

    }
    if (state.error) {
      toast(state.error, {
        style: { background: "#fff", color: "red" },
      });
    }
  }, [state]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <form
        className="bg-white p-8 rounded shadow-md w-full max-w-sm"
        action={action}
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Sign In</h2>
        <div className="mb-4">
          <Label className="block mb-1 text-gray-700" htmlFor="email">
            Email
          </Label>
          <Input
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6">
          <Label className="block mb-1 text-gray-700" htmlFor="password">
            Password
          </Label>
          <Input
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
            type="password"
            id="password"
            name="password"
            required
            autoComplete="current-password"
            placeholder="Enter your password"
          />
        </div>
        <button
          disabled={isPending}
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
        >
          {isPending ? <Loader /> : "Sign In"}
        </button>

        <div className="mt-6 text-center text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <Link
            href={`/${Routes.AUTH}/${Pages.REGISTER}`}
            className="text-blue-600 hover:underline"
          >
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignInPage;
