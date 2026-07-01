"use client";
import { useState, useEffect, useRef, ReactNode } from "react";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Link from "next/link";

/* ─── Data ─────────────────────────────────────────────────────────────────── */

const heroBullets = [
  "Remove negative & fake Glassdoor reviews professionally",
  "Respond to reviews to rebuild employer credibility",
  "Attract top talent with a stronger employer brand",
  "Monitor & manage your Glassdoor presence 24/7",
];

const stats = [
  { number: "12+", label: "Years of reputation expertise" },
  { number: "98%", label: "Clients Satisfied" },
  { number: "3000+", label: "Glassdoor Reviews Managed" },
  { number: "600+", label: "Projects Delivered Worldwide" },
];

const impacts = [
  {
    title: "Top Talent Avoids You",
    desc: "Over 75% of job seekers research a company on Glassdoor before accepting an offer. Negative reviews - real or fabricated - cause high-quality candidates to self-select out before ever applying.",
    icon: "👥",
  },
  {
    title: "Employer Brand Damage",
    desc: "A poor Glassdoor rating follows your company everywhere. It affects client perceptions, investor confidence, and your ability to partner with organisations that vet employers before engaging.",
    icon: "🏢",
  },
  {
    title: "Retention & Morale Problems",
    desc: "Current employees read Glassdoor too. Persistent unaddressed negative reviews signal to your existing team that leadership doesn't care, accelerating attrition and internal discontent.",
    icon: "📉",
  },
];

const services = [
  {
    step: "01",
    title: "Review Audit & Strategy",
    desc: "We conduct a thorough audit of your Glassdoor profile, identify reviews that violate Glassdoor's community guidelines, and build a bespoke removal and response strategy.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>
    ),
  },
  {
    step: "02",
    title: "Negative Review Removal",
    desc: "Policy-violating reviews - including fake, defamatory, or guideline-breaching content - are flagged and removed through Glassdoor's official enforcement channels.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
    ),
  },
  {
    step: "03",
    title: "Professional Review Response",
    desc: "We craft thoughtful, professional responses to negative reviews on your behalf - demonstrating transparency and a commitment to improvement to candidates and stakeholders reading your profile.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
    ),
  },
  {
    step: "04",
    title: "Positive Review Generation",
    desc: "We implement ethical strategies to encourage satisfied employees and alumni to share genuine positive experiences, steadily improving your overall Glassdoor rating.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>
    ),
  },
];

const reviewTypes = [
  {
    title: "Fake & Malicious Reviews",
    desc: "Reviews from fake accounts or disgruntled ex-employees with false claims are identified and removed using Glassdoor's community guidelines enforcement process.",
  },
  {
    title: "Defamatory Content",
    desc: "Reviews containing false statements that damage your company's reputation are addressed through formal legal and platform-level removal routes.",
  },
  {
    title: "Competitor-Placed Reviews",
    desc: "We identify patterns indicating competitor or third-party attack campaigns and submit evidence-based removal requests to Glassdoor's trust and safety team.",
  },
  {
    title: "Outdated & Irrelevant Reviews",
    desc: "Old reviews that no longer reflect your company culture or practices are addressed through response strategy and suppressed via positive content generation.",
  },
];

const whyUs = [
  {
    title: "Glassdoor Platform Experts",
    desc: "We understand Glassdoor's policies and enforcement mechanisms in depth - knowing exactly which arguments succeed and how to present them for maximum removal success.",
    icon: (
      <svg width="20" height="20" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
    ),
  },
  {
    title: "Employer Brand Specialists",
    desc: "We don't just remove reviews - we help rebuild your employer brand with a comprehensive strategy that attracts the talent you need.",
    icon: (
      <svg width="20" height="20" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
    ),
  },
  {
    title: "Transparent Reporting",
    desc: "You receive clear, regular updates on every action taken - review statuses, response drafts, and rating progress - so you always know where you stand.",
    icon: (
      <svg width="20" height="20" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
    ),
  },
  {
    title: "Strict Confidentiality",
    desc: "All client information and case details are handled with complete discretion. Your employees and candidates will never know we were involved.",
    icon: (
      <svg width="20" height="20" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
    ),
  },
];

const faqs = [
  {
    q: "Can Glassdoor reviews really be removed?",
    a: "Yes. Reviews that violate Glassdoor's community guidelines - including fake accounts, defamatory content, and spam - can be removed through the platform's enforcement process. We identify the violation and present the strongest possible case.",
  },
  {
    q: "How long does Glassdoor review removal take?",
    a: "Removal requests are typically processed within 14–30 days. Cases with clear policy violations are often resolved faster. We keep you updated throughout the process.",
  },
  {
    q: "Can you help even if reviews seem genuine but are damaging?",
    a: "Yes. For reviews that appear genuine but are harmful, we focus on professional response strategy and positive review generation to improve your overall profile and offset their impact.",
  },
  {
    q: "Do you offer ongoing Glassdoor management?",
    a: "Yes. We offer monthly Glassdoor management packages covering monitoring, response management, and proactive employer branding to keep your profile in excellent health year-round.",
  },
  {
    q: "Will this affect my ability to recruit?",
    a: "Positively - yes. A well-managed Glassdoor profile with a strong rating directly improves your ability to attract quality candidates and reduce time-to-hire.",
  },
];

const testimonials = [
  {
    name: "Priya Agarwal",
    text: "We were losing great candidates at the offer stage because of a handful of fake negative Glassdoor reviews. The team had them removed and our acceptance rate improved dramatically.",
  },
  {
    name: "Karan Mehta",
    text: "Their professional review response service transformed how our company is perceived. Candidates now mention our Glassdoor profile positively during interviews.",
  },
  {
    name: "Neha Sharma",
    text: "Expert, discreet, and highly effective. They managed our entire Glassdoor reputation crisis and delivered results that exceeded every expectation. Highly recommended.",
  },
];

const publishers = [
  "INDIAN EXPRESS", "BusinessLine", "Bloomberg", "MONEY", "FINANCIAL", "Games", "Military.com", "MarketWatch", "CNN", "Outlook", "People", "CRAIN'S", "siliconindia", "St.Louis"
];

/* ─── Animation Components ───────────────────────────────────────────────── */

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

export default function GlassdoorReviewManagementPage() {
  return (
    <div className="font-body text-zinc-800 bg-white min-h-screen flex flex-col premium-home">
      <Topbar />
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="hero-bg relative overflow-hidden bg-zinc-950 premium-section-dark border-b border-zinc-800/50">
        <div className="hero-ambient hero-ambient-blue opacity-40 top-[-10%] right-[-5%]" />
        <div className="hero-ambient hero-ambient-gold opacity-20 bottom-[-10%] left-[-10%]" />
        <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none opacity-50" />
        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center relative z-10">
          <div className="hero-copy mt-4">
            <RevealOnScroll>
              <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[0.67rem] font-bold mb-6 uppercase tracking-[0.15em] border-brand-gold/30 bg-brand-gold/10 text-brand-gold shadow-[0_0_15px_rgba(194,148,10,0.15)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold" />
                </span>
                Glassdoor Review Management
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.08] mb-6 tracking-tight">
                Glassdoor Review Management - Remove Negative Reviews &amp; <span className="text-gradient-gold">Attract Top Talent</span>
              </h1>
              <p className="text-white/70 text-base lg:text-lg mb-8 leading-relaxed max-w-2xl">
                Elevate your employer brand with expert Glassdoor reputation management. We remove fake and damaging reviews, craft professional responses, and help you build the credibility that attracts the best candidates.
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
                <Link href="#contact" className="btn-gold shadow-lg shadow-brand-gold/20 px-8 py-3.5">Get a Free Quote</Link>
                <a href="tel:+918882788412" className="btn-outline border-zinc-700 text-zinc-300 hover:text-white hover:border-white px-8 py-3.5">Request a Call</a>
              </div>
            </RevealOnScroll>
          </div>

          <RevealOnScroll delay={200}>
            <div className="sticky top-24">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-blue/10 rounded-full blur-[80px] -z-10" />
              <div className="premium-image-frame rounded-3xl overflow-hidden shadow-2xl border border-zinc-800/80 relative z-10 bg-zinc-900/90 backdrop-blur-sm p-8">
                <div className="text-center mb-8">
                  <p className="section-label text-brand-gold mb-2 justify-center">Protect Your Employer Brand</p>
                  <h3 className="font-heading text-2xl font-bold text-white leading-tight">Expert Glassdoor management trusted by employers worldwide</h3>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {stats.map((s) => (
                    <div key={s.label} className="text-center p-4 rounded-2xl bg-white/5 border border-white/10">
                      <p className="font-heading text-2xl font-black text-brand-gold mb-1">{s.number}</p>
                      <p className="text-zinc-400 text-[0.7rem] uppercase tracking-wider font-semibold leading-tight">{s.label}</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  <Link href="#contact" className="btn-gold w-full text-center block shadow-lg shadow-brand-gold/20 py-4">Manage My Glassdoor Profile</Link>
                  <a href="tel:+918882788412" className="btn-outline w-full text-center block border-zinc-700 text-zinc-300 hover:text-white hover:border-white py-4">Call: +91 99716 87251</a>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── WHY IT MATTERS ───────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-white border-b border-zinc-200 premium-section-light overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <RevealOnScroll>
            <div>
              <p className="section-label mb-2">Why It Matters</p>
              <h2 className="font-heading text-3xl lg:text-[2.5rem] font-bold text-zinc-900 mb-6 leading-tight">
                How Negative Glassdoor Reviews <span className="heading-script text-brand-blue">Hurt Your Company</span>
              </h2>
              <p className="text-zinc-500 leading-relaxed mb-6 text-[0.95rem]">
                Glassdoor is the first place top candidates go to evaluate your company. A poor or unmanaged profile directly costs you the talent that drives your business forward.
              </p>
              <p className="text-zinc-500 leading-relaxed mb-8 text-[0.95rem]">
                With over 12 years of experience and clients across Asia, UAE, Australia, and Europe, we know exactly how to restore and strengthen your employer brand.
              </p>
              <Link href="#contact" className="btn-blue shadow-[0_10px_30px_rgba(37,99,235,0.2)] px-10 py-3.5 inline-block">Get a Free Glassdoor Audit</Link>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={200}>
            <div className="grid grid-cols-1 gap-5">
              {impacts.map((item) => (
                <div key={item.title} className="group flex items-start gap-4 p-5 rounded-2xl bg-white border border-zinc-200 shadow-sm hover:border-brand-blue/30 hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center flex-shrink-0 text-2xl group-hover:bg-brand-blue/10 transition-all duration-300 shadow-sm">{item.icon}</div>
                  <div className="pt-1">
                    <h4 className="font-bold text-zinc-900 text-sm mb-1.5 group-hover:text-brand-blue transition-colors">{item.title}</h4>
                    <p className="text-[0.85rem] text-zinc-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-muted relative overflow-hidden z-0">
        <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <RevealOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 rounded-full bg-white border border-zinc-200 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
                <p className="section-label text-[0.65rem] font-bold tracking-wider uppercase text-zinc-600 m-0">What We Do</p>
              </div>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 leading-tight">
                Our Glassdoor <span className="heading-script text-brand-blue">Reputation Services</span>
              </h2>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <RevealOnScroll key={s.step} delay={i * 100}>
                <div className="card-premium-hover group bg-white border border-zinc-200 rounded-3xl p-8 flex flex-col h-full shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue to-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <div className="flex items-start justify-between mb-8 relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-zinc-50 border border-zinc-100 shadow-sm flex items-center justify-center text-zinc-600 group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue group-hover:shadow-lg transition-all duration-300">{s.icon}</div>
                    <span className="font-heading font-black text-4xl text-zinc-100 group-hover:text-brand-blue/10 transition-colors">{s.step}</span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-zinc-900 mb-3 group-hover:text-brand-blue transition-colors relative z-10 leading-snug">{s.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed flex-1 relative z-10">{s.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEW TYPES ─────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-white border-b border-zinc-200 premium-section-light overflow-hidden z-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 items-center">
          <div className="premium-copy-panel">
            <RevealOnScroll>
              <p className="section-label mb-2">Our Capability</p>
              <h2 className="font-heading text-3xl lg:text-[2.5rem] font-bold text-zinc-900 mb-6 leading-tight">
                Reviews We <span className="heading-script text-brand-gold">Can Address</span>
              </h2>
              <p className="text-zinc-500 leading-relaxed mb-8 text-[0.95rem]">
                From fake competitor attacks to outdated negative feedback, our team deploys the precise strategy needed to address every type of harmful Glassdoor review.
              </p>
              <Link href="#contact" className="btn-blue shadow-[0_10px_30px_rgba(37,99,235,0.2)] px-10 py-3.5">Improve My Glassdoor Rating</Link>
            </RevealOnScroll>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-gold/10 rounded-full blur-[80px] -z-10" />
            {reviewTypes.map((t, i) => (
              <RevealOnScroll key={t.title} delay={i * 100}>
                <div className="group p-6 rounded-2xl border border-zinc-200 bg-white hover:border-brand-gold/40 hover:shadow-[0_10px_30px_-10px_rgba(194,148,10,0.15)] transition-all duration-300 relative z-10 h-full">
                  <div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-center text-brand-gold mb-4 shadow-sm">
                    <svg width="20" height="20" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                  </div>
                  <h4 className="font-bold text-zinc-900 text-[0.95rem] mb-2 group-hover:text-brand-gold transition-colors">{t.title}</h4>
                  <p className="text-sm text-zinc-500 leading-relaxed">{t.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ───────────────────────────────────────────────────── */}
      <section className="py-24 px-4 bg-zinc-950 border-b border-zinc-900 relative overflow-hidden premium-section-dark">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/25 to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="section-label text-brand-gold mb-3 justify-center">Why Us</p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-5 tracking-tight">
                Why We Are <span className="text-gradient-gold">Trusted Glassdoor Reputation Experts</span>
              </h2>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((w, i) => (
              <RevealOnScroll key={w.title} delay={i * 100}>
                <div className="glass-panel border border-zinc-800/80 rounded-3xl p-8 hover:bg-white/5 hover:border-brand-gold/40 transition-all duration-400 card-premium-hover h-full flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-gold mb-6 shadow-inner">{w.icon}</div>
                  <h3 className="font-heading font-bold text-lg text-white mb-3">{w.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{w.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAND ───────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-zinc-900 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {stats.map((s, i) => (
              <RevealOnScroll key={s.label} delay={i * 100}>
                <div className="text-center">
                  <p className="font-heading text-4xl lg:text-5xl font-black text-brand-gold mb-2">{s.number}</p>
                  <p className="text-zinc-400 text-sm uppercase tracking-widest font-semibold">{s.label}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
          <RevealOnScroll delay={300}>
            <div className="border-t border-zinc-800 pt-10">
              <p className="text-center text-[0.65rem] font-bold text-zinc-500 uppercase tracking-widest mb-8">We Are Proudly Featured With</p>
              <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
                {publishers.map((pub) => <span key={pub} className="text-zinc-600 font-heading font-bold text-sm md:text-lg uppercase tracking-wider">{pub}</span>)}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-white border-b border-zinc-200 premium-section-light overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="section-label mb-2 justify-center">Client Feedback</p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 tracking-tight">Trusted by Employers <span className="heading-script text-brand-blue">Across the Globe</span></h2>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((t, i) => (
              <RevealOnScroll key={t.name} delay={i * 100}>
                <div className="premium-info-card bg-zinc-50 border border-zinc-200 rounded-3xl p-8 flex flex-col h-full hover:border-brand-blue/40 transition-all duration-400">
                  <div className="flex text-brand-gold text-sm mb-5 gap-1 tracking-widest">{"★★★★★".split("").map((s, idx) => <span key={idx}>{s}</span>)}</div>
                  <p className="text-zinc-600 text-[0.95rem] leading-relaxed mb-8 italic flex-1">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-4 border-t border-zinc-200 pt-5 mt-auto">
                    <div className="w-10 h-10 rounded-full bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-brand-blue text-xs font-bold">{t.name.substring(0, 2)}</span>
                    </div>
                    <div>
                      <p className="font-bold text-zinc-900 text-sm leading-none mb-1">{t.name}</p>
                      <p className="text-zinc-500 text-[0.65rem] uppercase tracking-widest font-semibold">Verified Client</p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-muted relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start">
            <RevealOnScroll>
              <div className="sticky top-24">
                <p className="section-label mb-2">Common Questions</p>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 mb-6 leading-tight">Glassdoor Management <span className="heading-script text-brand-blue">FAQs</span></h2>
                <p className="text-zinc-500 text-[0.95rem] leading-relaxed mb-8">Have a specific Glassdoor situation? Get a free confidential consultation and action plan - no obligation.</p>
                <a href="tel:+918882788412" className="btn-gold shadow-lg shadow-brand-gold/20 inline-flex items-center gap-2 px-8 py-3.5">
                  <svg width="16" height="16" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
                  Call Us Now
                </a>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <div className="bg-white rounded-3xl shadow-sm border border-zinc-200/80 p-2 md:p-6">
                <FAQ items={faqs} />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ──────────────────────────────────────────────── */}
      <section id="contact" className="py-24 lg:py-32 px-4 bg-zinc-950 relative overflow-hidden premium-section-dark border-t-4 border-brand-blue">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
        <div className="absolute top-10 left-1/3 w-96 h-96 bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-brand-gold/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent" />
        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <RevealOnScroll>
            <div className="premium-copy-panel-dark">
              <p className="section-label text-brand-gold mb-3">Act Now</p>
              <h2 className="font-heading text-3xl lg:text-[2.75rem] font-bold text-white mb-6 leading-tight tracking-tight">
                Don&apos;t Let Bad Glassdoor Reviews <span className="heading-script text-blue-400">Cost You Top Talent</span>
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-10 text-[0.95rem] max-w-lg">Schedule a free Glassdoor audit. Our employer branding experts will assess your profile and present a clear improvement plan - with no obligation.</p>
              <div className="space-y-6 mb-10 border-t border-zinc-800/80 pt-8">
                {[
                  { label: "Direct Hotline (24/7)", value: "+9188827 88412", href: "tel:+918882788412", icon: "📞" },
                  { label: "Secure Email", value: "contact@onlinereputationbuilder.in", href: "mailto:contact@onlinereputationbuilder.in", icon: "✉️" },
                  { label: "Headquarters", value: "Shantipally, Behala, Kolkata - 700060", href: null, icon: "🏢" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-lg shadow-inner shrink-0 text-brand-gold">{item.icon}</div>
                    <div>
                      <p className="text-[0.65rem] text-zinc-500 uppercase tracking-widest font-bold mb-1">{item.label}</p>
                      {item.href ? <a href={item.href} className="text-white font-heading font-bold text-lg hover:text-brand-gold transition-colors">{item.value}</a> : <p className="text-white font-heading font-bold text-lg">{item.value}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={200}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-brand-blue/10 to-brand-gold/10 rounded-3xl blur-2xl pointer-events-none opacity-50" />
              <div className="relative glass-panel bg-zinc-950/90 backdrop-blur-md border border-zinc-800 rounded-3xl p-8 lg:p-10 shadow-2xl">
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-brand-blue/50 via-brand-gold/50 to-transparent" />
                <p className="text-white font-heading font-bold text-xl mb-2">Send Us a Message</p>
                <p className="text-zinc-500 text-sm mb-6">We respond within 24 hours on business days.</p>
                <ContactForm dark />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <Footer />
    </div>
  );
}