import {
  Building2,
  Leaf,
  Lightbulb,
  LineChart,
  Rocket,
  Shield,
  Shirt,
  ShoppingBag,
  Sparkles,
  Target,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

export const SUSTAINABILITY_SEO = {
  title: "Sustainability",
  description:
    "Learn how Gleama creates sustainable growth through diversified business opportunities, strategic investments, consumer brands and future-focused ventures.",
  keywords: [
    "Gleama sustainability",
    "diversified company Sri Lanka",
    "strategic investments",
    "consumer brands",
    "business growth",
    "global expansion",
    "long-term value creation",
    "corporate sustainability",
  ],
} as const;

export const SUSTAINABILITY_HERO = {
  eyebrow: "Sustainable Growth",
  title: "Building Growth Through Diversified Opportunities",
  subtitle:
    "Creating sustainable growth through strategic investments, consumer brands, management services and emerging business opportunities.",
} as const;

export const SUSTAINABILITY_WHO_WE_ARE = {
  title: "Who We Are",
  paragraphs: [
    "Gleama (Pvt) Ltd is a diversified Sri Lankan company committed to building long-term value through strategic investments, innovative business ventures and sustainable growth initiatives.",
    "We pursue opportunity across capital markets, consumer brands, management services and emerging sectors — combining disciplined execution with a forward-looking vision for regional and global expansion.",
    "Our approach is rooted in diversification, innovation and responsible growth — creating resilient enterprises designed to thrive across economic cycles.",
  ],
  highlights: [
    "Strategic Investments",
    "Consumer Brands",
    "Management Services",
    "Global Opportunities",
  ],
} as const;

export interface EcosystemCard {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const SUSTAINABILITY_ECOSYSTEM: EcosystemCard[] = [
  {
    title: "Strategic Investments",
    description:
      "Disciplined capital allocation across public shares, unit trusts, debentures and private investments for balanced portfolio growth.",
    icon: TrendingUp,
  },
  {
    title: "Consumer Brands",
    description:
      "Building and supporting consumer-facing brands with strong market positioning, innovation and long-term customer loyalty.",
    icon: ShoppingBag,
  },
  {
    title: "Apparel Opportunities",
    description:
      "Exploring apparel and export-oriented ventures that align with Sri Lanka's manufacturing strengths and global demand.",
    icon: Shirt,
  },
  {
    title: "Management Services",
    description:
      "Delivering operational excellence through professional management services, including future hospitality and tourism initiatives.",
    icon: Building2,
  },
  {
    title: "Emerging Ventures",
    description:
      "Identifying and nurturing new business opportunities across high-potential sectors with scalable growth trajectories.",
    icon: Rocket,
  },
];

export interface ApproachStep {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const SUSTAINABILITY_APPROACH: ApproachStep[] = [
  {
    step: "01",
    title: "Research",
    description:
      "Rigorous market analysis across public shares, unit trusts, debentures and private investment opportunities.",
    icon: Target,
  },
  {
    step: "02",
    title: "Diversification",
    description:
      "Balanced exposure across asset classes, sectors and business verticals to reduce concentration risk.",
    icon: LineChart,
  },
  {
    step: "03",
    title: "Risk Management",
    description:
      "Institutional-grade frameworks that protect value while enabling calculated, opportunity-driven growth.",
    icon: Shield,
  },
  {
    step: "04",
    title: "Long-Term Growth",
    description:
      "Patient capital and strategic patience — building enterprises and portfolios designed for enduring prosperity.",
    icon: TrendingUp,
  },
];

export interface ExpansionCard {
  region: string;
  title: string;
  description: string;
}

export const SUSTAINABILITY_EXPANSION: ExpansionCard[] = [
  {
    region: "Australia",
    title: "Regional Market Entry",
    description:
      "Exploring strategic opportunities in the Australian market for brand development, partnerships and export growth.",
  },
  {
    region: "Middle East",
    title: "Gulf Expansion",
    description:
      "Building relationships and evaluating ventures across the Middle East's dynamic consumer and hospitality sectors.",
  },
  {
    region: "Global",
    title: "Consumer Brand Development",
    description:
      "Scaling consumer brands with international appeal through innovation, quality and market-led positioning.",
  },
  {
    region: "Export",
    title: "Export Opportunities",
    description:
      "Leveraging Sri Lanka's capabilities to access global markets through apparel, consumer goods and services exports.",
  },
];

export const SUSTAINABILITY_HOSPITALITY = {
  title: "Hospitality & Management Services",
  subtitle:
    "Shaping the future of hospitality through operational excellence and strategic partnerships.",
  paragraphs: [
    "Gleama is developing a hospitality and management services platform designed to deliver world-class operational standards across hotels, resorts and tourism ventures.",
    "Through strategic partnerships and professional management expertise, we aim to contribute meaningfully to Sri Lanka's tourism sector while building scalable, high-performance hospitality assets.",
    "Our vision encompasses end-to-end management capabilities — from operational excellence and guest experience to revenue optimisation and sustainable tourism practices.",
  ],
  pillars: [
    "Future Hotel Management Services",
    "Operational Excellence",
    "Strategic Partnerships",
    "Tourism Sector Contribution",
  ],
} as const;

export interface InnovationFeature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const SUSTAINABILITY_INNOVATION: InnovationFeature[] = [
  {
    title: "Innovation",
    description:
      "Embracing new technologies, business models and market approaches to stay ahead of industry evolution.",
    icon: Lightbulb,
  },
  {
    title: "Responsible Growth",
    description:
      "Pursuing expansion with accountability to stakeholders, communities and the environments we operate in.",
    icon: Leaf,
  },
  {
    title: "Long-Term Sustainability",
    description:
      "Building enterprises and portfolios designed to deliver value across decades, not quarters.",
    icon: Sparkles,
  },
  {
    title: "Business Resilience",
    description:
      "Diversified structures and adaptive strategies that withstand market volatility and economic shifts.",
    icon: Shield,
  },
];

export const SUSTAINABILITY_VISION = {
  title: "Vision For The Future",
  statement:
    "To build a strong diversified business ecosystem — uniting strategic investments, consumer brands, management services and emerging ventures into a cohesive platform for sustainable global growth.",
  supporting:
    "Gleama's long-term vision is to establish a resilient, innovation-driven enterprise that creates lasting value for stakeholders while contributing to Sri Lanka's economic advancement and global competitiveness.",
} as const;

export const SUSTAINABILITY_CTA = {
  headline: "Partner With Gleama",
  description:
    "Explore business opportunities, strategic partnerships and long-term growth initiatives.",
  primaryLabel: "Contact Us",
  primaryHref: "/contact",
  secondaryLabel: "Learn More",
  secondaryHref: "/about",
} as const;
