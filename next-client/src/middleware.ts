import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt, { type JwtPayload } from "jsonwebtoken";
import * as jose from "jose";
type UserRedirects = {
  Admin: "/admin";
  PlanetaryStaff: "/planetary";
  DeliveryGuy: "/delivery";
};
type UserRole = "Admin" | "PlanetaryStaff" | "DeliveryGuy" | "";

export async function middleware(req: NextRequest) {
  const currentPath = req.nextUrl.pathname;
  const token = req.cookies.get("auth_token");

  const userRedirects: UserRedirects = {
    Admin: "/admin",
    PlanetaryStaff: "/planetary",
    DeliveryGuy: "/delivery",
  };
  let decoded: JwtPayload | string | undefined;
  let userRole: UserRole = "";

  try {
    if (token) {
      console.log("token ui", token);
      const decode = await jose.jwtVerify(
        token.value,
        new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET)
      );

      decoded = decode.payload;
      console.log(decoded);
      if (typeof decoded !== "string" && decoded?.role) {
        userRole = decoded.role;
      }
    }

    const publicRoutes = ["/", "/login", "/register", "/public"];
    console.log(userRole, "user role");
    if (userRole && currentPath === userRedirects[userRole]) {
      console.log(" is this ruuning");
      return NextResponse.next();
    }

    if (userRole && Object.keys(userRedirects).includes(userRole)) {
      console.log(" is this ruuning");
      return NextResponse.redirect(new URL(userRedirects[userRole], req.url));
    }

    if (publicRoutes.includes(req.nextUrl.pathname)) {
      console.log(" is this ruuning");
      return NextResponse.next();
    }

    if (!token) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    return NextResponse.next();
  } catch {
console.log("err at token ")
   NextResponse.redirect(new URL("/", req.url));
  }
}
const m="ker"
export const config = {
  matcher: ["/", "/admin", "/planetary", "/delivery"],
};
