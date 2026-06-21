import { NextResponse } from "next/server";
import { contactApiSchema } from "@/lib/contact-schema";
import { sendContactEmail } from "@/lib/mail";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";
import {
  sanitizeEmail,
  sanitizePhone,
  sanitizeText,
} from "@/lib/sanitize";

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    const rateLimit = checkRateLimit(`contact:${ip}`);

    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        {
          status: 429,
          headers: {
            "Retry-After": String(rateLimit.retryAfterSeconds ?? 900),
          },
        },
      );
    }

    const body = await request.json();
    const parsed = contactApiSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form submission.", details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    if (parsed.data.website?.trim()) {
      return NextResponse.json({ success: true });
    }

    const payload = {
      fullName: sanitizeText(parsed.data.fullName, 120),
      email: sanitizeEmail(parsed.data.email),
      phone: sanitizePhone(parsed.data.phone),
      subject: sanitizeText(parsed.data.subject, 200),
      message: sanitizeText(parsed.data.message, 5000),
      website: "",
    };

    const validated = contactApiSchema.safeParse(payload);
    if (!validated.success) {
      return NextResponse.json(
        { error: "Invalid form submission." },
        { status: 400 },
      );
    }

    await sendContactEmail(validated.data);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Unable to send message. Please try again later." },
      { status: 500 },
    );
  }
}
