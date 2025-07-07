"use client";

import React, { useActionState } from "react";
import { Pages, Routes } from "@/constant/enums";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { signup } from "../_actions/auth";


function page() {
    const  initialState = {
        message: "",
        error: "",
        success: false,
}
    const [state,action] = useActionState(signup,initialState );
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <form className="bg-white p-8 rounded shadow-md w-full max-w-sm" action={action}>
        <h2 className="text-2xl font-semibold mb-6 text-center">Sign Up</h2>
        <div className="mb-4">
          <Label className="block mb-1 text-gray-700" htmlFor="name">
            Name
          </Label>
          <Input
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
            type="text"
            id="name"
            name="name"
            required
            placeholder="Enter your name"
          />
          {!state && console.log(state)}        
          </div>
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
        <div className="mb-6">
          <Label
            className="block mb-1 text-gray-700"
            htmlFor="confirm-password"
          >
            Confirm Password
          </Label>
          <Input
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
            type="password"
            id="confirm-password"
            name="confirm-password"
            required
            placeholder="Confirm your password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
        >
          Sign Up
        </button>
        <div className="mt-6 text-center text-sm text-gray-600">
          you have an account?{" "}
          <Link
            href={`/${Routes.AUTH}/${Pages.LOGIN}`}
            className="text-blue-600 hover:underline"
          >
            Sign in
          </Link>
        </div>
      </form>
    </div>
  );
}

export default page;
