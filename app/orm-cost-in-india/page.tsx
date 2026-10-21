"use client";
import React from "react";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";

const pricingTiers = [
  {
    name: "Starter / Local SMB & Clinic",
    price: "₹25,000 - ₹50,000",
    period: "per month",
    target: "Local retail, clinics, doctors, single-location restaurants & SMBs",
    features: [
      "Continuous Google Business Profile & Justdial monitoring",
      "Removal or dispute of up to 5 fake/malicious 1-star reviews per month",
      "Review dispute submissions under Google Content Policies",
      "Monthly sentiment tracking and star rating trajectory audit",
      "Local SEO citations and verified review collection setup",
      "Direct WhatsApp account manager support",
    ],
    highlight: false,
    badge: "For Local Businesses",
  },
  {
    name: "Growth Enterprise & Startups",
    price: "₹75,000 - ₹1,75,000",
    period: "per month",
    target: "Funded startups, SaaS brands, real estate firms & multi-branch healthcare",
    features: [
      "Full Page 1 & Page 2 Google Search reverse SEO suppression",
      "Glassdoor, AmbitionBox & MouthShut employee grievance disputes",
      "Google Autocomplete negative keyword defense ('scam', 'fraud')",
      "De-indexing of up to 3 defamatory blog posts or smear articles",
      "Tier-1 digital PR publishing on Economic Times & Business Standard",
      "Bi-weekly executive reporting with guaranteed milestone tracking",
    ],
    highlight: true,
    badge: "Most Popular in India",
  },
  {
    name: "Corporate Enterprise & Crisis Shield",
    price: "₹2,50,000 - ₹5,50,000+",
    period: "per month",
    target: "Listed conglomerates, high-profile CXOs, HNIs, politicians & institutions",
    features: [
      "24/7 dark web and real-time social media brand monitoring",
      "High Court Right to be Forgotten and Section 79 IT Act legal filings",
      "NCLT, FIR, and court record search de-indexing petitions",
      "Wikipedia executive profile protection and citation dominance",
      "AI Overview and ChatGPT Answer Engine Optimization (AEO/GEO)",
      "Dedicated senior legal counsel and 60-minute crisis response SLA",
    ],
    highlight: false,
    badge: "Boardroom Level",
  },
];

const payPerRemoval = [
  {
    service: "Fake Google Maps 1-Star Review Dispute",
    cost: "₹10,000 - ₹25,000",
    timeline: "7 - 14 Days",
    billing: "Milestone based upon confirmed review deletion",
  },
  {
    service: "MouthShut Consumer Complaint Resolution",
    cost: "₹20,000 - ₹45,000",
    timeline: "14 - 21 Days",
    billing: "Grievance officer dispute filing & de-indexing",
  },
  {
    service: "Glassdoor / AmbitionBox Review Takedown",
    cost: "₹25,000 - ₹50,000",
    timeline: "10 - 20 Days",
    billing: "Platform policy violation escalation & purge",
  },
  {
    service: "Court Record / FIR Search De-indexing",
    cost: "₹45,000 - ₹1,20,000",
    timeline: "14 - 28 Days",
    billing: "Statutory Google Legal RTBF petition execution",
  },
  {
    service: "Defamatory News Article Suppression Campaign",
    cost: "₹65,000 - ₹1,50,000 / mo",
    timeline: "60 - 90 Days",
    billing: "Multi-tier positive digital PR and reverse SEO push",
  },
];

const faqs = [
  {
    q: "How much does online reputation management cost in India in 2026?",
    a: "In India, professional ORM services range from INR 25,000 to INR 60,000 per month for small businesses and local clinics; INR 75,000 to INR 2,00,000 per month for mid-sized enterprises; and INR 2,50,000 to INR 6,00,000+ per month for enterprise crisis management and corporate conglomerates. Pay-per-deletion review takedowns typically cost between INR 15,000 and INR 45,000 per verified URL removal."
  },
  {
    q: "Why is there a wide price variation among ORM companies in India?",
    a: "Pricing depends on four primary factors: (1) Domain Authority of the negative content (e.g. Times of India vs a personal blog), (2) The method required (direct legal de-indexing vs long-term reverse SEO suppression), (3) Number of damaging URLs on Page 1 and Page 2, and (4) The entity profile (individual, medical practitioner, or enterprise corporate brand)."
  },
  {
    q: "Do you charge upfront retainers or pay-for-performance?",
    a: "We offer milestone-based payment schedules. For discrete negative review and link takedowns, payment is tied to confirmed removal milestones. For long-term corporate suppression and executive branding, monthly fixed retainers provide predictable billing with zero hidden fees."
  },
  {
    q: "What is the ROI of investing in online reputation management?",
    a: "According to Harvard Business Review, a 1-star improvement in online review rating yields a 5 to 9 percent increase in revenue. For businesses with negative Page 1 links, eliminating search fallout stops customer abandonment rates that typically exceed 22 to 70 percent."
  },
  {
    q: "Are there long-term lock-in contracts?",
    a: "No. Our monthly packages operate on flexible 3-month or 6-month cycles with clear milestone deliverables. Discrete takedowns require no recurring commitment."
  }
];

export default function ORMCostIndiaPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-brand-gold/30">
      <Topbar />
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-zinc-400 mb-8">
          <Link href="/" className="hover:text-brand-gold transition-colors">Home</Link>
          <span>/</span>
          <span className="text-zinc-200">ORM Cost in India</span>
        </nav>

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs font-bold uppercase tracking-wider mb-4">
            Transparent 2026 Pricing Guide
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight font-heading">
            How Much Does Online Reputation Management Cost in India?
          </h1>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed">
            A comprehensive, transparent breakdown of ORM packages, monthly retainers, pay-per-removal fees, and ROI factors for Indian enterprises, doctors, and brands.
          </p>
        </div>

        {/* Monthly Retainer Tiers Grid */}
        <section className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Comprehensive Monthly ORM Retainer Packages
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm mt-2">
              Fixed monthly pricing with milestone deliverables, transparent SLAs, and zero hidden costs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {pricingTiers.map((tier, idx) => (
              <div
                key={idx}
                className={`rounded-3xl p-8 flex flex-col justify-between border transition-all ${
                  tier.highlight
                    ? "bg-zinc-900/90 border-brand-gold ring-1 ring-brand-gold/50 shadow-2xl shadow-brand-gold/10 relative"
                    : "bg-zinc-900/50 border-zinc-800"
                }`}
              >
                <div>
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 bg-zinc-800 text-zinc-300">
                    {tier.badge}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-xs text-zinc-400 mb-6 leading-relaxed">{tier.target}</p>

                  <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-zinc-800">
                    <span className="text-3xl font-extrabold text-brand-gold">{tier.price}</span>
                    <span className="text-xs text-zinc-500 font-medium">/{tier.period}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                        <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`https://wa.me/918882788412?text=Hi%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(tier.name)}%20ORM%20package.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-center transition-all ${
                    tier.highlight
                      ? "bg-brand-gold hover:bg-brand-gold-light text-zinc-950 shadow-lg shadow-brand-gold/20"
                      : "bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700"
                  }`}
                >
                  Select This Plan
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Pay-Per-Removal Discrete Services */}
        <section className="mb-20 bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-6 sm:p-10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Pay-Per-Removal & Discrete Takedown Pricing
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm mt-2">
              Pay solely for specific verified deletions without committing to long-term monthly retainers.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-zinc-950/80 text-zinc-400 uppercase tracking-wider text-[11px] border-b border-zinc-800">
                <tr>
                  <th className="py-4 px-4 font-bold">Service / Takedown Type</th>
                  <th className="py-4 px-4 font-bold">Estimated Cost (INR)</th>
                  <th className="py-4 px-4 font-bold">Typical Duration</th>
                  <th className="py-4 px-4 font-bold">Billing Structure</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60 text-zinc-200">
                {payPerRemoval.map((item, idx) => (
                  <tr key={idx} className="hover:bg-zinc-900/40 transition-colors">
                    <td className="py-4 px-4 font-semibold text-white">{item.service}</td>
                    <td className="py-4 px-4 font-bold text-brand-gold">{item.cost}</td>
                    <td className="py-4 px-4 text-zinc-400">{item.timeline}</td>
                    <td className="py-4 px-4 text-zinc-300">{item.billing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* What Drives Pricing Breakdown */}
        <section className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              5 Factors That Determine Your ORM Campaign Cost
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm mt-2">
              Understanding why some reputation campaigns require higher investment than others.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-zinc-900/60 border border-zinc-800/80 p-6 rounded-2xl">
              <div className="text-2xl mb-2 font-bold text-brand-gold">01</div>
              <h3 className="text-base font-bold text-white mb-2">Domain Authority of the Negative Content</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Suppressing a high-DA news article on Economic Times or Times of India requires significantly more tier-1 PR firepower than outranking a low-traffic complaint blog.
              </p>
            </div>

            <div className="bg-zinc-900/60 border border-zinc-800/80 p-6 rounded-2xl">
              <div className="text-2xl mb-2 font-bold text-brand-gold">02</div>
              <h3 className="text-base font-bold text-white mb-2">Takedown Method (Legal vs Reverse SEO)</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Direct statutory de-indexing through Google Legal carries low ongoing costs. In contrast, complex reverse SEO requires publishing dozens of positive media placements over 3 to 6 months.
              </p>
            </div>

            <div className="bg-zinc-900/60 border border-zinc-800/80 p-6 rounded-2xl">
              <div className="text-2xl mb-2 font-bold text-brand-gold">03</div>
              <h3 className="text-base font-bold text-white mb-2">Number of Damaging URLs</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Cleaning 1 defamatory link on Page 1 is fast and straightforward. A widespread smear campaign with 10+ negative URLs across Google Page 1 and 2 requires enterprise asset networks.
              </p>
            </div>

            <div className="bg-zinc-900/60 border border-zinc-800/80 p-6 rounded-2xl">
              <div className="text-2xl mb-2 font-bold text-brand-gold">04</div>
              <h3 className="text-base font-bold text-white mb-2">Search Volume of Your Brand / Name</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Brands with 50,000+ monthly searches have stronger search intent signals that demand aggressive content amplification to reshape Google autocomplete and AI Overview answers.
              </p>
            </div>

            <div className="bg-zinc-900/60 border border-zinc-800/80 p-6 rounded-2xl">
              <div className="text-2xl mb-2 font-bold text-brand-gold">05</div>
              <h3 className="text-base font-bold text-white mb-2">Entity Profile & Industry Risk</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Regulated sectors like healthcare, pharmaceutical manufacturing, fintech, and publicly listed firms require specialized legal review to ensure complete NMC and SEBI compliance.
              </p>
            </div>

            <div className="bg-zinc-900/60 border border-zinc-800/80 p-6 rounded-2xl flex flex-col justify-center items-center text-center">
              <h3 className="text-lg font-bold text-white mb-2">Need an Exact Quote?</h3>
              <p className="text-xs text-zinc-400 mb-4">
                We provide custom quotes within 60 minutes based on exact URL analysis.
              </p>
              <a
                href="https://wa.me/918882788412?text=Hi%2C%20I%20need%20a%20custom%20price%20quote%20for%20ORM%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all"
              >
                Get Exact Quote on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Audit Form Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-zinc-900/70 border border-zinc-800 rounded-3xl p-8 sm:p-12">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold text-brand-gold uppercase tracking-widest block mb-2">
                Confidential Price Assessment
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                Request a Custom Milestone Proposal
              </h2>
              <p className="text-sm text-zinc-300 mt-3 leading-relaxed">
                Send us the negative search queries, URLs, or business profile details. Our senior strategist will inspect the technical feasibility and provide a transparent, fixed-fee proposal within 60 minutes under mutual NDA.
              </p>
              <div className="mt-6 flex items-center gap-3 text-xs text-zinc-400">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Zero obligation • 100% confidential • Verified milestone billing</span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <ContactForm dark={true} />
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-16">
          <FAQSection
            title="Online Reputation Management Pricing FAQ"
            subtitle="Straight answers regarding retainers, guarantees, and return on investment."
            faqs={faqs}
          />
        </section>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-brand-blue/30 via-zinc-900 to-brand-gold/20 border border-brand-gold/30 rounded-3xl p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
            Stop Losing 22%+ of Your Customers to Negative Search Results
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base max-w-2xl mx-auto mt-3">
            Investing in proactive reputation defense pays for itself within the first preserved contract. Speak directly with our pricing specialists today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <a
              href="https://wa.me/918882788412?text=Hi%2C%20I%20need%20a%20custom%20price%20quote%20for%20ORM%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow-lg shadow-emerald-950/40"
            >
              <span>Instant WhatsApp Pricing Chat</span>
            </a>
            <Link
              href="/reputation-calculator"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-sm border border-zinc-700 transition-all"
            >
              <span>Calculate Revenue Loss First</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
