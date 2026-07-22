"use client";
import { useState, useEffect, useRef } from "react";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Link from "next/link";

const approachSteps = [
  {
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
      </svg>
    ),
    title: "Find Every Bad Link",
    desc: "First, our team searches Google to find every single bad link, news story, or fake review about you so we can plan how to remove them.",
    accent: "blue",
  },
  {
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
      </svg>
    ),
    title: "Hide the Bad News",
    desc: "We create very strong, positive articles about you and push them to the top of Google. This automatically pushes the bad news very far down where nobody looks.",
    accent: "gold",
  },
  {
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/>
      </svg>
    ),
    title: "Permanent Removal",
    desc: "We use legal tools and talk to website owners directly to completely delete fake and illegal content from the internet forever.",
    accent: "blue",
  },
];

const removalMethods = [
  {
    step: "01",
    title: "Ask the Website to Delete It",
    desc: "We contact the website owner directly and use legal reasons to force them to remove the bad article about you.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
      </svg>
    ),
  },
  {
    step: "02",
    title: "Report to Google",
    desc: "If the news or review is fake, we make a strong legal complaint to Google so they remove the link from their search results entirely.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
      </svg>
    ),
  },
  {
    step: "03",
    title: "Push Bad Links Down",
    desc: "If a link cannot be deleted, we create many good articles about you. This pushes the bad link to page 5 or 10 on Google where no one looks.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7"/>
      </svg>
    ),
  },
  {
    step: "04",
    title: "Make Your Profiles Very Strong",
    desc: "We make your Facebook, LinkedIn, and Twitter so strong that they take up all the top spots on Google, hiding the bad news.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    ),
  },
  {
    step: "05",
    title: "Publish Real News",
    desc: "We publish real news about your good work in big Indian newspapers online to rebuild your trust in society.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
  },
  {
    step: "06",
    title: "Continuous Safety Check",
    desc: "After we clean Google, we keep checking the internet 24/7 to make sure the bad news never comes back.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
      </svg>
    ),
  },
];

const whoWeHelp = [
  { label: "Celebrities & Public Figures", icon: "⭐" },
  { label: "Doctors & Healthcare Professionals", icon: "🏥" },
  { label: "Founders & CEOs", icon: "💼" },
  { label: "Influencers & Creators", icon: "📱" },
  { label: "Politicians & Activists", icon: "🗳️" },
  { label: "Lawyers & Professionals", icon: "⚖️" },
];

const faqs = [
  { q: "Can you actually delete a bad link from Google?", a: "Yes. If the link breaks laws or is completely fake, our team knows exactly how to file a legal request to Google to delete it permanently." },
  { q: "What if Google refuses to delete it?", a: "If they refuse, we use 'suppression'. We write so many good articles about you that the bad link gets buried on page 5 or 6, where nobody will ever see it." },
  { q: "How much time will this take?", a: "Simple removals can take just a few weeks. If the problem is very big, it can take 3 to 6 months to completely clear the first page of Google." },
  { q: "Will the bad link come back later?", a: "No. Once we remove a link through Google legal, it is gone forever. For other links, our continuous monitoring keeps you safe." },
];

const testimonials = [
  { name: "Rahul J.", role: "Business Owner", text: "A competitor wrote a fake story about me. This team completely removed the link from Google in just one month. Highly recommended.", initials: "RJ" },
  { name: "Sneha", role: "Doctor", text: "Someone was ruining my clinic's name online. They pushed all the bad links down, and now my patients only see my good work.", initials: "S" },
  { name: "Vikas M.", role: "CEO", text: "I was losing big deals because of one bad search result. They fixed it fast, and my business is growing again.", initials: "VM" },
];

// Smooth Animated Counter Component
function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number, duration?: number, suffix?: string }) {
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

  return <span ref={ref}>{Math.floor(count)}{suffix}</span>;
}

export default function RemoveIndividualNegativeResultsPage() {
  return (
    <div className="font-body text-zinc-800 bg-white min-h-screen flex flex-col premium-home">
      <Topbar />
      <Navbar />

      {/* ── PAGE HERO - Sophisticated Authoritative Dark Layout ─────────────────────────────────────────── */}
      <section className="hero-bg relative overflow-hidden bg-zinc-950 premium-section-dark border-b border-zinc-800/50">
        <div className="hero-ambient hero-ambient-blue opacity-40 top-[-10%] right-[-5%]" />
        <div className="hero-ambient hero-ambient-gold opacity-15 bottom-[-10%] left-[-10%]" />
        <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none opacity-40" />

        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center relative z-10">
          <div className="hero-copy mt-4">
            <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[0.67rem] font-bold mb-6 uppercase tracking-[0.15em] border-brand-blue/30 bg-brand-blue/10 text-brand-blue shadow-[0_0_15px_rgba(37,99,235,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue" />
              </span>
              Protect Your Personal Name
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.2rem] font-black text-white leading-[1.08] mb-6 tracking-tight">
              Protect Your Online Reputation with Professional{" "}
              <span className="text-gradient-gold">Negative Content</span>{" "}
              Removal Services
            </h1>

            <p className="text-white/70 text-base lg:text-lg mb-8 leading-relaxed max-w-2xl">
              Are fake news articles or bad reviews ruining your life? We use legal and expert methods to delete bad links from Google so you can get your respect back.
            </p>

            <ul className="space-y-3 mb-10 max-w-xl">
              {[
                "Comprehensive analysis of all harmful URLs",
                "Content suppression via SEO campaigns",
                "Legal & PR collaboration for fast removal",
                "Trusted by celebrities, doctors, founders & influencers",
                "Real-time progress tracking & performance reports",
                "Stronger, credible & professionally controlled online presence",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-zinc-300 font-medium">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-blue/20 text-brand-blue text-xs flex-shrink-0 mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4 mb-10">
              <Link href="#contact" className="btn-gold shadow-lg shadow-brand-gold/20 px-8 py-3.5">Get A Free Consultation</Link>
              <a href="tel:+918882788412" className="btn-outline px-8 py-3.5 border-zinc-600 text-zinc-300 hover:text-white hover:border-white">Call: +9188827 88412</a>
            </div>

            {/* Who we help pills - integrated elegantly */}
            <div className="pt-6 border-t border-white/10">
              <p className="text-zinc-500 text-[0.65rem] uppercase tracking-widest mb-4 font-bold">Trusted by professionals across</p>
              <div className="flex flex-wrap gap-2.5">
                {whoWeHelp.map((w) => (
                  <span key={w.label} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:bg-white/10 transition-all text-xs font-medium shadow-sm backdrop-blur-sm cursor-default">
                    <span className="text-sm">{w.icon}</span>{w.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Glassmorphic Form Panel */}
          <div className="relative lg:mt-6">
            <div className="absolute -inset-4 bg-gradient-to-tr from-brand-blue/20 to-brand-gold/10 rounded-3xl blur-2xl opacity-50 pointer-events-none"></div>
            <div className="glass-panel bg-zinc-950/80 backdrop-blur-md border border-zinc-700/50 rounded-3xl p-8 lg:p-10 relative z-10 shadow-2xl">
              <div className="form-card-orbit opacity-50" />
              <div className="flex items-center justify-between mb-6 border-b border-zinc-800/80 pb-5">
                <div>
                  <p className="section-label text-brand-gold mb-1">Free Consultation</p>
                  <h2 className="font-heading text-xl font-bold text-white leading-tight">Take Control of Your Online Reputation Today</h2>
                </div>
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center flex-shrink-0 shadow-inner">
                  <svg width="20" height="20" className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
              </div>
              <ContactForm dark />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY REMOVING IS CRUCIAL - Stats with Animated Counters ─────────── */}
      <section className="py-20 lg:py-28 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-muted relative overflow-hidden z-0">
        <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-16 items-center">
            <div className="premium-copy-panel pr-0 lg:pr-8">
              <p className="section-label mb-2 text-brand-gold">Why It Matters</p>
              <h2 className="font-heading text-3xl lg:text-[2.5rem] font-bold text-zinc-900 mb-6 leading-tight">
                Why Removing Negative Google Search <span className="heading-script text-brand-blue">Results is Crucial</span>
              </h2>
              <p className="text-zinc-600 leading-relaxed mb-5 text-[0.95rem]">
                When someone searches your name and sees bad news, they will not do business with you, they will not hire you, and they will not trust you.
              </p>
              <p className="text-zinc-500 leading-relaxed mb-8 text-[0.95rem]">
                We remove the bad links and replace them with good news about you. We give you a clean slate so you can live with pride and respect again.
              </p>

              {/* Impact stats with Counters */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
                {[
                  { number: 87, suffix: "%", label: "of people research online before trusting someone" },
                  { number: 1, suffix: "st", label: "page results shape 91% of all click decisions" },
                  { number: 6, suffix: "mo", label: "complex cases resolved within 6 months" },
                ].map((s) => (
                  <div key={s.label} className="premium-info-card bg-white border border-zinc-200 shadow-sm rounded-xl p-6 text-center hover:border-brand-blue/30 transition-all duration-300">
                    <p className="font-heading text-3xl lg:text-4xl font-black text-brand-blue mb-2">
                      <AnimatedCounter end={s.number} suffix={s.suffix} duration={2500} />
                    </p>
                    <p className="text-[0.65rem] text-zinc-500 leading-snug font-medium uppercase tracking-wider">{s.label}</p>
                  </div>
                ))}
              </div>

              <Link href="#contact" className="btn-gold shadow-lg shadow-brand-gold/20">Get A Free Consultation</Link>
            </div>

            <div className="relative w-full max-w-lg mx-auto lg:ml-auto">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-blue/10 rounded-full blur-[80px] -z-10"></div>
              <div className="premium-image-frame rounded-3xl overflow-hidden shadow-2xl border border-zinc-200/50 relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=800&q=80"
                  alt="SEO & Online Presence Optimization"
                  className="w-full h-auto object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div className="absolute -bottom-6 -left-6 z-20 glass-panel-light p-4 rounded-2xl border border-white shadow-xl hidden md:flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-zinc-900 mb-0.5">Negative Content</p>
                  <p className="text-[0.65rem] text-zinc-500 font-bold uppercase tracking-widest">Identified & Removed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR APPROACH - Elegant Card Grid ─────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-white border-b border-zinc-200 premium-section-light">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 rounded-full bg-zinc-50 border border-zinc-200 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
              <p className="section-label text-[0.65rem] font-bold tracking-wider uppercase text-zinc-600 m-0">Our Approach</p>
            </div>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 tracking-tight">
              How We Remove Negative Content <span className="heading-script text-brand-blue">for Individuals</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {approachSteps.map((s, i) => (
              <div key={s.title} className="card-premium-hover group bg-white border border-zinc-200 rounded-3xl p-8 flex flex-col h-full shadow-sm relative overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-1 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ${i % 2 === 0 ? 'bg-brand-blue' : 'bg-brand-gold'}`}></div>
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="flex items-start justify-between mb-8 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-zinc-50 border border-zinc-100 shadow-sm flex items-center justify-center text-zinc-600 group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue group-hover:shadow-lg transition-all duration-300">
                    {s.icon}
                  </div>
                  <span className="text-[0.75rem] font-black text-zinc-200 group-hover:text-zinc-300 transition-colors font-mono tracking-widest text-3xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-xl text-zinc-900 mb-3 group-hover:text-brand-blue transition-colors relative z-10">{s.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed flex-1 relative z-10">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Plan B & C - Premium Dark Banner */}
          <div className="glass-panel bg-zinc-950 rounded-3xl p-8 lg:p-12 border border-zinc-800 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent" />
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
              <div>
                <p className="section-label text-brand-gold mb-3">If Google Does Not Remove It</p>
                <h3 className="font-heading text-3xl font-bold text-black mb-5 leading-tight">
                  We Have a Plan B - <span className="heading-script text-brand-gold">And a Plan C</span>
                </h3>
                <p className="text-zinc-500 text-[0.95rem] leading-relaxed">
                  Sometimes Google will not delete a link. If this happens, we write many good and powerful articles about you. Google loves good articles, so they push them to the top. This forces the bad news down to page 5 or page 10 where no one ever looks.
                </p>
              </div>
              <div className="space-y-4 bg-white/5 border border-white/10 rounded-2xl p-6">
                {["SEO suppression campaigns targeting page 1", "High-quality positive content creation", "PR activation & media outreach", "Legal escalation where appropriate", "Ongoing 24/7 reputation monitoring"].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-zinc-500 font-medium">
                    <div className="w-5 h-5 rounded-full bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center flex-shrink-0">
                      <span className="text-brand-gold text-xs font-bold">✓</span>
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── REMOVAL METHODS - Clean Minimalist Grid ──────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-muted relative overflow-hidden z-0">
        <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="section-label mb-2">Our Methods</p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 tracking-tight">
                Ways to Maintain a Good <span className="heading-script text-brand-blue">Online Reputation</span>
              </h2>
            </div>
            <Link href="#contact" className="btn-gold shadow-lg shadow-brand-gold/20 whitespace-nowrap flex-shrink-0 py-3.5 px-8">Start Today</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {removalMethods.map((m) => (
              <div key={m.title} className="group premium-info-card bg-white border border-zinc-200 rounded-3xl p-8 transition-all duration-400 relative overflow-hidden hover:border-brand-blue/30 hover:shadow-[0_15px_40px_-10px_rgba(37,99,235,0.15)]">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue to-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                
                <div className="flex items-start justify-between mb-8 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-500 group-hover:bg-blue-50 group-hover:text-brand-blue group-hover:border-blue-100 transition-all duration-300 group-hover:scale-110 shadow-sm">
                    {m.icon}
                  </div>
                  <span className="text-4xl font-black text-zinc-100 group-hover:text-brand-blue/10 transition-colors font-heading tracking-tighter">
                    {m.step}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-zinc-900 text-lg mb-3 group-hover:text-brand-blue transition-colors relative z-10">{m.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed relative z-10">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE / HOW LONG - Vertical Connecting Layout ──────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-white border-b border-zinc-200 premium-section-light overflow-hidden z-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-gold/10 rounded-full blur-[80px] -z-10"></div>
            <div className="premium-image-frame rounded-3xl overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.2)] border border-zinc-200">
              <img
                src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80"
                alt="Content Removal Timeline"
                className="w-full h-auto aspect-square object-cover"
              />
            </div>
            
            {/* Floating Metric Card */}
            <div className="absolute -top-6 -right-6 z-20 glass-panel-light p-6 rounded-2xl border border-white shadow-xl max-w-[200px] hidden md:block">
               <p className="font-heading text-4xl font-black text-zinc-900 mb-1">
                 <AnimatedCounter end={48} suffix="h" duration={2500} />
               </p>
               <p className="text-[0.65rem] text-zinc-500 font-bold uppercase tracking-widest leading-tight">Average time to deploy initial strategy</p>
            </div>
          </div>
          
          <div className="premium-copy-panel order-1 lg:order-2 pl-0 lg:pl-8">
            <p className="section-label mb-2">Timeline Expectations</p>
            <h2 className="font-heading text-3xl lg:text-[2.5rem] font-bold text-zinc-900 mb-6 leading-tight">
              How Long Will Online <span className="heading-script text-brand-gold">Content Removal Take?</span>
            </h2>
            <p className="text-zinc-500 leading-relaxed mb-10 text-[0.95rem]">
              Each case is different. Sometimes it takes weeks, sometimes a few months. But we will tell you exactly what to expect from day one.
            </p>

            {/* Premium Vertical Timeline */}
            <div className="space-y-6 mb-10 relative">
              {/* Connecting vertical line */}
              <div className="absolute left-[1.1rem] top-4 bottom-4 w-px bg-zinc-200 z-0"></div>
              
              {[
                { range: "Few Days – 2 Weeks", label: "Simple removal requests & direct takedowns", color: "bg-emerald-500", glow: "shadow-emerald-500/30" },
                { range: "1 – 3 Months", label: "Platform policy violations & review removals", color: "bg-brand-blue", glow: "shadow-brand-blue/30" },
                { range: "3 – 6 Months", label: "Complex suppression campaigns & SEO recovery", color: "bg-brand-gold", glow: "shadow-brand-gold/30" },
                { range: "6 – 12 Months", label: "Legal requests, high-domain sites & large removals", color: "bg-zinc-800", glow: "shadow-zinc-800/30" },
              ].map((t) => (
                <div key={t.range} className="flex items-start gap-6 p-4 rounded-xl hover:bg-zinc-50 border border-transparent hover:border-zinc-200 transition-all duration-300 group relative z-10">
                  <div className={`w-[2.2rem] h-[2.2rem] rounded-full flex items-center justify-center bg-white shadow-sm border border-zinc-200 group-hover:scale-110 transition-transform shrink-0`}>
                    <div className={`w-3 h-3 rounded-full ${t.color} shadow-md ${t.glow}`} />
                  </div>
                  <div className="pt-0.5">
                    <p className="text-[0.95rem] font-bold text-zinc-900 group-hover:text-brand-blue transition-colors mb-1">{t.range}</p>
                    <p className="text-sm text-zinc-500 leading-relaxed">{t.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="#contact" className="btn-blue shadow-[0_10px_30px_rgba(37,99,235,0.2)]">Get a Free Timeline Assessment</Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS - Glassmorphic Dark Layout ─────────────────────────────────────── */}
      <section className="py-24 px-4 bg-zinc-950 relative overflow-hidden border-b border-zinc-900 premium-section-dark">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
        <div className="ambient-glow-blue top-0 left-1/4 opacity-30" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className="section-label mb-2 justify-center text-brand-gold">Client Testimonials</p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white tracking-tight">What Our <span className="heading-script text-brand-gold">Clients Say</span></h2>
            <p className="text-zinc-400 text-[0.95rem] mt-4 max-w-xl mx-auto leading-relaxed">We pay attention to details and quality, ensuring good communication and a strong customer relationship built on absolute discretion.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="glass-panel border border-zinc-800/80 rounded-3xl p-8 hover:border-brand-blue/40 hover:bg-white/5 transition-all duration-400 card-premium-hover flex flex-col">
                <div className="flex text-brand-gold text-sm mb-5 gap-1 tracking-widest drop-shadow-sm">{"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}</div>
                <p className="text-zinc-300 text-sm leading-relaxed mb-8 italic flex-1">"{t.text}"</p>
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
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ - Asymmetrical Layout ──────────────────────────────────────────────── */}
<section className="py-20 lg:py-28 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-muted relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start">
            {/* Added lg: to sticky and top-24 so it only sticks on desktop layouts */}
            <div className="lg:sticky lg:top-24 text-center sm:text-left">
              <p className="section-label mb-2">Knowledge Base</p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 mb-6 leading-tight">
                Frequently Asked <span className="heading-script text-brand-blue">Questions</span>
              </h2>
              <p className="text-zinc-500 text-[0.95rem] leading-relaxed mb-8 max-w-lg mx-auto sm:mx-0">
                Have a specific situation? Our experts offer a free, no-obligation consultation to assess your case confidentially.
              </p>
              {/* Made button full width on mobile, auto width on larger screens */}
              <a href="tel:+918882788412" className="btn-gold shadow-lg shadow-brand-gold/20 flex sm:inline-flex w-full sm:w-auto justify-center items-center gap-2 px-8 py-3.5">
                <svg width="16" height="16" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
                Call Us Now
              </a>
            </div>
            
            {/* Increased mobile padding from p-2 to p-4 for better breathing room */}
            <div className="bg-white rounded-3xl shadow-sm border border-zinc-200/80 p-4 md:p-6 lg:p-8">
              <FAQ items={faqs} />
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA - Premium Grand Finish ──────────────────────────────────────── */}
      <section id="contact" className="py-24 lg:py-32 px-4 bg-zinc-950 relative overflow-hidden premium-section-dark border-t-4 border-brand-blue">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
        <div className="absolute top-10 left-1/3 w-96 h-96 bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-brand-gold/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent" />

        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="premium-copy-panel-dark">
            <p className="section-label text-brand-gold mb-3">Don't Wait - Act Now</p>
            <h2 className="font-heading text-3xl lg:text-[2.75rem] font-bold text-white mb-6 leading-tight tracking-tight">
              Don't Let Negative Content <span className="heading-script text-blue-500">Ruin Your Reputation</span>
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-10 text-[0.95rem] max-w-lg">
              Call us today. We will look at your Google results and tell you exactly how we can fix it, completely free.
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
          
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-brand-blue/10 to-brand-gold/10 rounded-3xl blur-2xl pointer-events-none opacity-50" />
            <div className="relative glass-panel bg-zinc-950/90 backdrop-blur-md border border-zinc-800 rounded-3xl p-8 lg:p-10 shadow-2xl">
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-brand-blue/50 via-brand-gold/50 to-transparent" />
              <p className="text-white font-heading font-bold text-xl mb-2">Send Us a Secure Message</p>
              <p className="text-zinc-500 text-sm mb-6">We respond within 24 hours on business days.</p>
              <ContactForm dark />
            </div>
          </div>
        </div>
      </section>

      <FAQSection items={[
        { question: "Can you actually delete a bad link from Google?", answer: "Yes. If the link breaks laws or is completely fake, our team knows exactly how to file a legal request to Google to delete it permanently." },
        { question: "What if Google refuses to delete it?", answer: "If they refuse, we use 'suppression'. We write so many good articles about you that the bad link gets buried on page 5 or 6, where nobody will ever see it." },
        { question: "How much time will this take?", answer: "Simple removals can take just a few weeks. If the problem is very big, it can take 3 to 6 months to completely clear the first page of Google." }
      ]} />
      <Footer />
    </div>
  );
}