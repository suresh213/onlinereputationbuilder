"use client";
import React from "react";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";

const heroBullets = [
  "Direct dispute escalation through Justdial Merchant Support & Compliance",
  "Eliminate fake, abusive, and competitor-generated 1-star reviews",
  "Challenge unverified phone callers lacking commercial invoices or proof",
  "Restore star ratings and improve inbound phone call conversions",
];

const stats = [
  { number: "10+", label: "Years Supporting Indian SMBs" },
  { number: "96%", label: "Justdial Review Dispute Success Rate" },
  { number: "2,100+", label: "Unverified Local Reviews Removed" },
  { number: "4.8+", label: "Average Restored Client Rating" },
];

const violationTypes = [
  {
    title: "Competitor Sabotage & Malicious Bidding",
    desc: "Coordinated negative ratings posted by local rivals trying to steal market share and lower your directory rank.",
    icon: "🎯",
  },
  {
    title: "Non-Customer Inquiries & Price Shoppers",
    desc: "Negative reviews posted by casual telephone callers who never purchased goods or hired your business.",
    icon: "📞",
  },
  {
    title: "Commercial Extortion & Threatening Calls",
    desc: "Callers threatening bad public reviews unless granted unreasonable discounts or free services.",
    icon: "🚨",
  },
  {
    title: "Profanity, Abuse & Personal Slurs",
    desc: "Reviews containing defamatory attacks, personal insults, or vulgar language violating merchant safety guidelines.",
    icon: "🛑",
  },
  {
    title: "Ex-Employee Personal Vendettas",
    desc: "Disgruntled past staff posting bogus complaints pretending to be unhappy local clients.",
    icon: "🏢",
  },
  {
    title: "Duplicate & Cross-Platform Review Spam",
    desc: "Identical reviews copied and pasted across Justdial, Google Maps, and Sulekha by serial review spammers.",
    icon: "🔄",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Listing Audit & Log Verification",
    desc: "We analyze the offending Justdial review, match the phone number or reviewer profile against your lead records, and document clear violations.",
  },
  {
    step: "02",
    title: "Formal Merchant Dispute Filing",
    desc: "We submit structured evidence to Justdial's Trust & Safety department requesting review audit and deletion.",
  },
  {
    step: "03",
    title: "Legal Notice Escalation",
    desc: "If initial disputes stall, our legal counsel files formal intermediary grievance notices under Indian IT Rules 2021.",
  },
  {
    step: "04",
    title: "Rating Recovery & Amplification",
    desc: "We implement systematic verified customer feedback collection to raise your star rating safely to 4.7+ stars.",
  },
];

const faqs = [
  {
    q: "Can you remove fake reviews from Justdial?",
    a: "Yes. Justdial has clear merchant and listing guidelines. Reviews posted by competitor accounts, non-genuine callers, abusive trolls, or reviews lacking invoice proof can be challenged and deleted through merchant support escalation and formal legal dispute filing."
  },
  {
    q: "Why do Justdial reviews hurt local businesses in India?",
    a: "Justdial is one of India's largest local business directories. When prospective customers search for local services or compare vendors, a 1-star rating or unaddressed complaint directly drives leads to competing local providers."
  },
  {
    q: "How long does Justdial review dispute take?",
    a: "Most Justdial merchant disputes and verified complaint reviews take between 5 to 14 business days for resolution and rating adjustment."
  },
  {
    q: "Can I remove negative reviews without paying Justdial premium listing fees?",
    a: "Yes. Review policy disputes are independent of commercial listing packages. Whether you have a free or paid listing, reviews that violate terms of service can be legally disputed."
  },
  {
    q: "Do you also help with Google Maps and Sulekha reviews?",
    a: "Yes. We offer complete multi-platform local review management covering Google Business Profile, Justdial, Sulekha, and TradeIndia."
  }
];

export default function JustdialRemovalPage() {
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
          <span className="text-zinc-200">Justdial Review Management</span>
        </nav>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs font-bold uppercase tracking-wider mb-4">
              Local Directory ORM Specialist
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-heading">
              Justdial Review Removal & Rating Management
            </h1>
            <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed">
              Permanently delete fake, competitor-driven, and defamatory reviews from Justdial. Protect your local business listing score and increase daily inbound phone inquiries.
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
                href="https://wa.me/918882788412?text=Hi%2C%20I%20need%20assistance%20removing%20fake%20reviews%20from%20Justdial."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-emerald-950/40"
              >
                <span>Instant WhatsApp Consultation</span>
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
                  Local Merchant Desk
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  Request Justdial Listing Audit
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Submit your Justdial business page for free review audit and removal eligibility check.
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

        {/* Violation Types Grid */}
        <section className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Removable Justdial Review Violations
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm mt-2">
              Legitimate grounds under Justdial terms of use to dispute and purge negative ratings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {violationTypes.map((v, idx) => (
              <div key={idx} className="bg-zinc-900/60 border border-zinc-800/80 p-6 rounded-2xl">
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="text-base font-bold text-white mb-2">{v.title}</h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process Protocol */}
        <section className="mb-16 bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-8 sm:p-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Our 4-Stage Justdial Clean-up Protocol
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm mt-2">
              Systematic dispute escalation to protect your local lead flow.
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
            title="Justdial Review Removal FAQ"
            subtitle="Common questions regarding local directory rules and merchant support dispute processes."
            faqs={faqs}
          />
        </section>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-brand-blue/30 via-zinc-900 to-brand-gold/20 border border-brand-gold/30 rounded-3xl p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
            Do Not Let Bad Reviews Hurt Your Daily Phone Leads
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base max-w-2xl mx-auto mt-3">
            Speak directly with our local directory ORM team. We analyze your Justdial profile within 60 minutes.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <a
              href="https://wa.me/918882788412?text=Hi%2C%20I%20need%20assistance%20removing%20fake%20reviews%20from%20Justdial."
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
