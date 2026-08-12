import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const page = typeof body.page === "string" ? body.page : "/";
    const eventType =
      typeof body.event_type === "string" ? body.event_type : "page_view";
    const device =
      typeof body.device === "string" ? body.device : "unknown";
    const browser =
      typeof body.browser === "string" ? body.browser : "unknown";
    const referrer =
      typeof body.referrer === "string" ? body.referrer : "";

    const country = request.headers.get("x-vercel-ip-country") || "unknown";
const region = request.headers.get("x-vercel-ip-country-region") || "unknown";
const city = request.headers.get("x-vercel-ip-city") || "unknown";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey =
      process.env.SUPABASE_SECRET_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json(
        { error: "Supabase environment variables are missing" },
        { status: 500 }
      );
    }

    const response = await fetch(
      `${supabaseUrl}/rest/v1/visitor_events`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
          Prefer: "return=minimal",
        },
        body: JSON.stringify({
          page,
          event_type: eventType,
          device,
          browser,
          referrer,
      country,
      region,
      city,
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();

      return NextResponse.json(
        {
          error: "Supabase insert failed",
          details: errorText,
        },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Visitor tracking error:", error);

    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}
