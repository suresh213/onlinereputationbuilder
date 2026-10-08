const fs = require('fs');

async function submitIndexNow() {
  const host = 'onlinereputationbuilders.in';
  const key = '1f8a9b2c3d4e5f6g7h8i9j0k1l2m3n4o';
  
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

  const urls = industries.map(ind => \`https://\${host}/industry/\${generateSlug(ind)}\`);

  const payload = {
    host: host,
    key: key,
    keyLocation: \`https://\${host}/\${key}.txt\`,
    urlList: urls
  };

  const response = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'charset': 'utf-8' },
    body: JSON.stringify(payload)
  });

  if (response.ok) {
    console.log("✅ Successfully pinged IndexNow! Bing is indexing all 50 industry pSEO pages.");
  } else {
    console.log("Error:", response.status, await response.text());
  }
}

submitIndexNow().catch(console.error);
