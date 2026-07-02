import type { FooterSection, NavItem } from "@/types/navigation.types";
import type { SeoDefaults } from "@/types/seo.types";

export const COMPANY = {
  name: "Gleama (Pvt) Ltd",
  shortName: "Gleama",
  tagline: "Diversified Company",
  description:
    "Gleama (Pvt) Ltd is a diversified company focused on strategic business ventures, sustainable growth, innovation and long-term value creation.",
  email: "info@gleama.lk",
  phone: "+94 74 056 9900",
  phoneTel: "tel:+94740569900",
  whatsapp: "+94 74 056 9900",
  whatsappUrl: "https://wa.me/94740569900",
  addressLines: [
    "No 79/11",
    "Dayagunasekara Mawatha",
    "Welagedara",
    "Badulla",
    "Sri Lanka",
  ],
  address: "No 79/11, Dayagunasekara Mawatha, Welagedara, Badulla, Sri Lanka",
} as const;

export const BRAND = {
  logo: {
    src: "/images/logo/gleama.png",
    width: 220,
    height: 70,
  },
} as const;

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.gleama.lk";

export const NAVIGATION: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "Overview", href: "/about#overview" },
      { label: "Our Vision", href: "/about#our-vision" },
      { label: "Board of Directors", href: "/about#board-of-directors" },
      { label: "Corporate Information", href: "/about#corporate-information" },
    ],
  },
  {
    label: "Sectors",
    href: "/sectors",
    children: [
      {
        label: "Investments",
        href: "/sectors",
        children: [
          { label: "Colombo Stock Exchange", href: "/sectors/cse" },
          { label: "Unit Trust", href: "/sectors/unit-trust" },
          { label: "Private Equity", href: "/sectors/private-equity" },
          { label: "Gold Investments", href: "/sectors/gold" },
        ],
      },
    ],
  },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "Investments", href: "/sectors" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Investments",
    links: [
      { label: "CSE", href: "/sectors/cse" },
      { label: "Unit Trust", href: "/sectors/unit-trust" },
      { label: "Private Equity", href: "/sectors/private-equity" },
      { label: "Gold", href: "/sectors/gold" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookie-policy" },
    ],
  },
];

export const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/gleama1",
    icon: "facebook",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/gleama-pvt-ltd/",
    icon: "linkedin",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/gleamacompany",
    icon: "instagram",
  },
] as const;

export const SEO_DEFAULTS: SeoDefaults = {
  title: COMPANY.name,
  titleTemplate: `%s | ${COMPANY.shortName}`,
  description: COMPANY.description,
  keywords: [
    "Gleama",
    "diversified company",
    "business ventures",
    "corporate growth",
    "Sri Lanka",
    "strategic investments",
    "business development",
    "innovation",
    "sustainable growth",
  ],
  ogImage: "/og-image",
  twitterHandle: "@gleama",
  locale: "en_LK",
  type: "website",
};
