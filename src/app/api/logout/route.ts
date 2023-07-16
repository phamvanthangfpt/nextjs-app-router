import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  if (request.method === "POST") {
    const response = NextResponse.json({ success: true }, { status: 200 });
    response.cookies.set({
      name: "token",
      value: "",
      path: "/",
    });

    return response;
  }
}
