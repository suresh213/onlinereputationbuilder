"use client";
import { useState, useEffect, useRef, ReactNode } from "react";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";

/* ─── Spiritual Data ─────────────────────────────────────────────────────── */

const heroBullets = [
  "Protect ashrams, trusts, and spiritual organizations from unverified rumors",
  "Suppress sensationalist YouTube videos, defamatory blogs, and social smears",
  "Guard Wikipedia articles and Google Knowledge Panels from malicious edits",
  "Trusted by more than 250+ spiritual institutions, charitable trusts, and foundations",
];

const faqs = [
  {
    q: "Why is reputation management essential for spiritual leaders and ashrams?",
    a: "Spiritual institutions and religious trusts rely entirely on devotee faith, charitable goodwill, and moral integrity. Unverified online rumors, clickbait videos, or malicious smear campaigns can disrupt community welfare work and erode generational trust.",
  },
  {
    q: "Can you remove defamatory or sensationalist YouTube videos and blogs?",
    a: "Yes. When content violates platform policies, infringes upon copyright, uses fabricated audio or video, or constitutes civil defamation under applicable laws, our legal team submits formal platform disputes and legal takedowns.",
  },
  {
    q: "How do you protect spiritual organizations against Wikipedia vandalism?",
    a: "We actively monitor Wikipedia articles associated with spiritual leaders and foundations, ensuring all entries adhere strictly to Neutral Point of View policies and removing unsourced, sensationalist edits.",
  },
  {
    q: "What platforms do you monitor for spiritual and charitable trusts?",
    a: "We continuously track Google Search results, YouTube video recommendations, Wikipedia biographies, Facebook community groups, Quora threads, Reddit discussions, and regional news archives.",
  },
  {
    q: "How do you handle false allegations regarding trust donations and finances?",
    a: "We build and optimize high-authority transparency portals, verified annual impact reports, and official press releases that displace unverified financial claims on search engines.",
  },
  {
    q: "Can you fix negative Google Autocomplete search predictions for a spiritual leader?",
    a: "Yes. We execute authoritative content publication and positive search engagement campaigns to algorithmically displace negative, sensationalist search suggestions.",
  },
  {
    q: "Is spiritual reputation management handled with total discretion?",
    a: "Yes. All engagements operate under strict bilateral NDA agreements with complete confidentiality. Our team works with deep reverence for institutional values and spiritual legacy.",
  },
  {
    q: "How does ORM assist spiritual foundations in Kolkata, Varanasi, Rishikesh, and nationwide?",
    a: "From iconic spiritual centers in Bengal and the holy ghats of Varanasi to global yoga centers in Rishikesh, we protect international devotee perception, optimize multi-language search results, and preserve institutional integrity.",
  },
];

const services = [
  {
    label: "Search",
    title: "Defamatory Search Result Suppression",
    desc: "We displace clickbait articles, defamatory blog posts, and sensationalist forum links past Google Page 2, replacing them with authentic teachings and verified humanitarian initiatives.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>
    ),
  },
  {
    label: "YouTube",
    title: "Sensationalist Video Takedowns & De-ranking",
    desc: "We identify clickbait YouTube videos and distorted sermons, filing targeted copyright, harassment, and community guideline strikes to remove or suppress harmful audiovisual content.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
    ),
  },
  {
    label: "Wikipedia",
    title: "Wikipedia Integrity & Citation Protection",
    desc: "We protect biographical articles and trust histories against malicious edits, ensuring text reflects verifiable historical facts and balanced scholarly perspectives.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
    ),
  },
  {
    label: "Knowledge",
    title: "Google Knowledge Panel Verification",
    desc: "We establish verified Google Knowledge Panels for spiritual gurus and institutions with official web properties, literary works, and authorized social profiles.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
    ),
  },
  {
    label: "Trust",
    title: "Charitable Impact & Transparency Hubs",
    desc: "We develop high-ranking web properties showcasing verified medical relief, educational charities, and social welfare projects to reinforce donor confidence.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
    ),
  },
  {
    label: "Monitoring",
    title: "24/7 Digital Threat & Sentiment Monitoring",
    desc: "We continuously scan social discussions, regional video uploads, and online forums to identify emerging misinformation campaigns before they gain viral reach.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
    ),
  },
];

const impacts = [
  {
    label: "Faith",
    title: "Preserving Devotee Faith",
    desc: "A clean, authentic search presence protects the faith and goodwill of millions of devotees and international followers.",
    icon: "🕊️",
  },
  {
    label: "Donations",
    title: "Sustained Charitable Contributions",
    desc: "Transparent search results reassure institutional donors, philanthropic partners, and community contributors.",
    icon: "🙏",
  },
  {
    label: "Legacy",
    title: "Enduring Spiritual Legacy",
    desc: "Protecting verified biographies and literary works preserves teachings for future generations without distortion.",
    icon: "📖",
  },
  {
    label: "Protection",
    title: "Immunity to Sensationalism",
    desc: "Deep digital defense structures insulate spiritual trusts against malicious media speculation and online extortion.",
    icon: "🛡️",
  },
];

const processes = [
  {
    label: "Audit",
    title: "Digital Footprint & Narrative Audit",
    desc: "We analyze all search queries, YouTube video titles, Wikipedia edits, and forum discussions associated with the spiritual entity.",
  },
  {
    label: "Strategy",
    title: "Values-Aligned Defense Roadmap",
    desc: "We build a tailored narrative defense strategy that honors the spiritual institution's philosophical principles and charitable mission.",
  },
  {
    label: "Action",
    title: "Platform Takedowns & Content Curation",
    desc: "Our specialists submit formal policy removal petitions for defamatory videos while elevating authentic literary and charitable assets.",
  },
  {
    label: "Shield",
    title: "24/7 Legacy Monitoring & Protection",
    desc: "We maintain constant monitoring across video portals and search results to swiftly neutralize malicious misinformation.",
  },
];

const touchpointLogos = [
  { name: "Google Page 1", img: "https://www.google.com/s2/favicons?domain=google.com&sz=128" },
  { name: "YouTube", img: "https://www.google.com/s2/favicons?domain=youtube.com&sz=128" },
  { name: "Wikipedia", img: "https://www.google.com/s2/favicons?domain=wikipedia.org&sz=128" },
  { name: "Google Knowledge Panel", img: "https://www.google.com/s2/favicons?domain=google.com&sz=128" },
  { name: "Ashram Maps SEO", img: "https://www.google.com/s2/favicons?domain=maps.google.com&sz=128" },
  { name: "Facebook Community", img: "https://www.google.com/s2/favicons?domain=facebook.com&sz=128" },
  { name: "Quora Spiritual", img: "https://www.google.com/s2/favicons?domain=quora.com&sz=128" },
  { name: "News Archives", img: "https://www.google.com/s2/favicons?domain=thehindu.com&sz=128" },
];

/* ─── Animation Components ───────────────────────────────────────── */

function RevealOnScroll({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function AnimatedCounter({ end, duration = 2000, suffix = "", decimals = 0 }: { end: number; duration?: number; suffix?: string; decimals?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    let startTime: number | null = null;
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4);
      setCount(ease * end);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [inView, end, duration]);

  return <span ref={ref}>{count.toFixed(decimals)}{suffix}</span>;
}

/* ─── Page ──────────────────────────────────────────────────────── */

export default function SpiritualIndustryPage() {
  return (
    <div className="font-body text-zinc-800 bg-white min-h-screen flex flex-col premium-home">
      <Topbar />
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="hero-bg relative overflow-hidden bg-zinc-950 premium-section-dark border-b border-zinc-800/50">
        <div className="hero-ambient hero-ambient-blue opacity-50 top-[-10%] right-[-5%]" />
        <div className="hero-ambient hero-ambient-gold opacity-30 bottom-[-10%] left-[-10%]" />
        <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none opacity-50" />

        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center relative z-10">
          <div className="hero-copy mt-4">
            <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[0.67rem] font-bold mb-6 uppercase tracking-[0.15em] border-brand-gold/30 bg-brand-gold/10 text-brand-gold shadow-[0_0_15px_rgba(194,148,10,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold" />
              </span>
              Spiritual ORM: Ashrams, Trusts &amp; Leaders
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.6rem] font-black text-white leading-[1.08] mb-6 tracking-tight">
              Spiritual Reputation Management for{" "}
              <span className="text-gradient-gold">Devotee Trust</span>
            </h1>

            <p className="text-white/70 text-base lg:text-lg mb-4 leading-relaxed max-w-2xl">
              In spiritual and humanitarian service, institutional sanctity is your most sacred trust. Online Reputation Builder protects ashrams, charitable trusts, and spiritual leaders from unverified rumors, sensational YouTube videos, and defamatory search results.
            </p>
            <p className="text-zinc-400 text-sm mb-8 leading-relaxed max-w-2xl">
              We help spiritual organizations preserve Wikipedia biographies, eliminate misleading search autocomplete suggestions, and safeguard institutional legacy with 100% strict bilateral NDA confidentiality.
            </p>

            <ul className="space-y-3 mb-10 max-w-xl">
              {heroBullets.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-zinc-300 font-medium">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-gold/20 text-brand-gold text-xs flex-shrink-0 mt-0.5 shadow-inner">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4 items-center">
              <Link href="#contact" className="btn-gold shadow-lg shadow-brand-gold/20 px-8 py-3.5">
                Protect Institutional Legacy
              </Link>
              <Link href="/orm-agency-kolkata" className="text-xs text-zinc-400 hover:text-brand-gold transition-colors underline underline-offset-4">
                Kolkata Strategic Headquarters
              </Link>
            </div>
          </div>

          {/* Right: Glassmorphic Contact Form */}
          <div className="relative lg:mt-6">
            <div className="absolute -inset-4 bg-gradient-to-tr from-brand-blue/20 to-brand-gold/10 rounded-3xl blur-2xl pointer-events-none opacity-50" />
            <div className="relative glass-panel bg-zinc-950/80 backdrop-blur-md border border-zinc-700/50 rounded-3xl p-8 lg:p-10 shadow-2xl">
              <div className="form-card-orbit opacity-50" />
              <div className="flex items-center justify-between mb-6 border-b border-zinc-800/80 pb-5 relative z-10">
                <div>
                  <p className="section-label text-brand-gold mb-1">Confidential Consultation</p>
                  <h2 className="font-heading text-xl font-bold text-white leading-tight">
                    Upgrade Institutional Trust
                  </h2>
                </div>
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center flex-shrink-0 shadow-inner">
                  <svg width="20" height="20" className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              <ContactForm dark />
            </div>
          </div>
        </div>
      </section>

      {/* ── REPUTATION TOUCHPOINTS ─────────────────────────────────────── */}
      <div className="logo-marquee-shell bg-white py-10 border-b border-zinc-200 overflow-hidden relative shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] z-20">
        <p className="text-center text-[0.65rem] font-bold text-zinc-400 uppercase tracking-widest mb-6">Spiritual Portals and Search Surfaces We Manage</p>
        <div className="max-w-7xl mx-auto px-4 overflow-hidden">
          <div className="marquee-track flex items-center gap-12 md:gap-16 whitespace-nowrap w-max">
            {[...touchpointLogos, ...touchpointLogos].map((m, i) => (
              <div key={i} className="flex items-center gap-3 group">
                <img 
                  src={m.img} 
                  alt={m.name} 
                  className="h-6 w-auto object-contain rounded-sm filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300"
                />
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider group-hover:text-zinc-800 transition-colors">{m.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── RELATED SECTOR HUBS ─────────────────────────────────────── */}
      <div className="bg-zinc-100 py-3 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center gap-4 text-xs text-zinc-600">
          <span className="font-semibold text-zinc-800">Related Social &amp; Spiritual Sectors:</span>
          <Link href="/industry/public-speakers" className="hover:text-brand-blue hover:underline">Spiritual Leaders &amp; Speakers</Link>
          <span>•</span>
          <Link href="/industry/non-profits" className="hover:text-brand-blue hover:underline">NGOs &amp; Charitable Trusts</Link>
          <span>•</span>
          <Link href="/industry/gyms-fitness-centers" className="hover:text-brand-blue hover:underline">Yoga &amp; Wellness Centers</Link>
          <span>•</span>
          <Link href="/industry/authors" className="hover:text-brand-blue hover:underline">Spiritual Authors</Link>
          <span>•</span>
          <Link href="/orm-agency-kolkata" className="hover:text-brand-gold font-medium">Kolkata Regional Desk</Link>
        </div>
      </div>

      {/* ── OVERVIEW & FLOATING STATS ─────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-muted overflow-hidden z-0">
        <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-16 items-center">
            
            <RevealOnScroll>
              <div className="premium-copy-panel pr-0 lg:pr-8">
                <p className="section-label mb-2 text-brand-gold">Overview</p>
                <h2 className="font-heading text-3xl lg:text-[2.5rem] font-bold text-zinc-900 mb-6 leading-tight">
                  The Role of Reputation Management in <span className="heading-script text-brand-blue">Preserving Sacred Trust</span>
                </h2>
                <p className="text-zinc-600 leading-relaxed mb-8 text-[0.95rem]">
                  When spiritual institutions are subjected to online defamation or sensationalist speculation, genuine charitable work suffers. Spiritual ORM ensures prospective devotees discover verified philanthropic milestones, authentic discourses, and transparent governance, while eliminating malicious clickbait under strict platform guidelines.
                </p>
                <Link href="#contact" className="btn-blue shadow-[0_10px_30px_rgba(37,99,235,0.2)] px-8 py-3.5">
                  Protect Your Foundation
                </Link>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <div className="relative w-full max-w-lg mx-auto lg:ml-auto">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-blue/10 rounded-full blur-[80px] -z-10"></div>
                <div className="premium-image-frame rounded-3xl overflow-hidden shadow-2xl border border-zinc-200/50 relative z-10">
                  <img
                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80"
                    alt="spiritual reputation management services for ashrams and religious trusts"
                    className="w-full h-auto object-cover aspect-[4/5] hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[90%] z-20 glass-panel-light p-3 rounded-2xl border border-white shadow-xl hidden md:block">
                  <div className="grid grid-cols-3 gap-2 divide-x divide-zinc-200/60">
                    <div className="text-center px-2">
                      <p className="font-heading text-xl font-black text-brand-blue mb-0.5">
                        <AnimatedCounter end={250} suffix="+" duration={2500} />
                      </p>
                      <p className="text-[0.55rem] text-zinc-500 font-bold uppercase tracking-widest">Spiritual Trusts</p>
                    </div>
                    <div className="text-center px-2">
                      <p className="font-heading text-xl font-black text-brand-gold mb-0.5">
                        <AnimatedCounter end={100} suffix="%" duration={2500} />
                      </p>
                      <p className="text-[0.55rem] text-zinc-500 font-bold uppercase tracking-widest">NDA Discretion</p>
                    </div>
                    <div className="text-center px-2">
                      <p className="font-heading text-xl font-black text-zinc-800 mb-0.5">
                        <AnimatedCounter end={24} suffix="/7" duration={2500} />
                      </p>
                      <p className="text-[0.55rem] text-zinc-500 font-bold uppercase tracking-widest">Crisis Watch</p>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ─────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-white border-b border-zinc-200 premium-section-light relative overflow-hidden z-0">
        <div className="max-w-7xl mx-auto relative z-10">
          <RevealOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 rounded-full bg-zinc-50 border border-zinc-200 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse"></span>
                <p className="section-label text-[0.65rem] font-bold tracking-wider uppercase text-zinc-600 m-0">Our Spiritual Protection Services</p>
              </div>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 tracking-tight leading-tight">
                Comprehensive Spiritual Reputation <span className="heading-script text-brand-gold">Management Services</span>
              </h2>
              <p className="text-zinc-500 text-[0.95rem] mt-5 max-w-xl mx-auto leading-relaxed">
                We provide respectful, values-driven reputation management designed to protect spiritual heritage and devotee goodwill.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((s, i) => (
              <RevealOnScroll key={s.title} delay={i * 100}>
                <div className="card-premium-hover group bg-white border border-zinc-200 rounded-3xl p-8 flex flex-col h-full shadow-sm relative overflow-hidden">
                  <div className={`absolute top-0 left-0 w-full h-1 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ${i % 2 === 0 ? 'bg-brand-blue' : 'bg-brand-gold'}`}></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                  <div className="flex items-start justify-between mb-8 relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-zinc-50 border border-zinc-100 shadow-sm flex items-center justify-center text-zinc-600 group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue group-hover:shadow-lg transition-all duration-300">
                      {s.icon}
                    </div>
                    <span className="text-[0.6rem] font-bold text-zinc-500 bg-zinc-100 px-2 py-1 rounded-md uppercase tracking-widest group-hover:bg-brand-blue/10 group-hover:text-brand-blue transition-colors">
                      {s.label}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-zinc-900 mb-3 group-hover:text-brand-blue transition-colors relative z-10">{s.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed flex-1 relative z-10">{s.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMPACT SECTION ────────────────────────────────────── */}
      <section className="py-24 px-4 bg-zinc-950 border-b border-zinc-900 relative overflow-hidden premium-section-dark">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/25 to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="section-label text-brand-gold mb-3 justify-center">
                Institutional Impact
              </p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-5 tracking-tight">
                How Spiritual Reputation Management Safeguards <span className="text-gradient-gold">Sacred Legacy</span>
              </h2>
              <p className="text-zinc-400 text-[0.95rem] max-w-2xl mx-auto leading-relaxed">
                A verified spiritual profile dispels false controversy, reinforces community trust, and ensures uninterrupted humanitarian service.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {impacts.map((imp, i) => (
              <RevealOnScroll key={imp.title} delay={i * 100}>
                <div className="glass-panel border border-zinc-800/80 rounded-3xl p-8 hover:bg-white/5 hover:border-brand-gold/40 transition-all duration-400 card-premium-hover h-full flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl mb-6 shadow-inner">
                    {imp.icon}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white mb-3">{imp.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{imp.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS TIMELINE ───────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-muted overflow-hidden z-0">
        <div className="max-w-4xl mx-auto relative z-10">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="section-label mb-2 text-brand-blue">Implementation</p>
              <h2 className="font-heading text-3xl lg:text-[2.5rem] font-bold text-zinc-900 mb-5 leading-tight">
                Streamlined Spiritual Reputation Management with <span className="heading-script text-brand-blue">Online Reputation Builder</span>
              </h2>
              <p className="text-zinc-500 text-[0.95rem] leading-relaxed max-w-2xl mx-auto">
                We protect spiritual institutions with legal takedowns, positive search displacement, and 24/7 video and forum monitoring.
              </p>
            </div>
          </RevealOnScroll>

          <div className="space-y-6 relative">
            <div className="absolute left-[1.35rem] top-4 bottom-4 w-px bg-zinc-200 z-0 hidden sm:block"></div>
            
            {processes.map((step, i) => (
              <RevealOnScroll key={step.title} delay={i * 100}>
                <div className="group flex flex-col sm:flex-row items-start gap-5 p-6 rounded-2xl border border-zinc-200 bg-white hover:border-brand-blue/30 hover:shadow-[0_10px_30px_-10px_rgba(37,99,235,0.15)] transition-all duration-300 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-center flex-shrink-0 text-zinc-500 group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-all duration-300 shadow-sm font-heading font-black text-xs uppercase tracking-widest">
                    0{i + 1}
                  </div>
                  <div className="pt-1 flex-1">
                    <div className="flex items-center justify-between mb-1.5">
                      <h4 className="font-bold text-zinc-900 text-lg group-hover:text-brand-blue transition-colors">{step.title}</h4>
                      <span className="text-[0.6rem] font-bold text-zinc-400 bg-zinc-100 px-2 py-0.5 rounded-sm uppercase tracking-widest">{step.label}</span>
                    </div>
                    <p className="text-sm text-zinc-500 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-white border-b border-zinc-200 premium-section-light relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start">
            <RevealOnScroll>
              <div className="sticky top-24">
                <p className="section-label mb-2">Knowledge Base</p>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 mb-6 leading-tight">
                  Spiritual Reputation Management <span className="heading-script text-brand-blue">FAQs</span>
                </h2>
                <p className="text-zinc-500 text-[0.95rem] leading-relaxed mb-8">
                  Have a specific question about our spiritual ORM services? Our senior directors offer a free,
                  strictly confidential consultation under bilateral NDA.
                </p>
                <a href="tel:+918882788412" className="btn-gold shadow-lg shadow-brand-gold/20 inline-flex items-center gap-2 px-8 py-3.5">
                  <svg width="16" height="16" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
                  Call Institutional Advisory Desk
                </a>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll delay={200}>
              <div className="bg-zinc-50 rounded-3xl shadow-sm border border-zinc-200/80 p-2 md:p-6">
                <FAQ items={faqs} />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ──────────────────────────────────────── */}
      <section id="contact" className="py-24 lg:py-32 px-4 bg-zinc-950 relative overflow-hidden premium-section-dark border-t-4 border-brand-gold">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
        <div className="absolute top-10 left-1/3 w-96 h-96 bg-brand-gold/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-brand-blue/15 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <RevealOnScroll>
            <div className="premium-copy-panel-dark">
              <p className="section-label text-brand-gold mb-3">Strictly Confidential Consultation</p>
              <h2 className="font-heading text-3xl lg:text-[2.75rem] font-bold text-white mb-6 leading-tight tracking-tight">
                Ready to Preserve Your Foundation and <span className="heading-script text-brand-gold">Sacred Legacy?</span>
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-10 text-[0.95rem] max-w-lg">
                Schedule a confidential consultation today. Our senior reputation directors will assess your online presence, identify malicious content, and formulate a values-aligned protection strategy under full bilateral NDA.
              </p>
              
              <div className="space-y-6 mb-10 border-t border-zinc-800/80 pt-8">
                {[
                  { label: "Emergency Hotline (24/7)", value: "+9188827 88412", href: "tel:+918882788412", icon: "📞" },
                  { label: "Confidential Email", value: "contact@onlinereputationbuilders.in", href: "mailto:contact@onlinereputationbuilders.in", icon: "✉️" },
                  { label: "Kolkata Registered Headquarters", value: "32 Chowringhee Rd, Om Tower, Park Street, Kolkata - 700071", href: "/orm-agency-kolkata", icon: "🏢" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-lg shadow-inner shrink-0 text-brand-gold">
                      {item.icon}
                    </div>
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
              <div className="absolute -inset-4 bg-gradient-to-tr from-brand-gold/10 to-brand-blue/10 rounded-3xl blur-2xl pointer-events-none opacity-50" />
              <div className="relative glass-panel bg-zinc-950/90 backdrop-blur-md border border-zinc-800 rounded-3xl p-8 lg:p-10 shadow-2xl">
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-brand-gold/50 via-brand-blue/50 to-transparent" />
                <p className="text-white font-heading font-bold text-xl mb-2">Request Confidential Trust Audit</p>
                <p className="text-zinc-500 text-sm mb-6">100% confidential. Senior Director response within 2 hours.</p>
                <ContactForm dark />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <FAQSection items={[
        { question: "How to dispute sensationalist YouTube videos defaming a spiritual leader?", answer: "We enforce YouTube platform guidelines regarding harassment, hate speech, and copyright infringement to secure takedowns and algorithmic de-ranking." },
        { question: "Can you eliminate false allegations about charitable trust donations?", answer: "Yes. We deploy verified financial transparency assets, press releases, and legal escalation to displace unverified claims from Google Page 1." },
        { question: "How do you protect Wikipedia biographies for religious organizations?", answer: "We review citation standards under Wikipedia guidelines, dispute unverified smears, and petition Wikipedia administrators for edit protection." }
      ]} />
      <Footer />
    </div>
  );
}