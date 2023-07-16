import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  if (request.method === "POST") {
    const cookie = request.cookies.get("token");
    if (cookie?.value) {
      return NextResponse.json({ success: true, cookie: cookie?.value });
    } else {
      return NextResponse.json({ success: false });
    }
  }
}
