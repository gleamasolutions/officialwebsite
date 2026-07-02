export interface DirectorBiographySections {
  profileSummary: string;
  professionalBiography: string[];
  currentPosition: string;
  leadershipPhilosophy: string;
}

export interface Director {
  id: string;
  slug: string;
  name: string;
  position: string;
  image: string;
  shortDescription: string;
  fullBiography: string[];
  sections: DirectorBiographySections;
}

export const LEADERSHIP_IMAGE = "/images/Leadership/Leadership.png";

export const DIRECTORS: Director[] = [
  {
    id: "kosala-perera",
    slug: "kosala-perera",
    name: "Mr. Kosala Perera",
    position: "Chairman",
    image: LEADERSHIP_IMAGE,
    shortDescription:
      "A dynamic young entrepreneur and strategic business leader recognized for his passion for investments, innovation, branding and business development.",
    fullBiography: [
      "Mr. Kosala Perera is a dynamic young entrepreneur and strategic business leader in Sri Lanka, recognized for his passion for investments, innovation, branding, and business development. An alumnus of S.\u00A0Thomas'\u00A0College, Bandarawela, he has built a strong foundation in entrepreneurship and investment management, accumulating over four years of practical experience in these fields.",
      "Currently pursuing studies in the Information Technology sector, Mr. Perera combines technological knowledge with business acumen to identify emerging opportunities and drive sustainable growth. He serves as the Director and Chief Executive Officer of 360 Technologies International (Pvt) Ltd, where he leads the company's strategic vision and innovation initiatives.",
      "Committed to continuous learning and creativity, Mr. Perera consistently seeks to develop innovative solutions, create value-driven ventures, and contribute to the advancement of Sri Lanka's business landscape through forward thinking leadership and entrepreneurial excellence.",
    ],
    sections: {
      profileSummary:
        "A dynamic young entrepreneur and strategic business leader with over four years of practical experience in entrepreneurship and investment management, driven by a passion for investments, innovation, branding and business development.",
      professionalBiography: [
        "Mr. Kosala Perera is a dynamic young entrepreneur and strategic business leader in Sri Lanka, recognized for his passion for investments, innovation, branding, and business development. An alumnus of S.\u00A0Thomas'\u00A0College, Bandarawela, he has built a strong foundation in entrepreneurship and investment management, accumulating over four years of practical experience in these fields.",
        "Currently pursuing studies in the Information Technology sector, Mr. Perera combines technological knowledge with business acumen to identify emerging opportunities and drive sustainable growth. He serves as the Director and Chief Executive Officer of 360 Technologies International (Pvt) Ltd, where he leads the company's strategic vision and innovation initiatives.",
        "Committed to continuous learning and creativity, Mr. Perera consistently seeks to develop innovative solutions, create value-driven ventures, and contribute to the advancement of Sri Lanka's business landscape through forward-thinking leadership and entrepreneurial excellence.",
      ],
      currentPosition:
        "Chairman of Gleama (Pvt) Ltd and Director & Chief Executive Officer of 360 Technologies International (Pvt) Ltd, where he leads strategic vision and innovation initiatives.",
      leadershipPhilosophy:
        "Guided by a commitment to continuous learning and creativity, Mr. Perera believes in developing innovative solutions and value driven ventures contributing to the advancement of Sri Lanka's business landscape through forward-thinking leadership and entrepreneurial excellence.",
    },
  },
  {
    id: "charuka-ranasinghe",
    slug: "charuka-ranasinghe",
    name: "Mr. Charuka Ranasinghe",
    position: "CEO / Director",
    image: LEADERSHIP_IMAGE,
    shortDescription:
      "Chief Executive Officer and Director leading operational strategy and disciplined portfolio management across all business verticals.",
    fullBiography: [
      "Mr. Charuka Ranasinghe serves as Chief Executive Officer and Director of Gleama (Pvt) Ltd, leading the company's operational strategy and day-to-day management across all business verticals. He is responsible for executing the board's vision through disciplined portfolio management and strategic business development.",
      "With a strong foundation in business analysis, risk management and market operations, Mr. Ranasinghe drives performance excellence across Gleama's CSE equities, unit trust funds, private equity partnerships and gold investment offerings. His leadership emphasizes data-driven decision-making and sustainable growth frameworks.",
      "Mr. Ranasinghe is dedicated to building dynamic business solutions that deliver long-term value for customers and stakeholders, while fostering a culture of innovation, trust and operational excellence throughout the organization.",
    ],
    sections: {
      profileSummary:
        "An operational leader with a strong foundation in business analysis, risk management and market operations, focused on disciplined portfolio management and sustainable growth.",
      professionalBiography: [
        "Mr. Charuka Ranasinghe serves as Chief Executive Officer and Director of Gleama (Pvt) Ltd, leading the company's operational strategy and day-to-day management across all business verticals. He is responsible for executing the board's vision through disciplined portfolio management and strategic business development.",
        "With a strong foundation in business analysis, risk management and market operations, Mr. Ranasinghe drives performance excellence across Gleama's CSE equities, unit trust funds, private equity partnerships and gold investment offerings. His leadership emphasizes data-driven decision-making and sustainable growth frameworks.",
        "Mr. Ranasinghe is dedicated to building dynamic business solutions that deliver long-term value for customers and stakeholders, while fostering a culture of innovation, trust and operational excellence throughout the organization.",
      ],
      currentPosition:
        "Chief Executive Officer and Director of Gleama (Pvt) Ltd, responsible for operational strategy and management across all business verticals.",
      leadershipPhilosophy:
        "Mr. Ranasinghe champions data-driven decision-making and sustainable growth by building dynamic business solutions that deliver long-term value while fostering a culture of innovation, trust and operational excellence.",
    },
  },
];

export function getDirectorBySlug(slug: string): Director | undefined {
  return DIRECTORS.find((director) => director.slug === slug);
}

export function getDirectorProfilePath(slug: string): string {
  return `/about/leadership/${slug}`;
}
