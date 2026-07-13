"use client";
import { useState, useEffect, useRef, ReactNode } from "react";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Link from "next/link";

/* ─── Original Data Preserved Verbatim ─────────────────────────────────────── */

const heroBullets = [
  "Comprehensive content protection for your digital assets.",
  "Swift action to remove unauthorized posts from the internet.",
  "Dedicated team for image and video protection.",
  "Expertise in suppressing harmful content.",
];

const stats = [
  { number: "9+", label: "Years improving online reputation" },
  { number: "98%", label: "Clients Satisfied" },
  { number: "500+", label: "Deleted Content" },
  { number: "600+", label: "Projects Delivered Worldwide" },
];

const whyUs = [
  {
    title: "Professional Team",
    desc: "Our team is composed of experts dedicated to protecting your content. We bring extensive knowledge and experience to the table, offering you the best protection services in the industry. With a professional approach, we handle your content with the utmost care and efficiency.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
    ),
  },
  {
    title: "Personal Approach",
    desc: "We understand that each cam model's needs are unique. Our team provides personalized support, ensuring that we meet your specific requirements for content protection. We offer tailored services that address your concerns and provide peace of mind.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
    ),
  },
  {
    title: "24/7 Customer Support",
    desc: "We offer round-the-clock customer support to assist with any urgent issues you might face. Whether you need immediate help with content removal or advice on protecting your digital assets, our support team is always available to help.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
    ),
  },
  {
    title: "Higher Efficiency",
    desc: "Our services are designed to be fast and efficient, ensuring that stolen content is removed quickly and effectively. We employ advanced tools and techniques to streamline the process and provide you with results as soon as possible. Your time and content are valuable, and we act with urgency to protect them.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
    ),
  },
];

const benefits = [
  {
    title: "Peace of Mind",
    desc: "With professional content protection, you can trust us to keep your assets secure. We ensure your work remains safe from unauthorized use, allowing you to focus on your career.",
  },
  {
    title: "Time-Saving Solutions",
    desc: "We provide takedown services for stolen content, saving you time and effort. Our team acts promptly to handle any content issues so you can get back to what matters most.",
  },
];

const successMetrics = [
  "Assured privacy with cutting-edge content protection methods.",
  "Enhanced reputation through effective takedown solutions.",
  "Better career growth with assured image and video protection.",
  "Reduced stress by suppressing unauthorized exposure.",
];

const saferFuture = [
  "Professional content protection strategies.",
  "Rapid response to take down harmful content.",
];

// PDF only contained the questions. Added a neutral placeholder for answers to prevent UI breakage.
const faqs = [
  { q: "What is Cam Model Content Protection?", a: "Details regarding this topic are discussed during our confidential consultation." },
  { q: "How does the take-down process work?", a: "Details regarding this topic are discussed during our confidential consultation." },
  { q: "Why is suppressing harmful content important?", a: "Details regarding this topic are discussed during our confidential consultation." },
  { q: "Why shouldn't I report pirated content myself?", a: "Details regarding this topic are discussed during our confidential consultation." },
  { q: "How long does it take to remove content?", a: "Details regarding this topic are discussed during our confidential consultation." },
  { q: "Do you provide image and video protection for all platforms?", a: "Details regarding this topic are discussed during our confidential consultation." },
];

const testimonials = [
  { name: "Rohit Sharma", role: "Verified Client", text: "I was struggling with unwanted content on internet, but their team handled everything efficiently. Highly recommended!", initials: "RS" },
  { name: "Amit Patel", role: "Verified Client", text: "Their legal awareness and technical expertise made the whole process seamless. Truly reliable.", initials: "AP" },
  { name: "Anjali Verma", role: "Verified Client", text: "Their professionalism and quick response really impressed me. They resolved my issue without any hassle.", initials: "AV" },
];

const publishers = [
  "INDIAN EXPRESS", "Business Line", "Bklyner", "ANI", "CNN", "INDIA TODAY", "news18", "MONEY", "CRAIN'S", "Market Watch", "Outlook", "People"
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

export default function CamModelContentRemovalPage() {
  return (
    <div className="font-body text-zinc-800 bg-white min-h-screen flex flex-col premium-home">
      <Topbar />
      <Navbar />

      {/* ── HERO - Highly Secure Dark Layout ─────────────────────────────────────────────── */}
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
                Cam Model Content Removal
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.08] mb-6 tracking-tight">
                Prevent, Protect, and Remove - <span className="text-gradient-gold">Efficient Content Management</span>
              </h1>

              <p className="text-white/70 text-base lg:text-lg mb-8 leading-relaxed max-w-2xl">
                Empowering cam models to take control of their content with efficient content removal services. Build Brand Better ensures your online presence stays protected and unauthorized posts are swiftly removed.
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

          {/* Right: Glassmorphic Contact Form Over Image */}
          <div className="relative lg:mt-6 h-full w-full min-h-[500px]">
            <RevealOnScroll delay={200} className="h-full">
              {/* Online Image Integration */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border border-zinc-700/50">
                <img 
                  src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80" 
                  alt="Digital Security and Privacy Protection" 
                  className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent"></div>
              </div>

              {/* Form floating over the image */}
              <div className="relative glass-panel bg-zinc-950/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-10 shadow-2xl m-4 mt-12 sm:m-8 lg:m-6 h-[calc(100%-3rem)]">
                <div className="flex items-center justify-between mb-6 border-b border-zinc-800/80 pb-5 relative z-10">
                  <div>
                    <p className="section-label text-brand-gold mb-1">Confidential Consultation</p>
                    <h2 className="font-heading text-xl font-bold text-white leading-tight">
                      Take Action to Protect Your Reputation
                    </h2>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center flex-shrink-0 shadow-inner">
                    <svg width="24" height="24" className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
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

      {/* ── SUB-HERO / PROBLEM ─────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-white border-b border-zinc-200 premium-section-light relative overflow-hidden z-0">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-zinc-50/60 border-l border-zinc-100 pointer-events-none hidden lg:block" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
            
            <RevealOnScroll>
              <div className="premium-copy-panel pr-0 lg:pr-8">
                <p className="section-label mb-2 text-brand-gold">The Problem</p>
                <h2 className="font-heading text-3xl lg:text-[2.5rem] font-bold text-zinc-900 mb-6 leading-tight">
                  Are you tired of your <span className="heading-script text-brand-blue">content being stolen?</span>
                </h2>
                <p className="text-zinc-600 leading-relaxed mb-5 text-[0.95rem]">
                  Protecting your content is no longer optional. It's essential. Build Brand Better ensures that unauthorized posts and stolen materials are swiftly taken down.
                </p>
                <p className="text-zinc-500 leading-relaxed mb-8 text-[0.95rem]">
                  Let us safeguard your work while you focus on building your career with confidence. Get expert assistance today and return your credibility!
                </p>
                
                <Link href="#contact" className="btn-gold shadow-lg shadow-brand-gold/20 px-8 py-3.5">
                  Protect Your Content Now
                </Link>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <div className="relative w-full max-w-lg mx-auto lg:ml-auto">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-blue/10 rounded-full blur-[80px] -z-10"></div>
                <div className="premium-image-frame rounded-3xl overflow-hidden shadow-2xl border border-zinc-200/50 relative z-10">
                  <img 
                    src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80" 
                    alt="Digital Privacy and Safety" 
                    className="w-full h-auto object-cover aspect-[4/5] hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                <div className="absolute -bottom-6 -right-6 z-20 glass-panel-light p-4 rounded-2xl border border-white shadow-xl hidden md:flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-100/80 border border-green-200 flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-zinc-900 mb-0.5">Content Removed</p>
                    <p className="text-[0.65rem] text-zinc-500 font-bold uppercase tracking-widest">Privacy restored</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

          </div>
        </div>
      </section>

      {/* ── WHY TRUST US / GRID ────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-muted relative overflow-hidden z-0">
        <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <RevealOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 rounded-full bg-white border border-zinc-200 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
                <p className="section-label text-[0.65rem] font-bold tracking-wider uppercase text-zinc-600 m-0">Why Us</p>
              </div>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 leading-tight">
                Why Are Your Trusted Cam Model <span className="heading-script text-brand-blue">Content Removal Agency?</span>
              </h2>
              <p className="text-zinc-500 text-[0.95rem] mt-5 max-w-xl mx-auto leading-relaxed">
                We prioritize your security with tailored solutions and quick action. Our experts ensures that stolen content is swiftly addressed, protecting your assets and reputation.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {whyUs.map((w, i) => (
              <RevealOnScroll key={w.title} delay={i * 100}>
                <div className="card-premium-hover group bg-white border border-zinc-200 rounded-3xl p-8 flex flex-col h-full shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue to-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  
                  <div className="flex items-start justify-between mb-6 relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-zinc-50 border border-zinc-100 shadow-sm flex items-center justify-center text-zinc-600 group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue group-hover:shadow-lg transition-all duration-300">
                      {w.icon}
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-zinc-900 mb-3 group-hover:text-brand-blue transition-colors relative z-10">{w.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed flex-1 relative z-10">{w.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS & SUCCESS (Dark Mode) ─────────────────────────────────── */}
      <section className="py-24 px-4 bg-zinc-950 border-b border-zinc-900 relative overflow-hidden premium-section-dark">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/25 to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Left: Benefits */}
            <div>
              <RevealOnScroll>
                <p className="section-label text-brand-gold mb-3">Our Benefits</p>
                <h2 className="font-heading text-3xl font-bold text-white mb-5 leading-tight">
                  Experience the Best in <span className="text-gradient-gold">Content Security</span>
                </h2>
                <p className="text-zinc-400 text-[0.95rem] leading-relaxed mb-10">
                  Our services not only safeguard your digital presence but also save you time by handling content-related issues. You can focus on your career while we ensure your online safety.
                </p>
                
                <div className="space-y-6">
                  {benefits.map((b, i) => (
                    <RevealOnScroll key={b.title} delay={i * 100}>
                      <div className="glass-panel border border-zinc-800/80 rounded-2xl p-6 hover:bg-white/5 hover:border-brand-gold/40 transition-all duration-300">
                        <h4 className="font-bold text-white text-lg mb-2">{b.title}</h4>
                        <p className="text-zinc-400 text-sm leading-relaxed">{b.desc}</p>
                      </div>
                    </RevealOnScroll>
                  ))}
                </div>
              </RevealOnScroll>
            </div>

            {/* Right: Success & Future */}
            <div>
              <RevealOnScroll delay={200}>
                <p className="section-label text-brand-blue mb-3">The Outcome</p>
                <h2 className="font-heading text-3xl font-bold text-white mb-5 leading-tight">
                  The Success of <span className="text-brand-blue">Cam Model Protection</span>
                </h2>
                <p className="text-zinc-400 text-[0.95rem] leading-relaxed mb-8">
                  Success in cam model protection means creating a secure and respected online presence. With our expertise, you can enjoy peace of mind knowing your privacy and reputation are in trusted hands.
                </p>
                
                <div className="space-y-4 mb-12">
                  {successMetrics.map((m) => (
                    <div key={m} className="flex items-start gap-3">
                      <svg width="20" height="20" className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                      <p className="text-zinc-300 text-sm leading-relaxed">{m}</p>
                    </div>
                  ))}
                </div>

                <div className="p-6 rounded-2xl border border-brand-gold/20 bg-brand-gold/5 backdrop-blur-sm">
                  <h4 className="font-bold text-white text-base mb-3">How Cam Model Protection Creates a Safer Future</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                    Building a safer future for cam models demands proactive interventions and robust support. Our team employs advanced methods to take down harmful content, ensuring privacy and security. We understand the importance of your image and reputation, working relentlessly to suppress harmful content and remove unauthorized posts that threaten your digital safety.
                  </p>
                  <ul className="space-y-2">
                    {saferFuture.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-brand-gold">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>
            </div>

          </div>

          {/* Featured Publishers Marquee */}
          <RevealOnScroll delay={400}>
             <div className="mt-24 border-t border-zinc-800 pt-10">
               <p className="text-center text-[0.65rem] font-bold text-zinc-500 uppercase tracking-widest mb-8">We Are Proudly Featured With</p>
               <div className="flex flex-wrap justify-center gap-4 lg:gap-8 opacity-70">
                 {publishers.map((pub) => (
                   <span key={pub} className="text-zinc-400 font-heading font-bold text-sm md:text-lg uppercase tracking-wider">{pub}</span>
                 ))}
               </div>
             </div>
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
                      <span className="text-brand-blue text-xs font-bold tracking-wider">{t.initials}</span>
                    </div>
                    <div>
                      <p className="font-bold text-zinc-900 text-sm leading-none mb-1">{t.name}</p>
                      <p className="text-zinc-500 text-[0.65rem] uppercase tracking-widest font-semibold">{t.role}</p>
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
                Don&apos;t Let Stolen Content <span className="heading-script text-blue-400">Damage Your Brand</span>
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

      <FAQSection items={[
        { question: "How to remove leaked cam videos from adult tube sites?", answer: "We act swiftly by filing aggressive DMCA copyright takedown notices directly with the hosting tube sites and their server providers to ensure immediate removal of unauthorized recordings." },
        { question: "Can I delete stolen cam content showing up in Google Search?", answer: "Yes. Once the source videos are taken down, we submit specific de-indexing requests to Google so the harmful URLs and thumbnail images are completely removed from search engine results." }
      ]} />
      <Footer />
    </div>
  );
}