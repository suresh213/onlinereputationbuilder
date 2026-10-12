"use client";
import React, { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import { industries } from "./data";

const categories = [
  "All Sectors",
  "Medical & Healthcare",
  "Corporate & Executive",
  "Finance, Law & Real Estate",
  "Tech & Startups",
  "Public Figures & Entertainment",
  "Hospitality & Retail",
  "Enterprise & Logistics",
  "Education & Non-Profit",
];

const industryFaqs = [
  {
    q: "Why do different industries require specialized online reputation management?",
    a: "Different industries operate under distinct legal frameworks, regulatory authorities, and discovery platforms. For example, doctors must comply with medical ethics regulations and patient privacy rules on Practo and Google Maps, while corporate enterprises face Glassdoor employer reviews and financial media scrutiny. Cookie-cutter ORM strategies fail because they ignore the unique platform ecosystems and legal requirements of each sector."
  },
  {
    q: "How does Online Reputation Builder customize strategies across 50 sectors?",
    a: "We customize each campaign by mapping the specific platform vulnerabilities of that sector. For healthcare, we target clinical review portals and medical forums. For tech and Web3, we suppress forum defamation on Reddit, X, and Telegram. For corporate leaders, we address executive search results and business press coverage using specialized legal notices and reverse SEO protocols tailored to that domain."
  },
  {
    q: "Which industries face the highest risk of online defamation and review attacks?",
    a: "Healthcare providers, corporate executives, legal practitioners, and hospitality businesses face the highest reputational risk. In healthcare, over 80 percent of patients check doctor ratings before booking consultations. In enterprise business, corporate due diligence and investor funding frequently stall when unverified allegations appear on Google Page 1."
  },
  {
    q: "Do you sign non-disclosure agreements (NDAs) for sensitive industry engagements?",
    a: "Yes. Every single client engagement across all 50 industries is executed under a binding, bilateral Non-Disclosure Agreement (NDA). All case files, forensic research, and communication logs remain completely confidential and are never disclosed to third parties or used in public case studies."
  },
  {
    q: "How quickly can industry-specific negative search results be suppressed or removed?",
    a: "Turnaround times depend on the platform and publication tier. Policy-violating reviews on Google, Practo, or Glassdoor are typically challenged and removed within 7 to 21 business days. Complete reverse SEO suppression of authoritative media articles or forum discussions typically takes 60 to 120 days of multi-asset authority engineering."
  }
];

export default function IndustryDirectoryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Sectors");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredIndustries = useMemo(() => {
    return industries.filter((ind) => {
      const matchesCategory =
        selectedCategory === "All Sectors" || ind.category === selectedCategory;
      const matchesSearch =
        ind.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ind.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ind.badge.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ind.executiveSummary.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <main className="min-h-screen bg-white font-sans text-zinc-900 selection:bg-brand-gold/30 selection:text-zinc-950">
      <Navbar />

      {/* ── HERO SECTION ── */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 px-4 bg-zinc-950 overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-gold/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-brand-blue/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center justify-center gap-2 text-xs text-zinc-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-brand-gold font-medium">Industry Directory</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-brand-gold/15 text-brand-gold border border-brand-gold/30 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
            50 Specialized Industry Sectors
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15] mb-6 max-w-4xl mx-auto">
            Industry-Specific Online Reputation Management
          </h1>

          <p className="text-zinc-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto mb-10 font-normal">
            Generic PR and standard SEO fail when your career or enterprise revenue is on the line. We build tailored legal, technical, and reverse SEO defenses designed for the specific platforms, regulations, and search behaviors of your exact industry.
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto text-left">
            <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800">
              <p className="text-2xl font-bold text-brand-gold">50+</p>
              <p className="text-xs text-zinc-400 font-medium">Custom Sector Playbooks</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800">
              <p className="text-2xl font-bold text-white">100%</p>
              <p className="text-xs text-zinc-400 font-medium">Strict NDA Protection</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800">
              <p className="text-2xl font-bold text-emerald-400">24/7</p>
              <p className="text-xs text-zinc-400 font-medium">Active Threat Monitoring</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800">
              <p className="text-2xl font-bold text-white">98%</p>
              <p className="text-xs text-zinc-400 font-medium">Case Resolution Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SEARCH & CATEGORY FILTER SECTION ── */}
      <section className="py-12 px-4 bg-zinc-100 border-b border-zinc-200">
        <div className="max-w-6xl mx-auto">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by industry name, profession, or threat (e.g. Doctors, Glassdoor, Startups)..."
                className="w-full px-5 py-3.5 pl-12 rounded-2xl bg-white border border-zinc-300 text-sm text-zinc-900 placeholder:text-zinc-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all"
              />
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400">
                🔍
              </span>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-zinc-400 hover:text-zinc-600"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-zinc-900 text-white shadow-md"
                    : "bg-white text-zinc-600 hover:bg-zinc-200 border border-zinc-300/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRY CARDS DIRECTORY GRID ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-zinc-900">
                {selectedCategory === "All Sectors" ? "All 50 Protected Sectors" : selectedCategory}
              </h2>
              <p className="text-zinc-500 text-sm mt-1">
                Showing {filteredIndustries.length} tailored industry reputation solutions
              </p>
            </div>
          </div>

          {filteredIndustries.length === 0 ? (
            <div className="p-12 text-center rounded-3xl bg-zinc-50 border border-zinc-200">
              <p className="text-lg font-bold text-zinc-700">No industries found</p>
              <p className="text-sm text-zinc-500 mt-2">Try adjusting your search query or switching categories.</p>
              <button
                onClick={() => {
                  setSelectedCategory("All Sectors");
                  setSearchQuery("");
                }}
                className="mt-4 px-4 py-2 rounded-xl text-xs font-bold bg-brand-gold text-zinc-950 hover:bg-brand-gold/90 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredIndustries.map((ind) => (
                <Link
                  key={ind.slug}
                  href={`/industry/${ind.slug}`}
                  className="group p-6 rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-brand-gold hover:shadow-xl transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-brand-blue bg-brand-blue/10 px-2.5 py-1 rounded-md">
                        {ind.category}
                      </span>
                      <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        NDA Protected
                      </span>
                    </div>

                    <h3 className="font-heading text-xl font-bold text-zinc-900 group-hover:text-brand-blue transition-colors mb-2">
                      {ind.name}
                    </h3>

                    <p className="text-xs text-zinc-600 line-clamp-3 leading-relaxed mb-4">
                      {ind.executiveSummary}
                    </p>

                    <div className="space-y-1.5 mb-6 pt-3 border-t border-zinc-200/80">
                      <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Key Deliverables:</p>
                      {ind.deliverables.slice(0, 2).map((del, dIdx) => (
                        <p key={dIdx} className="text-xs text-zinc-700 flex items-start gap-1.5">
                          <span className="text-emerald-500 font-bold">✓</span>
                          <span className="truncate">{del}</span>
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-zinc-200 flex items-center justify-between text-xs font-bold text-zinc-900 group-hover:text-brand-gold transition-colors">
                    <span>View Specialized Protocol</span>
                    <span className="text-sm transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── SECTOR VULNERABILITY MATRIX HIGHLIGHTS ── */}
      <section className="py-20 px-4 bg-zinc-950 text-white border-t border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-brand-gold uppercase tracking-widest bg-brand-gold/15 px-3 py-1 rounded-full border border-brand-gold/30 mb-4 inline-block">
              Sector Differentiation
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
              Why Generic ORM Fails High-Stakes Professions
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Every vertical faces distinct platform dynamics, review verification requirements, and legal boundaries. Our teams engineer customized protocols built for each exact environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800">
              <div className="w-12 h-12 rounded-xl bg-brand-gold/15 text-brand-gold flex items-center justify-center text-2xl mb-6">
                🏥
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-3">Healthcare & Medical</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Practicing physicians and clinics cannot publicly respond to negative reviews due to patient confidentiality rules. We deploy legal takedowns on Practo and Google Maps while strictly honoring medical privacy ethics.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800">
              <div className="w-12 h-12 rounded-xl bg-brand-blue/20 text-brand-blue flex items-center justify-center text-2xl mb-6">
                ⚖️
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-3">Legal & Financial</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Lawyers and wealth managers operate under strict bar council and financial regulatory standards. We eradicate defamatory forum accusations and false malpractice allegations to protect institutional client acquisition.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center text-2xl mb-6">
                💻
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-3">Tech & Web3 Founders</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Founders face aggressive FUD attacks, Reddit harassment, and anonymous competitor campaigns. We execute rapid reverse SEO suppression and multi-channel verification to protect investor relations and token launches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── KNOWLEDGE BASE & FAQS ── */}
      <section className="py-20 lg:py-24 px-4 bg-white border-b border-zinc-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-2">Knowledge Base</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-zinc-900 mb-4">
              Frequently Asked Questions: Industry ORM
            </h2>
            <p className="text-zinc-500 text-sm max-w-xl mx-auto">
              Answers regarding sector specialization, legal takedowns, NDAs, and our permanent removal guarantee.
            </p>
          </div>

          <div className="bg-zinc-50 rounded-3xl p-4 sm:p-8 border border-zinc-200">
            <FAQ items={industryFaqs} />
          </div>
        </div>
      </section>

      {/* ── CONFIDENTIAL AUDIT CTA ── */}
      <section id="contact" className="py-24 px-4 bg-zinc-950 text-white relative overflow-hidden border-t-4 border-brand-gold">
        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold bg-brand-gold/15 px-3 py-1 rounded-full border border-brand-gold/30 mb-4 inline-block">
              Confidential Response Desk
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold mb-6 leading-tight">
              Request Your Sector-Specific Reputation Audit
            </h2>
            <p className="text-zinc-400 text-base leading-relaxed mb-8 max-w-lg">
              Every day unverified negative content sits on Google is a day of lost client trust and missed deals. Share your current search footprint for a confidential, custom response strategy within 24 hours.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-sm text-zinc-300">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">✓</span>
                100% Protected Under Binding Non-Disclosure Agreement
              </div>
              <div className="flex items-center gap-3 text-sm text-zinc-300">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">✓</span>
                Detailed 24-Hour Forensic Search Footprint Audit
              </div>
              <div className="flex items-center gap-3 text-sm text-zinc-300">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">✓</span>
                Direct Strategy Access to Senior Directors
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-3">
              <p className="text-xs uppercase font-bold tracking-wider text-zinc-400">Direct Senior Hotline</p>
              <div className="flex flex-wrap items-center gap-4">
                <a href="tel:+918882788412" className="text-lg font-bold text-white hover:text-brand-gold transition-colors">
                  📞 +91 88827 88412
                </a>
                <span className="text-zinc-600">|</span>
                <a
                  href="https://wa.me/918882788412?text=Hello%2C%20I%20need%20a%20confidential%20industry%20reputation%20audit."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  💬 WhatsApp Us 24/7
                </a>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-sm">
            <h3 className="font-heading text-xl font-bold text-white mb-2">Request Confidential Audit</h3>
            <p className="text-zinc-400 text-xs sm:text-sm mb-6">Your identity and company data are strictly protected.</p>
            <ContactForm dark />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
