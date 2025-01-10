import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt, { type JwtPayload } from "jsonwebtoken";
import * as jose from "jose";
import { cookies } from "next/headers";
import Api from "./lib/axios";
type UserRedirects = {
  Admin: "/admin";
  PlanetaryStaff: "/planetary";
  DeliveryGuy: "/delivery";
};
type UserRole = "Admin" | "PlanetaryStaff" | "DeliveryGuy" | "";

export async function middleware(req: NextRequest) {
  const store = cookies();
  const currentPath = req.nextUrl.pathname;
  const token = store.get("token");

  const userRedirects: UserRedirects = {
    Admin: "/admin",
    PlanetaryStaff: "/planetary",
    DeliveryGuy: "/delivery",
  };
  let decoded: JwtPayload | string | undefined;
  let userRole: UserRole = "";
  console.log("token at next js  ", token);
  try {
    if (token) {
      console.log(token.value, "token value ");

      const { data } = await Api.get("/auth/role", {
        params: { token: token.value },
      });

      decoded = data.payload;
     
      if (typeof decoded !== "string" && decoded?.role) {
        userRole = decoded.role;
      }
    }

    const publicRoutes = ["/", "/login", "/register", "/public"];

    if (userRole && currentPath === userRedirects[userRole]) {
      return NextResponse.next();
    }

    if (userRole && Object.keys(userRedirects).includes(userRole)) {
      return NextResponse.redirect(new URL(userRedirects[userRole], req.url));
    }

    if (publicRoutes.includes(req.nextUrl.pathname)) {
      return NextResponse.next();
    }

    if (!token) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    return NextResponse.next();
  } catch (err) {
    console.log("err at token ");
    NextResponse.redirect(new URL("/", req.url));
  }
}

export const config = {
  matcher: ["/", "/admin", "/planetary", "/delivery"],
};
