import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
  // if (req.nextUrl.pathname === "/") {
  //   const redirectUrl = new URL("/documents", req.url);

  //   return NextResponse.redirect(redirectUrl);
  // }

  return NextResponse.next();
}
