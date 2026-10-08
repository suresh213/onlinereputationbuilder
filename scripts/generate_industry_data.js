const fs = require('fs');
const path = require('path');

const industries = [
  "Doctors", "Surgeons", "Dentists", "Politicians", "Lawyers", "Law Firms",
  "Real Estate Developers", "Real Estate Agents", "Crypto Founders", "Web3 Projects",
  "Hotels", "Resorts", "CEOs", "C-Suite Executives", "Financial Advisors",
  "Wealth Managers", "Hospitals", "Clinics", "Plastic Surgeons", "Startups",
  "Tech Founders", "SaaS Companies", "E-commerce Brands", "Retail Chains",
  "Automotive Dealerships", "Airlines", "Logistics Companies", "Construction Firms",
  "Architects", "Accountants", "CPA Firms", "Insurance Agents", "Private Equity Firms",
  "Venture Capitalists", "Investment Bankers", "Public Companies", "Board Members",
  "Influencers", "Athletes", "Musicians", "Actors", "Authors", "Public Speakers",
  "Franchises", "Gyms & Fitness Centers", "Universities", "Private Schools",
  "Non-Profits", "Charities", "Government Contractors"
];

function generateSlug(name) {
  return name.toLowerCase().replace(/ & /g, '-').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

const data = industries.map(ind => {
  const slug = generateSlug(ind);
  return {
    slug,
    title: `Reputation Management for ${ind}`,
    heroTitle: `Protect Your Brand: Online Reputation Management for ${ind}`,
    heroSubtitle: `In the highly competitive world of ${ind.toLowerCase()}, your online reputation is your most valuable asset. We specialize in suppressing negative search results and amplifying positive PR.`,
    painPointTitle: `Why ${ind} Need Specialized Reputation Management`,
    painPointDesc: `For ${ind.toLowerCase()}, a single negative article, fake review, or coordinated defamation campaign can destroy years of hard work. We use legal and SEO strategies to ensure your digital footprint reflects your true expertise.`,
    faqs: [
      {
        q: `How long does it take to improve the online reputation of ${ind.toLowerCase()}?`,
        a: "Depending on the severity of the negative content, our suppression and removal campaigns typically show significant results within 4 to 12 weeks."
      },
      {
        q: `Can you remove fake reviews or defamatory articles about ${ind.toLowerCase()}?`,
        a: "Yes. Our legal and compliance teams work directly with platforms and publishers to remove content that violates Terms of Service or constitutes defamation."
      },
      {
        q: `Is your reputation management service confidential?`,
        a: "Absolutely. We operate under strict Non-Disclosure Agreements (NDAs). Your privacy and the integrity of your brand are our top priorities."
      }
    ]
  };
});

const fileContent = `export interface IndustryData {
  slug: string;
  title: string;
  heroTitle: string;
  heroSubtitle: string;
  painPointTitle: string;
  painPointDesc: string;
  faqs: { q: string; a: string }[];
}

export const industries: IndustryData[] = ${JSON.stringify(data, null, 2)};
`;

fs.mkdirSync(path.join(__dirname, '../app/industry'), { recursive: true });
fs.writeFileSync(path.join(__dirname, '../app/industry/data.ts'), fileContent);
console.log("Generated app/industry/data.ts with 50 industries.");
