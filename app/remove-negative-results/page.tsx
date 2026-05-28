"use client";
import { useState } from "react";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Link from "next/link";

const faqs = [
  { q: "Can negative content be permanently removed from Google?", a: "Yes, in many cases negative content can be permanently removed from Google through official removal requests, legal takedowns, or direct outreach to webmasters. Our team evaluates each case and uses the most effective strategy for permanent removal." },
  { q: "How long does it take to remove negative Google search results?", a: "The timeline varies depending on the type of content and platform. Some removals happen within days, while others may take 4-8 weeks. SEO suppression strategies typically show results in 60-90 days." },
  { q: "What types of negative content can be removed?", a: "We can assist with removing news articles, blog posts, forum threads, defamatory reviews, legal information, images, videos, and other harmful online content through various legal and technical methods." },
  { q: "Do you handle both business and personal reputation issues?", a: "Absolutely. We provide tailored solutions for both businesses and individuals — whether you're a corporation dealing with a PR crisis or an individual facing false allegations online." },
];

const contentTypes = [
  { icon: "📰", label: "News Articles" },
  { icon: "⚖️", label: "Legal Info" },
  { icon: "📝", label: "Blog Posts" },
  { icon: "🎬", label: "Videos & Images" },
  { icon: "⭐", label: "Negative Reviews" },
  { icon: "💬", label: "Forum Threads" },
  { icon: "📱", label: "Social Media Posts" },
  { icon: "📋", label: "Complaint Sites" },
];

const steps = [
  { n: "01", title: "Free Reputation Analysis", desc: "We conduct a thorough audit of your online presence to identify all negative content affecting your brand or personal reputation." },
  { n: "02", title: "Strategy Development", desc: "Our experts develop a customized multi-pronged removal and suppression strategy tailored to your specific situation." },
  { n: "03", title: "Removal & Suppression", desc: "We execute the plan using legal, technical, and SEO-based methods to remove or suppress harmful content from search results." },
  { n: "04", title: "Positive Content Creation", desc: "We build and promote positive, authoritative content to push negative results further down the search pages." },
  { n: "05", title: "Ongoing Monitoring", desc: "We continuously monitor your online presence and alert you to any new issues before they escalate." },
];

const mediaNames = [
  "CNW", "ANI", "ET BrandEquity", "Times Now", "Forbes", "DNA India", 
  "CNBC", "Hindustan Times", "Business Standard", "India Today", "Midday", "Yahoo Finance"
];

// Interactive SERP Suppression Simulation Widget
function SERPSuppressionWidget() {
  const [suppressed, setSuppressed] = useState(false);
  const [animating, setAnimating] = useState(false);

  const handleSimulate = () => {
    setAnimating(true);
    setTimeout(() => {
      setSuppressed(true);
      setAnimating(false);
    }, 1500);
  };

  const handleReset = () => {
    setSuppressed(false);
    setAnimating(false);
  };

  return (
    <div className="border border-zinc-200 rounded bg-white overflow-hidden text-left font-sans select-none">
      <div className="bg-zinc-50 border-b border-zinc-200 px-4 py-3 flex items-center gap-3">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-200" />
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-200" />
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-200" />
        </div>
        <div className="bg-white border border-zinc-200 rounded text-[0.72rem] text-zinc-500 px-3 py-1 flex-1 flex items-center gap-1.5">
          <svg className="w-3 h-3 text-zinc-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
          google.com/search?q=mybrand+reviews
        </div>
      </div>

      <div className="p-5 space-y-4">
        <div className="space-y-4 relative min-h-[290px] overflow-hidden">
          {/* Result 1: Negative Result */}
          <div
            className={`transition-all duration-[1200ms] border p-3 rounded ${
              suppressed
                ? "opacity-30 scale-95 border-zinc-200 bg-zinc-50/50 translate-y-[215px]"
                : "border-red-200 bg-red-50/30 translate-y-0"
            } absolute inset-x-0 top-0 h-[84px]`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-[0.62rem] font-bold text-red-600 border border-red-200 px-1.5 py-0.5 rounded uppercase tracking-wider">Negative Article</span>
              <span className="text-[0.68rem] text-zinc-400 font-semibold">{suppressed ? "Rank #10" : "Rank #1"}</span>
            </div>
            <h5 className="font-bold text-xs text-zinc-800 leading-tight">ALERT: Client Complaints and Scam Claims Against MyBrand</h5>
            <p className="text-[0.68rem] text-zinc-500 mt-1 leading-snug">Reports of poor customer service and scams circulating online forums...</p>
          </div>

          {/* Result 2: Positive Result 1 */}
          <div
            className={`transition-all duration-[1200ms] border border-zinc-200 p-3 rounded bg-white absolute inset-x-0 ${
              suppressed ? "translate-y-0" : "translate-y-[98px]"
            } h-[84px]`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-[0.62rem] font-bold text-emerald-600 border border-emerald-200 px-1.5 py-0.5 rounded uppercase tracking-wider">Official Site</span>
              <span className="text-[0.68rem] text-zinc-400 font-semibold">{suppressed ? "Rank #1" : "Rank #2"}</span>
            </div>
            <h5 className="font-bold text-xs text-brand-blue leading-tight hover:underline">MyBrand | Premium Corporate Quality Solutions</h5>
            <p className="text-[0.68rem] text-zinc-500 mt-1 leading-snug">Welcome to the official homepage of MyBrand. Explore our verified credentials...</p>
          </div>

          {/* Result 3: Positive Result 2 */}
          <div
            className={`transition-all duration-[1200ms] border border-zinc-200 p-3 rounded bg-white absolute inset-x-0 ${
              suppressed ? "translate-y-[98px]" : "translate-y-[196px]"
            } h-[84px]`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-[0.62rem] font-bold text-brand-blue border border-brand-blue/20 px-1.5 py-0.5 rounded uppercase tracking-wider">Press Release</span>
              <span className="text-[0.68rem] text-zinc-400 font-semibold">{suppressed ? "Rank #2" : "Rank #3"}</span>
            </div>
            <h5 className="font-bold text-xs text-brand-blue leading-tight hover:underline">MyBrand Named Top 10 Best Growing Agencies of 2026</h5>
            <p className="text-[0.68rem] text-zinc-500 mt-1 leading-snug">Industry review lists MyBrand among the fastest-growing and highest-rated...</p>
          </div>

          {/* Result 4: Positive Result 3 */}
          <div
            className={`transition-all duration-[1200ms] border border-zinc-200 p-3 rounded bg-white absolute inset-x-0 ${
              suppressed ? "translate-y-[196px] opacity-100" : "translate-y-[294px] opacity-0"
            } h-[84px]`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-[0.62rem] font-bold text-amber-600 border border-amber-200 px-1.5 py-0.5 rounded uppercase tracking-wider">Trustpilot Reviews</span>
              <span className="text-[0.68rem] text-zinc-400 font-semibold">Rank #3</span>
            </div>
            <h5 className="font-bold text-xs text-brand-blue leading-tight hover:underline">Verified Customer Reviews for MyBrand (4.8 / 5.0)</h5>
            <p className="text-[0.68rem] text-zinc-500 mt-1 leading-snug">Over 1,200 verified users rank MyBrand with outstanding scores for support...</p>
          </div>
        </div>

        <div className="border-t border-zinc-100 pt-4 flex gap-3 items-center justify-between">
          <p className="text-[0.68rem] text-zinc-500">
            {animating ? "Running search suppression..." : suppressed ? "Negative content pushed below Page 1." : "Click button to simulate suppression."}
          </p>
          {!suppressed ? (
            <button
              onClick={handleSimulate}
              disabled={animating}
              className={`btn-blue py-2 px-5 text-[0.7rem] leading-none ${animating ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {animating ? "Suppressing..." : "Suppress Search Results"}
            </button>
          ) : (
            <button onClick={handleReset} className="btn-outline border-zinc-300 text-zinc-600 hover:bg-zinc-50 py-2 px-5 text-[0.7rem] leading-none">
              Reset Simulator
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function RemoveNegativeResultsPage() {
  return (
    <div className="font-body text-zinc-800 bg-white min-h-screen flex flex-col">
      <Topbar />
      <Navbar />

      {/* PAGE HERO */}
      <section className="page-hero relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="hero-badge inline-flex items-center gap-2 px-3 py-1.5 rounded text-xs font-semibold mb-5 uppercase tracking-wider">
              🛡️ Negative Content Removal Experts
            </div>
            <h1 className="font-heading text-3xl lg:text-4xl font-extrabold text-white leading-[1.15] mb-4">
              Remove Negative Content From Google Search
            </h1>
            <p className="text-zinc-400 text-sm mb-5 leading-relaxed">
              Defend your brand. We permanently remove or aggressively suppress negative listings, unverified complaints, and search results fast.
            </p>
            <h2 className="text-white text-base font-bold mb-3">Has Negative Content Damaged Your Reputation?</h2>
            <p className="text-zinc-400 text-xs mb-5 leading-relaxed">
              Over 87% of potential clients search online before buying. A single negative search listing can cause substantial financial damage to businesses and executives.
            </p>
            <ul className="space-y-2 mb-8">
              {[
                "Flag and remove defamatory reviews violating guidelines",
                "Deploy search suppression strategies to bury negative coverage",
                "Proactive reputation threat monitoring",
              ].map((item) => (
                <li key={item} className="check-item text-xs text-zinc-300">
                  <span className="text-brand-gold text-base font-bold flex-shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <Link href="#contact" className="btn-gold">Get Consultation</Link>
            </div>
          </div>

          <div className="bg-slate-900 border border-zinc-800 rounded p-7">
            <p className="section-label mb-1 text-[0.62rem] text-brand-gold uppercase tracking-widest font-bold">Free Consultation</p>
            <h3 className="font-heading text-lg font-bold text-white mb-4">Tell Us About Your Situation</h3>
            <ContactForm dark />
          </div>
        </div>
      </section>

      {/* MEDIA LOGOS */}
      <div className="bg-zinc-50 py-6 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 overflow-hidden">
          <div className="marquee-track flex items-center gap-6 whitespace-nowrap w-max">
            {mediaNames.map((m, i) => (
              <span key={i} className="logo-badge-pill">
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* WHY IT MATTERS */}
      <section className="py-24 px-4 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:divide-x lg:divide-zinc-200">
          <div className="pr-0 lg:pr-12">
            <p className="section-label mb-2">Why It Matters</p>
            <h2 className="font-heading text-2xl lg:text-3xl font-extrabold text-zinc-900 mb-5">
              Secure Clean &amp; Authoritative Search Result Listings
            </h2>
            <p className="text-zinc-500 leading-relaxed mb-4 text-sm">
              Negative articles on Google can impact organic traffic, conversions, and talent recruitment. Potential customers rely heavily on first-page reviews to evaluate business trust.
            </p>
            <p className="text-zinc-500 leading-relaxed mb-6 text-sm">
              If negative listings dominate your brand name search query, we can help. Our team deploys direct webmaster takedowns, policy violation flagging, and content suppression methodologies to neutralize harmful items.
            </p>
            <Link href="#contact" className="btn-blue">Start Suppression</Link>
          </div>
          <div className="w-full max-w-md mx-auto pl-0 lg:pl-12">
            <SERPSuppressionWidget />
          </div>
        </div>
      </section>

      {/* WHAT WE REMOVE */}
      <section className="py-24 px-4 bg-[#fafafa] border-b border-zinc-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-2">Our Expertise</p>
            <h2 className="font-heading text-2xl lg:text-3xl font-extrabold text-zinc-900">Types of Negative Content We Suppress</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {contentTypes.map((c) => (
              <div key={c.label} className="border border-zinc-200 rounded flex flex-col items-center gap-3 py-6 px-4 bg-white hover:border-brand-blue transition-colors">
                <span className="text-3xl select-none">{c.icon}</span>
                <span className="font-bold text-xs text-zinc-800 text-center uppercase tracking-wider">{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 px-4 bg-white border-b border-zinc-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-2">Our Process</p>
            <h2 className="font-heading text-2xl lg:text-3xl font-extrabold text-zinc-900">How Our Removal Process Works</h2>
          </div>
          <div className="space-y-4">
            {steps.map((s) => (
              <div key={s.n} className="bg-[#fafafa] border border-zinc-200 rounded p-6 flex gap-4 items-start">
                <div className="step-number font-heading flex-shrink-0">{s.n}</div>
                <div>
                  <h3 className="font-bold text-zinc-900 mb-2 text-sm">{s.title}</h3>
                  <p className="text-xs text-zinc-500 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-14 px-4 bg-brand-blue border-b border-brand-mid">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { n: "98%", l: "Suppression Success" },
            { n: "1200+", l: "Clients Protected" },
            { n: "50+", l: "Aggregator Cover" },
            { n: "48 hrs", l: "First Blueprint" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <p className="font-heading text-3xl font-extrabold text-white mb-1">{s.n}</p>
              <p className="text-zinc-300 text-xs font-semibold uppercase tracking-wider">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-[#fafafa] border-b border-zinc-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-label mb-2">FAQs</p>
            <h2 className="font-heading text-2xl lg:text-3xl font-extrabold text-zinc-900">Frequently Asked Questions</h2>
          </div>
          <FAQ items={faqs} />
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 px-4 bg-zinc-900 relative overflow-hidden">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label text-brand-gold mb-2">Protect Your Future</p>
            <h2 className="font-heading text-2xl lg:text-3xl font-extrabold text-white mb-4">
              Don&apos;t Let Negative Content Control Your Brand
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6 text-xs">
              Every day a negative listing ranks on page one of Google represents another lost client. Contact Online Reputation Builder for a completely confidential strategy blueprint.
            </p>
            <div className="space-y-3 border-t border-zinc-800 pt-6">
              {["Fast-track suppression for active crises", "Confidential review auditing", "Proven blueprint with 1200+ clients"].map(i => (
                <div key={i} className="flex items-center gap-2.5 text-xs text-zinc-300 leading-normal">
                  <span className="text-brand-gold">✓</span>
                  <span>{i}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-zinc-950 border border-zinc-800 rounded p-7">
            <p className="text-white font-bold text-sm mb-4">Request Search Removal Consultation</p>
            <ContactForm dark />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
