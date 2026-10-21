"use client";
import React, { useState } from "react";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";

const heroBullets = [
  "Direct grievance officer dispute filing under IT Rules 2021",
  "Challenge anonymous and unverified reviews lacking invoices or proof",
  "De-index defamatory MouthShut URLs from Google Search Page 1",
  "Reverse SEO suppression to push stubborn consumer threads past Page 2",
];

const stats = [
  { number: "10+", label: "Years of consumer forum dispute experience" },
  { number: "96%", label: "MouthShut Removal Success Rate" },
  { number: "1,200+", label: "Defamatory Complaints Resolved" },
  { number: "100%", label: "Confidentiality & Mutual NDA Protected" },
];

const disputeReasons = [
  {
    title: "Competitor Sabotage & Bogus Accounts",
    desc: "Unverified profiles created by competitors to post fabricated complaints and artificially depress your overall rating.",
    icon: "🚨",
  },
  {
    title: "Lack of Transaction Proof (No Invoice / Order ID)",
    desc: "Under intermediary guidelines, reviews that cannot substantiate an actual commercial relationship are subject to deletion.",
    icon: "🧾",
  },
  {
    title: "Defamatory Accusations & Criminal Slander",
    desc: "Use of unsubstantiated terms like 'scammer', 'thief', or 'cheat' violating Section 356 of Bharatiya Nyaya Sanhita (BNS 2024).",
    icon: "⚖️",
  },
  {
    title: "Blackmail & Consumer Extortion",
    desc: "Disgruntled individuals demanding unreasonable refunds or settlements under the threat of permanent negative online posts.",
    icon: "🛑",
  },
  {
    title: "Ex-Employee Malicious Venting",
    desc: "Internal workplace grievances disguising themselves as consumer product reviews to hurt company brand value.",
    icon: "🏢",
  },
  {
    title: "Outdated Resolved Customer Complaints",
    desc: "Historical issues that were amicably resolved years ago but continue to rank on Google search results today.",
    icon: "⏳",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Forensic URL & Account Audit",
    desc: "We analyze the specific MouthShut complaint URL, timestamps, reviewer account history, and cross-reference order databases to identify platform guideline violations.",
  },
  {
    step: "02",
    title: "Grievance Officer Legal Notice",
    desc: "We draft and serve a formal complaint to MouthShut's designated Grievance Officer under Section 79 of the IT Act and Consumer Protection Rules, demanding deletion.",
  },
  {
    step: "03",
    title: "Google Search De-indexing Request",
    desc: "Where defamatory or infringing content is hosted, we petition Google Legal directly to de-index the specific URL from Indian and worldwide search results.",
  },
  {
    step: "04",
    title: "Reverse SEO Asset Shielding",
    desc: "We publish high-authority branded assets, press articles, and verified profiles to permanently push any residual thread past Page 2 of Google.",
  },
];

const faqs = [
  {
    q: "Can you legally remove negative reviews from MouthShut.com?",
    a: "Yes. When a MouthShut review contains unverified accusations, competitor sabotage, extortion attempts, or violates the Consumer Protection Act and IT Rules 2021, we submit formal legal dispute notices and grievance officer escalations to delete the review or de-index the URL from Google Search."
  },
  {
    q: "Why do MouthShut complaints rank so high on Google search in India?",
    a: "MouthShut has high domain authority (DA 70+) and Google's algorithm frequently indexes consumer forum pages for branded queries. If left unaddressed, a single 1-star MouthShut review often ranks on Page 1 directly beneath your official website."
  },
  {
    q: "How long does MouthShut review resolution take?",
    a: "Direct grievance officer escalations and policy dispute removals take 7 to 21 business days. In scenarios requiring Reverse SEO suppression to push the URL off Page 1, the timeline is 45 to 90 days."
  },
  {
    q: "Can an anonymous MouthShut reviewer be challenged?",
    a: "Yes. MouthShut requires reviewers to be genuine consumers. If a reviewer cannot provide proof of purchase, invoice, or client verification upon formal grievance notice, the review is flagged as fraudulent and removed under intermediary compliance guidelines."
  },
  {
    q: "Do you guarantee confidentiality?",
    a: "Yes, 100 percent. All client representations, evidence gathering, and communications with MouthShut and Google are executed under strict mutual Non-Disclosure Agreements."
  }
];

export default function MouthShutRemovalPage() {
  const [targetUrl, setTargetUrl] = useState("");

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-brand-gold/30">
      <Topbar />
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-zinc-400 mb-8">
          <Link href="/" className="hover:text-brand-gold transition-colors">Home</Link>
          <span>/</span>
          <Link href="/review-management" className="hover:text-brand-gold transition-colors">Review Management</Link>
          <span>/</span>
          <span className="text-zinc-200">MouthShut Review Removal</span>
        </nav>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs font-bold uppercase tracking-wider mb-4">
              Consumer Forum ORM Specialist
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-heading">
              MouthShut Review Removal & Complaint Resolution
            </h1>
            <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed">
              Permanently resolve, delete, or de-index false, unverified, and defamatory consumer complaints from MouthShut.com. Restore consumer trust and eliminate Page 1 Google search penalties.
            </p>

            <div className="mt-6 space-y-2.5">
              {heroBullets.map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center text-xs font-bold flex-shrink-0">
                    ✓
                  </div>
                  <span className="text-sm text-zinc-200">{bullet}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/918882788412?text=Hi%2C%20I%20need%20urgent%20assistance%20removing%20a%20MouthShut%20review."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-emerald-950/40"
              >
                <span>Confidential WhatsApp Consultation</span>
              </a>
              <a
                href="tel:+918882788412"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs uppercase tracking-wider border border-zinc-700 transition-all"
              >
                <span>Direct Hotline: +91 88827 88412</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
              <div className="mb-6">
                <span className="text-xs font-bold text-brand-gold uppercase tracking-widest block">
                  Priority Removal Desk
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  Request MouthShut Removal Audit
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Submit the complaint link for confidential legal review and de-indexing viability assessment.
                </p>
              </div>
              <ContactForm dark={true} />
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((s, idx) => (
            <div key={idx} className="bg-zinc-900/60 border border-zinc-800 p-5 rounded-2xl text-center">
              <p className="text-2xl sm:text-3xl font-black text-brand-gold">{s.number}</p>
              <p className="text-xs text-zinc-400 mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Dispute Grounds Grid */}
        <section className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Grounds for MouthShut Review Removal
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm mt-2">
              Indian consumer law and intermediary guidelines protect businesses against bad-faith attacks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {disputeReasons.map((r, idx) => (
              <div key={idx} className="bg-zinc-900/60 border border-zinc-800/80 p-6 rounded-2xl">
                <div className="text-3xl mb-3">{r.icon}</div>
                <h3 className="text-base font-bold text-white mb-2">{r.title}</h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Step-by-Step Protocol */}
        <section className="mb-16 bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-8 sm:p-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Our 4-Stage MouthShut Resolution Protocol
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm mt-2">
              How we systematically clean your digital footprint and restore customer confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="bg-zinc-950/80 border border-zinc-800 p-5 rounded-2xl relative">
                <span className="text-3xl font-black text-brand-gold/30 font-mono block mb-2">
                  {step.step}
                </span>
                <h3 className="text-sm font-bold text-white mb-2">{step.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-16">
          <FAQSection
            title="MouthShut Review Removal FAQ"
            subtitle="Common questions regarding intermediary law, legal notices, and Google de-indexing."
            faqs={faqs}
          />
        </section>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-brand-blue/30 via-zinc-900 to-brand-gold/20 border border-brand-gold/30 rounded-3xl p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
            Do Not Let A Single MouthShut Review Ruin Your Business
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base max-w-2xl mx-auto mt-3">
            Speak directly with our senior consumer dispute and cyber de-indexing attorneys. We evaluate your link within 60 minutes under strict NDA.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <a
              href="https://wa.me/918882788412?text=Hi%2C%20I%20need%20urgent%20assistance%20removing%20a%20MouthShut%20review."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow-lg shadow-emerald-950/40"
            >
              <span>Instant WhatsApp Hotline</span>
            </a>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-sm border border-zinc-700 transition-all"
            >
              <span>Book Strategy Call</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
