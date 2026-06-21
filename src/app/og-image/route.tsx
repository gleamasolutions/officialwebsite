import { NextRequest } from "next/server";
import { generateBrandOgImage } from "@/lib/og/generate-brand-image";
import { COMPANY } from "@/constants/site";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const title = searchParams.get("title") ?? COMPANY.name;
  const subtitle =
    searchParams.get("subtitle") ??
    COMPANY.tagline;
  const eyebrow = searchParams.get("eyebrow") ?? undefined;

  return generateBrandOgImage({ title, subtitle, eyebrow });
}
