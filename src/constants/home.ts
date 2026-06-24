import {
  BarChart3,
  Building2,
  Coins,
  Leaf,
  LineChart,
  PieChart,
  Shield,
  Target,
  type LucideIcon,
} from "lucide-react";

export interface StatCard {
  value: string;
  label: string;
}

export interface SectorCard {
  title: string;
  summary: string;
  href: string;
  icon: LucideIcon;
}

export interface FeatureCard {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface LeaderCard {
  name: string;
  position: string;
  preview: string;
}

export interface BlogPreview {
  title: string;
  excerpt: string;
  href: string;
  date: string;
  image: string;
  imageAlt: string;
}

export const COMPANY_STATS: StatCard[] = [
  { value: "4", label: "Business Sectors" },
  { value: "Strategic", label: "Growth Focus" },
  { value: "Long-Term", label: "Value Creation" },
  { value: "Excellence", label: "Corporate Standards" },
];

export const INVESTMENT_SECTORS: SectorCard[] = [
  {
    title: "Colombo Stock Exchange",
    summary:
      "Strategic capital market investments delivering disciplined exposure to Sri Lanka's leading equities.",
    href: "/sectors/cse",
    icon: BarChart3,
  },
  {
    title: "Unit Trust Funds",
    summary:
      "Professionally managed unit trust solutions designed for diversified portfolio growth and stability.",
    href: "/sectors/unit-trust",
    icon: PieChart,
  },
  {
    title: "Private Equity Investments",
    summary:
      "Targeted private equity partnerships that unlock value in high-potential enterprises.",
    href: "/sectors/private-equity",
    icon: Building2,
  },
  {
    title: "Gold Investments",
    summary:
      "Premium gold investment offerings as a strategic hedge and store of long-term value.",
    href: "/sectors/gold",
    icon: Coins,
  },
];

export const WHY_CHOOSE_FEATURES: FeatureCard[] = [
  {
    title: "Innovation",
    description:
      "Forward-thinking strategies and adaptive approaches that unlock opportunity across evolving markets.",
    icon: Target,
  },
  {
    title: "Business Excellence",
    description:
      "Institutional-grade standards, disciplined execution and continuous improvement across our ventures.",
    icon: Shield,
  },
  {
    title: "Strategic Growth",
    description:
      "Purposeful expansion across sectors and partnerships designed to build enduring enterprise value.",
    icon: LineChart,
  },
  {
    title: "Sustainable Growth",
    description:
      "Long-term value creation aligned with responsible business principles and stakeholder prosperity.",
    icon: Leaf,
  },
];

export const LEADERSHIP: LeaderCard[] = [
  {
    name: "Mr. Kosala Perera",
    position: "Chairman",
    preview:
      "Visionary leadership guiding Gleama's strategic direction and corporate governance excellence.",
  },
  {
    name: "Mr Charuka Ranasinghe",
    position: "CEO / Director",
    preview:
      "Driving operational excellence and sustainable growth across all investment verticals.",
  },
];

export const BLOG_PREVIEWS: BlogPreview[] = [
  {
    title: "The Future of Smart Investing in Sri Lanka",
    excerpt:
      "Exploring how technology and data-driven strategies are reshaping investment opportunities in emerging markets.",
    href: "/blog/future-of-smart-investing",
    date: "March 2026",
    image: "/images/blog/Smart-Invessting.png",
    imageAlt: "The future of smart investing in Sri Lanka — Gleama insights",
  },
  {
    title: "Why Diversification Matters in a Changing Economy",
    excerpt:
      "Understanding the critical role of portfolio diversification in navigating economic uncertainty.",
    href: "/blog/why-diversification-matters",
    date: "February 2026",
    image: "/images/blog/Diversification-Matters.png",
    imageAlt:
      "Why diversification matters in a changing economy — Gleama insights",
  },
  {
    title: "Building Strong Consumer Brands for the Next Generation",
    excerpt:
      "How private equity investments in consumer brands create lasting value for stakeholders.",
    href: "/blog/building-strong-consumer-brands",
    date: "January 2026",
    image: "/images/blog/Consumer-Brands.png",
    imageAlt:
      "Building strong consumer brands for the next generation — Gleama insights",
  },
];
