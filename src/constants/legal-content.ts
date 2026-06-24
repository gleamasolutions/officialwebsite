export interface LegalSection {
  id: string;
  title: string;
  paragraphs: string[];
  list?: string[];
}

export interface LegalDocumentContent {
  lastUpdated: string;
  introduction: string;
  sections: LegalSection[];
}

export const PRIVACY_POLICY: LegalDocumentContent = {
  lastUpdated: "June 19, 2026",
  introduction:
    "Gleama (Pvt) Ltd (“Gleama”, “we”, “our”, or “us”) is committed to protecting the privacy and confidentiality of personal information entrusted to us. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you visit our website or communicate with us.",
  sections: [
    {
      id: "information-we-collect",
      title: "1. Information We Collect",
      paragraphs: [
        "We may collect personal information that you voluntarily provide when contacting us, subscribing to updates, or engaging with our services. This may include your name, email address, telephone number, company name, and the content of your message.",
        "We may also collect limited technical information automatically when you visit our website, such as IP address, browser type, device information, pages viewed, and referring URLs.",
      ],
    },
    {
      id: "how-we-use-information",
      title: "2. How We Use Your Information",
      paragraphs: ["We use collected information for legitimate business purposes, including:"],
      list: [
        "Responding to inquiries and providing requested information",
        "Managing investor and partnership communications",
        "Improving our website, services, and user experience",
        "Complying with legal, regulatory, and corporate governance obligations",
        "Protecting the security and integrity of our systems",
      ],
    },
    {
      id: "legal-basis",
      title: "3. Legal Basis for Processing",
      paragraphs: [
        "Where applicable, we process personal data based on one or more of the following grounds: your consent, performance of a contract or pre-contractual steps, compliance with legal obligations, and our legitimate interests in operating and improving our business, provided such interests are not overridden by your rights.",
      ],
    },
    {
      id: "sharing",
      title: "4. Information Sharing and Disclosure",
      paragraphs: [
        "We do not sell personal information. We may share information with trusted service providers who assist us in website hosting, communications, analytics, or professional services, subject to appropriate confidentiality and data protection safeguards.",
        "We may also disclose information where required by law, regulation, court order, or to protect the rights, property, or safety of Gleama, our clients, or others.",
      ],
    },
    {
      id: "retention",
      title: "5. Data Retention",
      paragraphs: [
        "We retain personal information only for as long as necessary to fulfill the purposes for which it was collected, including to satisfy legal, accounting, or reporting requirements. Retention periods may vary depending on the nature of the information and applicable obligations.",
      ],
    },
    {
      id: "security",
      title: "6. Data Security",
      paragraphs: [
        "We implement appropriate technical and organizational measures designed to protect personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.",
      ],
    },
    {
      id: "your-rights",
      title: "7. Your Rights",
      paragraphs: [
        "Depending on applicable law, you may have rights to access, correct, update, delete, or restrict the processing of your personal information, as well as the right to object to certain processing or request data portability. To exercise these rights, please contact us using the details provided on our Contact page.",
      ],
    },
    {
      id: "international",
      title: "8. International Transfers",
      paragraphs: [
        "If personal information is transferred across borders, we take reasonable steps to ensure that appropriate safeguards are in place in accordance with applicable data protection requirements.",
      ],
    },
    {
      id: "changes",
      title: "9. Changes to This Policy",
      paragraphs: [
        "We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. The updated version will be posted on this page with a revised “Last Updated” date.",
      ],
    },
    {
      id: "contact",
      title: "10. Contact Us",
      paragraphs: [
        "If you have questions regarding this Privacy Policy or our data practices, please contact us via the Contact page on this website or by email at gleamasolutions@gmail.com.",
      ],
    },
  ],
};

export const COOKIE_POLICY: LegalDocumentContent = {
  lastUpdated: "June 19, 2026",
  introduction:
    "This Cookie Policy explains how Gleama (Pvt) Ltd uses cookies and similar technologies on our website. It should be read together with our Privacy Policy.",
  sections: [
    {
      id: "what-are-cookies",
      title: "1. What Are Cookies?",
      paragraphs: [
        "Cookies are small text files placed on your device when you visit a website. They help websites function properly, remember preferences, and understand how visitors interact with content.",
      ],
    },
    {
      id: "types",
      title: "2. Types of Cookies We Use",
      paragraphs: ["We may use the following categories of cookies:"],
      list: [
        "Strictly Necessary Cookies: Required for core website functionality and security",
        "Functional Cookies: Remember preferences and improve usability",
        "Analytics Cookies: Help us understand website traffic and performance",
        "Marketing Cookies: Used to deliver relevant content where applicable",
      ],
    },
    {
      id: "how-we-use",
      title: "3. How We Use Cookies",
      paragraphs: [
        "Cookies enable us to maintain secure sessions, remember consent choices, analyze visitor trends, and improve the overall performance and relevance of our website.",
      ],
    },
    {
      id: "third-party",
      title: "4. Third-Party Cookies",
      paragraphs: [
        "Some cookies may be placed by third-party service providers that support analytics, embedded content, or other website functionality. These providers process information in accordance with their own privacy policies.",
      ],
    },
    {
      id: "managing",
      title: "5. Managing Cookie Preferences",
      paragraphs: [
        "When you first visit our website, you may accept all cookies, decline non-essential cookies, or manage your preferences through our cookie banner. You can also adjust browser settings to block or delete cookies, although some website features may not function correctly as a result.",
      ],
    },
    {
      id: "consent",
      title: "6. Consent and Storage",
      paragraphs: [
        "Your cookie consent choice is stored locally in your browser so the banner does not reappear after a selection is made. You may update your preferences at any time by clearing site data or revisiting the cookie settings option where available.",
      ],
    },
    {
      id: "updates",
      title: "7. Updates to This Policy",
      paragraphs: [
        "We may revise this Cookie Policy periodically. Any updates will be published on this page with an updated effective date.",
      ],
    },
    {
      id: "contact",
      title: "8. Contact Us",
      paragraphs: [
        "For questions about our use of cookies, please contact us via the Contact page or at gleamasolutions@gmail.com.",
      ],
    },
  ],
};

export const TERMS_OF_SERVICE: LegalDocumentContent = {
  lastUpdated: "June 19, 2026",
  introduction:
    "These Terms and Conditions (“Terms”) govern your access to and use of the Gleama (Pvt) Ltd website. By accessing or using this website, you agree to be bound by these Terms. If you do not agree, please do not use the website.",
  sections: [
    {
      id: "about",
      title: "1. About Gleama",
      paragraphs: [
        "Gleama (Pvt) Ltd is a diversified company operating across capital markets, unit trusts, private equity, and gold investments. Information on this website is provided for general informational purposes unless otherwise stated.",
      ],
    },
    {
      id: "permitted-use",
      title: "2. Permitted Use",
      paragraphs: ["You may use this website only for lawful purposes and in accordance with these Terms. You agree not to:"],
      list: [
        "Use the website in any way that violates applicable laws or regulations",
        "Attempt to gain unauthorized access to systems, data, or networks",
        "Introduce malware, automated scraping tools, or disruptive code",
        "Misrepresent your identity or affiliation when contacting us",
        "Reproduce, distribute, or exploit website content without permission",
      ],
    },
    {
      id: "no-advice",
      title: "3. No Investment Advice",
      paragraphs: [
        "Content on this website does not constitute financial, investment, legal, or tax advice. Nothing herein should be interpreted as an offer, solicitation, or recommendation to buy or sell any security or investment product. You should seek independent professional advice before making investment decisions.",
      ],
    },
    {
      id: "accuracy",
      title: "4. Information Accuracy",
      paragraphs: [
        "While we strive to ensure information on this website is accurate and current, Gleama makes no warranties or representations regarding completeness, reliability, or suitability. Content may be updated or removed at any time without notice.",
      ],
    },
    {
      id: "intellectual-property",
      title: "5. Intellectual Property",
      paragraphs: [
        "All content, branding, logos, graphics, text, and materials on this website are owned by or licensed to Gleama and are protected by applicable intellectual property laws. Unauthorized use is prohibited.",
      ],
    },
    {
      id: "third-party-links",
      title: "6. Third-Party Links",
      paragraphs: [
        "This website may contain links to third-party websites for convenience. Gleama is not responsible for the content, policies, or practices of third-party sites, and access is at your own risk.",
      ],
    },
    {
      id: "limitation",
      title: "7. Limitation of Liability",
      paragraphs: [
        "To the fullest extent permitted by law, Gleama shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from your use of, or inability to use, this website or reliance on its content.",
      ],
    },
    {
      id: "indemnity",
      title: "8. Indemnity",
      paragraphs: [
        "You agree to indemnify and hold harmless Gleama, its directors, officers, employees, and affiliates from claims, losses, or expenses arising from your misuse of the website or violation of these Terms.",
      ],
    },
    {
      id: "governing-law",
      title: "9. Governing Law",
      paragraphs: [
        "These Terms shall be governed by and construed in accordance with the laws of Sri Lanka, without regard to conflict of law principles. Disputes shall be subject to the exclusive jurisdiction of the courts of Sri Lanka.",
      ],
    },
    {
      id: "changes",
      title: "10. Changes to These Terms",
      paragraphs: [
        "We may modify these Terms at any time by posting an updated version on this page. Continued use of the website after changes become effective constitutes acceptance of the revised Terms.",
      ],
    },
    {
      id: "contact",
      title: "11. Contact",
      paragraphs: [
        "For questions regarding these Terms, please contact us through the Contact page or at gleamasolutions@gmail.com.",
      ],
    },
  ],
};
