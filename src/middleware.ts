import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from 'jose';

export async function middleware(req: NextRequest) {
  try {
    const tokenValue = req.cookies.get('token')?.value;
    //console.log("🛡️ Token in middleware:", tokenValue);

    // If no token, redirect to login
    if (!tokenValue) {
      return NextResponse.redirect(new URL("/auth/signin", req.url));
    }

    // Method 1: Using jose with proper secret handling for Edge Runtime
    const secret = new TextEncoder().encode(process.env.JWT_SECRET!);
    
    // Verify the JWT token using jose (Edge Runtime compatible)
    const { payload } = await jwtVerify(tokenValue, secret);
    console.log("Decoded token:", payload);

    // Extract role from decoded token
    const role = payload.role as string;
    const path = req.nextUrl.pathname;

    console.log("User role:", role);
    console.log("Accessing path:", path);

    // Check if accessing /admin route
    if (path.startsWith("/admin")) {
      if (role === "ADMIN") {
        return NextResponse.redirect(new URL("/admin", req.url)); // ✅ Allow admin to access
      }
      
      if (role === "USER") {
        return NextResponse.redirect(new URL("/profile", req.url)); // 🔁 Redirect normal user
      }
      
      // Unknown role
      return NextResponse.redirect(new URL("/unauthorized", req.url));
    }

    // Check if accessing /profile route
    if (path.startsWith("/profile")) {
      if (role === "USER" || role === "ADMIN") {
        return NextResponse.next(); // ✅ Allow users and admins to access profile
      }
      
      return NextResponse.redirect(new URL("/unauthorized", req.url));
    }

    return NextResponse.next();
    
  } catch (error) {
    console.error("JWT verification failed:", error);
    // If token is invalid, redirect to login
    return NextResponse.redirect(new URL("/auth/signin", req.url));
  }
}

// IMPORTANT: Make sure your matcher is correct
export const config = {
  matcher: [
    "/admin/:path*", 
    "/profile/:path*"
  ],
};

