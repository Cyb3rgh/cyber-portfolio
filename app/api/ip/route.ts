import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    "Unknown";

  const country =
    request.headers.get("x-vercel-ip-country") || "Unknown";

  return NextResponse.json({
    ip,
    country,
  });
}