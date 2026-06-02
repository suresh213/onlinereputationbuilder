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
  "24/7 real-time monitoring across Google, Glassdoor, social media & news",
  "Instant alerts when new mentions or reviews appear online",
  "Sentiment analysis to track brand perception over time",
  "Comprehensive dashboards for full online presence visibility",
];

const stats = [
  { number: "9+", label: "Years of Reputation Expertise" },
  { number: "98%", label: "Clients Satisfied" },
  { number: "500+", label: "Brands Monitored" },
  { number: "600+", label: "Projects Delivered Worldwide" },
];

const impacts = [
  {
    title: "Threats Go Undetected Until It's Too Late",
    desc: "Negative news, viral complaints, and fake reviews spread rapidly. Without real-time monitoring, a damaging story can reach thousands of people before you even know it exists - making recovery far harder.",
    icon: "🔍",
  },
  {
    title: "Missed Opportunities to Respond",
    desc: "A timely, professional response to a negative review can neutralise its impact. Without monitoring, you lose the critical response window - letting negative narratives define your brand unchallenged.",
    icon: "⏱️",
  },
  {
    title: "Blind Spots in Your Online Presence",
    desc: "Your brand is mentioned across dozens of platforms simultaneously. Social media, review sites, forums, news - without centralised monitoring you have no visibility into how your reputation is evolving.",
    icon: "📊",
  },
];

const services = [
  {
    step: "01",
    title: "Multi-Platform Review Monitoring",
    desc: "We monitor Google, Glassdoor, Indeed, Trustpilot, Facebook, and 50+ review platforms in real time - capturing every new review the moment it goes live.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
    ),
  },
  {
    step: "02",
    title: "Social Media & News Monitoring",
    desc: "Track brand mentions, hashtags, and news coverage across Twitter/X, LinkedIn, Facebook, Instagram, and major Indian and international news outlets - all in one place.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"/></svg>
    ),
  },
  {
    step: "03",
    title: "Sentiment Analysis & Reporting",
    desc: "Our platform analyses sentiment trends across all monitored channels, giving you a real-time brand health score and weekly reports that track progress over time.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
    ),
  },
  {
    step: "04",
    title: "Instant Alert System",
    desc: "Set custom alert thresholds for your brand, executives, and key products. Receive instant notifications by email, SMS, or WhatsApp the moment a critical mention appears.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>
    ),
  },
];

const monitoringChannels = [
  {
    title: "Google Business & Search",
    desc: "Monitor Google reviews, Google News mentions, and organic search results that feature your brand name - the most visible layer of your online reputation.",
  },
  {
    title: "Glassdoor & Job Platforms",
    desc: "Track employer reviews on Glassdoor, Indeed, and AmbitionBox to stay ahead of employee sentiment and employer brand issues before they escalate.",
  },
  {
    title: "Social Media Channels",
    desc: "Monitor Twitter/X, LinkedIn, Facebook, Instagram, and YouTube for mentions, tags, and comments - including indirect references that don't tag your handle.",
  },
  {
    title: "News & Media Outlets",
    desc: "Capture coverage from Indian and international news outlets, industry publications, blogs, and forums to stay informed of every media mention in real time.",
  },
];

const whyUs = [
  {
    title: "50+ Platform Coverage",
    desc: "We monitor more platforms than any competitor in India - ensuring no mention slips through regardless of where your audience talks about you.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
    ),
  },
  {
    title: "Real-Time Intelligence",
    desc: "Our monitoring system detects new mentions within minutes - not hours or days - giving you the response window that makes the difference in a crisis.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
    ),
  },
  {
    title: "Expert Human Analysis",
    desc: "Beyond automated alerts, our reputation analysts review critical mentions and provide strategic guidance on how to respond - combining technology with expertise.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
    ),
  },
  {
    title: "Confidential & Secure",
    desc: "All monitoring data, brand intelligence, and reports are handled with strict confidentiality under NDA. Your competitive intelligence stays private.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
    ),
  },
];

const faqs = [
  {
    q: "What platforms do you monitor?",
    a: "We monitor 50+ platforms including Google, Glassdoor, Indeed, Trustpilot, Facebook, Twitter/X, LinkedIn, Instagram, YouTube, major news outlets, industry blogs, and Indian forums. A full platform list is available on request.",
  },
  {
    q: "How quickly will I be alerted to new mentions?",
    a: "Our system detects most new mentions within 15–30 minutes of publication. Critical alerts (high-risk keywords, sudden spikes) trigger immediate notifications via email, SMS, or WhatsApp.",
  },
  {
    q: "Can I monitor competitors as well?",
    a: "Yes. Competitive monitoring packages allow you to track competitor mentions, sentiment trends, and review activity - giving you valuable market intelligence alongside your own brand data.",
  },
  {
    q: "What does the monthly report include?",
    a: "Monthly reports cover total mention volume, sentiment breakdown, platform-by-platform analysis, key influencers and publications, trend comparisons with previous periods, and strategic recommendations.",
  },
  {
    q: "Is reputation monitoring enough on its own?",
    a: "Monitoring is the essential first layer. Many clients combine it with our review management, review generation, and content suppression services for a complete reputation programme.",
  },
];

const testimonials = [
  {
    name: "Rahul Mehta",
    text: "The monitoring service gave us visibility we never had before. We spotted a negative news story within minutes and were able to respond before it gained traction. Invaluable for any serious brand.",
  },
  {
    name: "Priya Nair",
    text: "The weekly reports and sentiment dashboards have become a core part of our brand team's workflow. The level of detail and insight is exceptional - we always know exactly where we stand.",
  },
  {
    name: "Deepak Verma",
    text: "We use both the monitoring and review removal services together. The combination means we catch issues early and resolve them fast. Our overall online sentiment has improved dramatically.",
  },
];

const publishers = [
  { name: "Bloomberg",       logo: "https://www.vectorlogo.zone/logos/bloomberg/bloomberg-ar21.svg" },
  { name: "Forbes",          logo: "https://www.vectorlogo.zone/logos/forbes/forbes-ar21.svg" },
  { name: "Reuters",         logo: "https://www.vectorlogo.zone/logos/reuters/reuters-ar21.svg" },
  { name: "CNN",             logo: "https://www.vectorlogo.zone/logos/cnn/cnn-ar21.svg" },
  { name: "MarketWatch",     logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/MarketWatch_Logo.svg/320px-MarketWatch_Logo.svg.png" },
  { name: "Indian Express",  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/The_Indian_Express_logo.svg/320px-The_Indian_Express_logo.svg.png" },
  { name: "Outlook",         logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Outlook_India_logo.svg/320px-Outlook_India_logo.svg.png" },
  { name: "People",          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/People_Magazine_logo.svg/320px-People_Magazine_logo.svg.png" },
  { name: "Financial Times", logo: "https://www.vectorlogo.zone/logos/ft/ft-ar21.svg" },
  { name: "Silicon India",   logo: "https://www.siliconindia.com/images/si-logo.png" },
  { name: "Money",           logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Money_magazine_logo.svg/320px-Money_magazine_logo.svg.png" },
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

export default function ReputationMonitoringPage() {
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
                Reputation Monitoring Services
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.08] mb-6 tracking-tight">
                Best Online Reputation Monitoring Company in <span className="text-gradient-gold">Delhi, India</span>
              </h1>
              <p className="text-white/70 text-base lg:text-lg mb-8 leading-relaxed max-w-2xl">
                Know exactly what the world is saying about your brand - the moment they say it. We monitor 50+ platforms in real time so you can respond fast, protect your reputation, and stay ahead of every threat.
              </p>
              <ul className="space-y-3 mb-10">
                {heroBullets.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-white/80 text-sm">
                    <span className="w-5 h-5 rounded-full bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-brand-gold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="btn-gold shadow-lg shadow-brand-gold/20 px-8 py-3.5">Start Monitoring My Brand</Link>
                <a href="tel:+918882788412" className="btn-outline border-zinc-700 text-zinc-300 hover:text-white hover:border-white px-8 py-3.5">Call Us Now</a>
              </div>
            </RevealOnScroll>
          </div>
          {/* Stats Panel */}
          <RevealOnScroll delay={200}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="glass-panel border border-zinc-800/80 rounded-2xl p-6 flex flex-col items-center text-center hover:border-brand-gold/40 transition-all duration-300">
                  <span className="font-heading text-3xl font-black text-gradient-gold mb-2">{s.number}</span>
                  <span className="text-zinc-400 text-xs leading-snug">{s.label}</span>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── PUBLISHERS ───────────────────────────────────────────────── */}
<section className="py-10 px-4 bg-zinc-50 border-b border-zinc-200 overflow-hidden">
  <div className="max-w-7xl mx-auto">
    <p className="text-center text-[0.65rem] text-zinc-400 uppercase tracking-[0.2em] font-bold mb-6">As Featured In</p>
  </div>

  {/* Marquee track */}
  <div className="group relative overflow-hidden">
    {/* Left fade */}
    <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-zinc-50 to-transparent" />
    {/* Right fade */}
    <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-zinc-50 to-transparent" />

    <div
      className="flex items-center w-max"
      style={{ animation: "publisher-marquee 35s linear infinite" }}
    >
      {[...publishers, ...publishers].map((pub, i) => (
        <div
          key={`${pub.name}-${i}`}
          className="flex items-center justify-center flex-shrink-0 mx-10 opacity-50 hover:opacity-100 transition-opacity duration-300"
          style={{ height: 40 }}
        >
          <img
            src={pub.logo}
            alt={pub.name}
            className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
            loading="lazy"
            onError={(e) => {
              const el = e.target as HTMLImageElement;
              el.style.display = "none";
              const span = document.createElement("span");
              span.className = "text-zinc-400 text-[0.65rem] font-bold uppercase tracking-widest whitespace-nowrap";
              span.textContent = pub.name;
              el.parentElement?.appendChild(span);
            }}
          />
        </div>
      ))}
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
</section>

      {/* ── WHY IT MATTERS ───────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-white border-b border-zinc-200 premium-section-light overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <RevealOnScroll>
            <div>
              <p className="section-label mb-2">Why It Matters</p>
              <h2 className="font-heading text-3xl lg:text-[2.5rem] font-bold text-zinc-900 mb-6 leading-tight">
                What You Don&apos;t Know <span className="heading-script text-brand-blue">Can Hurt Your Brand</span>
              </h2>
              <p className="text-zinc-500 leading-relaxed mb-6 text-[0.95rem]">
                Your brand is being discussed right now - on review platforms, social media, news sites, and forums. Without real-time monitoring, you have no visibility into how your reputation is developing or where the next threat is coming from.
              </p>
              <p className="text-zinc-500 leading-relaxed mb-8 text-[0.95rem]">
                Our reputation monitoring service gives Delhi and India-based businesses a complete, always-on view of their online presence - so nothing slips through and you always have the intelligence to act.
              </p>
              <Link href="#contact" className="btn-blue shadow-[0_10px_30px_rgba(37,99,235,0.2)] px-10 py-3.5 inline-block">Get a Free Monitoring Demo</Link>
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
                Our Reputation <span className="heading-script text-brand-blue">Monitoring Services</span>
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

      {/* ── MONITORING CHANNELS ──────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-white border-b border-zinc-200 premium-section-light overflow-hidden z-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 items-center">
          <div className="premium-copy-panel">
            <RevealOnScroll>
              <p className="section-label mb-2">Our Coverage</p>
              <h2 className="font-heading text-3xl lg:text-[2.5rem] font-bold text-zinc-900 mb-6 leading-tight">
                Channels We <span className="heading-script text-brand-gold">Monitor For You</span>
              </h2>
              <p className="text-zinc-500 leading-relaxed mb-8 text-[0.95rem]">
                From review platforms to social media and breaking news, we cover every channel where your brand reputation lives - giving you a single, unified view.
              </p>
              <Link href="#contact" className="btn-blue shadow-[0_10px_30px_rgba(37,99,235,0.2)] px-10 py-3.5">See Full Channel List</Link>
            </RevealOnScroll>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-gold/10 rounded-full blur-[80px] -z-10" />
            {monitoringChannels.map((t, i) => (
              <RevealOnScroll key={t.title} delay={i * 100}>
                <div className="group p-6 rounded-2xl border border-zinc-200 bg-white hover:border-brand-gold/40 hover:shadow-[0_10px_30px_-10px_rgba(194,148,10,0.15)] transition-all duration-300 relative z-10 h-full">
                  <div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-center text-brand-gold mb-4 shadow-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
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
                Why We Are <span className="text-gradient-gold">Delhi&apos;s Best Reputation Monitoring Company</span>
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

      {/* ── TESTIMONIALS ─────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-white border-b border-zinc-200 premium-section-light overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="section-label mb-2 justify-center">Client Feedback</p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 tracking-tight">Trusted by Brands <span className="heading-script text-brand-blue">Across India</span></h2>
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
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-white border-l border-zinc-100 pointer-events-none hidden lg:block" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <RevealOnScroll>
              <div className="sticky top-24 lg:col-span-2">
                <p className="section-label mb-2">Common Questions</p>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 mb-6 leading-tight">Reputation Monitoring <span className="heading-script text-brand-blue">FAQs</span></h2>
                <p className="text-zinc-500 text-[0.95rem] leading-relaxed mb-8">Have questions about monitoring your brand? Get a free consultation and platform demo - no obligation.</p>
                <a href="tel:+918882788412" className="btn-gold shadow-lg shadow-brand-gold/20 inline-flex items-center gap-2 px-8 py-3.5">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
                  Call Us Now
                </a>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={200} className="lg:col-span-3">
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
                Start Monitoring Your Brand <span className="heading-script text-brand-blue">Before the Next Crisis Hits</span>
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-10 text-[0.95rem] max-w-lg">Get a free brand monitoring consultation today. Our experts will show you exactly what&apos;s being said about your brand online - and how to stay in control.</p>
              <div className="space-y-6 mb-10 border-t border-zinc-800/80 pt-8">
                {[
                  { label: "Direct Hotline (24/7)", value: "+91 88827 88412", href: "tel:+918882788412", icon: "📞" },
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