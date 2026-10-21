"use client";
import React from "react";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";

const heroBullets = [
  "Right to be Forgotten de-indexing under Delhi High Court legal precedents",
  "Expunge dismissed FIRs, quashed criminal complaints & police disclosures",
  "De-index judgments from Google Search, IndianKanoon, and legal aggregators",
  "100% confidential legal counsel execution with strict mutual NDA",
];

const stats = [
  { number: "9+", label: "Years Handling Legal De-indexing" },
  { number: "98%", label: "Court Record Takedown Success" },
  { number: "850+", label: "Legal URLs & Judgments De-indexed" },
  { number: "100%", label: "Strict Legal Privilege & Confidentiality" },
];

const eligibleCases = [
  {
    title: "Quashed FIRs & Acquittals",
    desc: "Proceedings quashed by High Courts under Section 482 CrPC / Section 528 BNSS or criminal trials resulting in complete honorable acquittal.",
    icon: "⚖️",
  },
  {
    title: "Amicably Settled Commercial Disputes",
    desc: "Corporate arbitration disputes, contractual disagreements, or resolved civil lawsuits that continue to jeopardize new business contracts.",
    icon: "🤝",
  },
  {
    title: "Matrimonial & Family Court Records",
    desc: "Divorce proceedings, domestic disputes, or maintenance petitions that compromise personal privacy and family dignity online.",
    icon: "🏡",
  },
  {
    title: "Dismissed Consumer Complaints & Inquiries",
    desc: "Historical consumer forum cases or regulatory inquiry notices that were dismissed on merit but remain indexed on Google.",
    icon: "📑",
  },
  {
    title: "Legal Aggregator Portals (IndianKanoon, Casemine)",
    desc: "Third-party legal database pages showing personal names, addresses, and sensitive court filings in open search snippets.",
    icon: "🔍",
  },
  {
    title: "Old Sensationalized Arrest Media Press",
    desc: "News media articles reporting an initial arrest or police charge without ever updating the public regarding subsequent acquittal.",
    icon: "📰",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Case Eligibility Verification",
    desc: "Our legal team audits certified court orders, closure reports, or settlement agreements to establish legal grounds for privacy and de-indexing.",
  },
  {
    step: "02",
    title: "Google Legal Petition Preparation",
    desc: "We draft formal statutory petitions citing landmark High Court Right to be Forgotten judgments and Data Protection regulations.",
  },
  {
    step: "03",
    title: "Intermediary & Legal Aggregator Notice",
    desc: "We serve formal requests to legal databases and publishers for name redaction and search crawler disallowance.",
  },
  {
    step: "04",
    title: "Search Cache Expungement & Shielding",
    desc: "We use Google Search Console removal endpoints to clear outdated cached snippets and execute positive PR asset reinforcement.",
  },
];

const faqs = [
  {
    q: "Can a dismissed court case or quashed FIR be removed from Google Search in India?",
    a: "Yes. Multiple Indian High Courts including the Delhi High Court, Gujarat High Court, and Kerala High Court have recognized the Right to be Forgotten. If an individual has been acquitted, charges have been quashed under Section 482 CrPC / Section 528 BNSS, or proceedings have been amicably settled, Google can be legally required to de-index the judgment and search snippets."
  },
  {
    q: "Can case summaries on IndianKanoon or Casemine be removed?",
    a: "While legal aggregators maintain public records, search engine de-indexing prevents those pages from showing up when someone searches your personal or business name on Google. Furthermore, verified court redaction orders can be submitted to legal aggregators to redact names and identifying details."
  },
  {
    q: "How long does court record de-indexing from Google take?",
    a: "A formal submission to Google Legal backed by certified court orders and High Court precedents typically takes between 14 to 28 business days for complete search de-indexing."
  },
  {
    q: "What is the difference between expunging a record and de-indexing?",
    a: "Expungement or quashing occurs within the judicial court system, officially ending or nullifying criminal proceedings. De-indexing removes the digital trail of that proceeding from Google Search, ensuring prospective employers, business partners, or family cannot discover it."
  },
  {
    q: "Is my privacy protected throughout this legal process?",
    a: "Yes, 100 percent. All case documentation, FIR details, and court orders are reviewed under strict attorney-client privilege and mutual Non-Disclosure Agreements."
  }
];

export default function CourtRecordRemovalPage() {
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
          <span className="text-zinc-200">Court Record & FIR Removal</span>
        </nav>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs font-bold uppercase tracking-wider mb-4">
              Right to be Forgotten Legal Specialist
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-heading">
              Remove Court Records & FIRs from Google Search
            </h1>
            <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed">
              Permanently de-index acquitted court cases, quashed police FIRs, and embarrassing legal records from Google Search, IndianKanoon, and web archives under recognized Indian privacy laws.
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
                href="https://wa.me/918882788412?text=Hi%2C%20I%20need%20a%20confidential%20consultation%20regarding%20de-indexing%20a%20court%20record%20or%20FIR."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-emerald-950/40"
              >
                <span>Confidential WhatsApp Legal Desk</span>
              </a>
              <a
                href="tel:+918882788412"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs uppercase tracking-wider border border-zinc-700 transition-all"
              >
                <span>Direct Legal Hotline: +91 88827 88412</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
              <div className="mb-6">
                <span className="text-xs font-bold text-brand-gold uppercase tracking-widest block">
                  Legal De-indexing Desk
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  Request Confidential Case Review
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Submit details of the legal record or search link for free assessment under attorney confidentiality.
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

        {/* Eligible Cases Grid */}
        <section className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Legal Records Eligible for De-indexing
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm mt-2">
              Indian judicial precedents protect citizens from permanent online stigma following favorable court verdicts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eligibleCases.map((c, idx) => (
              <div key={idx} className="bg-zinc-900/60 border border-zinc-800/80 p-6 rounded-2xl">
                <div className="text-3xl mb-3">{c.icon}</div>
                <h3 className="text-base font-bold text-white mb-2">{c.title}</h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process Protocol */}
        <section className="mb-16 bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-8 sm:p-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Our 4-Stage Legal De-indexing Protocol
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm mt-2">
              A transparent, lawful pathway to expunging outdated judicial records from search algorithms.
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
            title="Court Record & FIR Removal FAQ"
            subtitle="Frequently asked questions about Indian High Court Right to be Forgotten precedents."
            faqs={faqs}
          />
        </section>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-brand-blue/30 via-zinc-900 to-brand-gold/20 border border-brand-gold/30 rounded-3xl p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
            Do Not Let Past Resolved Disputes Stigmatize Your Future
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base max-w-2xl mx-auto mt-3">
            Speak directly with our cyber law and Google de-indexing specialists. All communications are strictly confidential and protected by mutual NDA.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <a
              href="https://wa.me/918882788412?text=Hi%2C%20I%20need%20a%20confidential%20consultation%20regarding%20de-indexing%20a%20court%20record%20or%20FIR."
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
              <span>Schedule Legal Audit</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
