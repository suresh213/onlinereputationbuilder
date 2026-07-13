"use client";
import { useState, useEffect, useRef, ReactNode } from "react";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Link from "next/link";

/* ─── Data ──────────────────────────────────────────────────────────────── */

const stats = [
  { number: "12+", label: "Years Experience" },
  { number: "98%", label: "Clients Satisfied" },
  { number: "5000+", label: "Pieces Deleted" },
  { number: "1200+", label: "Projects Worldwide" },
];

const impacts = [
  { label: "Negative posts deter potential customers viewing your page", icon: "👥" },
  { label: "Bad Facebook reviews lower your local search rankings", icon: "📉" },
  { label: "Harmful posts erode trust with existing customers", icon: "💔" },
  { label: "Fake reviews give competitors an unfair advantage", icon: "⚔️" },
];

const importanceReasons = [
  {
    step: "01",
    title: "Protect Your Business Reputation",
    desc: "Facebook is often the first place potential customers look before making purchasing decisions. Negative posts, fake reviews, or defamatory content on your Facebook page can directly cause loss of business and long-term credibility damage.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    ),
  },
  {
    step: "02",
    title: "Prevent Revenue & Customer Losses",
    desc: "Negative Facebook content directly impacts your bottom line. Studies show that a single bad post or a cluster of fake negative reviews can deter significant numbers of potential customers, resulting in measurable revenue losses.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
  },
  {
    step: "03",
    title: "Address Defamation & Legal Rights",
    desc: "Deliberately false Facebook posts about your business can constitute defamation under Indian and international law. Taking swift action to remove defamatory content protects your legal rights and deters further harmful posting.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/>
      </svg>
    ),
  },
  {
    step: "04",
    title: "Rebuild Audience Confidence",
    desc: "Effective Facebook reputation management goes beyond removing negative content - it involves building a positive presence that restores confidence. We help you regain control of your Facebook narrative and maintain it long-term.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
      </svg>
    ),
  },
];

const expertProcess = [
  { title: "Facebook Audit & Assessment", desc: "We conduct a comprehensive audit of your Facebook presence - pages, groups, reviews, posts, and comments - to identify all harmful content and prioritise action based on impact and urgency." },
  { title: "Meta Platform Reporting", desc: "Our team files detailed reports with Meta's content review teams, citing specific community standards violations and building strong documentation for each removal case." },
  { title: "Negative Review Management", desc: "We challenge fake, misleading, or guideline-violating reviews through Meta's formal dispute process, with documentation and contextual evidence to support each case." },
  { title: "Legal Escalation", desc: "For defamatory posts or persistent harassment, our legal partners issue formal cease-and-desist letters, file defamation claims, and pursue court-ordered content removal where necessary." },
  { title: "Reputation Rebuilding", desc: "Beyond removal, we help build a positive Facebook presence with strategic content and reputation-enhancement campaigns to restore audience trust and long-term brand credibility." },
];

const faqs = [
  { q: "What types of Facebook content can you remove?", a: "We handle removal of defamatory posts, fake reviews, harassment, impersonation pages, misinformation, hate speech, and any content violating Meta's community standards. We also assist with suppression of damaging content that is technically policy-compliant." },
  { q: "Can you remove negative Facebook reviews?", a: "Yes - we challenge fake, misleading, or guideline-violating reviews through Meta's formal dispute process. For genuine negative reviews that cannot be removed, we implement response strategies and reputation-building campaigns to mitigate their impact." },
  { q: "How long does Facebook content removal take?", a: "Standard policy-violation removals take 5–14 business days depending on the type of content. Legal escalation cases may take 3–6 weeks. We implement suppression and reputation-building strategies in parallel throughout the process." },
  { q: "Can you remove posts from Facebook groups or pages you don't control?", a: "Yes - this is one of the most common cases we handle. We build documented removal requests citing Meta's policies and submit formal reports on your behalf. For content Meta refuses to remove, we pursue legal escalation and deploy suppression strategies." },
  { q: "Does Facebook reputation management improve my Google search results?", a: "Yes - Facebook pages and posts often rank in Google search results for brand names. Removing negative content and building positive Facebook presence directly improves how your brand appears in search. We track search rankings as part of our reporting." },
];

const testimonials = [
  { name: "Sunita R.", role: "Restaurant Owner", text: "Fake negative reviews were destroying my restaurant's reputation on Facebook. The team had them removed quickly and helped me build a much stronger online presence. Excellent work.", initials: "SR" },
  { name: "Deepak M.", role: "Business Owner", text: "A disgruntled ex-employee was posting defamatory content on my company's Facebook page. The team handled the removal professionally and swiftly. My brand is fully restored.", initials: "DM" },
  { name: "Kavya T.", role: "Personal Brand", text: "Someone created a fake Facebook page impersonating me and posting harmful content. These experts had the page taken down within days. I can't thank them enough.", initials: "KT" },
];

/* ─── Animation Components ─────────────────────────────────────────────── */

function RevealOnScroll({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(entry.target); } }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className={`transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!inView) return;
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4);
      setCount(ease * end);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, end, duration]);
  return <span ref={ref}>{count.toFixed(0)}{suffix}</span>;
}

/* ─── Page ──────────────────────────────────────────────────────────────── */

export default function FacebookReputationPage() {
  return (
    <div className="font-body text-zinc-800 bg-white min-h-screen flex flex-col premium-home">
      <Topbar />
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
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
                Facebook Reputation Management · Kolkata
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.08] mb-6 tracking-tight">
                Remove Negative <span className="text-gradient-gold">Facebook Posts</span> - Expert Reputation Management in Kolkata
              </h1>

              <p className="text-white/70 text-base lg:text-lg mb-8 leading-relaxed max-w-2xl">
                Protect your brand on India&apos;s most widely used social platform. Our Facebook reputation management experts in Kolkata remove harmful posts, fake reviews, and defamatory content to restore your online credibility.
              </p>

              <ul className="space-y-3 mb-10 max-w-xl">
                {[
                  "Remove negative posts, fake reviews, and defamatory Facebook content",
                  "Expert knowledge of Meta's content policies and removal processes",
                  "Legal support for defamation claims and persistent harassment",
                  "Ongoing monitoring to prevent harmful content from resurfacing",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-zinc-300 font-medium">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-gold/20 text-brand-gold text-xs flex-shrink-0 mt-0.5 shadow-inner">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link href="#contact" className="btn-gold shadow-lg shadow-brand-gold/20 px-8 py-3.5">Get A Free Consultation</Link>
                <a href="tel:+918882788412" className="btn-outline px-8 py-3.5 border-zinc-600 text-zinc-300 hover:text-white hover:border-white transition-colors">Call: +9188827 88412</a>
              </div>

              <div className="glass-panel border-l-4 border-l-[#1877f2] bg-white/5 rounded-r-xl p-4 md:p-5 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#1877f2]/10 to-transparent pointer-events-none" />
                <div className="relative z-10 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#1877f2]/20 border border-[#1877f2]/30 flex items-center justify-center flex-shrink-0 shadow-inner text-lg">👥</div>
                  <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                    With <span className="text-white font-bold">3+ billion monthly users</span>, Facebook is where your reputation is most visible - and most vulnerable.
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          <div className="relative lg:mt-6 h-full w-full min-h-[500px]">
            <RevealOnScroll delay={200} className="h-full">
              <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border border-zinc-700/50">
                <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80" alt="Facebook Reputation Management" className="w-full h-full object-cover opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
              </div>
              <div className="relative glass-panel bg-zinc-950/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-10 shadow-2xl m-4 mt-12 sm:m-8 lg:m-6 h-[calc(100%-3rem)]">
                <div className="flex items-center justify-between mb-6 border-b border-zinc-800/80 pb-5 relative z-10">
                  <div>
                    <p className="section-label text-brand-gold mb-1">Free Consultation</p>
                    <h2 className="font-heading text-xl font-bold text-white leading-tight">We&apos;re Here to Help</h2>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-[#1877f2]/10 border border-[#1877f2]/20 flex items-center justify-center flex-shrink-0 text-xl">👥</div>
                </div>
                <ContactForm dark />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── STATS ──────────────────────────────────────────────────────────── */}
      <div className="bg-[#0a1120] border-b border-zinc-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-50 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-zinc-800/60">
            {stats.map((s, i) => {
              const num = parseInt(s.number.replace(/\D/g, ""));
              const suffix = s.number.replace(/\d/g, "");
              return (
                <RevealOnScroll key={s.label} delay={i * 100}>
                  <div className="flex flex-col items-center justify-center gap-2 py-10 px-6 group hover:bg-white/5 transition-colors duration-300">
                    <p className="font-heading text-3xl lg:text-4xl font-black text-white tracking-tight group-hover:text-brand-gold transition-colors duration-300">
                      <AnimatedCounter end={num} suffix={suffix} duration={2500} />
                    </p>
                    <p className="text-zinc-400 text-[0.65rem] font-bold uppercase tracking-widest text-center leading-tight">{s.label}</p>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── THE PROBLEM ──────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-white border-b border-zinc-200 premium-section-light relative overflow-hidden z-0">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-zinc-50/60 border-l border-zinc-100 pointer-events-none hidden lg:block" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
            <RevealOnScroll>
              <div className="premium-copy-panel pr-0 lg:pr-8">
                <p className="section-label mb-2 text-brand-gold">The Problem</p>
                <h2 className="font-heading text-3xl lg:text-[2.5rem] font-bold text-zinc-900 mb-6 leading-tight">
                  Why Negative Facebook Posts Are <span className="heading-script text-brand-blue">So Harmful</span>
                </h2>
                <p className="text-zinc-600 leading-relaxed mb-5 text-[0.95rem]">
                  Facebook is often the first place people research a business before making a purchase decision. Negative posts, fake reviews, and defamatory content on your page are visible to millions - and they influence buyer behaviour directly.
                </p>
                <p className="text-zinc-500 leading-relaxed mb-8 text-[0.95rem]">
                  Meta&apos;s content policies are complex and navigating removal requests without expertise typically results in rejections. Without professional assistance, harmful Facebook content can remain visible for months or years, compounding reputation damage.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {impacts.map((item) => (
                    <div key={item.label} className="group flex items-start gap-4 p-5 rounded-2xl bg-white border border-red-100 shadow-sm hover:border-red-300 hover:shadow-md transition-all duration-300">
                      <span className="text-2xl flex-shrink-0 filter grayscale group-hover:grayscale-0 transition-all">{item.icon}</span>
                      <p className="text-sm text-zinc-800 font-medium leading-snug">{item.label}</p>
                    </div>
                  ))}
                </div>
                <Link href="#contact" className="btn-gold shadow-lg shadow-brand-gold/20 px-8 py-3.5">Get A Free Consultation</Link>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <div className="relative w-full max-w-lg mx-auto lg:ml-auto">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-blue/10 rounded-full blur-[80px] -z-10" />
                <div className="premium-image-frame rounded-3xl overflow-hidden shadow-2xl border border-zinc-200/50 relative z-10">
                  {/* <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80" alt="Facebook Reputation Impact" className="w-full h-auto object-cover aspect-[4/5] hover:scale-105 transition-transform duration-700" /> */}
                  <img src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?auto=format&fit=crop&w=800&q=80" alt="Facebook Reputation Impact" className="w-full h-auto object-cover aspect-[4/5] hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="absolute -bottom-6 -right-6 z-20 glass-panel-light p-4 rounded-2xl border border-white shadow-xl hidden md:flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-100/80 border border-green-200 flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-zinc-900 mb-0.5">Post Removed</p>
                    <p className="text-[0.65rem] text-zinc-500 font-bold uppercase tracking-widest">Reputation restored</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── IMPORTANCE ─────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-muted relative overflow-hidden z-0">
        <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <RevealOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 rounded-full bg-white border border-zinc-200 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
                <p className="section-label text-[0.65rem] font-bold tracking-wider uppercase text-zinc-600 m-0">Why Remove</p>
              </div>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 leading-tight">
                Importance of <span className="heading-script text-brand-blue">Facebook Reputation Management</span>
              </h2>
              <p className="text-zinc-500 text-[0.95rem] mt-5 max-w-xl mx-auto leading-relaxed">
                Protecting your Facebook reputation is essential for maintaining customer trust, search visibility, and sustainable business growth in today&apos;s social-first world.
              </p>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {importanceReasons.map((r, i) => (
              <RevealOnScroll key={r.step} delay={i * 100}>
                <div className="card-premium-hover group bg-white border border-zinc-200 rounded-3xl p-8 flex flex-col h-full shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue to-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <div className="flex items-start justify-between mb-8 relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-zinc-50 border border-zinc-100 shadow-sm flex items-center justify-center text-zinc-600 group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue group-hover:shadow-lg transition-all duration-300">{r.icon}</div>
                    <span className="text-[0.75rem] font-black text-zinc-200 group-hover:text-zinc-300 transition-colors font-mono tracking-widest text-3xl">{r.step}</span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-zinc-900 mb-3 group-hover:text-brand-blue transition-colors relative z-10">{r.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed flex-1 relative z-10">{r.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERT PROCESS ─────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-white border-b border-zinc-200 premium-section-light overflow-hidden z-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <RevealOnScroll>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-gold/10 rounded-full blur-[80px] -z-10" />
              <div className="premium-image-frame rounded-3xl overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.2)] border border-zinc-200">
                <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80" alt="Facebook Reputation Management Process" className="w-full h-auto object-cover aspect-square" />
              </div>
            </RevealOnScroll>
          </div>
          <div className="premium-copy-panel order-1 lg:order-2 pl-0 lg:pl-8">
            <RevealOnScroll>
              <p className="section-label mb-2">Our Approach</p>
              <h2 className="font-heading text-3xl lg:text-[2.5rem] font-bold text-zinc-900 mb-6 leading-tight">
                How We Handle <span className="heading-script text-brand-blue">Facebook Content Removal</span>
              </h2>
              <p className="text-zinc-500 leading-relaxed mb-10 text-[0.95rem]">
                Our specialists follow a proven, comprehensive approach to remove or suppress harmful Facebook content and rebuild your online reputation effectively.
              </p>
            </RevealOnScroll>
            <div className="space-y-6 relative mb-8">
              <div className="absolute left-[1.35rem] top-4 bottom-4 w-px bg-zinc-200 z-0 hidden sm:block" />
              {expertProcess.map((p, i) => (
                <RevealOnScroll key={p.title} delay={i * 100}>
                  <div className="group flex flex-col sm:flex-row items-start gap-5 p-6 rounded-2xl border border-zinc-100 bg-white hover:border-brand-blue/30 hover:shadow-[0_10px_30px_-10px_rgba(37,99,235,0.15)] transition-all duration-300 relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-center flex-shrink-0 text-zinc-400 group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-all duration-300 shadow-sm font-heading font-black text-sm">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="pt-1 flex-1">
                      <h4 className="font-bold text-zinc-900 text-[0.95rem] mb-1.5 group-hover:text-brand-blue transition-colors">{p.title}</h4>
                      <p className="text-sm text-zinc-500 leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ───────────────────────────────────────────────────── */}
      <section className="py-24 px-4 bg-zinc-950 relative overflow-hidden border-b border-zinc-900 premium-section-dark">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
        <div className="ambient-glow-blue top-0 left-1/4 opacity-30" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="section-label mb-2 justify-center text-brand-gold">Client Testimonials</p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white tracking-tight">What Our <span className="heading-script text-brand-gold">Clients Say</span></h2>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((t, i) => (
              <RevealOnScroll key={t.name} delay={i * 100}>
                <div className="glass-panel border border-zinc-800/80 rounded-3xl p-8 hover:border-brand-blue/40 hover:bg-white/5 transition-all duration-400 card-premium-hover flex flex-col h-full">
                  <div className="flex text-brand-gold text-sm mb-5 gap-1 tracking-widest drop-shadow-sm">{"★★★★★".split("").map((s, idx) => <span key={idx}>{s}</span>)}</div>
                  <p className="text-zinc-300 text-[0.9rem] leading-relaxed mb-8 italic flex-1">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-4 border-t border-zinc-800/80 pt-5 mt-auto">
                    <div className="w-10 h-10 rounded-full bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-center flex-shrink-0 shadow-inner">
                      <span className="text-brand-blue text-xs font-bold tracking-wider">{t.initials}</span>
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm leading-none mb-1">{t.name}</p>
                      <p className="text-zinc-500 text-[0.65rem] uppercase tracking-widest font-semibold">{t.role}</p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────────── */}
<section className="py-20 lg:py-28 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-muted relative overflow-hidden">
  <div className="max-w-7xl mx-auto relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start">

      <RevealOnScroll>
        <div className="sticky top-24">
          <p className="section-label mb-2">Common Questions</p>

          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 mb-6 leading-tight">
            Facebook Removal{" "}
            <span className="heading-script text-brand-blue">
              FAQs
            </span>
          </h2>

          <p className="text-zinc-500 text-[0.95rem] leading-relaxed mb-8">
            Have a specific Facebook case? Our experts offer a free assessment and present a clear removal plan.
          </p>

          <a
            href="tel:+918882788412"
            className="btn-gold shadow-lg shadow-brand-gold/20 inline-flex items-center gap-2 px-8 py-3.5"
          >
            <svg width="16" height="16"
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
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

      {/* ── CONTACT CTA ────────────────────────────────────────────────────── */}
      <section id="contact" className="py-24 lg:py-32 px-4 bg-zinc-950 relative overflow-hidden premium-section-dark border-t-4 border-brand-blue">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
        <div className="absolute top-10 left-1/3 w-96 h-96 bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-brand-gold/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent" />
        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <RevealOnScroll>
            <div className="premium-copy-panel-dark">
              <p className="section-label text-brand-gold mb-3">Act Immediately</p>
              <h2 className="font-heading text-3xl lg:text-[2.75rem] font-bold text-white mb-6 leading-tight tracking-tight">
                Don&apos;t Let Negative Facebook Posts <span className="heading-script text-blue-400">Harm Your Business</span>
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-10 text-[0.95rem] max-w-lg">
                Schedule a free consultation. Every day harmful Facebook content remains visible, it influences potential customers against your brand. Our experts will assess your situation and act fast.
              </p>
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
                      {item.href ? (
                        <a href={item.href} className="text-white font-heading font-bold text-lg hover:text-brand-gold transition-colors">{item.value}</a>
                      ) : (
                        <p className="text-white font-heading font-bold text-lg">{item.value}</p>
                      )}
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
                <p className="text-white font-heading font-bold text-xl mb-2">Send Us a Secure Message</p>
                <p className="text-zinc-500 text-sm mb-6">We respond within 24 hours on business days.</p>
                <ContactForm dark />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <FAQSection items={[
        { question: "How to remove a defamatory post from a public Facebook group?", answer: "We first contact group admins with evidence of defamation. If they refuse, we escalate the matter to Meta Support citing harassment and community standards violations to force the post's removal." },
        { question: "Can I delete a fake 1-star review on my Facebook Business Page?", answer: "Yes. We formally report the fake review through Facebook's Business Manager, providing proof of coordinated spam or competitor sabotage to have the fraudulent rating scrubbed." }
      ]} />
      <Footer />
    </div>
  );
}