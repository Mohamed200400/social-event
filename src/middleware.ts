import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  console.log("🛡️ Token in middleware:", token); // <=== Debug token content

  // If no token, redirect to login
  if (!token) {
    return NextResponse.redirect(new URL("/auth/signin", req.url));
  }

  const role = token.role;
  const path = req.nextUrl.pathname;

  // Check if accessing /admin route
  if (path.startsWith("/admin")) {
    if (role === "ADMIN") {
      return NextResponse.next(); // ✅ allow admin to access
    }

    if (role === "USER") {
      return NextResponse.redirect(new URL("/profile", req.url)); // 🔁 redirect normal user
    }

    // Unknown role
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  return NextResponse.next();
}
export const config = {
  matcher: ["/admin/:path*", "/profile/:path*"],
};
