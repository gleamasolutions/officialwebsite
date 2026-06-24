import {
  Award,
  Handshake,
  Lightbulb,
  Leaf,
  Shield,
  type LucideIcon,
} from "lucide-react";
import { COMPANY } from "@/constants/site";

export interface CoreValue {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface CorporateInfoItem {
  label: string;
  value: string;
}

export interface DirectorProfile {
  name: string;
  position: string;
  biography: string[];
  imagePlaceholder: string;
}

export const ABOUT_HERO = {
  title: "About Gleama",
  subtitle:
    "Creating sustainable value through strategic business ventures, innovation and long-term growth.",
} as const;

export const ABOUT_COMPANY = {
  title: "Our Company",
  content:
    "Gleama (Pvt) Ltd is a diversified company engaged in multiple sectors and strategic business ventures.",
  extended:
    "Through innovation, disciplined growth and a commitment to business excellence, we build resilient enterprises designed to deliver enduring value for our stakeholders while contributing to Sri Lanka's economic development.",
} as const;

export const ABOUT_VISION = {
  title: "Vision",
  content:
    "To become Sri Lanka's leading diversified enterprise, creating sustainable value through strategic business ventures and innovative consumer brands, while driving economic growth, market excellence and long-term prosperity for all stakeholders.",
} as const;

export const ABOUT_MISSION = {
  title: "Mission",
  content:
    "To build a dynamic and diversified portfolio of business ventures and consumer brands, delivering sustainable growth, innovation and value while fostering trust, excellence and long-term success for our customers and stakeholders.",
} as const;

export const CORE_VALUES: CoreValue[] = [
  {
    title: "Integrity",
    description:
      "We uphold the highest ethical standards in every business decision, ensuring transparency, accountability and trust in all our relationships.",
    icon: Shield,
  },
  {
    title: "Innovation",
    description:
      "We embrace forward-thinking strategies and adaptive approaches to identify opportunities and create value in evolving markets.",
    icon: Lightbulb,
  },
  {
    title: "Excellence",
    description:
      "We pursue institutional-grade performance through rigorous analysis, disciplined execution and continuous improvement across our ventures.",
    icon: Award,
  },
  {
    title: "Trust",
    description:
      "We build lasting partnerships with customers, enterprises and communities through consistent communication and responsible stewardship.",
    icon: Handshake,
  },
  {
    title: "Sustainability",
    description:
      "We integrate long-term environmental, social and economic considerations into our business philosophy to create enduring prosperity.",
    icon: Leaf,
  },
];

export const CORPORATE_INFO: CorporateInfoItem[] = [
  { label: "Company Name", value: COMPANY.name },
  { label: "Industry", value: "Diversified Company" },
  {
    label: "Business Focus",
    value:
      "Capital Markets (CSE), Unit Trust Funds, Private Equity and Gold Investments",
  },
  {
    label: "Long-Term Growth Strategy",
    value:
      "Building a diversified enterprise through strategic business ventures, market expertise and sustainable value creation across multiple sectors.",
  },
];

export const BOARD_OF_DIRECTORS: DirectorProfile[] = [
  {
    name: "Mr. Kosala Perera",
    position: "Chairman",
    imagePlaceholder: "KP",
    biography: [
      "Mr. Kosala Perera serves as Chairman of Gleama (Pvt) Ltd, providing strategic leadership and governance oversight for the company's diversified business portfolio. With extensive experience in corporate leadership and capital markets, he guides the board in setting long-term direction aligned with sustainable growth and stakeholder value.",
      "Under his chairmanship, Gleama has expanded its presence across capital markets, unit trusts, private equity and gold investments — establishing the company as a trusted name in Sri Lanka's corporate landscape. He is deeply committed to market excellence, ethical governance and fostering economic prosperity through strategic enterprise development.",
      "Mr. Perera brings a visionary perspective to portfolio diversification and consumer brand development, ensuring that Gleama remains at the forefront of innovation while maintaining the integrity and discipline that define institutional-grade business excellence.",
    ],
  },
  {
    name: "Mr. Charuka Ranasinghe",
    position: "CEO / Director",
    imagePlaceholder: "CR",
    biography: [
      "Mr. Charuka Ranasinghe serves as Chief Executive Officer and Director of Gleama (Pvt) Ltd, leading the company's operational strategy and day-to-day management across all business verticals. He is responsible for executing the board's vision through disciplined portfolio management and strategic business development.",
      "With a strong foundation in business analysis, risk management and market operations, Mr. Ranasinghe drives performance excellence across Gleama's CSE equities, unit trust funds, private equity partnerships and gold investment offerings. His leadership emphasizes data-driven decision-making and sustainable growth frameworks.",
      "Mr. Ranasinghe is dedicated to building dynamic business solutions that deliver long-term value for customers and stakeholders, while fostering a culture of innovation, trust and operational excellence throughout the organization.",
    ],
  },
];

export const ABOUT_SEO = {
  title: "About Us",
  description:
    "Discover Gleama (Pvt) Ltd — a diversified company committed to strategic business ventures, sustainable growth and long-term value creation in Sri Lanka.",
  keywords: [
    "Gleama about",
    "diversified company Sri Lanka",
    "business ventures Sri Lanka",
    "Gleama leadership",
    "corporate governance",
    "sustainable growth",
  ],
} as const;
