import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, turnstileToken } = body;

    // Validate Turnstile token
    const turnstileResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: process.env.TURNSTILE_SECRET_KEY!,
          response: turnstileToken,
        }),
      }
    );

    const turnstileResult = await turnstileResponse.json();

    if (!turnstileResult.success) {
      return NextResponse.json(
        { message: "Captcha verification failed. Please try again." },
        { status: 400 }
      );
    }

    // Build HubSpot fields
    const fields = [
      { name: "firstname", value: firstName },
      { name: "lastname", value: lastName },
    ];

    if (email) {
      fields.push({ name: "email", value: email });
    }

    if (phone) {
      fields.push({ name: "mobilephone", value: phone });
    }

    // Submit to HubSpot
    const hubspotResponse = await fetch(
      "https://api.hsforms.com/submissions/v3/integration/submit/244165694/56c0426b-ea41-404d-a12c-18c83ec296df",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields,
          context: {
            pageUri: request.headers.get("referer") || "https://evryn.ai",
            pageName: "Evryn Waitlist",
          },
        }),
      }
    );

    if (hubspotResponse.ok) {
      return NextResponse.json({ success: true });
    } else {
      const hubspotError = await hubspotResponse.json();
      return NextResponse.json(
        { message: hubspotError.message || "Something went wrong. Please try again." },
        { status: 400 }
      );
    }
  } catch {
    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
