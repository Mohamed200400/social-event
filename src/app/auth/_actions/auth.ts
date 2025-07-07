"use server"

import { db } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export type initialState = {
    message?: string;
    error?: string;
    success?: boolean;
}

export async function signup(
  prevState: initialState,
  formData: FormData
): Promise<initialState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirm-password") as string;
    

  if (!name || !email || !password || !confirmPassword) {
    return { error: "All fields are required" };
  }

  if (password !== confirmPassword) {
    return { error: "Passwords do not match" };
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await db.user.create({
      data: {
        name ,
        email,
        password:hashedPassword,
        // password: hash(data.password), // hash in real apps!
      },
    });
    console.log("success");
    return { success: true };
    
  } catch (e: any) {
    if (e.code === "P2002") {
      // Prisma unique constraint failed
      return { success: false, error:  "Email already exists"  };
    }
    return { success: false, error:  "Something went wrong" };
  }
  // Here you would typically send the data to your server or API
  // For now, we will just simulate a successful signup
 
}