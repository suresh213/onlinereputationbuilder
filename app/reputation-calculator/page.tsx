"use client";
import React from "react";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReputationHealthCalculator from "@/components/ReputationHealthCalculator";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";

const calculatorFaqs = [
  {
    q: "How does the Reputation Risk Calculator calculate threat scores?",
    a: "Our algorithm evaluates your baseline entity exposure across search engines, weighted against specific active threats such as 1-star Google Maps reviews, Page 1 defamatory news, negative autocomplete predictions, and legal records. Each threat is assigned a severity index calibrated to how modern search algorithms like Google Gemini and AI Overviews display brand sentiment."
  },
  {
    q: "Why do negative Google results cause measurable revenue loss?",
    a: "Statistical studies show that 87 percent of consumers research a brand or executive on Google before signing contracts, making purchases, or applying for leadership roles. A single negative search result on Page 1 causes an average of 22 percent of prospective buyers to abandon transactions. Four or more negative links increase abandonment to over 70 percent."
  },
  {
    q: "What is the difference between direct de-indexing and search suppression?",
    a: "Direct de-indexing permanently deletes a URL from Google search results using statutory rights such as Section 79 of the Indian IT Act, court orders, or copyright takedowns. Search suppression uses high-authority digital PR, executive assets, and reverse SEO to push stubborn, unremovable links off Page 1 down to Page 3 and beyond where fewer than 1 percent of searchers click."
  },
  {
    q: "Is the data submitted in this calculator kept confidential?",
    a: "Yes. All diagnostic information, brand queries, and audit requests are held under strict mutual Non-Disclosure confidentiality. We never disclose client identities, past defamation cases, or corporate audits."
  }
];

export default function ReputationCalculatorPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-brand-gold/30">
      <Topbar />
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-zinc-400 mb-8">
          <Link href="/" className="hover:text-brand-gold transition-colors">Home</Link>
          <span>/</span>
          <span className="text-zinc-200">Reputation Risk Calculator</span>
        </nav>

        {/* Hero header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs font-bold uppercase tracking-wider mb-4">
            Free Forensic Diagnostic Tool
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            Google Reputation Risk & Revenue Impact Calculator
          </h1>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed">
            Diagnose active search vulnerabilities, estimate monthly financial loss from defamatory search results, and receive a customized de-indexing roadmap within minutes.
          </p>
        </div>

        {/* The Calculator Component */}
        <ReputationHealthCalculator />

        {/* Informational Breakdown Section */}
        <section className="mt-16 pt-12 border-t border-zinc-800">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              How Google Search Fallout Impacts Modern Businesses
            </h2>
            <p className="text-zinc-400 text-sm mt-2">
              The anatomy of digital reputation damage and how strategic ORM stops revenue leakage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-zinc-900/60 border border-zinc-800/80 p-6 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 flex items-center justify-center font-bold text-lg mb-4">
                1
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Immediate Trust Erosion</h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                When prospective clients, investors, or job applicants Google your brand and see negative headlines or 1-star reviews, their first instinct is to quietly choose a competitor without alerting you.
              </p>
            </div>

            <div className="bg-zinc-900/60 border border-zinc-800/80 p-6 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center font-bold text-lg mb-4">
                2
              </div>
              <h3 className="text-lg font-bold text-white mb-2">AI Search Aggregation</h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                Large language models like ChatGPT, Google Gemini, and Perplexity synthesize top Google results. An unaddressed negative article or complaint forum often becomes the default answer provided by AI.
              </p>
            </div>

            <div className="bg-zinc-900/60 border border-zinc-800/80 p-6 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-bold text-lg mb-4">
                3
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Guaranteed Legal Solutions</h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                Negative links are not permanent. Indian law, IT Rules 2021, DPDP Act 2023, and Google Content Policies provide clear legal frameworks to de-index defamatory, unverified, or outdated content.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="mt-16">
          <FAQSection
            title="Frequently Asked Questions About Reputation Scoring"
            subtitle="Understand your audit score and what happens during a professional reputation recovery campaign."
            faqs={calculatorFaqs}
          />
        </section>

        {/* Bottom CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-brand-blue/30 via-zinc-900 to-brand-gold/20 border border-brand-gold/30 rounded-3xl p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
            Need an Immediate Confidential Consultation?
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base max-w-2xl mx-auto mt-3">
            Speak directly with our senior reputation counsel and cyber de-indexing specialists. We respond within 60 minutes with full NDA protection.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <a
              href="https://wa.me/918882788412?text=Hi%2C%20I%20need%20an%20urgent%20reputation%20consultation%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow-lg shadow-emerald-950/40"
            >
              <span>Confidential WhatsApp Hotline</span>
            </a>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-sm border border-zinc-700 transition-all"
            >
              <span>Schedule Strategic Call</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
