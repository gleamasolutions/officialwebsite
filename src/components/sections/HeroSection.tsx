"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Button from "@/components/shared/Button";
import SectionBackground from "@/components/shared/SectionBackground";
import SlideUp from "@/components/animations/SlideUp";
import { COMPANY } from "@/constants/site";

const ALLOCATION = [
  { label: "CSE", value: 30, color: "#50C878", angle: 0 },
  { label: "Unit Trust", value: 25, color: "#3CB371", angle: 108 },
  { label: "Private Equity", value: 25, color: "#0000B3", angle: 198 },
  { label: "Gold", value: 20, color: "#D4AF37", angle: 288 },
];

function describeArc(
  cx: number,
  cy: number,
  r: number,
  startAngle: number,
  endAngle: number,
) {
  const start = polarToCartesian(cx, cy, r, endAngle);
  const end = polarToCartesian(cx, cy, r, startAngle);
  const largeArc = endAngle - startAngle <= 180 ? 0 : 1;
  return `M ${cx} ${cy} L ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 0 ${end.x} ${end.y} Z`;
}

function polarToCartesian(
  cx: number,
  cy: number,
  r: number,
  angle: number,
) {
  const rad = ((angle - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

const LABEL_POSITIONS = ALLOCATION.map((item) => {
  const pos = polarToCartesian(200, 200, 130, item.angle + 18);
  return {
    ...item,
    left: `${((pos.x / 400) * 100).toFixed(4)}%`,
    top: `${((pos.y / 400) * 100).toFixed(4)}%`,
  };
});

function HeroVisualization() {
  const slices = ALLOCATION.reduce<
    Array<(typeof ALLOCATION)[number] & { startAngle: number; endAngle: number }>
  >((acc, item) => {
    const startAngle = acc.length > 0 ? acc[acc.length - 1].endAngle : 0;
    const endAngle = startAngle + (item.value / 100) * 360;
    acc.push({ ...item, startAngle, endAngle });
    return acc;
  }, []);

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-md lg:max-w-none"
      aria-hidden="true"
    >
      <div className="absolute inset-0 rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_0_60px_rgba(212,175,55,0.08)] backdrop-blur-md" />
      <div className="absolute -top-px left-8 right-8 h-px gold-accent-bar opacity-60" />

      <svg
        viewBox="0 0 400 400"
        className="relative h-full w-full p-8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="growthGradient" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#50C878" stopOpacity="0" />
            <stop offset="100%" stopColor="#50C878" stopOpacity="0.2" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {[0, 1, 2, 3, 4].map((i) => (
          <circle
            key={i}
            cx="200"
            cy="200"
            r={60 + i * 28}
            stroke="white"
            strokeOpacity="0.05"
            strokeWidth="1"
          />
        ))}

        {slices.map((slice, i) => (
          <motion.path
            key={slice.label}
            d={describeArc(200, 200, 90, slice.startAngle, slice.endAngle)}
            fill={slice.color}
            fillOpacity={0.85}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
            style={{ transformOrigin: "200px 200px" }}
          />
        ))}

        <circle cx="200" cy="200" r="52" fill="#000050" />
        <circle cx="200" cy="200" r="52" stroke="#D4AF37" strokeOpacity="0.4" strokeWidth="1" />

        <text
          x="200"
          y="194"
          textAnchor="middle"
          fill="white"
          fontSize="11"
          opacity="0.6"
        >
          Diversified
        </text>
        <text
          x="200"
          y="212"
          textAnchor="middle"
          fill="#D4AF37"
          fontSize="14"
          fontWeight="600"
        >
          Portfolio
        </text>

        <motion.path
          d="M 60 310 Q 140 280 200 250 T 340 170"
          stroke="#50C878"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.8 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.8 }}
        />

        <motion.path
          d="M 60 310 Q 140 280 200 250 T 340 170 L 340 330 L 60 330 Z"
          fill="url(#growthGradient)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.5 }}
        />
      </svg>

      {LABEL_POSITIONS.map((item, i) => (
        <div
          key={item.label}
          className="absolute"
          style={{
            left: item.left,
            top: item.top,
            transform: "translate(-50%, -50%)",
          }}
        >
          <motion.div
            className="rounded-lg border border-white/10 bg-white/10 px-3 py-2 backdrop-blur-md"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 + i * 0.15 }}
          >
            <p className="text-[10px] text-white/50">{item.label}</p>
            <p className="text-sm font-semibold" style={{ color: item.color }}>
              {item.value}%
            </p>
          </motion.div>
        </div>
      ))}

      <motion.div
        className="absolute top-6 right-6 rounded-lg border border-accent/30 bg-accent/10 px-4 py-3 backdrop-blur-md"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2 }}
      >
        <p className="text-[10px] tracking-wider text-white/50 uppercase">
          Long-Term Growth
        </p>
        <p className="text-lg font-semibold text-secondary">+12.4%</p>
      </motion.div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      className="relative flex min-h-[calc(100svh-0px)] items-center overflow-hidden bg-primary pt-20 text-white lg:pt-24"
      aria-labelledby="hero-heading"
    >
      <SectionBackground tone="dark" />

      <div
        className="pointer-events-none absolute right-0 bottom-0 left-0 h-24 bg-gradient-to-t from-white to-transparent"
        aria-hidden="true"
      />

      <Container className="relative py-16 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SlideUp delay={0.1}>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 gold-accent-bar" aria-hidden="true" />
                <p className="text-sm font-medium tracking-[0.2em] text-accent uppercase">
                  {COMPANY.tagline}
                </p>
              </div>
            </SlideUp>
            <SlideUp delay={0.2}>
              <h1
                id="hero-heading"
                className="text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl xl:text-display-md"
              >
                Creating Long-Term Value Through{" "}
                <span className="text-accent">Diversified Business Excellence</span>
              </h1>
            </SlideUp>
            <SlideUp delay={0.35}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-body-lg">
                Building sustainable growth through strategic business ventures,
                innovation and long-term value creation.
              </p>
            </SlideUp>
            <SlideUp delay={0.5}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button
                  href="/sectors"
                  variant="secondary"
                  size="lg"
                  className="w-full shadow-lg shadow-secondary/20 sm:w-auto"
                >
                  Explore Investments
                </Button>
                <Button
                  href="/contact"
                  size="lg"
                  className="w-full border-2 border-accent/40 bg-transparent text-white hover:border-accent hover:bg-accent/10 sm:w-auto"
                >
                  Contact Us
                </Button>
              </div>
            </SlideUp>
          </div>

          <SlideUp delay={0.4} distance={40}>
            <HeroVisualization />
          </SlideUp>
        </div>
      </Container>
    </section>
  );
}
