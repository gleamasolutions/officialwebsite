import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { COMPANY } from "@/constants/site";

export const OG_IMAGE_SIZE = {
  width: 1200,
  height: 630,
};

export interface BrandOgImageOptions {
  title: string;
  subtitle?: string;
  eyebrow?: string;
}

let cachedLogoSrc: string | null = null;

export async function getLogoDataUrl(): Promise<string> {
  if (cachedLogoSrc) {
    return cachedLogoSrc;
  }

  const logoPath = path.join(
    process.cwd(),
    "public",
    "images",
    "logo",
    "gleama-logo.jpeg",
  );
  const buffer = await readFile(logoPath);
  cachedLogoSrc = `data:image/jpeg;base64,${buffer.toString("base64")}`;
  return cachedLogoSrc;
}

export async function generateBrandOgImage(
  options: BrandOgImageOptions,
): Promise<ImageResponse> {
  const logoSrc = await getLogoDataUrl();
  const subtitle =
    options.subtitle ??
    "Diversified Investment Company · Strategic Value Creation";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #000080 0%, #000050 55%, #000030 100%)",
          padding: "64px 72px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "linear-gradient(90deg, #D4AF37 0%, #50C878 50%, #D4AF37 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-120px",
            right: "-80px",
            width: "420px",
            height: "420px",
            borderRadius: "9999px",
            background: "rgba(80, 200, 120, 0.12)",
          }}
        />
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#ffffff",
              borderRadius: "16px",
              padding: "16px 24px",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logoSrc}
              alt={COMPANY.name}
              width={220}
              height={88}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "900px" }}>
          {options.eyebrow && (
            <p
              style={{
                margin: 0,
                color: "#50C878",
                fontSize: 24,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              {options.eyebrow}
            </p>
          )}
          <h1
            style={{
              margin: 0,
              color: "#ffffff",
              fontSize: 64,
              lineHeight: 1.1,
              fontWeight: 700,
            }}
          >
            {options.title}
          </h1>
          <p
            style={{
              margin: 0,
              color: "rgba(255,255,255,0.82)",
              fontSize: 28,
              lineHeight: 1.4,
            }}
          >
            {subtitle}
          </p>
        </div>
        <p
          style={{
            margin: 0,
            color: "#D4AF37",
            fontSize: 22,
            letterSpacing: "0.08em",
          }}
        >
          {COMPANY.name}
        </p>
      </div>
    ),
    {
      ...OG_IMAGE_SIZE,
    },
  );
}

export async function generateBrandIcon(size: number): Promise<ImageResponse> {
  const logoSrc = await getLogoDataUrl();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#000080",
          padding: Math.round(size * 0.12),
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          alt={COMPANY.name}
          width={Math.round(size * 0.76)}
          height={Math.round(size * 0.76)}
          style={{ objectFit: "contain", background: "#ffffff", borderRadius: 8 }}
        />
      </div>
    ),
    {
      width: size,
      height: size,
    },
  );
}
