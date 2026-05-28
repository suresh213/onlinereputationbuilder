"use client";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Link from "next/link";

const auditItems = [
  { icon: "🔍", category: "SERP ANALYSIS", title: "Google Search Analysis", desc: "We analyze the first 5 pages of Google results for your brand name, identifying all negative, neutral, and positive content that potential customers see." },
  { icon: "⭐", category: "REVIEW TRACKING", title: "Review Platform Audit", desc: "Comprehensive analysis of your reviews across Google, Glassdoor, Trustpilot, Facebook, Yelp, and 50+ other platforms — rating distribution, sentiment, and response rates." },
  { icon: "📱", category: "SOCIAL SENTIMENT", title: "Social Media Audit", desc: "Evaluation of your social media presence, mentions, comments, and brand perception across Facebook, Twitter, Instagram, LinkedIn, and YouTube." },
  { icon: "📰", category: "MEDIA ALERT", title: "News & Media Coverage", desc: "We scan thousands of news outlets and media sites for any coverage of your brand — positive press, negative articles, or any damaging stories." },
  { icon: "📊", category: "COMPETITOR GAP", title: "Competitor Benchmark", desc: "See how your online reputation compares to your key competitors and identify opportunities to gain a competitive edge." },
  { icon: "🗺️", category: "ROADMAP", title: "Action Roadmap", desc: "A prioritized, step-by-step roadmap of exactly what needs to be fixed, in what order, and what success metrics to track." },
];

const steps = [
  { n: "01", title: "Submit Your Details", desc: "Fill out our quick form with your brand name and key online profiles. No commitment needed." },
  { n: "02", title: "We Conduct the Audit", desc: "Our ORM specialists analyze 100+ data points across search engines, review sites, social media, and news platforms." },
  { n: "03", title: "Receive Your Report", desc: "Within 48 hours, you receive a comprehensive audit report with your reputation score and detailed findings." },
  { n: "04", title: "Strategy Session", desc: "We walk you through the report and recommend a customized action plan to fix issues and strengthen your online presence." },
];

const faqs = [
  { q: "What does a free reputation audit include?", a: "Our free audit covers analysis of your Google search results (first 5 pages), major review platforms, social media mentions, news coverage, and an overall reputation health score. You receive a detailed report highlighting issues and opportunities." },
  { q: "How long does the audit take?", a: "Our comprehensive reputation audit is typically completed within 24-48 business hours. You'll receive a detailed report via email with all findings and recommendations." },
  { q: "Is the audit truly free with no obligation?", a: "Yes, absolutely. Our reputation audit is completely free with no strings attached. We believe in demonstrating our value first. If you like what you see and want our help, we'll be delighted to discuss a plan." },
  { q: "What happens after I receive my audit report?", a: "After receiving your report, one of our ORM specialists will reach out to walk you through the findings and answer any questions. If you'd like to take action, we'll recommend a tailored ORM strategy. There's no pressure to purchase." },
  { q: "Do you audit both business and personal reputations?", a: "Yes. We conduct comprehensive audits for both businesses of all sizes (from startups to enterprises) and individuals including executives, professionals, and public figures." },
];

const mediaNames = [
  "CNW", "ANI", "ET BrandEquity", "Times Now", "Forbes", "DNA India", 
  "CNBC", "Hindustan Times", "Business Standard", "India Today", "Midday", "Yahoo Finance"
];

export default function ReputationAuditPage() {
  return (
    <div className="font-body text-zinc-800 bg-white min-h-screen flex flex-col">
      <Topbar />
      <Navbar />

      {/* PAGE HERO */}
      <section className="page-hero relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="hero-badge inline-flex items-center gap-2 px-3 py-1.5 rounded text-xs font-semibold mb-5 uppercase tracking-wider">
              📊 Free ORM Audit Report — No Obligation
            </div>
            <h1 className="font-heading text-3xl lg:text-4xl font-extrabold text-white leading-[1.15] mb-4">
              Online Reputation Audit to Protect Your Brand Image
            </h1>
            <p className="text-zinc-400 text-sm mb-5 leading-relaxed">
              At Online Reputation Builder, we do not just conduct surface-level reputation audits. We examine search results, brand mentions, customer reviews, social media sentiment, and negative content to find gaps that influence your trust, conversions, and brand authority.
            </p>
            <p className="text-zinc-400 text-xs leading-relaxed mb-6">
              We monitor the presence of your brand in Google, review websites, news outlets, and social media channels with tested reputation management audit tools and provide a comprehensive roadmap to fix what's broken.
            </p>
            <div className="bg-slate-900 border border-zinc-800 rounded p-5 mb-8">
              <p className="text-brand-gold font-bold text-xs uppercase tracking-wider mb-3">✦ What our audit identifies:</p>
              <div className="grid grid-cols-1 gap-2">
                {["Areas of reputation weakness", "Trust signals you're missing", "Negative content impacting conversions", "Competitor reputation comparison", "Priority action roadmap"].map(i => (
                  <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                    <span className="text-brand-gold">→</span>
                    <span>{i}</span>
                  </div>
                ))}
              </div>
            </div>
            <Link href="#get-audit" className="btn-gold">Get Free Audit Report</Link>
          </div>
          <div id="get-audit" className="bg-slate-900 border border-zinc-800 rounded p-7">
            <p className="section-label mb-1 text-[0.62rem] text-brand-gold uppercase tracking-widest font-bold">Free ORM Audit</p>
            <h3 className="font-heading text-lg font-bold text-white mb-1">Get Your Reputation Report</h3>
            <p className="text-zinc-400 text-xs mb-5">Comprehensive audit delivered within 48 hours</p>
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

      {/* WHAT WE AUDIT */}
      <section className="py-24 px-4 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-2">What We Examine</p>
            <h2 className="font-heading text-2xl lg:text-3xl font-extrabold text-zinc-900">
              A 360° View of Your Online Reputation
            </h2>
            <p className="text-zinc-500 max-w-2xl mx-auto text-xs mt-3 leading-relaxed">
              Our audit goes beyond surface-level checks. We dig deep into every corner of the web where your reputation lives.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {auditItems.map((item, idx) => (
              <div 
                key={item.title} 
                className={`service-card group ${idx % 2 === 0 ? "card-accent-blue" : "card-accent-gold"}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[0.58rem] font-bold text-brand-blue uppercase tracking-widest bg-blue-50 border border-blue-100 rounded px-1.5 py-0.5">
                    {item.category}
                  </span>
                  <span className="text-3xl select-none">{item.icon}</span>
                </div>
                <h3 className="font-bold text-zinc-900 text-sm mb-2 group-hover:text-brand-blue transition-colors leading-snug">{item.title}</h3>
                <p className="text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 px-4 bg-[#fafafa] border-b border-zinc-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-2">Simple Process</p>
            <h2 className="font-heading text-2xl lg:text-3xl font-extrabold text-zinc-900">How the Free Audit Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((s) => (
              <div key={s.n} className="bg-white rounded p-6 border border-zinc-200 flex gap-4 items-start">
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

      {/* SAMPLE REPORT PREVIEW */}
      <section className="py-24 px-4 bg-brand-blue border-b border-brand-mid">
        <div className="max-w-5xl mx-auto text-center">
          <p className="section-label text-brand-gold-light/80 mb-2">Sample Report</p>
          <h2 className="font-heading text-2xl lg:text-3xl font-extrabold text-white mb-4">What You&apos;ll Receive in Your Audit</h2>
          <p className="text-zinc-300 max-w-2xl mx-auto text-xs mb-10 leading-relaxed">A comprehensive, easy-to-understand report covering every aspect of your online reputation.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "📈", title: "Reputation Score", desc: "An overall reputation health score from 0-100 based on 50+ signals, with breakdown by category." },
              { icon: "🔴", title: "Risk Assessment", desc: "Prioritized list of reputation risks with severity ratings and immediate action recommendations." },
              { icon: "📋", title: "Action Roadmap", desc: "Step-by-step improvement plan with timelines, expected outcomes, and success metrics." },
            ].map(c => (
              <div key={c.title} className="bg-white/5 border border-white/10 rounded p-6 text-left">
                <div className="text-3xl mb-3 select-none">{c.icon}</div>
                <h3 className="font-bold text-white mb-2 text-sm">{c.title}</h3>
                <p className="text-zinc-300 text-xs leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link href="#get-audit" className="btn-gold">Get Your Free Report Now</Link>
          </div>
        </div>
      </section>

      {/* WHO NEEDS AUDIT */}
      <section className="py-24 px-4 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-label mb-2">Who It&apos;s For</p>
            <h2 className="font-heading text-2xl lg:text-3xl font-extrabold text-zinc-900">Who Needs a Reputation Audit?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🏢", title: "Businesses", desc: "Companies facing negative reviews, bad press, or declining customer trust" },
              { icon: "👤", title: "Individuals", desc: "Professionals, executives, and public figures concerned about their online image" },
              { icon: "🚀", title: "Startups", desc: "New businesses wanting to establish a strong foundation before scaling" },
              { icon: "⚠️", title: "Crisis Situations", desc: "Organizations dealing with active PR crises needing immediate assessment" },
            ].map((c, idx) => (
              <div 
                key={c.title} 
                className={`service-card text-center ${idx % 2 === 0 ? "card-accent-blue" : "card-accent-gold"}`}
              >
                <div className="text-4xl mb-3 select-none">{c.icon}</div>
                <h3 className="font-bold text-zinc-900 mb-2 text-sm">{c.title}</h3>
                <p className="text-xs text-zinc-500 leading-normal">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 bg-[#fafafa] border-b border-zinc-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-label mb-2">FAQs</p>
            <h2 className="font-heading text-2xl lg:text-3xl font-extrabold text-zinc-900">Questions About the Free Audit</h2>
          </div>
          <FAQ items={faqs} />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-4 bg-zinc-900 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="section-label text-brand-gold mb-2">Free — No Obligation</p>
          <h2 className="font-heading text-2xl lg:text-3xl font-extrabold text-white mb-4">
            Ready to Know What People See When They Google You?
          </h2>
          <p className="text-zinc-400 mb-8 text-xs leading-relaxed">
            Get your free, comprehensive reputation audit delivered within 48 hours. No credit card. No obligation. Just clarity.
          </p>
          <Link href="#get-audit" className="btn-gold text-sm px-10">Get My Free Audit</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
