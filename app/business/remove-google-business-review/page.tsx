"use client";
import { useState, useEffect, useRef, ReactNode } from "react";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Link from "next/link";

const stats = [
  { number: "95%", label: "Google Policy Violations Identified" },
  { number: "4.8", label: "Average Star Rating Restored" },
  { number: "48hrs", label: "Initial Escalation Time" },
  { number: "100%", label: "TOS Compliant Tactics" },
];

const services = [
  {
    title: "Google Guidelines Enforcement",
    desc: "We analyze every negative review against Google's strict prohibited content policies, flagging spam, conflict of interest, and hate speech for guaranteed removal.",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  },
  {
    title: "Local SEO Protection",
    desc: "Your Google Business Profile dictates local foot traffic. By removing unfair 1-star ratings, we instantly boost your Maps visibility and local search rankings.",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  },
  {
    title: "Google Support Escalation",
    desc: "Standard flagging often fails. We use direct escalation channels with Google Support to manually review and delete damaging, unverified reviews.",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
  },
];

const faqs = [
  { q: "Can you delete any bad Google review?", a: "No company can guarantee the removal of legitimately earned bad reviews from real customers. However, we successfully remove fake, malicious, or policy-violating reviews that standard reporting misses." },
  { q: "What violates Google's review policies?", a: "Reviews containing hate speech, harassment, fake engagement (bots), conflicts of interest (competitors/ex-employees), and off-topic rants all violate Google's TOS and are eligible for removal." },
  { q: "How does this affect my local ranking?", a: "Google heavily factors your aggregate star rating into the Local Pack. Removing fraudulent 1-star reviews instantly raises your average, drastically improving your visibility in local 'near me' searches." },
];

function RevealOnScroll({ children, delay = 0, className = "" }: { children: ReactNode, delay?: number, className?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(entry.target); } }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"} ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

function AnimatedCounter({ end, duration = 2000, suffix = "", prefix = "" }: { end: number, duration?: number, suffix?: string, prefix?: string }) {
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
      setCount((1 - Math.pow(1 - progress, 4)) * end);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, end, duration]);
  return <span ref={ref}>{prefix}{Math.floor(count)}{suffix}</span>;
}

export default function RemoveGoogleReviewsPage() {
  return (
    <div className="font-body text-zinc-800 bg-white min-h-screen flex flex-col premium-home">
      <Topbar />
      <Navbar />

      <section className="hero-bg relative overflow-hidden bg-zinc-950 premium-section-dark border-b border-zinc-800/50">
        <div className="hero-ambient hero-ambient-blue opacity-40 top-[-10%] right-[-5%]" />
        <div className="hero-ambient hero-ambient-gold opacity-20 bottom-[-10%] left-[-10%]" />
        <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none opacity-50" />

        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center relative z-10">
          <div className="hero-copy mt-4">
            <RevealOnScroll>
              <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[0.67rem] font-bold mb-6 uppercase tracking-[0.15em] border-[#4285F4]/30 bg-[#4285F4]/10 text-[#4285F4] shadow-[0_0_15px_rgba(66,133,244,0.15)]">
                <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4285F4] opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-[#4285F4]" /></span>
                Google Business Profile Management
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.08] mb-6 tracking-tight">
                Remove Unfair <span className="text-gradient-gold">Google Reviews</span> & Restore Your Rating
              </h1>
              <p className="text-white/70 text-base lg:text-lg mb-8 leading-relaxed max-w-2xl">
                Your Google Business Profile is the front door to your company. A single 1-star review can devastate local traffic. We specialize in legally challenging and permanently deleting policy-violating Google reviews.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Link href="#contact" className="btn-gold shadow-lg shadow-brand-gold/20 px-8 py-3.5">Clean Your Google Profile</Link>
                <a href="tel:+919971687251" className="btn-outline px-8 py-3.5 border-zinc-600 text-zinc-300 hover:text-white transition-colors">Call: +91 99716-87251</a>
              </div>
            </RevealOnScroll>
          </div>

          <div className="relative lg:mt-6 h-full w-full min-h-[500px]">
            <RevealOnScroll delay={200} className="h-full">
              <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border border-zinc-700/50">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80" alt="Google Search and Local Business Management" className="w-full h-full object-cover opacity-30 mix-blend-luminosity" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent"></div>
              </div>
              <div className="relative glass-panel bg-zinc-950/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-10 shadow-2xl m-4 mt-12 sm:m-8 lg:m-6 h-[calc(100%-3rem)]">
                <div className="flex items-center justify-between mb-6 border-b border-zinc-800/80 pb-5 relative z-10">
                  <div>
                    <p className="section-label text-[#4285F4] mb-1">GMB Audit</p>
                    <h2 className="font-heading text-xl font-bold text-white leading-tight">Review Eradication</h2>
                  </div>
                </div>
                <ContactForm dark />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <div className="bg-[#0a1120] border-b border-zinc-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-zinc-800/60">
            {stats.map((s, i) => {
              const num = parseInt(s.number.replace(/\D/g, ''));
              const suffix = s.number.replace(/\d/g, '').replace('.', '');
              return (
                <RevealOnScroll key={s.label} delay={i * 100}>
                  <div className="flex flex-col items-center justify-center gap-2 py-10 px-6 group hover:bg-white/5 transition-colors duration-300">
                    <p className="font-heading text-3xl lg:text-4xl font-black text-white tracking-tight group-hover:text-[#4285F4] transition-colors duration-300">
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

      <section className="py-20 lg:py-28 px-4 bg-white border-b border-zinc-200 premium-section-light relative overflow-hidden z-0">
        <div className="max-w-7xl mx-auto relative z-10">
          <RevealOnScroll>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 leading-tight">
                Reclaim Your <span className="heading-script text-[#4285F4]">Google Maps Dominance</span>
              </h2>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((s, i) => (
              <RevealOnScroll key={s.title} delay={i * 100}>
                <div className="card-premium-hover group bg-white border border-zinc-200 rounded-3xl p-8 flex flex-col h-full shadow-sm relative overflow-hidden hover:border-[#4285F4]/30">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4285F4] to-[#34A853] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <div className="flex items-start justify-between mb-8 relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-zinc-50 border border-zinc-100 shadow-sm flex items-center justify-center text-zinc-600 group-hover:bg-[#4285F4] group-hover:text-white transition-all duration-300">
                      {s.icon}
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-zinc-900 mb-3 group-hover:text-[#4285F4] transition-colors">{s.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed flex-1">{s.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 px-4 bg-zinc-950 relative overflow-hidden premium-section-dark border-t border-zinc-900">
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 lg:gap-24 items-start">
          <RevealOnScroll>
            <div className="sticky top-32">
              <h2 className="font-heading text-4xl lg:text-5xl font-black text-white mb-6 leading-[1.1] tracking-tight">
                Google Review <span className="text-gradient-gold">FAQs</span>
              </h2>
              <p className="text-zinc-400 text-[0.95rem] leading-relaxed mb-10 max-w-md">Learn exactly how we strip away TOS-violating content from your Google Business Profile.</p>
              <a href="tel:+919971687251" className="btn-gold w-full text-center block py-3.5 text-sm shadow-lg shadow-brand-gold/20">Speak With an Expert</a>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={200}>
            <div className="bg-zinc-950/90 backdrop-blur-2xl rounded-3xl shadow-2xl border border-zinc-800 p-6 md:p-10 relative z-10 faq-dark-override">
              <FAQ items={faqs} />
            </div>
          </RevealOnScroll>
        </div>
      </section>
      <Footer />
    </div>
  );
}