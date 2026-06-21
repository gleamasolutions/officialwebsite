export interface BlogSection {
  id: string;
  title: string;
  paragraphs: string[];
}

export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  publishedDate: string;
  publishedDateDisplay: string;
  readingTimeMinutes: number;
  author: string;
  category: string;
  featuredImage: string;
  featuredImageAlt: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  sections: BlogSection[];
}

export const BLOG_AUTHOR = "Gleama Editorial Team";

export const BLOG_LISTING_SEO = {
  title: "Insights & Articles",
  description:
    "Market insights, investment strategies and business perspectives from Gleama (Pvt) Ltd — your source for smart investing in Sri Lanka.",
  keywords: [
    "Gleama blog",
    "investment insights Sri Lanka",
    "market perspectives",
    "investment strategies",
    "business articles",
    "Colombo Stock Exchange insights",
  ],
} as const;

export const BLOG_HERO = {
  title: "Insights & Articles",
  subtitle:
    "Market insights, investment strategies and business perspectives from Gleama.",
} as const;

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    slug: "future-of-smart-investing",
    title: "The Future of Smart Investing in Sri Lanka",
    excerpt:
      "Exploring how technology, diversification and capital market opportunities are reshaping investment strategies for long-term wealth creation in Sri Lanka.",
    publishedDate: "2026-03-15",
    publishedDateDisplay: "March 15, 2026",
    readingTimeMinutes: 6,
    author: BLOG_AUTHOR,
    category: "Investment Strategy",
    featuredImage: "/images/blog/smart-investing.jpg",
    featuredImageAlt:
      "The future of smart investing in Sri Lanka — Gleama insights",
    seo: {
      title: "The Future of Smart Investing in Sri Lanka",
      description:
        "Discover how smart investing, CSE opportunities, diversification and technology are shaping the future of wealth creation in Sri Lanka.",
      keywords: [
        "smart investing Sri Lanka",
        "Colombo Stock Exchange",
        "investment technology",
        "diversified portfolio",
        "long-term wealth creation",
        "Gleama insights",
      ],
    },
    sections: [
      {
        id: "introduction",
        title: "Introduction",
        paragraphs: [
          "The investment landscape in Sri Lanka is evolving rapidly. As economic conditions shift and global markets become increasingly interconnected, investors are seeking smarter, more disciplined approaches to building and preserving wealth.",
          "At Gleama (Pvt) Ltd, we believe the future of investing lies in combining traditional market expertise with modern analytical tools, diversified asset allocation and a steadfast commitment to long-term value creation. This article explores the key trends shaping smart investing in Sri Lanka today.",
        ],
      },
      {
        id: "cse-opportunities",
        title: "Colombo Stock Exchange Opportunities",
        paragraphs: [
          "The Colombo Stock Exchange (CSE) remains a cornerstone of Sri Lanka's capital markets, offering investors access to established companies across banking, manufacturing, tourism, technology and consumer sectors. For disciplined investors, the CSE presents opportunities to participate in the country's economic growth through well-researched equity selections.",
          "Smart investing on the CSE requires fundamental analysis, sector diversification and patience. Rather than chasing short-term market movements, successful investors focus on companies with strong balance sheets, sustainable earnings and competitive advantages that can deliver returns across market cycles.",
          "Gleama's capital market strategy emphasizes research-driven portfolio construction — identifying high-quality equities that align with long-term growth themes while maintaining prudent risk parameters.",
        ],
      },
      {
        id: "diversification-benefits",
        title: "Diversification Benefits",
        paragraphs: [
          "No single asset class performs consistently across all market conditions. Diversification — spreading investments across equities, unit trusts, private equity and gold — is one of the most effective strategies for managing risk while pursuing sustainable returns.",
          "A well-diversified portfolio reduces the impact of volatility in any one sector or asset class. When equity markets face pressure, holdings in gold or fixed-income oriented unit trusts can provide stability. When private equity investments mature, they can deliver outsized returns that complement public market performance.",
          "Smart investors understand that diversification is not about owning everything — it is about strategic allocation aligned with goals, time horizons and risk tolerance.",
        ],
      },
      {
        id: "technology-investing",
        title: "Technology & Investing",
        paragraphs: [
          "Technology is transforming how investors research markets, monitor portfolios and execute strategies. Data analytics, digital platforms and real-time market information have democratized access to investment insights that were once available only to institutional players.",
          "However, technology is a tool — not a substitute for discipline. Smart investing leverages technology to enhance decision-making while maintaining the human judgment, governance standards and long-term perspective that define successful investment management.",
          "At Gleama, we integrate modern analytical capabilities with institutional-grade risk frameworks, ensuring that technological advancement serves our commitment to sustainable, responsible investing.",
        ],
      },
      {
        id: "long-term-wealth",
        title: "Long-Term Wealth Creation",
        paragraphs: [
          "The most successful investment strategies share a common foundation: a long-term perspective. Wealth is built through consistent capital deployment, compound growth and the patience to allow quality investments to mature over time.",
          "Short-term market fluctuations are inevitable, but they should not derail a well-constructed investment plan. Smart investors remain focused on their objectives, rebalance when necessary and avoid reactive decisions driven by market noise.",
          "Gleama's investment philosophy centers on creating enduring value for stakeholders — building portfolios designed to perform across decades, not just quarters.",
        ],
      },
      {
        id: "conclusion",
        title: "Conclusion",
        paragraphs: [
          "The future of smart investing in Sri Lanka is bright for those who embrace diversification, leverage technology responsibly and maintain a long-term commitment to disciplined portfolio management.",
          "Whether through CSE equities, unit trust funds, private equity or gold investments, Gleama (Pvt) Ltd stands ready to guide investors toward sustainable wealth creation. Contact our team to learn how our diversified investment solutions can support your financial goals.",
        ],
      },
    ],
  },
  {
    slug: "why-diversification-matters",
    title: "Why Diversification Matters in a Changing Economy",
    excerpt:
      "Understanding the critical role of portfolio and business diversification in navigating economic uncertainty and protecting long-term investor value.",
    publishedDate: "2026-02-10",
    publishedDateDisplay: "February 10, 2026",
    readingTimeMinutes: 5,
    author: BLOG_AUTHOR,
    category: "Diversification",
    featuredImage: "/images/blog/diversification.jpg",
    featuredImageAlt:
      "Why diversification matters in a changing economy — Gleama insights",
    seo: {
      title: "Why Diversification Matters in a Changing Economy",
      description:
        "Learn why diversification is essential for risk management, investor protection and sustainable growth in an evolving Sri Lankan economy.",
      keywords: [
        "portfolio diversification",
        "risk management investing",
        "economic uncertainty",
        "investor benefits",
        "business diversification Sri Lanka",
        "Gleama investment strategy",
      ],
    },
    sections: [
      {
        id: "introduction",
        title: "Introduction",
        paragraphs: [
          "Economic conditions are never static. Interest rates shift, global events create volatility and individual sectors rise and fall in response to changing demand. In this environment, diversification is not merely a strategy — it is a necessity for investors and businesses alike.",
          "At Gleama (Pvt) Ltd, diversification is embedded in our identity as a diversified investment company. This article examines why spreading risk across asset classes, sectors and investment themes is essential for navigating today's changing economy.",
        ],
      },
      {
        id: "risk-management",
        title: "Risk Management",
        paragraphs: [
          "Concentration risk is one of the greatest threats to investment portfolios. When too much capital is allocated to a single asset, sector or geography, adverse events can cause disproportionate losses that are difficult to recover from.",
          "Diversification acts as a natural hedge against concentration risk. By holding a mix of equities, unit trusts, private equity and gold, investors create a portfolio where underperformance in one area can be offset by stability or growth in another.",
          "Effective risk management requires ongoing monitoring, strategic rebalancing and alignment with clearly defined investment objectives — principles that guide every decision at Gleama.",
        ],
      },
      {
        id: "business-diversification",
        title: "Business Diversification",
        paragraphs: [
          "For enterprises, diversification extends beyond investment portfolios. Companies that operate across multiple revenue streams, markets and product lines are better equipped to withstand sector-specific downturns and capitalize on emerging opportunities.",
          "Gleama's own diversified model — spanning capital markets, unit trusts, private equity and gold — reflects this principle in practice. Our multi-sector approach enables us to identify value across the economy while maintaining resilience against localized disruptions.",
          "Business diversification, when executed with strategic intent rather than indiscriminate expansion, creates sustainable competitive advantages and long-term enterprise value.",
        ],
      },
      {
        id: "investor-benefits",
        title: "Investor Benefits",
        paragraphs: [
          "Investors benefit from diversification through reduced volatility, improved risk-adjusted returns and greater peace of mind during uncertain market periods. A diversified portfolio is less likely to experience extreme swings, making it easier to stay committed to long-term financial plans.",
          "For institutional and individual investors alike, diversification provides access to multiple growth drivers. While one asset class may plateau, others may accelerate — ensuring that the overall portfolio continues progressing toward its objectives.",
          "Gleama's investment solutions are designed to deliver these benefits through professionally managed, multi-asset portfolios tailored for long-term prosperity.",
        ],
      },
      {
        id: "technology-impact",
        title: "Technology Impact",
        paragraphs: [
          "Technology has made diversification more accessible and measurable than ever before. Modern portfolio analytics enable investors to assess correlation, volatility and allocation efficiency with precision — supporting smarter diversification decisions.",
          "Digital platforms also provide access to a broader range of investment products, from unit trust funds to private equity opportunities, that were previously difficult for individual investors to access.",
          "However, the abundance of options makes disciplined selection critical. Gleama applies rigorous evaluation frameworks to ensure that every addition to a diversified portfolio meets our standards for quality, governance and long-term potential.",
        ],
      },
      {
        id: "conclusion",
        title: "Conclusion",
        paragraphs: [
          "In a changing economy, diversification is the foundation of resilient investing. By spreading risk, capturing multiple growth opportunities and leveraging technology responsibly, investors can navigate uncertainty with confidence.",
          "Gleama (Pvt) Ltd is committed to helping stakeholders build diversified portfolios designed for sustainable growth. Explore our investment sectors or contact our team to discuss how diversification can strengthen your investment strategy.",
        ],
      },
    ],
  },
  {
    slug: "building-strong-consumer-brands",
    title: "Building Strong Consumer Brands for the Next Generation",
    excerpt:
      "How purpose-driven branding, innovation and digital transformation create consumer brands that deliver lasting value for the next generation of customers.",
    publishedDate: "2026-01-20",
    publishedDateDisplay: "January 20, 2026",
    readingTimeMinutes: 7,
    author: BLOG_AUTHOR,
    category: "Brand Development",
    featuredImage: "/images/blog/consumer-brands.jpg",
    featuredImageAlt:
      "Building strong consumer brands for the next generation — Gleama insights",
    seo: {
      title: "Building Strong Consumer Brands for the Next Generation",
      description:
        "Explore how brand purpose, innovation, digital transformation and sustainability drive consumer brand success and private equity value creation.",
      keywords: [
        "consumer brands Sri Lanka",
        "brand building strategy",
        "private equity consumer brands",
        "digital transformation brands",
        "customer loyalty",
        "sustainable brands",
      ],
    },
    sections: [
      {
        id: "introduction",
        title: "Introduction",
        paragraphs: [
          "Consumer brands shape everyday life. From the products we choose to the companies we trust, brands influence decisions across generations. For investors and entrepreneurs, building strong consumer brands represents one of the most compelling opportunities for long-term value creation.",
          "At Gleama (Pvt) Ltd, our private equity investments include a focus on consumer brands with the potential to lead their categories for the next generation. This article explores the principles that define brand excellence in a rapidly evolving marketplace.",
        ],
      },
      {
        id: "brand-purpose",
        title: "Brand Purpose",
        paragraphs: [
          "The most enduring consumer brands are built on clear purpose — a reason for existence that resonates beyond products and pricing. Purpose-driven brands connect with customers on values, identity and aspiration, creating loyalty that transcends transactional relationships.",
          "For the next generation of consumers, authenticity matters. Brands that demonstrate genuine commitment to their stated purpose — through actions, not just marketing — earn trust and advocacy that fuel sustainable growth.",
          "Gleama evaluates consumer brand investments through this lens, seeking companies with defined purpose, strong leadership and the potential to scale while maintaining their core identity.",
        ],
      },
      {
        id: "innovation",
        title: "Innovation",
        paragraphs: [
          "Innovation is the lifeblood of consumer brand success. Whether through product development, packaging, distribution or customer experience, brands that continuously evolve stay relevant in competitive markets.",
          "Investment in research, creative talent and market responsiveness enables brands to anticipate changing consumer preferences rather than react to them. This proactive approach creates competitive moats that protect market share and support premium positioning.",
          "Through our private equity partnerships, Gleama supports consumer brands in accelerating innovation cycles — providing capital and strategic guidance to bring new products and experiences to market faster.",
        ],
      },
      {
        id: "digital-transformation",
        title: "Digital Transformation",
        paragraphs: [
          "Digital channels have fundamentally changed how consumers discover, evaluate and purchase brands. E-commerce, social media and mobile platforms create direct relationships between brands and customers — bypassing traditional intermediaries.",
          "Successful consumer brands embrace digital transformation holistically: optimizing online presence, leveraging data for personalization and building communities that extend brand engagement beyond the point of sale.",
          "For the next generation, digital-native experiences are not optional — they are expected. Brands that invest in digital infrastructure and customer-centric technology platforms position themselves for sustained relevance and growth.",
        ],
      },
      {
        id: "trust-loyalty",
        title: "Trust & Customer Loyalty",
        paragraphs: [
          "Trust is the currency of consumer brands. Once earned, it creates a virtuous cycle of repeat purchases, word-of-mouth referrals and premium pricing power. Once lost, it is extraordinarily difficult to rebuild.",
          "Building trust requires consistency — in product quality, customer service, ethical practices and communication. Brands that deliver reliably across every touchpoint cultivate loyalty that compounds over time.",
          "Gleama's investment approach prioritizes consumer brands with established trust foundations and clear strategies for deepening customer relationships across generations.",
        ],
      },
      {
        id: "sustainability",
        title: "Sustainability",
        paragraphs: [
          "Sustainability is no longer a niche consideration — it is a core expectation of the next generation of consumers. Brands that integrate environmental and social responsibility into their operations gain competitive advantage and access to growing market segments.",
          "From responsible sourcing and eco-friendly packaging to community engagement and ethical labor practices, sustainability initiatives demonstrate that a brand's success is aligned with broader societal well-being.",
          "Gleama believes that sustainable consumer brands represent some of the most attractive long-term investment opportunities, combining financial returns with positive impact.",
        ],
      },
      {
        id: "conclusion",
        title: "Conclusion",
        paragraphs: [
          "Building strong consumer brands for the next generation requires purpose, innovation, digital excellence, trust and sustainability — woven together through strategic vision and disciplined execution.",
          "Through our private equity investments, Gleama (Pvt) Ltd partners with consumer brands poised to lead their categories for decades to come. Contact us to learn more about our approach to brand-driven value creation.",
        ],
      },
    ],
  },
];

export function getAllArticles(): BlogArticle[] {
  return BLOG_ARTICLES;
}

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return BLOG_ARTICLES.find((article) => article.slug === slug);
}

export function getRelatedArticles(
  currentSlug: string,
  limit = 2,
): BlogArticle[] {
  return BLOG_ARTICLES.filter((article) => article.slug !== currentSlug).slice(
    0,
    limit,
  );
}

export function getFeaturedImageUrl(slug: string): string {
  const article = getArticleBySlug(slug);
  return article?.featuredImage ?? "/images/blog/smart-investing.jpg";
}

export function getArticlePath(slug: string): string {
  return `/blog/${slug}`;
}
