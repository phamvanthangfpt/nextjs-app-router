import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  if (request.method === "POST") {
    const res = await request.json();
    const response = NextResponse.json({ success: true }, { status: 200 });
    response.cookies.set({
      name: "token",
      value: res?.token,
      path: "/",
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV !== "development",
    });

    return response;
  }
}
