"use client";
import { useState, useEffect, useRef, ReactNode } from "react";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";

/* ─── Electronics Data ─────────────────────────────────────────────────────── */

const heroBullets = [
  "Dispute fake 1-star reviews across Amazon, Flipkart, and Google Shopping",
  "Protect consumer electronics hardware brands and authorized service center listings",
  "Suppress unverified product defect complaints and sensationalist YouTube video claims",
  "Trusted by more than 250+ electronics brands, hardware OEMs, and consumer appliance makers",
];

const faqs = [
  {
    q: "Why is reputation management essential for consumer electronics and hardware brands?",
    a: "Consumers conduct extensive research on specifications, build quality, and durability before buying electronics. A cluster of fake 1-star reviews on Amazon or a viral defect video on YouTube immediately reduces e-commerce conversion rates and retail channel sell-through.",
  },
  {
    q: "Can you remove fake or competitor reviews from Amazon, Flipkart, and Google Maps?",
    a: "Yes. When reviews violate marketplace terms, exhibit review-bombing velocity patterns, contain abusive language, or originate from competitor manipulation, our team submits documented compliance dockets to secure permanent deletion.",
  },
  {
    q: "How do you handle customer complaints regarding warranty service centers?",
    a: "We optimize authorized service center listings with verified turnaround timelines, warranty terms, and active support channels. Simultaneously, our team de-escalates customer grievances to prevent localized issues from blowing up into national product boycotts.",
  },
  {
    q: "What electronics platforms and review portals do you monitor?",
    a: "We continuously monitor Amazon, Flipkart, Google Shopping, Google Business Profiles for authorized service centers, MouthShut, Consumer Complaints Court, Reddit hardware forums, and YouTube tech review channels.",
  },
  {
    q: "Can electronics ORM help increase e-commerce sales and retail demand?",
    a: "Yes. Increasing product star ratings from 3.8 to 4.5+ on major e-commerce platforms can double product page conversion rates and lower customer acquisition costs across Google Shopping and Meta Ads.",
  },
  {
    q: "How do you suppress negative tech teardown videos and defect claims on YouTube?",
    a: "We build and optimize high-authority product comparison portals, official software firmware update notes, and positive reviewer showcases that algorithmically push hostile videos off page 1 results.",
  },
  {
    q: "Is ORM suitable for consumer electronics startups as well as established OEM brands?",
    a: "Yes. We manage reputation portfolios for emerging D2C gadget startups, IoT hardware innovators, smart appliance manufacturers, and multi-national consumer electronics conglomerates.",
  },
  {
    q: "How does ORM assist electronics brands with service networks in Kolkata and pan-India metros?",
    a: "From major tech retail hubs in Kolkata, Delhi, and Bangalore to multi-tier service centers across India, we monitor local service center ratings, suppress localized customer complaints, and ensure high local search visibility.",
  },
];

const services = [
  {
    label: "Reviews",
    title: "Marketplace Review Defense & Deletion",
    desc: "We track and dispute fake, bot-generated, and competitor-seeded 1-star reviews across Amazon, Flipkart, and Google Shopping to preserve product conversion rates.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>
    ),
  },
  {
    label: "Search",
    title: "Hardware Defect Search Suppression",
    desc: "We push down sensational defect articles, unverified recall claims, and consumer forum complaints off Google Page 1, replacing them with official firmware updates and positive tech reviews.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
    ),
  },
  {
    label: "Local SEO",
    title: "Service Center Listing Optimization",
    desc: "We optimize Google Maps profiles for authorized service centers and retail partner stores, ensuring verified operating hours, genuine parts badges, and high star ratings.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
    ),
  },
  {
    label: "Crisis",
    title: "Product Launch & Recall Crisis PR",
    desc: "When hardware bugs, shipping delays, or warranty disputes threaten product launch momentum, our crisis PR team acts swiftly with clear communications and search de-indexing.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
    ),
  },
  {
    label: "Feedback",
    title: "Verified Buyer Review Generation",
    desc: "We deploy automated post-delivery review workflows that prompt satisfied customers to share detailed reviews and unboxing experiences on Amazon, Flipkart, and Google.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
    ),
  },
  {
    label: "Intelligence",
    title: "Hardware Sentiment & Defect Analytics",
    desc: "We analyze recurring customer feedback themes across battery life, build quality, and software stability so your engineering team can prioritize critical fixes.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
    ),
  },
];

const impacts = [
  {
    label: "Sales",
    title: "Higher E-Commerce Conversions",
    desc: "Maintaining a 4.4+ rating on Amazon and Flipkart doubles click-through-to-purchase conversions for consumer electronics.",
    icon: "🛒",
  },
  {
    label: "Retail",
    title: "Stronger Distributor Confidence",
    desc: "Retail partners and distributor chains stock products with proven positive consumer sentiment and low complaint volumes.",
    icon: "🏬",
  },
  {
    label: "Returns",
    title: "Lower Return Rates",
    desc: "Transparent product documentation and prompt grievance resolution significantly reduce remorse returns and chargebacks.",
    icon: "📦",
  },
  {
    label: "Protection",
    title: "Protection Against Bot Sabotage",
    desc: "Rapid identification and removal of coordinated competitor review attacks preserves aggregate product scores.",
    icon: "🛡️",
  },
];

const processes = [
  {
    label: "Audit",
    title: "Comprehensive Hardware Brand Audit",
    desc: "We analyze all product SKU ratings across Amazon, Flipkart, Google Shopping, YouTube reviews, and consumer forums to map vulnerabilities.",
  },
  {
    label: "Strategy",
    title: "Custom Electronics Brand Roadmap",
    desc: "We design a tailored reputation management roadmap aligned with product release schedules, warranty terms, and sales channels.",
  },
  {
    label: "Resolution",
    title: "Marketplace Disputes & Search Curation",
    desc: "Our specialists submit formal policy dispute petitions for fake reviews while deploying high-ranking PR assets to displace negative links.",
  },
  {
    label: "Shield",
    title: "24/7 Review Bombing & Threat Watch",
    desc: "We continuously scan social platforms, discussion boards, and e-commerce listings to neutralize coordinated attacks in real time.",
  },
];

const touchpointLogos = [
  { name: "Google Reviews", img: "https://www.google.com/s2/favicons?domain=google.com&sz=128" },
  { name: "Amazon", img: "https://www.google.com/s2/favicons?domain=amazon.in&sz=128" },
  { name: "Flipkart", img: "https://www.google.com/s2/favicons?domain=flipkart.com&sz=128" },
  { name: "Service Maps SEO", img: "https://www.google.com/s2/favicons?domain=maps.google.com&sz=128" },
  { name: "YouTube Tech", img: "https://www.google.com/s2/favicons?domain=youtube.com&sz=128" },
  { name: "Consumer Complaints", img: "https://www.google.com/s2/favicons?domain=consumercomplaints.in&sz=128" },
  { name: "Reddit Hardware", img: "https://www.google.com/s2/favicons?domain=reddit.com&sz=128" },
  { name: "Buyer Trustpilot", img: "https://www.google.com/s2/favicons?domain=trustpilot.com&sz=128" },
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

export default function ElectronicIndustryPage() {
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
              Electronics ORM: Hardware, Gadgets &amp; Consumer Appliances
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.6rem] font-black text-white leading-[1.08] mb-6 tracking-tight">
              Electronics Reputation Management for{" "}
              <span className="text-gradient-gold">Consumer Trust</span>
            </h1>

            <p className="text-white/70 text-base lg:text-lg mb-4 leading-relaxed max-w-2xl">
              In consumer technology, product ratings drive sales velocity. Online Reputation Builder protects hardware brands, OEM manufacturers, and consumer appliance brands from fake 1-star reviews, unverified defect claims, and negative search results.
            </p>
            <p className="text-zinc-400 text-sm mb-8 leading-relaxed max-w-2xl">
              We help electronics brands protect Amazon and Flipkart product scores, optimize authorized service center listings on Google Maps, and command market leadership.
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
                Protect Your Hardware Brand
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
                    Upgrade Your Brand Reputation
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
        <p className="text-center text-[0.65rem] font-bold text-zinc-400 uppercase tracking-widest mb-6">Marketplace and Technology Portals We Manage</p>
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
          <span className="font-semibold text-zinc-800">Related Commerce &amp; Tech Sectors:</span>
          <Link href="/industry/e-commerce-brands" className="hover:text-brand-blue hover:underline">E-Commerce Brands</Link>
          <span>•</span>
          <Link href="/industry/startups" className="hover:text-brand-blue hover:underline">Tech Startups</Link>
          <span>•</span>
          <Link href="/industry/retail-chains" className="hover:text-brand-blue hover:underline">Retail Electronics Stores</Link>
          <span>•</span>
          <Link href="/industry/automotive-dealerships" className="hover:text-brand-blue hover:underline">Automotive Electronics</Link>
          <span>•</span>
          <Link href="/orm-agency-kolkata" className="hover:text-brand-gold font-medium">Kolkata Technology Desk</Link>
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
                  The Role of Reputation Management in <span className="heading-script text-brand-blue">Hardware Sales Conversion</span>
                </h2>
                <p className="text-zinc-600 leading-relaxed mb-8 text-[0.95rem]">
                  When shoppers compare electronic gadgets and smart appliances, review sentiment determines which product enters the cart. Electronics ORM ensures potential buyers find verified unboxing testimonials, positive tech reviews, and prompt service support, while fake 1-star reviews and unverified defect claims are resolved under marketplace terms.
                </p>
                <Link href="#contact" className="btn-blue shadow-[0_10px_30px_rgba(37,99,235,0.2)] px-8 py-3.5">
                  Protect Your Product Catalog
                </Link>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <div className="relative w-full max-w-lg mx-auto lg:ml-auto">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-blue/10 rounded-full blur-[80px] -z-10"></div>
                <div className="premium-image-frame rounded-3xl overflow-hidden shadow-2xl border border-zinc-200/50 relative z-10">
                  <img
                    src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80"
                    alt="consumer electronics reputation management services for hardware brands"
                    className="w-full h-auto object-cover aspect-[4/5] hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[90%] z-20 glass-panel-light p-3 rounded-2xl border border-white shadow-xl hidden md:block">
                  <div className="grid grid-cols-3 gap-2 divide-x divide-zinc-200/60">
                    <div className="text-center px-2">
                      <p className="font-heading text-xl font-black text-brand-blue mb-0.5">
                        <AnimatedCounter end={250} suffix="+" duration={2500} />
                      </p>
                      <p className="text-[0.55rem] text-zinc-500 font-bold uppercase tracking-widest">Hardware Brands</p>
                    </div>
                    <div className="text-center px-2">
                      <p className="font-heading text-xl font-black text-brand-gold mb-0.5">
                        <AnimatedCounter end={5} suffix=" star" duration={2500} />
                      </p>
                      <p className="text-[0.55rem] text-zinc-500 font-bold uppercase tracking-widest">Review Focus</p>
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
                <p className="section-label text-[0.65rem] font-bold tracking-wider uppercase text-zinc-600 m-0">Our Electronics Expertise</p>
              </div>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 tracking-tight leading-tight">
                Comprehensive Electronics Reputation <span className="heading-script text-brand-gold">Management Services</span>
              </h2>
              <p className="text-zinc-500 text-[0.95rem] mt-5 max-w-xl mx-auto leading-relaxed">
                We provide end-to-end reputation strategies tailored for hardware OEMs, consumer electronics brands, and gadget makers.
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
                Commercial Impact
              </p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-5 tracking-tight">
                How Electronics Reputation Management Drives <span className="text-gradient-gold">Product Sell-Through</span>
              </h2>
              <p className="text-zinc-400 text-[0.95rem] max-w-2xl mx-auto leading-relaxed">
                A verified hardware reputation accelerates e-commerce cart checkouts, earns retail distributor confidence, and minimizes return rates.
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
                Streamlined Reputation Management with <span className="heading-script text-brand-blue">Online Reputation Builder</span>
              </h2>
              <p className="text-zinc-500 text-[0.95rem] leading-relaxed max-w-2xl mx-auto">
                We safeguard hardware brands through marketplace review disputes, rapid crisis resolution, and proactive positive content dominance.
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
                  Electronics Reputation Management <span className="heading-script text-brand-blue">FAQs</span>
                </h2>
                <p className="text-zinc-500 text-[0.95rem] leading-relaxed mb-8">
                  Have a specific question about our electronics ORM services? Our senior directors offer a free,
                  strictly confidential consultation under bilateral NDA.
                </p>
                <a href="tel:+918882788412" className="btn-gold shadow-lg shadow-brand-gold/20 inline-flex items-center gap-2 px-8 py-3.5">
                  <svg width="16" height="16" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
                  Call Electronics Specialists
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
                Ready to Secure Your Electronics Brand and <span className="heading-script text-brand-gold">Product Ratings?</span>
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-10 text-[0.95rem] max-w-lg">
                Schedule a confidential consultation today. Our electronics reputation directors will assess your marketplace SKUs and search results, identify fraudulent reviews, and formulate a proven protection strategy under full bilateral NDA.
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
                <p className="text-white font-heading font-bold text-xl mb-2">Request Hardware Brand Audit</p>
                <p className="text-zinc-500 text-sm mb-6">100% confidential. Senior Director response within 2 hours.</p>
                <ContactForm dark />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <FAQSection items={[
        { question: "How to dispute fake 1-star reviews on Amazon and Flipkart?", answer: "We analyze transaction timelines and review patterns to submit evidence-backed dispute requests under marketplace anti-manipulation policies." },
        { question: "Can you suppress negative tech teardown videos on YouTube?", answer: "Yes. We file community guideline and copyright appeals where violations occur, while optimizing authoritative firmware and product review assets to dominate search results." },
        { question: "How do you protect electronics service centers from unfair local complaints?", answer: "We optimize Google Maps service center profiles, ensure accurate customer guidance, and dispute fake reviews left by non-customers." }
      ]} />
      <Footer />
    </div>
  );
}