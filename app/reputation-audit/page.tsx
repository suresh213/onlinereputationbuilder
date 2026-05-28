"use client";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Link from "next/link";

const auditItems = [
  { icon: "🔍", title: "Google Search Analysis", desc: "We analyze the first 5 pages of Google results for your brand name, identifying all negative, neutral, and positive content that potential customers see." },
  { icon: "⭐", title: "Review Platform Audit", desc: "Comprehensive analysis of your reviews across Google, Glassdoor, Trustpilot, Facebook, Yelp, and 50+ other platforms — rating distribution, sentiment, and response rates." },
  { icon: "📱", title: "Social Media Audit", desc: "Evaluation of your social media presence, mentions, comments, and brand perception across Facebook, Twitter, Instagram, LinkedIn, and YouTube." },
  { icon: "📰", title: "News & Media Coverage", desc: "We scan thousands of news outlets and media sites for any coverage of your brand — positive press, negative articles, or any damaging stories." },
  { icon: "📊", title: "Competitor Benchmark", desc: "See how your online reputation compares to your key competitors and identify opportunities to gain a competitive edge." },
  { icon: "🗺️", title: "Action Roadmap", desc: "A prioritized, step-by-step roadmap of exactly what needs to be fixed, in what order, and what success metrics to track." },
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

export default function ReputationAuditPage() {
  return (
    <div>
      <Topbar />
      <Navbar />

      {/* PAGE HERO */}
      <section className="page-hero relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4"/>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="hero-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5">
              📊 Free ORM Audit Report — No Obligation
            </div>
            <h1 className="font-heading text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
              Online Reputation Audit to Protect Your Brand Image
            </h1>
            <p className="text-white/70 text-base mb-5 leading-relaxed">
              At Build Brand Better, we do not just conduct surface-level reputation audits. We examine search results, brand mentions, customer reviews, social media sentiment, and negative content to find gaps that influence your trust, conversions, and brand authority.
            </p>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              We monitor the presence of your brand in Google, review websites, news outlets, and social media channels with tested reputation management audit tools and provide a comprehensive roadmap to fix what's broken.
            </p>
            <div className="bg-white/10 border border-white/20 rounded-xl p-5 mb-8">
              <p className="text-brand-gold font-bold text-sm mb-3">✦ What our audit identifies:</p>
              <div className="grid grid-cols-1 gap-2">
                {["Areas of reputation weakness", "Trust signals you're missing", "Negative content impacting conversions", "Competitor reputation comparison", "Priority action roadmap"].map(i => (
                  <div key={i} className="flex items-center gap-2 text-sm text-white/80">
                    <span className="text-brand-gold">→</span>{i}
                  </div>
                ))}
              </div>
            </div>
            <Link href="#get-audit" className="btn-gold">Get Free Audit Report</Link>
          </div>
          <div id="get-audit" className="bg-white rounded-xl shadow-2xl p-7">
            <p className="section-label mb-2">Free ORM Audit</p>
            <h3 className="font-heading text-xl font-bold text-brand-dark mb-1">Get Your Free Reputation Report</h3>
            <p className="text-gray-500 text-xs mb-5">Comprehensive audit delivered within 48 hours</p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* MEDIA LOGOS */}
      <div className="bg-white py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <img src="https://buildbrandbetter.io/wp-content/uploads/2023/01/media-logo.png" alt="Featured in media" className="max-w-3xl mx-auto w-full h-auto object-contain opacity-70"/>
        </div>
      </div>

      {/* WHAT WE AUDIT */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-2">What We Examine</p>
            <h2 className="font-heading text-3xl font-bold text-brand-dark">
              A 360° View of Your Online Reputation
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm mt-3">
              Our audit goes beyond surface-level checks. We dig deep into every corner of the web where your reputation lives.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {auditItems.map((item) => (
              <div key={item.title} className="service-card group">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg text-brand-dark mb-3 group-hover:text-brand-blue transition-colors">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 px-4 bg-brand-light">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-2">Simple Process</p>
            <h2 className="font-heading text-3xl font-bold text-brand-dark">How the Free Audit Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((s) => (
              <div key={s.n} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex gap-4 items-start">
                <div className="step-number font-heading flex-shrink-0">{s.n}</div>
                <div>
                  <h3 className="font-bold text-brand-dark mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAMPLE REPORT PREVIEW */}
      <section className="py-16 px-4 bg-brand-blue">
        <div className="max-w-5xl mx-auto text-center">
          <p className="section-label text-yellow-400/80 mb-2">Sample Report</p>
          <h2 className="font-heading text-3xl font-bold text-white mb-4">What You'll Receive in Your Audit</h2>
          <p className="text-white/60 max-w-2xl mx-auto text-sm mb-10">A comprehensive, easy-to-understand report covering every aspect of your online reputation.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "📈", title: "Reputation Score", desc: "An overall reputation health score from 0-100 based on 50+ signals, with breakdown by category." },
              { icon: "🔴", title: "Risk Assessment", desc: "Prioritized list of reputation risks with severity ratings and immediate action recommendations." },
              { icon: "📋", title: "Action Roadmap", desc: "Step-by-step improvement plan with timelines, expected outcomes, and success metrics." },
            ].map(c => (
              <div key={c.title} className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 text-left">
                <div className="text-3xl mb-3">{c.icon}</div>
                <h3 className="font-bold text-white mb-2">{c.title}</h3>
                <p className="text-white/60 text-sm">{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link href="#get-audit" className="btn-gold">Get Your Free Report Now</Link>
          </div>
        </div>
      </section>

      {/* WHO NEEDS AUDIT */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-label mb-2">Who It's For</p>
            <h2 className="font-heading text-3xl font-bold text-brand-dark">Who Needs a Reputation Audit?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: "🏢", title: "Businesses", desc: "Companies facing negative reviews, bad press, or declining customer trust" },
              { icon: "👤", title: "Individuals", desc: "Professionals, executives, and public figures concerned about their online image" },
              { icon: "🚀", title: "Startups", desc: "New businesses wanting to establish a strong foundation before scaling" },
              { icon: "⚠️", title: "Crisis Situations", desc: "Organizations dealing with active PR crises needing immediate assessment" },
            ].map(c => (
              <div key={c.title} className="service-card text-center">
                <div className="text-4xl mb-3">{c.icon}</div>
                <h3 className="font-bold text-brand-dark mb-2">{c.title}</h3>
                <p className="text-sm text-gray-600">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-brand-light">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-label mb-2">FAQs</p>
            <h2 className="font-heading text-3xl font-bold text-brand-dark">Questions About the Free Audit</h2>
          </div>
          <FAQ items={faqs} />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 px-4 bg-brand-dark">
        <div className="max-w-3xl mx-auto text-center">
          <p className="section-label text-yellow-400/80 mb-2">Free — No Obligation</p>
          <h2 className="font-heading text-3xl font-bold text-white mb-4">
            Ready to Know What People See When They Google You?
          </h2>
          <p className="text-white/60 mb-8 leading-relaxed">
            Get your free, comprehensive reputation audit delivered within 48 hours. No credit card. No obligation. Just clarity.
          </p>
          <Link href="#get-audit" className="btn-gold text-base px-10">Get My Free Audit</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
