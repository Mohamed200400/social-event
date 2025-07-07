import { Input } from "@/components/ui/input";
import { Pages, Routes } from "@/constant/enums";
import { Label } from "@radix-ui/react-label";
import Link from "next/link";
import React from "react";

function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <form className="bg-white p-8 rounded shadow-md w-full max-w-sm">
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
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
        >
          Sign In
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
