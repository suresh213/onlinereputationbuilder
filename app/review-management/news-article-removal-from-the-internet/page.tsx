"use client";
import { useState, useEffect, useRef, ReactNode } from "react";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Link from "next/link";

/* ─── Data Extraction & Citations ─────────────────────────────────────────────── */

const heroBullets = [
  "Erase misleading or defamatory news content efficiently",
  "Swift solutions to minimize impact",
  "Push harmful news off p1",
  "Strategies to permanently delete news articles",
];

const stats = [
  { number: "9+", label: "Years improving online reputation" },
  { number: "98%", label: "Clients Satisfied" },
  { number: "500+", label: "Deleted Content" },
  { number: "600+", label: "Projects Delivered Worldwide" },
];

const impacts = [
  {
    title: "Reputation Damage",
    desc: "Negative news articles severely tarnish your brand's image, leading to long-term mistrust among clients and stakeholders. Once a negative story circulates online, it is often shared repeatedly, amplifying its reach.",
    icon: "📉",
  },
  {
    title: "Financial Losses",
    desc: "Harmful news stories can deter potential clients and partners, directly affecting revenue and growth opportunities. Persistent negative news can cause investors to withdraw support, impacting your financial stability.",
    icon: "💸",
  },
  {
    title: "Reduced Search Visibility",
    desc: "Negative news articles often dominate search results.",
    icon: "🔍",
  },
];

const pushDownStrategies = [
  {
    step: "01",
    title: "Publish Positive Content",
    desc: "Constantly post blogs, articles, and press releases to dominate search results with accurate and positive information. This helps to overshadow negative content naturally.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
    ),
  },
  {
    step: "02",
    title: "Optimize Existing Content",
    desc: "Improve the visibility of your positive online assets by utilizing strong SEO practices, ensuring they rank higher than negative news articles.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
    ),
  },
  {
    step: "03",
    title: "Engage with Professional Services",
    desc: "Rely on experienced teams to handle suppressing news strategies, using ethical methods to reduce harmful content easily.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
    ),
  },
  {
    step: "04",
    title: "Leverage Social Media",
    desc: "Actively share updates and achievements on social media platforms to build a stronger presence and push down negative content in search rankings.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
    ),
  },
];

const typesOfNews = [
  {
    title: "Defamatory Articles",
    desc: "Content designed to mislead or tarnish your reputation, handled with precision and expertise, ensuring swift removal.",
  },
  {
    title: "Outdated Stories",
    desc: "Old news articles no longer relevant to your brand's identity can be effectively removed to prevent confusion.",
  },
  {
    title: "Unauthorized Content",
    desc: "Articles published without consent or containing unverified information can be targeted for removal under specific guidelines.",
  },
  {
    title: "Fake News",
    desc: "Harmful, fabricated content designed to spread misinformation is identified and permanently deleted from platforms.",
  },
];

const whyUs = [
  {
    title: "Proven Expertise",
    desc: "Our team has extensive experience in content removal services, ensuring reliable and efficient solutions for every client.",
    icon: (
      <svg width="20" height="20" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
    ),
  },
  {
    title: "Comprehensive Legal Support",
    desc: "We provide legally sound strategies to remove news content, maintaining compliance with the platform and jurisdictional regulations.",
    icon: (
      <svg width="20" height="20" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/></svg>
    ),
  },
  {
    title: "Confidentiality Assurance",
    desc: "Your privacy is our top priority, with all actions taken discreetly to protect your identity and brand.",
    icon: (
      <svg width="20" height="20" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
    ),
  },
  {
    title: "Tailored Solutions",
    desc: "Every case is unique, and we develop customized approaches to address your specific needs effectively.",
    icon: (
      <svg width="20" height="20" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
    ),
  },
];

const faqs = [
  {
    q: "How long does it take to remove news content?",
    a: "Every case is unique, and we develop customized approaches to address your specific needs effectively.",
  },
  {
    q: "Are all negative news articles removable?",
    a: "We target defamatory articles, outdated stories, unauthorized content, and fake news using legally sound strategies.",
  },
  {
    q: "How secure is the removal process?",
    a: "Your privacy is our top priority, with all actions taken discreetly to protect your identity and brand.",
  },
  {
    q: "What happens if the news platform refuses removal?",
    a: "We engage with professional services to handle suppressing news strategies, using ethical methods to reduce harmful content easily.",
  },
  {
    q: "Does removing news content affect search rankings?",
    a: "Negative news articles often dominate search results. Suppressing them naturally helps overshadow negative content and improve your visibility.",
  },
  {
    q: "Can the removal process damage my credibility?",
    a: "No, effectively managing your online presence is essential to maintaining credibility in today's digital age.",
  },
];

const testimonials = [
  {
    name: "Rohit Sharma",
    text: "I was struggling with unwanted content on internet, but their team handled everything efficiently. Highly recommended!",
    role: "Verified Client",
  },
  {
    name: "Amit Patel",
    text: "Their legal awareness and technical expertise made the whole process seamless. Truly reliable.",
    role: "Verified Client",
  },
  {
    name: "Anjali Verma",
    text: "Their professionalism and quick response really impressed me. They resolved my issue without any hassle.",
    role: "Verified Client",
  },
];

const publishers = [
  { name: "Bloomberg",       style: { fontFamily: "sans-serif", fontWeight: 700, fontSize: 22, letterSpacing: "-0.5px" } },
  { name: "Forbes",          style: { fontFamily: "Georgia, serif", fontWeight: 700, fontSize: 24, fontStyle: "italic" } },
  { name: "Reuters",         style: { fontFamily: "sans-serif", fontWeight: 400, fontSize: 20, letterSpacing: "2px" } },
  { name: "CNN",             style: { fontFamily: "sans-serif", fontWeight: 900, fontSize: 24, letterSpacing: "1px" } },
  { name: "MarketWatch",     style: { fontFamily: "sans-serif", fontWeight: 700, fontSize: 18 } },
  { name: "Indian Express",  style: { fontFamily: "Georgia, serif", fontWeight: 700, fontSize: 18 } },
  { name: "Outlook",         style: { fontFamily: "Georgia, serif", fontWeight: 700, fontSize: 20, fontStyle: "italic" } },
  { name: "People",          style: { fontFamily: "sans-serif", fontWeight: 900, fontSize: 22, letterSpacing: "3px" } },
  { name: "BusinessLine",    style: { fontFamily: "Georgia, serif", fontWeight: 700, fontSize: 18 } },
  { name: "siliconindia",    style: { fontFamily: "sans-serif", fontWeight: 700, fontSize: 18 } },
  { name: "CRAIN'S",         style: { fontFamily: "sans-serif", fontWeight: 900, fontSize: 18, letterSpacing: "2px" } },
  { name: "Military.com",    style: { fontFamily: "sans-serif", fontWeight: 700, fontSize: 18 } },
  { name: "MONEY",           style: { fontFamily: "sans-serif", fontWeight: 900, fontSize: 22, letterSpacing: "3px" } },
  { name: "St.Louis",        style: { fontFamily: "Georgia, serif", fontWeight: 700, fontSize: 18 } },
];

/* ─── Animation Components ───────────────────────────────────────── */

function RevealOnScroll({ children, delay = 0, className = "" }: { children: ReactNode, delay?: number, className?: string }) {
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

function AnimatedCounter({ end, duration = 2000, suffix = "", prefix = "", decimals = 0 }: { end: number, duration?: number, suffix?: string, prefix?: string, decimals?: number }) {
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

  return <span ref={ref}>{prefix}{count.toFixed(decimals)}{suffix}</span>;
}

/* ─── Page ──────────────────────────────────────────────────────── */

export default function NewsArticleRemovalPage() {
  return (
    <div className="font-body text-zinc-800 bg-white min-h-screen flex flex-col premium-home">
      <Topbar />
      <Navbar />

      {/* ── HERO - Split Dark Layout with Online Image Integration ─────────────────────────────── */}
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
                News Article Removal
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.08] mb-6 tracking-tight">
                Take Down News Articles Quickly with <span className="text-gradient-gold">Trusted Experts</span>
              </h1>

              <p className="text-white/70 text-base lg:text-lg mb-8 leading-relaxed max-w-2xl">
                Effectively managing your online presence is essential to maintaining credibility in today's digital age. At Build Brand Better, our news article removal services are tailored to help you remove news articles and regain control of your narrative.
              </p>

              <ul className="space-y-3 mb-10 max-w-xl">
                {heroBullets.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-zinc-300 font-medium">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-gold/20 text-brand-gold text-xs flex-shrink-0 mt-0.5 shadow-inner">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link href="#contact" className="btn-gold shadow-lg shadow-brand-gold/20 px-8 py-3.5">
                  Schedule Your Call
                </Link>
                <a href="tel:+918882788412" className="btn-outline px-8 py-3.5 border-zinc-600 text-zinc-300 hover:text-white hover:border-white transition-colors">
                  Call: +9188827 88412
                </a>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right: Glassmorphic Form over Online Image */}
          <div className="relative lg:mt-6 h-full w-full min-h-[500px]">
            <RevealOnScroll delay={200} className="h-full">
              <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border border-zinc-700/50">
                <img 
                  src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?auto=format&fit=crop&w=1200&q=80" 
                  alt="News Media and PR Management" 
                  className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent"></div>
              </div>

              <div className="relative glass-panel bg-zinc-950/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-10 shadow-2xl m-4 mt-12 sm:m-8 lg:m-6 h-[calc(100%-3rem)]">
                <div className="flex items-center justify-between mb-6 border-b border-zinc-800/80 pb-5 relative z-10">
                  <div>
                    <p className="section-label text-brand-gold mb-1">Free Consultation</p>
                    <h2 className="font-heading text-xl font-bold text-white leading-tight">
                      We're Here to Help
                    </h2>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center flex-shrink-0 shadow-inner">
                    <svg width="24" height="24" className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/></svg>
                  </div>
                </div>
                <ContactForm dark />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── STATS SECTION - Animated Counters ────────────────────────────────────────────── */}
      <div className="bg-[#0a1120] border-b border-zinc-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-50 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-zinc-800/60">
            {stats.map((s, i) => {
              const num = parseInt(s.number.replace(/\D/g, ''));
              const suffix = s.number.replace(/\d/g, '');
              return (
                <RevealOnScroll key={s.label} delay={i * 100}>
                  <div className="flex flex-col items-center justify-center gap-2 py-10 px-6 group hover:bg-white/5 transition-colors duration-300">
                    <p className="font-heading text-3xl lg:text-4xl font-black text-white tracking-tight group-hover:text-brand-gold transition-colors duration-300">
                      <AnimatedCounter end={num} suffix={suffix} duration={2500} />
                    </p>
                    <p className="text-zinc-400 text-[0.65rem] font-bold uppercase tracking-widest text-center leading-tight">
                      {s.label}
                    </p>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── CHALLENGES & IMPACT ─────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-white border-b border-zinc-200 premium-section-light relative overflow-hidden z-0">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-zinc-50/60 border-l border-zinc-100 pointer-events-none hidden lg:block" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 items-start">
            
            <RevealOnScroll>
              <div className="premium-copy-panel pr-0 lg:pr-8">
                <p className="section-label mb-2 text-brand-gold">The Problem</p>
                <h2 className="font-heading text-3xl lg:text-[2.5rem] font-bold text-zinc-900 mb-6 leading-tight">
                  Challenges Occur in <span className="heading-script text-brand-blue">Removing News Articles</span>
                </h2>
                <p className="text-zinc-600 leading-relaxed mb-10 text-[0.95rem]">
                  Removing news articles is a complex process that requires navigating legal and technical barriers. Many platforms have stringent policies, making it difficult to take down news without proper expertise. Additionally, addressing content that continues to resurface demands consistent monitoring and intervention.
                </p>
                
                <h3 className="font-heading text-xl font-bold text-zinc-900 mb-6">Impact of Negative News Stories on Your Business</h3>
                <div className="space-y-4">
                  {impacts.map((item, i) => (
                    <RevealOnScroll key={item.title} delay={i * 100}>
                      <div className="group flex items-start gap-4 p-5 rounded-2xl bg-white border border-zinc-200 shadow-sm hover:border-brand-blue/30 hover:shadow-md transition-all duration-300">
                        <div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center flex-shrink-0 text-2xl group-hover:bg-brand-blue/10 transition-all duration-300 shadow-sm">
                          {item.icon}
                        </div>
                        <div className="pt-1">
                          <h4 className="font-bold text-zinc-900 text-sm mb-1.5 group-hover:text-brand-blue transition-colors">{item.title}</h4>
                          <p className="text-[0.85rem] text-zinc-500 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </RevealOnScroll>
                  ))}
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <div className="sticky top-24">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-blue/10 rounded-full blur-[80px] -z-10"></div>
                <div className="premium-image-frame rounded-3xl overflow-hidden shadow-2xl border border-zinc-200/50 relative z-10 bg-zinc-950 p-8">
                  <div className="text-center mb-8">
                    <p className="section-label text-brand-gold mb-2 justify-center">Take Action to Protect Your Reputation</p>
                    <h3 className="font-heading text-2xl font-bold text-white leading-tight">Get expert assistance today and return your credibility!</h3>
                  </div>
                  
                  <div className="space-y-4">
                     <p className="text-zinc-400 text-sm text-center mb-6">Our experts use proven strategies to identify and remove harmful content from media platforms.</p>
                     <Link href="#contact" className="btn-gold w-full text-center block shadow-lg shadow-brand-gold/20 py-4">Request Content Removal</Link>
                     <a href="tel:+918882788412" className="btn-outline w-full text-center block border-zinc-700 text-zinc-300 hover:text-white hover:border-white py-4">Call: +9188827 88412</a>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

          </div>
        </div>
      </section>

      {/* ── HOW TO PUSH DOWN (Suppression) ────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-muted relative overflow-hidden z-0">
        <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <RevealOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 rounded-full bg-white border border-zinc-200 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse"></span>
                <p className="section-label text-[0.65rem] font-bold tracking-wider uppercase text-zinc-600 m-0">Suppression Strategies</p>
              </div>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 leading-tight">
                How to Push Down Negative <span className="heading-script text-brand-blue">News Articles on Google</span>
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pushDownStrategies.map((s, i) => (
              <RevealOnScroll key={s.step} delay={i * 100}>
                <div className="card-premium-hover group bg-white border border-zinc-200 rounded-3xl p-8 flex flex-col h-full shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue to-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  
                  <div className="flex items-start justify-between mb-8 relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-zinc-50 border border-zinc-100 shadow-sm flex items-center justify-center text-zinc-600 group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue group-hover:shadow-lg transition-all duration-300">
                      {s.icon}
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-zinc-900 mb-3 group-hover:text-brand-blue transition-colors relative z-10 leading-snug">{s.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed flex-1 relative z-10">{s.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── TYPES OF NEWS WE DELETE ─────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-white border-b border-zinc-200 premium-section-light overflow-hidden z-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 items-center">
          
          <div className="premium-copy-panel">
            <RevealOnScroll>
              <p className="section-label mb-2">Our Capability</p>
              <h2 className="font-heading text-3xl lg:text-[2.5rem] font-bold text-zinc-900 mb-6 leading-tight">
                Types of News Stories <span className="heading-script text-brand-gold">We Can Delete</span>
              </h2>
              <p className="text-zinc-500 leading-relaxed mb-8 text-[0.95rem]">
                Our dedicated removal team specializes in identifying policy violations, defamatory content, and outdated narratives to successfully wipe them from search indexes.
              </p>
              <Link href="#contact" className="btn-blue shadow-[0_10px_30px_rgba(37,99,235,0.2)] px-10 py-3.5">
                Remove Your News Today
              </Link>
            </RevealOnScroll>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-gold/10 rounded-full blur-[80px] -z-10"></div>
            {typesOfNews.map((t, i) => (
              <RevealOnScroll key={t.title} delay={i * 100}>
                <div className="group p-6 rounded-2xl border border-zinc-200 bg-white hover:border-brand-gold/40 hover:shadow-[0_10px_30px_-10px_rgba(194,148,10,0.15)] transition-all duration-300 relative z-10 h-full">
                  <div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-center text-brand-gold mb-4 shadow-sm">
                    <svg width="20" height="20" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                  </div>
                  <h4 className="font-bold text-zinc-900 text-[0.95rem] mb-2 group-hover:text-brand-gold transition-colors">{t.title}</h4>
                  <p className="text-sm text-zinc-500 leading-relaxed">{t.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY WE ARE TRUSTED - Premium Dark Layout ────────────────────────────────────── */}
      <section className="py-24 px-4 bg-zinc-950 border-b border-zinc-900 relative overflow-hidden premium-section-dark">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/25 to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="section-label text-brand-gold mb-3 justify-center">
                Why Us
              </p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-5 tracking-tight">
                Why We Are <span className="text-gradient-gold">Trusted Removal Services</span>
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((w, i) => (
              <RevealOnScroll key={w.title} delay={i * 100}>
                <div className="glass-panel border border-zinc-800/80 rounded-3xl p-8 hover:bg-white/5 hover:border-brand-gold/40 transition-all duration-400 card-premium-hover h-full flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-gold mb-6 shadow-inner">
                    {w.icon}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white mb-3">{w.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{w.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          {/* Trusted Brand Marquee (Placeholder based on PDF) */}
<RevealOnScroll delay={300}>
  <div className="mt-20 border-t border-zinc-800 pt-10">
    <p className="text-center text-[0.65rem] font-bold text-zinc-500 uppercase tracking-widest mb-8">
      We Are Proudly Featured With
    </p>

    <div className="group relative overflow-hidden">
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-zinc-950 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-zinc-950 to-transparent" />

      <div
        className="flex items-center w-max"
        style={{ animation: "publisher-marquee 40s linear infinite" }}
      >
        {[...publishers, ...publishers].map((pub, i) => (
          <span
            key={`${pub.name}-${i}`}
            className="flex-shrink-0 mx-10 text-zinc-400 hover:text-white transition-colors duration-300 whitespace-nowrap opacity-50 hover:opacity-100"
            style={pub.style as React.CSSProperties}
          >
            {pub.name}
          </span>
        ))}
      </div>
    </div>
  </div>

  <style>{`
    @keyframes publisher-marquee {
      0%   { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .group:hover .flex.items-center.w-max {
      animation-play-state: paused;
    }
  `}</style>
</RevealOnScroll>
        </div>
      </section>

      {/* ── TESTIMONIALS - Light Mode ─────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-white border-b border-zinc-200 premium-section-light overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="section-label mb-2 justify-center">Client Feedback</p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 tracking-tight">Trusted by Thousands of <span className="heading-script text-brand-blue">Clients Worldwide</span></h2>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((t, i) => (
              <RevealOnScroll key={t.name} delay={i * 100}>
                <div className="premium-info-card bg-zinc-50 border border-zinc-200 rounded-3xl p-8 flex flex-col h-full hover:border-brand-blue/40 transition-all duration-400">
                  <div className="flex text-brand-gold text-sm mb-5 gap-1 tracking-widest drop-shadow-sm">{"★★★★★".split("").map((s, idx) => <span key={idx}>{s}</span>)}</div>
                  <p className="text-zinc-600 text-[0.95rem] leading-relaxed mb-8 italic flex-1">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-4 border-t border-zinc-200 pt-5 mt-auto">
                    <div className="w-10 h-10 rounded-full bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-brand-blue text-xs font-bold tracking-wider">{t.name.substring(0,2)}</span>
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

      {/* ── FAQ - Asymmetrical Layout ──────────────────────────────────────────────── */}
<section className="py-20 lg:py-28 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-muted relative overflow-hidden">
  <div className="max-w-7xl mx-auto relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start">
      
      <RevealOnScroll>
        <div className="sticky top-24">
          <p className="section-label mb-2">Common Questions</p>
          
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 mb-6 leading-tight">
            Fake News Removal{" "}
            <span className="heading-script text-brand-blue">
              FAQs
            </span>
          </h2>

          <p className="text-zinc-500 text-[0.95rem] leading-relaxed mb-8">
            Have a specific case? Our experts offer a free assessment of your
            fake news situation and present a clear removal plan.
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

      {/* ── CONTACT CTA - Premium Grand Finish ───────────────────────────────────────────── */}
      <section id="contact" className="py-24 lg:py-32 px-4 bg-zinc-950 relative overflow-hidden premium-section-dark border-t-4 border-brand-blue">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
        <div className="absolute top-10 left-1/3 w-96 h-96 bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-brand-gold/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent" />

        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <RevealOnScroll>
            <div className="premium-copy-panel-dark">
              <p className="section-label text-brand-gold mb-3">Act Fast</p>
              <h2 className="font-heading text-3xl lg:text-[2.75rem] font-bold text-white mb-6 leading-tight tracking-tight">
                Don&apos;t Let Harmful News Articles <span className="heading-script text-blue-400">Damage Your Brand</span>
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-10 text-[0.95rem] max-w-lg">
                Schedule a free consultation today. Our removal experts will assess your situation and present a clear action plan - with no obligation.
              </p>
              
              <div className="space-y-6 mb-10 border-t border-zinc-800/80 pt-8">
                {[
                  { label: "Direct Hotline (24/7)", value: "+9188827 88412", href: "tel:+918882788412", icon: "📞" },
                  { label: "Secure Email", value: "contact@onlinereputationbuilder.in", href: "mailto:contact@onlinereputationbuilder.in", icon: "✉️" },
                  { label: "Headquarters", value: "Shantipally, Behala, Kolkata - 700060", href: null, icon: "🏢" },
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