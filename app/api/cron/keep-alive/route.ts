import { NextResponse } from "next/server";

// Keep-Alive endpoint for Supabase to prevent free tier auto-pausing after 7 days of inactivity
export async function GET(request: Request) {
  const startTime = Date.now();
  
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://couzgedvfinutcvciryf.supabase.co";
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || "sb_publishable_sCFNOVamGc13F1uJSUVXjg_iQHEtcW7";
    const tableName = process.env.NEXT_PUBLIC_SUPABASE_CONTACT_TABLE || "contact_submissions";

    // 1. Send a lightweight query to the Supabase REST endpoint
    const response = await fetch(`${supabaseUrl}/rest/v1/${tableName}?select=id&limit=1`, {
      method: "GET",
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        "Content-Type": "application/json",
      },
      // Avoid cached responses so Supabase logs genuine activity
      cache: "no-store",
    });

    const duration = Date.now() - startTime;
    const isOk = response.ok;

    return NextResponse.json({
      success: true,
      service: "Supabase Keep-Alive Ping",
      status: isOk ? "ACTIVE" : `RESPONSE_STATUS_${response.status}`,
      durationMs: duration,
      timestamp: new Date().toISOString(),
      message: "Supabase database pinged successfully to maintain active state."
    });
  } catch (error: any) {
    console.error("Supabase keep-alive ping error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Unknown error during Supabase keep-alive ping",
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}
