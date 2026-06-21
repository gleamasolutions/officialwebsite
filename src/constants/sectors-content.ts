import { INVESTMENT_SECTORS } from "@/constants/home";

export interface SectorSection {
  id: string;
  title: string;
  paragraphs: string[];
}

export interface SectorPageData {
  slug: string;
  heroTitle: string;
  heroSubtitle: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  sections: SectorSection[];
  cta: {
    headline: string;
    description: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel: string;
    secondaryHref: string;
  };
}

export const SECTORS_HERO = {
  title: "Investment Sectors",
  subtitle: "Strategic investments across diversified asset classes.",
} as const;

export const SECTORS_SEO = {
  title: "Investment Sectors",
  description:
    "Explore Gleama's strategic investments across the Colombo Stock Exchange, unit trust funds, private equity and gold — diversified asset classes for long-term growth.",
  keywords: [
    "Gleama investment sectors",
    "Colombo Stock Exchange investments",
    "unit trust funds Sri Lanka",
    "private equity Sri Lanka",
    "gold investments",
    "diversified portfolio",
  ],
} as const;

export { INVESTMENT_SECTORS as SECTORS_GRID };

export const CSE_CONTENT: SectorPageData = {
  slug: "cse",
  heroTitle: "Colombo Stock Exchange Investments",
  heroSubtitle:
    "Strategic capital market investments delivering disciplined exposure to Sri Lanka's leading equities.",
  seo: {
    title: "Colombo Stock Exchange Investments",
    description:
      "Gleama's Colombo Stock Exchange investment strategy focuses on research-driven equity selection, long-term value creation and disciplined portfolio management in Sri Lankan capital markets.",
    keywords: [
      "Colombo Stock Exchange",
      "CSE investments",
      "Sri Lanka equities",
      "capital market investments",
      "Gleama CSE",
      "stock market Sri Lanka",
    ],
  },
  sections: [
    {
      id: "overview",
      title: "Overview",
      paragraphs: [
        "Gleama (Pvt) Ltd participates in the Colombo Stock Exchange (CSE) as a core pillar of its diversified investment strategy. Through carefully selected equity investments, we gain exposure to Sri Lanka's most established and high-potential listed companies across key economic sectors.",
        "Our CSE portfolio reflects a commitment to capital market participation that balances growth opportunities with prudent risk management, supporting long-term wealth creation for our stakeholders.",
      ],
    },
    {
      id: "strategy",
      title: "Investment Strategy",
      paragraphs: [
        "Our investment approach is research-driven and disciplined. We conduct thorough fundamental analysis to identify companies with strong financial performance, sustainable business models and long-term growth potential.",
        "Portfolio construction emphasizes diversification across sectors, market capitalizations and investment themes — reducing concentration risk while capturing opportunities across the Sri Lankan equity landscape.",
      ],
    },
    {
      id: "benefits",
      title: "Benefits",
      paragraphs: [
        "CSE investments offer liquidity, transparency and access to Sri Lanka's corporate growth story. Listed equities provide investors with the ability to participate in economic expansion through well-regulated, publicly traded companies.",
        "Through active portfolio monitoring and strategic rebalancing, Gleama optimizes risk-adjusted returns while maintaining alignment with our long-term investment objectives.",
      ],
    },
    {
      id: "value",
      title: "Long-Term Value Creation",
      paragraphs: [
        "We believe sustainable wealth is built over time through patient capital deployment and consistent value identification. Our CSE strategy prioritizes companies capable of delivering compounding returns and enduring shareholder value.",
        "By integrating market expertise with rigorous governance standards, Gleama creates a capital markets portfolio designed to perform across market cycles and contribute to long-term prosperity.",
      ],
    },
  ],
  cta: {
    headline: "Explore Capital Market Opportunities",
    description:
      "Discover how Gleama's CSE investment strategy can support your long-term financial objectives.",
    primaryLabel: "Contact Us",
    primaryHref: "/contact",
    secondaryLabel: "View All Sectors",
    secondaryHref: "/sectors",
  },
};

export const UNIT_TRUST_CONTENT: SectorPageData = {
  slug: "unit-trust",
  heroTitle: "Unit Trust Investments",
  heroSubtitle:
    "Professionally managed unit trust solutions designed for diversified portfolio growth and stability.",
  seo: {
    title: "Unit Trust Investments",
    description:
      "Gleama offers professionally managed unit trust investments with disciplined fund selection, robust risk management and diversified portfolio growth strategies.",
    keywords: [
      "unit trust investments",
      "unit trust funds Sri Lanka",
      "managed funds",
      "portfolio diversification",
      "Gleama unit trust",
      "collective investment schemes",
    ],
  },
  sections: [
    {
      id: "overview",
      title: "Overview",
      paragraphs: [
        "Unit trust investments form an essential component of Gleama's diversified portfolio, providing access to professionally managed funds that pool capital across a broad range of asset classes and securities.",
        "Our unit trust strategy enables investors to benefit from expert fund management, economies of scale and diversified exposure — without the complexity of direct security selection.",
      ],
    },
    {
      id: "selection",
      title: "Fund Selection Strategy",
      paragraphs: [
        "We apply a rigorous fund selection process evaluating track record, management quality, fee structures and alignment with our investment objectives. Only funds demonstrating consistent performance and sound governance qualify for our portfolio.",
        "Our selection framework considers fund mandate, asset allocation strategy and compatibility with Gleama's overall diversification goals across market conditions.",
      ],
    },
    {
      id: "risk",
      title: "Risk Management",
      paragraphs: [
        "Risk management is embedded in every stage of our unit trust investment process. We monitor fund performance, volatility metrics and correlation with other portfolio holdings to maintain balanced exposure.",
        "Regular portfolio reviews ensure that unit trust allocations remain aligned with risk tolerance parameters and long-term return objectives.",
      ],
    },
    {
      id: "benefits",
      title: "Benefits",
      paragraphs: [
        "Unit trusts offer accessibility, professional management and inherent diversification — making them an effective vehicle for investors seeking stable, long-term portfolio growth.",
        "Through Gleama's unit trust investments, stakeholders gain exposure to expertly managed funds that complement our capital market, private equity and gold holdings within a cohesive investment framework.",
      ],
    },
  ],
  cta: {
    headline: "Build a Diversified Portfolio",
    description:
      "Learn how Gleama's unit trust investments can enhance your long-term wealth strategy.",
    primaryLabel: "Contact Us",
    primaryHref: "/contact",
    secondaryLabel: "View All Sectors",
    secondaryHref: "/sectors",
  },
};

export const PRIVATE_EQUITY_CONTENT: SectorPageData = {
  slug: "private-equity",
  heroTitle: "Private Equity Investments",
  heroSubtitle:
    "Targeted private equity partnerships that unlock value in high-potential enterprises.",
  seo: {
    title: "Private Equity Investments",
    description:
      "Gleama's private equity investments focus on strategic partnerships, value creation and growth-oriented enterprises across Sri Lanka's dynamic business landscape.",
    keywords: [
      "private equity Sri Lanka",
      "private equity investments",
      "growth capital",
      "strategic partnerships",
      "Gleama private equity",
      "consumer brands investment",
    ],
  },
  sections: [
    {
      id: "overview",
      title: "Overview",
      paragraphs: [
        "Private equity investments represent Gleama's commitment to identifying and nurturing high-potential businesses beyond public markets. We partner with enterprises that demonstrate strong growth trajectories, capable management teams and scalable business models.",
        "Our private equity portfolio spans consumer brands and growth-oriented companies where strategic capital and operational support can accelerate value creation.",
      ],
    },
    {
      id: "philosophy",
      title: "Investment Philosophy",
      paragraphs: [
        "We invest with a long-term perspective, seeking businesses where our capital, expertise and network can drive meaningful transformation. Our philosophy centers on active partnership — not passive ownership.",
        "Every investment undergoes comprehensive due diligence evaluating market position, competitive advantage, financial health and alignment with Gleama's sustainability and governance standards.",
      ],
    },
    {
      id: "partnerships",
      title: "Strategic Partnerships",
      paragraphs: [
        "Gleama builds collaborative relationships with portfolio companies, providing strategic guidance, governance support and access to resources that enable sustainable scaling and market leadership.",
        "Our partnership model emphasizes mutual value creation — aligning the interests of investors, management teams and stakeholders toward shared long-term success.",
      ],
    },
    {
      id: "value-creation",
      title: "Value Creation",
      paragraphs: [
        "Value creation in private equity extends beyond financial returns. We focus on strengthening operational capabilities, expanding market reach and building resilient consumer brands for the next generation.",
        "Through disciplined exit planning and continuous performance monitoring, Gleama maximizes returns while ensuring portfolio companies maintain the foundations for enduring growth.",
      ],
    },
  ],
  cta: {
    headline: "Partner for Growth",
    description:
      "Explore how Gleama's private equity expertise can unlock value in high-potential enterprises.",
    primaryLabel: "Contact Us",
    primaryHref: "/contact",
    secondaryLabel: "View All Sectors",
    secondaryHref: "/sectors",
  },
};

export const GOLD_CONTENT: SectorPageData = {
  slug: "gold",
  heroTitle: "Gold Investments",
  heroSubtitle:
    "Premium gold investment offerings as a strategic hedge and store of long-term value.",
  seo: {
    title: "Gold Investments",
    description:
      "Gleama's gold investments provide wealth preservation, portfolio diversification and inflation protection as part of a balanced long-term investment strategy.",
    keywords: [
      "gold investments Sri Lanka",
      "gold portfolio hedge",
      "wealth preservation",
      "inflation protection",
      "Gleama gold",
      "precious metals investment",
    ],
  },
  sections: [
    {
      id: "overview",
      title: "Overview",
      paragraphs: [
        "Gold has served as a store of value for centuries, and Gleama incorporates gold investments as a strategic component of our diversified portfolio. Gold holdings provide stability and balance against volatility in equity and alternative asset classes.",
        "Our gold investment approach integrates precious metals within a broader asset allocation framework designed for long-term wealth preservation and portfolio resilience.",
      ],
    },
    {
      id: "preservation",
      title: "Wealth Preservation",
      paragraphs: [
        "Gold's intrinsic value and global recognition make it a reliable instrument for preserving capital over extended time horizons. In periods of economic uncertainty, gold historically maintains purchasing power when other assets face pressure.",
        "Gleama's gold strategy positions this asset class as a foundational element of long-term wealth protection within our diversified investment portfolio.",
      ],
    },
    {
      id: "diversification",
      title: "Portfolio Diversification",
      paragraphs: [
        "Gold exhibits low correlation with traditional equity and fixed-income assets, making it an effective diversifier that reduces overall portfolio volatility and enhances risk-adjusted returns.",
        "By maintaining strategic gold allocations, Gleama creates a more balanced portfolio capable of performing across varied economic environments and market cycles.",
      ],
    },
    {
      id: "inflation",
      title: "Inflation Protection",
      paragraphs: [
        "Gold has historically served as an effective hedge against inflation, preserving real value when currency purchasing power declines. This protective quality supports Gleama's commitment to long-term stakeholder prosperity.",
        "Our gold investment framework ensures that inflation protection complements growth-oriented holdings across CSE equities, unit trusts and private equity — completing a truly diversified investment strategy.",
      ],
    },
  ],
  cta: {
    headline: "Strengthen Your Portfolio",
    description:
      "Discover how Gleama's gold investments can enhance wealth preservation and diversification.",
    primaryLabel: "Contact Us",
    primaryHref: "/contact",
    secondaryLabel: "View All Sectors",
    secondaryHref: "/sectors",
  },
};
