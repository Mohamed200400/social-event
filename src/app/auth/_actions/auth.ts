"use server"

import { db } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { signIn } from "next-auth/react";


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
    return { success: false, error: "All fields are required" };
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
    return { success: true, message: "Account created successfully" };
    
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


export async function login(
  prevState: initialState,
  formData: FormData
): Promise<any> {
  
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  if (!email || !password) {
    return { success:false , error: "Email and password are required" };
  }
  try{
    
    const user = await db.user.findUnique({
      where: { 
        email: email,
        
      },
    });
    if (user){
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (isPasswordValid) {
        // Here you would typically set a session or token
        console.log("login successful");
        
        return { success: true, message: "Login successful" };
      } else {
        return { success:false , error: "Invalid email or password" };
      }
    }
    


  }catch(e: any) {
    console.error("Error during login:", e);
    return {success:false , error: "Something went wrong" };

  }
  
}