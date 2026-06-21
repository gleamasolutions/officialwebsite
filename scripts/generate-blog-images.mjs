import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(__dirname, "..", "public", "images", "blog");

fs.mkdirSync(dir, { recursive: true });

const images = [
  {
    file: "smart-investing.jpg",
    bg: "#000080",
    accent: "#50C878",
    label: "Smart Investing",
  },
  {
    file: "diversification.jpg",
    bg: "#000080",
    accent: "#50C878",
    label: "Diversification",
  },
  {
    file: "consumer-brands.jpg",
    bg: "#000080",
    accent: "#D4AF37",
    label: "Consumer Brands",
  },
];

for (const img of images) {
  const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="${img.bg}"/>
    <rect x="0" y="0" width="1200" height="6" fill="${img.accent}"/>
    <text x="600" y="300" font-family="Arial, sans-serif" font-size="48" font-weight="700" fill="#ffffff" text-anchor="middle">${img.label}</text>
    <text x="600" y="360" font-family="Arial, sans-serif" font-size="24" fill="rgba(255,255,255,0.75)" text-anchor="middle">Gleama Insights</text>
  </svg>`;

  await sharp(Buffer.from(svg)).jpeg({ quality: 85 }).toFile(path.join(dir, img.file));
  console.log(`Created ${img.file}`);
}
