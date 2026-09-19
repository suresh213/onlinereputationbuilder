"use client";
import { useState, useEffect, useRef, ReactNode } from "react";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";

/* ─── Data ─────────────────────────────────────────────────────────────────── */

const heroBullets = [
  "Permanently de-index defamatory & unwanted links from Google",
  "Expunge outdated snippets & cached links via Google Search Console",
  "Legal DMCA, Section 79 IT Act & Court Order de-indexing filings",
  "Reverse SEO suppression to push stubborn URLs past Page 2",
];

const stats = [
  { number: "9+", label: "Years of de-indexing expertise" },
  { number: "98%", label: "Clients Satisfied" },
  { number: "3,500+", label: "Negative Links Removed" },
  { number: "600+", label: "Projects Delivered Worldwide" },
];

const linkTypes = [
  {
    title: "Defamatory Blog Posts & Web Pages",
    desc: "Unsubstantiated claims, smear campaigns, or personal attack blogs ranking on Google for your name or business brand.",
    icon: "📝",
  },
  {
    title: "Outdated News Articles & Press",
    desc: "Historical news reports, resolved allegations, or settled legal disputes that continue to haunt your search results.",
    icon: "📰",
  },
  {
    title: "Consumer Forum Complaints",
    desc: "Persistent threads on Ripoff Report, Complaints Board, and consumer discussion boards causing immediate customer loss.",
    icon: "⚠️",
  },
  {
    title: "Exposed Personal Details (PII/Doxxing)",
    desc: "Unauthorized publication of personal contact details, home addresses, financial documents, or leaked private data.",
    icon: "🔒",
  },
  {
    title: "Outdated Cached Google Snippets",
    desc: "Web pages that have already been edited or deleted by the host, but still show damaging text in Google's search results.",
    icon: "⚡",
  },
  {
    title: "Court Records & FIR Disclosures",
    desc: "Legal judgments or police FIRs where charges were dismissed or quashed, eligible for Right to be Forgotten de-indexing.",
    icon: "⚖️",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Search Audit & URL Identification",
    desc: "We catalog every damaging link, ranking position, hosting domain, and search snippet appearing across Google, Bing, and search engines.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
    ),
  },
  {
    step: "02",
    title: "Google Outdated Content Removal",
    desc: "For pages that have modified text or return 404 errors, we submit expedited cache clearances to purge the link within 24 to 48 hours.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
    ),
  },
  {
    step: "03",
    title: "Legal De-indexing Submissions",
    desc: "We prepare formal legal filings under Section 79 of the IT Act, DMCA copyright frameworks, or Right to be Forgotten to legally compel Google to remove the URL.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
    ),
  },
  {
    step: "04",
    title: "Reverse SEO Link Suppression",
    desc: "When webmasters hide on overseas servers, we deploy a network of high-authority verified assets that bury the link past Page 2 where 95%+ searchers never venture.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
    ),
  },
];

const whyUs = [
  {
    title: "Complete Confidentiality",
    desc: "Every case is safeguarded by strict Non-Disclosure Agreements (NDAs). Your identity is never revealed to the hosting webmaster.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
    ),
  },
  {
    title: "9+ Years of ORM Mastery",
    desc: "We understand Google's legal submission policies, Search Essentials, and algorithmic ranking factors inside-out.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
    ),
  },
  {
    title: "Dual Removal & Suppression",
    desc: "We don't just rely on one avenue. If legal de-indexing faces delays, our Reverse SEO engine immediately activates to push the link down.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
    ),
  },
  {
    title: "Rapid 24-Hr Case Review",
    desc: "Within 24 hours of submitting your damaging URLs, our senior case managers provide a clear, actionable roadmap and timeline.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
    ),
  },
];

const faqs = [
  {
    q: "Can you legally remove negative links from Google Search permanently?",
    a: "Yes. When a negative link contains defamatory statements, exposed personal information (PII/doxxing), copyright infringement, or breaches statutory guidelines like Section 79 of the Indian IT Act, we file formal legal removal submissions directly with Google Legal to permanently de-index the URL from search results.",
  },
  {
    q: "What is the difference between link de-indexing and link removal at source?",
    a: "Link removal at source occurs when the hosting webmaster completely deletes the web page, making it return a 404 error. De-indexing occurs when Google removes the link from search results entirely - making it impossible for anyone to find when searching your name or business on Google.",
  },
  {
    q: "How long does negative link removal take?",
    a: "Google Outdated Content removals for cached or modified links take 24 to 48 hours. Formal legal de-indexing through Google Legal takes 10 to 21 business days. In scenarios requiring algorithmic Reverse SEO link suppression, pushing the link off Page 1 takes between 45 to 90 days.",
  },
  {
    q: "What if the website hosting the negative link is anonymous or located overseas?",
    a: "You do not need the webmaster's consent. We target the search engine level directly via Google Legal Webforms to de-index the link from Google worldwide or regionally, and execute Reverse SEO suppression to bury the URL past Page 2 where 95%+ of searchers never look.",
  },
  {
    q: "Can court records, arrest disclosures, or outdated police FIRs be removed from Google?",
    a: "Yes. Indian High Courts and global privacy jurisdictions recognize the Right to be Forgotten for acquittals, quashed proceedings, and settled disputes. We submit validated certified court orders to Google to expunge the search snippets permanently.",
  },
];

const testimonials = [
  { name: "Rohit K.", text: "An outdated defamatory article was ranking #2 on Google for our firm. Online Reputation Builder had it completely de-indexed within 18 days." },
  { name: "Pooja S.", text: "A competitor posted false allegations on an anonymous forum. The team suppressed the negative link to Page 3 in under 6 weeks. Exceptional service." },
  { name: "Vikram D.", text: "Outstanding professionalism. They handled our sensitive legal de-indexing with absolute confidentiality under an NDA." },
];

/* ─── Animation Component ───────────────────────────────────────────────── */

function RevealOnScroll({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(entry.target); } },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className={`transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/* ─── Page ──────────────────────────────────────────────────────────────── */

export default function NegativeLinkRemovalPage() {
  return (
    <div className="font-body text-zinc-800 bg-white min-h-screen flex flex-col premium-home">
      <Topbar />
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="hero-bg relative overflow-hidden bg-zinc-950 premium-section-dark border-b border-zinc-800/50">
        <div className="hero-ambient hero-ambient-blue opacity-50" />
        <div className="hero-ambient hero-ambient-gold opacity-30 right-0 top-20" />
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-50 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center relative z-10">
          <div className="hero-copy">
            <RevealOnScroll>
              <div className="mb-4 text-xs font-semibold text-zinc-400">
                <Link href="/business/remove-negative-results" className="hover:text-brand-gold transition-colors inline-flex items-center gap-1.5 underline underline-offset-2">
                  ← Back to Master Negative Content Removal Hub
                </Link>
              </div>

              <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[0.7rem] font-bold mb-6 uppercase tracking-widest bg-brand-blue/10 border-brand-blue/30 text-brand-blue shadow-[0_0_15px_rgba(37,99,235,0.15)]">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse"></span>
                🛡️ Negative Link Removal Specialists
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.3rem] font-black text-white leading-[1.08] mb-6 tracking-tight">
                Negative Link Removal <span className="text-gradient-gold">from Google Search</span>
              </h1>

              <p className="text-white/70 text-base lg:text-lg mb-8 leading-relaxed max-w-2xl">
                Damaging URLs, defamatory web pages, outdated press, and malicious forum threads destroy opportunities before you even speak. We permanently de-index, expunge, and suppress negative links from Google Search results.
              </p>

              <ul className="space-y-3 mb-10">
                {heroBullets.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-white/80 text-sm">
                    <span className="w-5 h-5 rounded-full bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center flex-shrink-0">
                      <svg width="12" height="12" className="w-3 h-3 text-brand-gold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    </span>
                    {b}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="btn-gold shadow-lg shadow-brand-gold/20 px-8 py-3.5">
                  De-index My Links Now
                </a>
                <a href="tel:+918882788412" className="btn-outline border-zinc-700 text-zinc-300 hover:text-white hover:border-white px-8 py-3.5">
                  Call: +91 88827 88412
                </a>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Card */}
          <RevealOnScroll delay={200}>
            <div className="sticky top-24">
              <div className="premium-image-frame rounded-3xl overflow-hidden shadow-2xl border border-zinc-800/80 bg-zinc-900/95 backdrop-blur-sm p-8">
                <div className="text-center mb-8">
                  <p className="section-label text-brand-gold mb-2 justify-center">Confidential Case Review</p>
                  <h3 className="font-heading text-2xl font-bold text-white leading-tight">Remove Damaging Links Permanently</h3>
                  <p className="text-xs text-zinc-400 mt-2">Protected by 100% Strict Non-Disclosure Agreement (NDA)</p>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {stats.map((s) => (
                    <div key={s.label} className="text-center p-4 rounded-2xl bg-white/5 border border-white/10">
                      <p className="font-heading text-2xl font-black text-brand-gold">{s.number}</p>
                      <p className="text-xs text-zinc-400 mt-1">{s.label}</p>
                    </div>
                  ))}
                </div>
                <div className="border-t border-zinc-800 pt-6">
                  <p className="text-xs text-zinc-300 mb-3 font-semibold text-center">We Handle De-indexing Across:</p>
                  <div className="flex flex-wrap justify-center gap-2 text-[11px] text-zinc-400">
                    <span className="bg-white/5 px-2.5 py-1 rounded border border-white/10">Google Search</span>
                    <span className="bg-white/5 px-2.5 py-1 rounded border border-white/10">Bing & Copilot</span>
                    <span className="bg-white/5 px-2.5 py-1 rounded border border-white/10">News Portals</span>
                    <span className="bg-white/5 px-2.5 py-1 rounded border border-white/10">Forums</span>
                    <span className="bg-white/5 px-2.5 py-1 rounded border border-white/10">Court Records</span>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── TYPES OF LINKS WE REMOVE ─────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="section-label mb-2 justify-center">Scope of Coverage</p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 tracking-tight">
                Types of Negative Links We <span className="heading-script text-brand-blue">De-index & Remove</span>
              </h2>
              <p className="text-zinc-500 max-w-2xl mx-auto mt-4 text-sm sm:text-base">
                Whether the link appears on an uncooperative blog, an outdated news site, or an anonymous complaint forum, we have proven technical and legal solutions.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {linkTypes.map((item, idx) => (
              <RevealOnScroll key={item.title} delay={idx * 80}>
                <div className="p-7 rounded-3xl border border-zinc-200 hover:border-brand-blue/40 bg-zinc-50 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md h-full flex flex-col">
                  <span className="text-3xl mb-4">{item.icon}</span>
                  <h3 className="font-heading font-bold text-lg text-zinc-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">{item.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-zinc-950 border-b border-zinc-800 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="section-label text-brand-gold mb-2 justify-center">Our Methodology</p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white tracking-tight">
                How Our Negative Link Removal <span className="text-gradient-gold">Protocol Works</span>
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <RevealOnScroll key={step.step} delay={idx * 100}>
                <div className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/80 hover:bg-zinc-900 hover:border-brand-gold/40 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-heading font-black text-3xl text-brand-gold/40">{step.step}</span>
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-gold">{step.icon}</div>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white mb-3">{step.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{step.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="section-label mb-2 justify-center">Why Choose Us</p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 tracking-tight">
                Trusted Negative Link Removal <span className="heading-script text-brand-blue">Agency in India</span>
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((w, idx) => (
              <RevealOnScroll key={w.title} delay={idx * 100}>
                <div className="p-8 rounded-3xl border border-zinc-200 bg-zinc-50 hover:bg-white hover:border-brand-blue/40 transition-all duration-300 h-full flex flex-col text-center items-center">
                  <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-5">{w.icon}</div>
                  <h3 className="font-heading font-bold text-lg text-zinc-900 mb-2">{w.title}</h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">{w.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll>
            <div className="text-center mb-12">
              <p className="section-label mb-2 justify-center">Client Feedback</p>
              <h2 className="font-heading text-3xl font-bold text-zinc-900">Proven Results from Verified Clients</h2>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <RevealOnScroll key={t.name} delay={idx * 100}>
                <div className="bg-white border border-zinc-200 rounded-2xl p-7 flex flex-col h-full shadow-sm">
                  <div className="text-brand-gold text-sm mb-4">★★★★★</div>
                  <p className="text-zinc-600 text-sm leading-relaxed mb-6 italic flex-1">&ldquo;{t.text}&rdquo;</p>
                  <p className="font-bold text-zinc-900 text-sm">{t.name}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-white border-b border-zinc-200">
        <div className="max-w-4xl mx-auto">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="section-label mb-2 justify-center">Got Questions?</p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900">
                Frequently Asked <span className="heading-script text-brand-blue">Questions</span>
              </h2>
            </div>
          </RevealOnScroll>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <RevealOnScroll key={faq.q} delay={idx * 60}>
                <div className="border border-zinc-200 rounded-2xl p-6 bg-zinc-50">
                  <h3 className="font-heading font-bold text-base text-zinc-900 mb-2">{faq.q}</h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">{faq.a}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ─────────────────────────────────────────────── */}
      <section id="contact" className="py-20 lg:py-28 px-4 bg-zinc-950 text-white relative">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="section-label text-brand-gold mb-2 justify-center">Confidential Case Assessment</p>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-4">
            Submit Your Damaging Links for Rapid Review
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl mx-auto">
            100% confidential. All communications are protected under strict Non-Disclosure Agreements. Receive an assessment within 24 hours.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-zinc-900 border border-zinc-800 p-8 rounded-3xl shadow-2xl">
          <ContactForm dark={true} />
        </div>
      </section>

      <Footer />
    </div>
  );
}
